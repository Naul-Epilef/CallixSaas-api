import { Support } from "@prisma/client"
import prisma from "../../global/prisma";
import findClient from "../client/find";
import findUser from "../user/find";

interface ICreateSupport {
    userId: string;
    clientId: string;
}

const createSupport = async ({ userId, clientId }: ICreateSupport): Promise<Support | null> => {
    const user = await findUser({ id: userId })
    if (user == null) return null
    
    const client = await findClient({ id: clientId })
    if (client == null) return null

    const newSupport = await prisma.support.create({
        data: {
            userId,
            clientId
        }
    })

    return newSupport
}

export default createSupport