import { PtItem } from "../models/domain/pt-item.model";

export type StateKey = "backlogItems";

export interface State {
  backlogItems: PtItem[];
  [key: string]: any;
}

export const INITIAL_STATE: State = {
  backlogItems: []
};
