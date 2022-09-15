import { Client } from "@prisma/client"
import prisma from "../../global/prisma"
import findSellByClient from "../sell/findByClient";
import findSupportByClient from "../support/findByClient";

interface IDeleteClient {
    id: string;
}

const deleteClient = async ({ id }: IDeleteClient): Promise<Client | null> => {
    try {
        const supportWithThisClient = await findSupportByClient({clientId: id})
        if (supportWithThisClient != null) return null
        
        const sellWithThisClient = await findSellByClient({clientId: id})
        if (sellWithThisClient != null) return null
        
        const client = await prisma.client.delete({
            where: {
                id
            }
        });
    
        return client
    } catch {
        return null
    }
}

export default deleteClient