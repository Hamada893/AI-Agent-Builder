"use client"

import React from 'react'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const Page = () => {
    const trpc = useTRPC()
    const testAi = useMutation(trpc.testAi.mutationOptions({
        onSuccess: () => {
            toast.success("AI Test Success")
        },
        onError: ({message}) => {
            toast.error(message)
        }
    }))
    
  return (
    <Button onClick={() => testAi.mutate()}>
        Click to test AI
    </Button>
  )
}

export default Page