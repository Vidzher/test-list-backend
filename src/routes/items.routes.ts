import {Router} from "express";
import {getAll, reorderState, updateState} from "../controllers/items.controller";

export function createItemsRouter() {
    const router = Router();

    router.get('/', getAll);
    router.patch('/:id', updateState);
    router.post('/reorder', reorderState);

    return router;
}
