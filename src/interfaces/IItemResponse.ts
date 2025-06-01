import {IItem} from "./IItem";

export interface IItemResponse {
  data: IItem[];
  total: number;
  page: number;
  limit: number;
}
