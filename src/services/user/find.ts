import { User } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindUser {
    id: string
}

const findUser = async ({ id }: IFindUser): Promise<User | null> => {
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })

    return user
}

export default findUser