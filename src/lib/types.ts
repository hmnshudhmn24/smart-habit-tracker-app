export type Habit = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  streak: number;
  longestStreak: number;
  goal: number;
  completions: { date: string; completed: boolean }[];
};