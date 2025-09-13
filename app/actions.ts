"use server";

import {
  suggestHabitImprovement as suggestHabitImprovementFlow,
  type SuggestHabitImprovementInput,
  type SuggestHabitImprovementOutput,
} from "@/ai/flows/suggest-habit-improvement";

export async function suggestHabitImprovement(
  input: SuggestHabitImprovementInput
): Promise<SuggestHabitImprovementOutput> {
  // In a real app, you would fetch the user's habits from the database here
  // instead of relying on the client to send them.
  // This is for demonstration purposes.
  const result = await suggestHabitImprovementFlow(input);
  return result;
}