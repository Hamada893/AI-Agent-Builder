import type { inferInput } from "@trpc/tanstack-react-query"
import { prefetch, trpc } from "@/trpc/server"
import { input } from "zod/v3";

type Input = inferInput<typeof trpc.workflows.getMany>

//Prefetch all workflows
export const prefetchWorkflows = async (params: Input) => {
    return prefetch(trpc.workflows.getMany.queryOptions(params));
}