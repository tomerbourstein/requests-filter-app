import { query } from "../_generated/server";
import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("plantarryLog").collect();
  },
});

export const add = mutation({
  args: {
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
    error: v.any(),
  },
  handler: async ({ db }, { details, id, request, time, error }) => {
    await db.insert("plantarrayLog", {
      details,
      id,
      request,
      time,
      error,
    });
  },
});
