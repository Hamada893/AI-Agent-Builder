"use client"

import { useTRPC } from "@/trpc/client"
import { LogoutButton } from "@/app/logout"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"

const Page = () => {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())
  const test = useMutation(trpc.testAi.mutationOptions())
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: trpc.getWorkflows.queryKey() })
    },
  }))

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected server component
      <div>
        {JSON.stringify(data ?? [], null, 2)}
      </div>
      <Button disabled={test.isPending} onClick={() => test.mutate()}>
        Test AI
      </Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  )
}

export default Page