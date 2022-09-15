import { Request, Response, NextFunction } from "express"
import validateHeader from "../services/auth/validateHeader"

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("token") as string
    const email = req.header("email") as string

    if (token == null || email == null) {
        res.json({ message: "User not logged!" })
        return
    }

    const valid = await validateHeader({token, email}) as Boolean

    if (!valid) {
        res.json({ message: "User not logged!" })
        return
    }

    next()
}

export default authorization