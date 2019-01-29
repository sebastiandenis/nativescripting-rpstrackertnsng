import { Observable } from "rxjs/internal/Observable";
import { INITIAL_STATE, State, StateKey } from "./app-state";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { pluck, distinctUntilChanged } from "rxjs/operators";

export class Store {
  private subj = new BehaviorSubject<State>(INITIAL_STATE);

  public get value() {
    return this.subj.value;
  }

  public select<T>(name: StateKey): Observable<T> {
    return this.subj.pipe(
      pluck<State, T>(name),
      distinctUntilChanged<T>()
    );
  }

  public set<T>(name: StateKey, state: T) {
      this.subj.next({
          ...this.value, [<string>name]: state
      });
  }
}
