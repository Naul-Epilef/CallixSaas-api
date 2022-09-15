import { Router } from "express";

import createClient from "../services/client/create";
import deleteClient from "../services/client/delete";
import findClient from "../services/client/find";
import updateClient from "../services/client/update";

const router = Router();

router.post("/", async (req, res) => {
    const { name } = req.body

    const newClient = await createClient({name})

    const {id, ...client} = newClient

    res.json(client)
});

router.get("/:id", async (req, res) => {
    const { id } = req.params

    const clientFound = await findClient({id})

    if (clientFound == null) {
        res.json({message: "Client not found!"})
        return
    }

    const {id: i, ...client} = clientFound

    res.json(client)
});

router.put("/:id", async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const clientUpdated = await updateClient({id, name})

    if (clientUpdated == null) {
        res.json({message: "Client not updated!"})
        return
    }

    const {id: i, ...client} = clientUpdated

    res.json(client)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const clientDeleted = await deleteClient({id})

    if (clientDeleted == null) {
        res.json({message: "Client not deleted!"})
        return
    }

    const {id: i, ...client} = clientDeleted

    res.json(client)
});

export default router;