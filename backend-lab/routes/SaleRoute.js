import express from "express";
import {
    getSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
} from "../controllers/SaleController.js";

const router = express.Router();

router.get('/sales', getSales);
router.get('/sales/:id', getSaleById);
router.post('/sales', createSale);
router.patch('/sales/:id', updateSale);
router.delete('/sales/:id', deleteSale);

export default router;