"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Lightbulb, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { suggestHabitImprovement } from "@/app/actions";
import type { SuggestHabitImprovementOutput } from "@/ai/flows/suggest-habit-improvement";
import { useHabit } from "@/context/habit-context";

export function AISuggestionCard() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestHabitImprovementOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { habits } = useHabit();

  const getSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      // In a real app, you would fetch current user's habits.
      const result = await suggestHabitImprovement({
        habits: habits.map(({ id, completions, goal, ...rest }) => rest),
        userProfile: {
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          showPublicData: true,
        },
      });
      setSuggestions(result);
    } catch (e) {
      setError("Failed to get suggestions. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-card to-muted/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          AI Coach
        </CardTitle>
        <CardDescription>
          Get personalized tips to improve your habits based on your activity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="min-h-[120px] flex items-center justify-center">
            {loading ? (
            <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
            ) : suggestions ? (
            <ul className="space-y-3 text-sm">
                {suggestions.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-3">
                    <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                    <span>{suggestion}</span>
                </li>
                ))}
            </ul>
            ) : error ? (
                <div className="text-center text-destructive flex flex-col items-center gap-2">
                    <AlertTriangle className="w-8 h-8"/>
                    <p className="text-sm font-medium">{error}</p>
                </div>
            ) : (
                <p className="text-sm text-center text-muted-foreground p-4">
                    Click the button below to get suggestions from your AI coach.
                </p>
            )}
        </div>
        <Button onClick={getSuggestions} disabled={loading} className="w-full mt-4">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {suggestions ? "Get New Suggestions" : "Get Suggestions"}
        </Button>
      </CardContent>
    </Card>
  );
}