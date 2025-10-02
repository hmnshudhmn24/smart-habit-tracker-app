"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useHabit } from "@/context/habit-context";
import { useMemo } from "react";

export function WeeklyProgress() {
  const { habits } = useHabit();

  const progress = useMemo(() => {
    if (habits.length === 0) return 0;
    const completedCount = habits.filter((h) => h.completed).length;
    return (completedCount / habits.length) * 100;
  }, [habits]);

  const progressMessage = useMemo(() => {
    if (progress === 100) return "Incredible! All habits done!";
    if (progress >= 75) return "Great job! You're on track.";
    if (progress >= 50) return "You're making good progress.";
    if (progress > 0) return "Keep going, you can do it!";
    return "Let's get started!";
  }, [progress]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Progress</CardTitle>
        <CardDescription>
          Your habit completion rate today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Overall</span>
            <span className="font-semibold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} aria-label={`${Math.round(progress)}% daily progress`} />
          <p className="text-xs text-muted-foreground pt-1">
            {progressMessage}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}