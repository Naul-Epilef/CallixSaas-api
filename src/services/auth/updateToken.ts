import { User } from "@prisma/client";
import { v4 } from "uuid"
import prisma from "../../global/prisma"

interface IUpdateToken {
    id?: string;
}

const updateToken = async ({ id }: IUpdateToken) => {
    if (id == null ) return
    
    await prisma.user.update({
        where: {
            id
        }, 
        data: {
            token: v4()
        }
    })
}

export default updateToken;