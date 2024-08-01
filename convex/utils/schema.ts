import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  plantarryLog: defineTable({
    details: v.array(
      v.object({
        content: v.string(),
        kind: v.string(),
        title: v.string(),
      })
    ),
    id: v.float64(),
    request: v.object({
      content: v.string(),
      kind: v.string(),
      title: v.string(),
    }),
    time: v.string(),
  }),
});
