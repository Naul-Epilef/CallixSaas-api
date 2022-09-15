import { User } from "@prisma/client";
import prisma from "../../global/prisma"

interface IValidateHeader {
    email: string;
    token: string;
}

const validateHeader = async ({ email, token }: IValidateHeader): Promise<Boolean> => {
    const user: User | null = await prisma.user.findFirst({
        where: {
            email,
            token
        }
    })

    if (user != null)
        return true

    return false
}

export default validateHeader