import {Request, Response} from 'express';
import {ItemsRepository} from "../repository/items.repository";

export function getAll(req: Request, res: Response): void {
    try {
        const {page = 1, limit = 20} = req.query;

        const result = ItemsRepository.getAll(page as number, limit as number)
        res.status(200).send(result)
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
}

export function updateState(req: Request, res: Response): void {
    try {
        const {id} = req.params;
        const result = ItemsRepository.updateState(id)
        result
          ? res.status(200).send(result)
          : res.status(404).send('Not found');
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
}

export function reorderState(req: Request, res: Response): void {
    try {
        const {updatedItems} = req.body;
        const result = ItemsRepository.updateOrder(updatedItems)
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
}
