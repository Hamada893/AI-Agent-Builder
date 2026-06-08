import { baseProcedure, createTRPCRouter, premiumProcedure, protectedProcedure } from '../init';
import prisma from '@/lib/prisma';
import { inngest } from '@/inngest/client';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
 
export const appRouter = createTRPCRouter({

  testAi: premiumProcedure.mutation(async() => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "Job queued" }
  }),

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