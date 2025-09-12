'use server';

/**
 * @fileOverview An AI agent that analyzes habit tracking data and suggests improvements.
 *
 * - suggestHabitImprovement - A function that suggests improvements for habit adherence.
 * - SuggestHabitImprovementInput - The input type for the suggestHabitImprovement function.
 * - SuggestHabitImprovementOutput - The return type for the suggestHabitImprovement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestHabitImprovementInputSchema = z.object({
  habits: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        completed: z.boolean(),
        streak: z.number(),
        longestStreak: z.number(),
      })
    )
    .describe('An array of the user current habits with their completion status and streak information.'),
  userProfile: z
    .object({
      timezone: z.string(),
      showPublicData: z.boolean().optional(),
    })
    .describe('The user profile information, including timezone and public data visibility.'),
});
export type SuggestHabitImprovementInput = z.infer<
  typeof SuggestHabitImprovementInputSchema
>;

const SuggestHabitImprovementOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of personalized suggestions for improving habit adherence and streak maintenance.'),
});
export type SuggestHabitImprovementOutput = z.infer<
  typeof SuggestHabitImprovementOutputSchema
>;

export async function suggestHabitImprovement(
  input: SuggestHabitImprovementInput
): Promise<SuggestHabitImprovementOutput> {
  return suggestHabitImprovementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestHabitImprovementPrompt',
  input: {schema: SuggestHabitImprovementInputSchema},
  output: {schema: SuggestHabitImprovementOutputSchema},
  prompt: `You are an AI habit coach that helps users maintain and improve their habits.

Analyze the user's habit data and user profile and provide personalized suggestions for improving habit adherence and streak maintenance.

Habit Data:
{{#each habits}}
  - Habit: {{title}}
    Description: {{description}}
    Completed: {{completed}}
    Current Streak: {{streak}}
    Longest Streak: {{longestStreak}}
{{/each}}

User Profile:
  Timezone: {{userProfile.timezone}}
  Show Public Data: {{userProfile.showPublicData}}

Suggestions should be clear, actionable, and tailored to the user's specific habits and profile.
Return an array of suggestions.
`,
});

const suggestHabitImprovementFlow = ai.defineFlow(
  {
    name: 'suggestHabitImprovementFlow',
    inputSchema: SuggestHabitImprovementInputSchema,
    outputSchema: SuggestHabitImprovementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);