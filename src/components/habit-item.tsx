"use client";

import type { Habit } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type HabitItemProps = {
  habit: Habit;
  onToggle: (id: string) => void;
};

export function HabitItem({ habit, onToggle }: HabitItemProps) {
  return (
    <div
      className={cn(
        "p-4 flex items-center gap-4 rounded-lg border transition-all duration-300",
        habit.completed ? "bg-muted/60 border-dashed" : "bg-card hover:bg-muted/50"
      )}
    >
      <Checkbox
        id={`habit-${habit.id}`}
        checked={habit.completed}
        onCheckedChange={() => onToggle(habit.id)}
        className="h-6 w-6 shrink-0 rounded-full data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        aria-label={`Mark '${habit.title}' as ${habit.completed ? 'incomplete' : 'complete'}`}
      />
      <div className="flex-grow cursor-pointer" onClick={() => onToggle(habit.id)}>
        <label
          htmlFor={`habit-${habit.id}`}
          className={cn(
            "font-medium cursor-pointer transition-colors",
            habit.completed ? "text-muted-foreground line-through" : "text-card-foreground"
          )}
        >
          {habit.title}
        </label>
        {habit.description && (
          <p className={cn("text-sm text-muted-foreground transition-colors", habit.completed && "line-through")}>
            {habit.description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <Badge variant={habit.streak > 0 ? "default" : "secondary"} className="flex items-center gap-1 tabular-nums h-7 px-2.5">
          <Flame className="h-4 w-4" />
          <span>{habit.streak}</span>
          <span className="sr-only">day streak</span>
        </Badge>
        <Badge variant="secondary" className="hidden sm:flex items-center gap-1 tabular-nums h-7 px-2.5">
          <Star className="h-4 w-4" />
          <span>{habit.longestStreak}</span>
          <span className="sr-only">day longest streak</span>
        </Badge>
      </div>
    </div>
  );
}