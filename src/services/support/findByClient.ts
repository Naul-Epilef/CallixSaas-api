import { Support } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindSupportByClient {
    clientId: string
}

const findSupportByClient = async (
    { clientId }: IFindSupportByClient
): Promise<Support | null> => {
    const support = await prisma.support.findFirst({
        where: {
            clientId
        }
    })

    return support
}

export default findSupportByClient