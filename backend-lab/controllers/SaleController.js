import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getSales = async (req, res) =>{
    try {
        const response = await prisma.sale.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getSaleById = async (req, res) =>{
    try {
        const response = await prisma.sale.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createSale = async (req, res) =>{
    const {productId, qty, total} = req.body;
    try {
        const sale = await prisma.sale.create({
            data:{
                productId: productId,
                qty: qty,
                total: total
            }
        });
        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateSale = async (req, res) =>{
    const {productId, qty, total} = req.body;
    try {
        const sale = await prisma.sale.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                productId: productId,
                qty: qty,
                total: total
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteSale = async (req, res) =>{
    try {
        const sale = await prisma.sale.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(sale);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}