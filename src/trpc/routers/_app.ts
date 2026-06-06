import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/prisma';
import { inngest } from '@/inngest/client';
 
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(() => {
    return prisma.workflow.findMany({});
  }),
  createWorkflow: protectedProcedure.mutation(async() => {
    await inngest.send({
      name: "app/task.created",
      data: { id: "task_001" },
    });
    return prisma.workflow.create({
      data: {
        name: "Test Workflow",
      },
    });
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;