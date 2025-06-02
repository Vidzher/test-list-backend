import {IItem} from "../interfaces/IItem";
import {IItemResponse} from "../interfaces/IItemResponse";

let ITEMS_STORAGE: IItem[] = Array.from({length: 1_000_000}, (_, i): IItem => ({
  id: (i + 1).toString(),
  name: `Элемент ${i + 1}`,
  isChecked: false,
}));

export class ItemsRepository {
  static getAll(page: number = 1, limit: number = 20): IItemResponse {
    page = Math.max(1, Math.floor(page));
    limit = Math.max(1, Math.floor(limit));

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      data: ITEMS_STORAGE.slice(startIndex, endIndex),
      total: ITEMS_STORAGE.length,
      page,
      limit
    };
  };

  static updateState(id: string): string | null {
    const targetItem = ITEMS_STORAGE.find((item) => item.id === id);
      if (!targetItem) return null;

      targetItem.isChecked = !targetItem.isChecked;

      return targetItem.id;
  };

  static updateOrder(updatedItems: IItem[]): IItem[] {
    ITEMS_STORAGE = [...updatedItems, ...ITEMS_STORAGE.slice(updatedItems.length)];

    return ITEMS_STORAGE;
  }
}
