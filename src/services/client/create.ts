import { Client } from "@prisma/client";
import prisma from "../../global/prisma";

interface ICreateClient {
    name: string;
}

const createClient = async ({ name }: ICreateClient): Promise<Client> => {
    const newClient = await prisma.client.create({
        data: {
            name
        }
    })

    return newClient
}

export default createClient