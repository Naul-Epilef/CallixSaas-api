import { Router } from "express";

import createProduct from "../services/product/create";
import deleteProduct from "../services/product/delete";
import findProduct from "../services/product/find";
import updateProduct from "../services/product/update";

const router = Router();

router.post("/", async (req, res) => {
    const { name } = req.body

    const newProduct = await createProduct({name})

    const {id, ...product} = newProduct

    res.json(product)
});

router.get("/:id", async (req, res) => {
    const { id } = req.params

    const productFound = await findProduct({id})

    if (productFound == null) {
        res.json({message: "Product not found!"})
        return
    }

    const {id: i, ...product} = productFound

    res.json(product)
});

router.put("/:id", async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const productUpdated = await updateProduct({id, name})

    if (productUpdated == null) {
        res.json({message: "Product not updated!"})
        return
    }

    const {id: i, ...product} = productUpdated

    res.json(product)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const productDeleted = await deleteProduct({id})

    if (productDeleted == null) {
        res.json({message: "Product not deleted!"})
        return
    }

    const {id: i, ...product} = productDeleted

    res.json(product)
});

export default router;