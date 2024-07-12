import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const authOptions:NextAuthOptions = {

    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name:'credentials',

            credentials:{
                email: {
                    label:'Email',
                    type:'email',
                    placeholder:'Email',
                },
                password:{
                    label:'Password',
                    type:'password',
                    placeholder:'Password',
                }
            },

            authorize: async (credentials): Promise<any> => {
                if(!credentials){
                    return null;
                }

                

                const {email, password} = credentials;
                // console.log(email,password,"prinighte the creaentials")

                const user = await prisma.user.findUnique({
                    where:{
                        email
                    },
                });

                // console.log(user,"pirninghte users")

                if(!user) {
                    throw new Error("No user found with this email");
                }
                if(user && user.password===password){
                    return user;
                }
                // const isPasswordValid = await bcrypt.compare(password, user.password);
                // if (!isPasswordValid) {
                //     throw new Error("Invalid password");
                // }

                throw new Error("invalid password")

            }
        }),
    ]
    

}