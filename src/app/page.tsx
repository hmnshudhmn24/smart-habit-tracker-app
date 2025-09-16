import { Header } from "@/components/header";
import { HabitList } from "@/components/habit-list";
import { AISuggestionCard } from "@/components/ai-suggestion-card";
import { AddHabitDialog } from "@/components/add-habit-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { WeeklyProgress } from "@/components/weekly-progress";
import { HabitProvider } from "@/context/habit-context";

export default function Home() {
  return (
    <HabitProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Today's Habits</CardTitle>
                      <CardDescription>
                        Mark your habits to build your streak.
                      </CardDescription>
                    </div>
                    <AddHabitDialog />
                  </CardHeader>
                  <CardContent>
                    <HabitList />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <AISuggestionCard />
                <WeeklyProgress />
                <Card>
                  <CardHeader>
                    <CardTitle>Heatmap</CardTitle>
                    <CardDescription>
                      Your activity over the last month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted/30 p-4">
                      <Image
                        src="https://picsum.photos/600/300"
                        alt="Abstract heatmap representation"
                        width={600}
                        height={300}
                        data-ai-hint="abstract data"
                        className="h-full w-full object-cover opacity-10"
                      />
                      <div className="absolute flex flex-col items-center text-center">
                        <CalendarDays className="mb-2 h-12 w-12 text-muted-foreground" />
                        <p className="text-sm font-semibold text-muted-foreground">
                          Heatmap Coming Soon
                        </p>
                        <p className="text-xs text-muted-foreground/80">
                          Visualize your consistency.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </HabitProvider>
  );
}