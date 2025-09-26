"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useHabit } from "@/context/habit-context";
import { Plus } from "lucide-react";
import { useState } from "react";

export function AddHabitDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addHabit } = useHabit();

  const handleSave = () => {
    if (title.trim()) {
      addHabit({
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        completed: false,
        streak: 0,
        longestStreak: 0,
        goal: 30,
        completions: [],
      });
      setTitle("");
      setDescription("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new habit</DialogTitle>
          <DialogDescription>
            What's a new habit you want to build? Provide a title and an optional description.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g., Read for 15 minutes" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="e.g., Read a book from my reading list."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
            </DialogClose>
          <Button type="submit" onClick={handleSave}>Save Habit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}