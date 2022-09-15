import { User } from "@prisma/client"
import prisma from "../../global/prisma"

interface IGetToken {
    email: string;
    password: string;
}

const getToken = async ({ email, password }: IGetToken): Promise<string> => {
    const user: User = await prisma.user.findFirst(
        { 
            where: { 
                email,
                password
            }
        }
    ) as User;

    if (user == null) return "";

    return user.token as string;

}

export default getToken;