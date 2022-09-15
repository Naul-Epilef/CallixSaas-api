import { Router } from "express";
import createSell from "../services/sell/create";
import listAllSells from "../services/sell/listAll";

const router = Router();

interface IFilteredSell {
    user: string;
    client: string;
    product: string;
    createdAt: Date;
    updatedAt: Date;
}

router.get("/", async (req, res) => {
    const allSells = await listAllSells()

    const allFilteredSell: IFilteredSell[] = []

    allSells.forEach((sell, index) => {
        const {
            userId: user,
            clientId: client,
            productId: product,
            createdAt,
            updatedAt
        } = sell

        const filteredSell: IFilteredSell = {
            user,
            client,
            product,
            createdAt,
            updatedAt
        }

        allFilteredSell[index] = filteredSell
    })

    res.json(allFilteredSell)
});

router.post("/", async (req, res) => {
    const { user: userId, client: clientId, product: productId } = req.body

    const newSell = await createSell({ userId, clientId, productId })

    const {id, ...sell} = newSell

    res.json(sell)
});

export default router;