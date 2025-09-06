# 🌿 Habitual — Build Better Habits Every Day

**Habitual** is a sleek, modern habit-tracking web app that helps users stay consistent, visualize streaks, and receive AI-driven suggestions to improve their routines. Designed with a calming blue-teal palette and an uncluttered interface, Habitual keeps the focus on what matters: progress.

## ✨ Features

- **Habit Creation:** Add daily habits with a title, optional description, and adherence goals.  
- **Today’s Habits Checklist:** See what’s due today and mark each habit complete or incomplete.  
- **Streak Tracking:** View current and longest streaks as elegant “streak chips.”  
- **AI Insights:** Integrated **Gemini/Genkit** LLM analyzes your completion patterns and offers personalized tips.  
- **Profile Management:** Edit profile details, timezone, and toggle visibility of select public data.  
- **Clean Visuals:** Heatmap calendar (future milestone), subtle animations, consistent icons, and modern typography.

## 🎨 UI & Styling

| Element      | Spec                                               |
|--------------|----------------------------------------------------|
| Primary      | `HSL(210, 70%, 50%)` / `RGB(45, 144, 255)`          |
| Background   | `HSL(210, 20%, 95%)` / `RGB(242, 247, 255)`         |
| Accent       | `HSL(180, 60%, 40%)` / `RGB(25, 179, 153)`          |
| Font         | [PT Sans](https://fonts.google.com/specimen/PT+Sans) for body & headlines |
| Layout       | Minimal, whitespace-rich, distraction-free         |
| Iconography  | Simple, unified icon set for habits & actions      |
| Animation    | Smooth transitions on checklist and streak updates |

## 🧩 Tech Stack

- **Frontend:** TypeScript, Next.js, Tailwind CSS  
- **AI Integration:** Gemini / Genkit (pattern analysis & recommendations)  
- **Backend & Persistence:** (Flexible — Firestore, Supabase, or custom API)  
- **Auth & Profile:** Provider-agnostic (Google, email)  

## 🚀 Roadmap

- 🔹 Habit heatmap calendar  
- 🔹 Streak milestone badges  
- 🔹 Sharing & community leaderboard  
- 🔹 Dark mode  

## 📦 Getting Started

1. Clone this repository:  
   ```bash
   git clone https://github.com/yourusername/habitual.git
   cd habitual
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run locally:  
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:3000`

## 📜 License
MIT License — feel free to fork and improve Habitual.
