import { User } from "@prisma/client";
import { Router } from "express";

import signIn from "../services/auth/signIn"
import logIn from "../services/auth/logIn"
import getToken from "../services/auth/getToken";

const router = Router();

router.post("/create", async (req, res) => {
    const { name, email, password } = req.body

    const user = await signIn({name, email, password}) as User | null

    if (user == null){
        res.json({message: "This email has already been used!"})
        return
    }

    const {id, password: pass, ...userSafe} = user

    res.json({ userSafe })
});

router.get("/login", async (req, res) => {
    const { email, password } = req.body

    const logged = await logIn({email, password}) as Boolean

    if (logged){
        const token = await getToken({email, password}) as string
        res.setHeader("token", token)
        res.setHeader("email", email)
        res.json({ email, token })
        return
    }

    res.json({message: "Something went wrong!"})
});

export default router;