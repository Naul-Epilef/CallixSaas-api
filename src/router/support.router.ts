import { Support } from "@prisma/client";
import { Router } from "express";
import closeSupport from "../services/support/close";
import createSupport from "../services/support/create";
import listAllSupports from "../services/support/listAll";
import openSupport from "../services/support/open";

const router = Router();

interface IFilteredSupport {
    user: string;
    client: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

router.get("/", async (req, res) => {
    const allSupport = await listAllSupports()

    const allFilteredSupport: IFilteredSupport[] = []

    allSupport.forEach((support, index) => {
        const {
            userId: user,
            clientId: client,
            status,
            createdAt,
            updatedAt
        } = support

        const filteredSupport: IFilteredSupport = {
            user,
            client,
            status,
            createdAt,
            updatedAt
        }

        allFilteredSupport[index] = filteredSupport
    })

    res.json(allFilteredSupport)
});

router.post("/", async (req, res) => {
    const { user: userId, client: clientId } = req.body

    const newSupport = await createSupport({userId, clientId})

    if (newSupport == null) {
        res.json({ message: "Something went wrong!" })
        return
    }

    const {id, ...support} = newSupport

    res.json(support)
});

router.get("/:id/close", async (req, res) => {
    const { id } = req.params

    const isClosed = await closeSupport({ id }) as Boolean

    res.json({ isClosed })
})

router.get("/:id/open", async (req, res) => {
    const { id } = req.params

    const isOpen = await openSupport({ id }) as Boolean

    res.json({ isOpen })
})

export default router;