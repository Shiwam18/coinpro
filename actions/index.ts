"use server"
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';


const prisma = new PrismaClient()

export const signup = async (userData:any)  => {
  // console.log(userData, "in the signup function");

  if(userData===undefined || userData.email==="" || userData.password==="") return ({status:300, message:"NO DATA HAS BEEN SENT"})
  

  const existingUser = await prisma.user.findUnique({
    where: {
      email: userData.email
    }
  });
  

    if (existingUser) {
      return ({status:400, message:"User already exists"});
    }

    try {
      const response = await prisma.user.create({
        data: {
          email: userData.email,
          password: userData.password,
          name:userData.name,
          digiId:userData.digiId
        }
      })

      // console.log(response, "this is response");
      return ({status:200, message:"user created successfully"})

    }catch (error:any) {
      console.log(error.message);
      return ({status:500, message:"INTERNAL SERVER ERROR"})
    }
}