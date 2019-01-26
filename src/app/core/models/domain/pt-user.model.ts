import { PtObjectBase } from "./pt-object-base.model";
import { GenderEnum } from "./enums/gender.enum";

export interface PtUserInterface extends PtObjectBase {
    fullName: string;
    avatar: string;
    gender: GenderEnum;
}