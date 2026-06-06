"use client" 

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export const LogoutButton = () => {
    return (
        <Button onClick={() => {authClient.signOut(); redirect("/login")}}>
            Logout
        </Button>
    )
}