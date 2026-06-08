import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";


//hook to get all workflows using suspense
export const useSuspenseWorkflows = () => {
    const trpc = useTRPC();

    return useSuspenseQuery(trpc.workflows.getMany.queryOptions());
}