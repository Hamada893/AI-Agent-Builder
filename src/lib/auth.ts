import { betterAuth } from "better-auth/minimal"
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma"; //might cause an error
import { checkout, polar, portal } from "@polar-sh/better-auth"
import { polarClient } from "@/lib/polar"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: { 
        enabled: true, 
        autoSignIn: true,
      },
      plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [{
                        productId: "f890afd8-6ca2-4c7e-aa0b-44a4d806ed63",
                        slug: "pro",
                    }],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly: true,
                }), portal()
            ]
        }),
      ],
})