"use client"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { LogOutIcon } from "lucide-react"

export default function Page() {
  const { data } = authClient.useSession()

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(data)}
      {data && <Button onClick={() => authClient.signOut()}>
        <LogOutIcon className="size-4" />
        Logout
      </Button>}
    </div>
  );
}
