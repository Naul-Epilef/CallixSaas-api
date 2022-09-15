import { Client } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindClient {
    id: string
}

const findClient = async ({ id }: IFindClient): Promise<Client | null> => {
    const client = await prisma.client.findFirst({
        where: {
            id
        }
    })

    return client
}

export default findClient