import { Client } from "@prisma/client"
import prisma from "../../global/prisma"

interface IUpdateClient {
    id: string;
    name: string;
}

const updateClient = async ({ id, name }: IUpdateClient): Promise<Client | null> => {
    try {
        const client = await prisma.client.update({
            where: {
                id
            },
            data: {
                name
            }
        })
    
        return client
    } catch {
        return null
    }
}

export default updateClient