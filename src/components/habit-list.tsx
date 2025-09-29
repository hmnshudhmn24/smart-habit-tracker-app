"use client";

import { useMemo } from 'react';
import type { Habit } from '@/lib/types';
import { HabitItem } from './habit-item';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useHabit } from '@/context/habit-context';

export function HabitList() {
  const { habits, toggleHabit } = useHabit();
  
  const { completedHabits, pendingHabits } = useMemo(() => {
    return habits.reduce<{completedHabits: Habit[], pendingHabits: Habit[]}>(
      (acc, habit) => {
        if (habit.completed) {
          acc.completedHabits.push(habit);
        } else {
          acc.pendingHabits.push(habit);
        }
        return acc;
      }, { completedHabits: [], pendingHabits: [] }
    );
  }, [habits]);

  if (habits.length === 0) {
    return (
        <div className="text-center py-12 border-2 border-dashed rounded-lg">
            <p className="text-lg font-medium text-muted-foreground">No habits yet!</p>
            <p className="text-sm text-muted-foreground mt-1">Click "Add Habit" to get started on your journey.</p>
        </div>
    );
  }

  return (
    <div className="space-y-3">
        <AnimatePresence>
            {pendingHabits.map((habit) => (
                <motion.div
                    key={habit.id}
                    layout
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                >
                    <HabitItem habit={habit} onToggle={toggleHabit} />
                </motion.div>
            ))}
        </AnimatePresence>

        {completedHabits.length > 0 && (
          <>
            {pendingHabits.length > 0 && (
              <div className="flex items-center py-2">
                  <div className="flex-grow border-t border-dashed"></div>
                  <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase font-medium tracking-wider">Completed</span>
                  <div className="flex-grow border-t border-dashed"></div>
              </div>
            )}
            <AnimatePresence>
                {completedHabits.map((habit) => (
                    <motion.div
                        key={habit.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    >
                        <HabitItem habit={habit} onToggle={toggleHabit} />
                    </motion.div>
                ))}
            </AnimatePresence>
          </>
        )}
        
        {pendingHabits.length === 0 && completedHabits.length > 0 && (
          <div className="text-center py-12 border-2 border-dashed rounded-lg flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
            <p className="text-lg font-medium text-muted-foreground">All habits completed for today!</p>
            <p className="text-sm text-muted-foreground mt-1">Amazing work. See you tomorrow!</p>
          </div>
        )}
    </div>
  );
}