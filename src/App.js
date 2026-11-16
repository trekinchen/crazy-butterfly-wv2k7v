import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Check,
  Plus,
  Trash2,
  Calendar as CalIcon,
  Target,
  ListTodo,
  Sparkles,
  Clock,
  RefreshCw,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [darkMode, setDarkMode] = useState(true);

  // App State - In a real app, this connects to Firebase
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", progress: 70, color: "bg-blue-500" },
    { id: 2, name: "Read 10 Pages", progress: 45, color: "bg-green-500" },
  ]);
  const [chores, setChores] = useState([
    { id: 1, name: "Clean Kitchen", dueInDays: 0, interval: "Weekly" },
    { id: 2, name: "Deep Clean Bathroom", dueInDays: 3, interval: "Monthly" },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Email clients", done: false },
  ]);
  const [goals, setGoals] = useState([
    { id: 1, name: "Launch new product", done: false },
  ]);

  // Toggle Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Dummy Calendar Days
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div
      className={`min-h-screen p-4 pb-20 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Hub
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} />
          )}
        </button>
      </header>

      {/* Navigation */}
      <div
        className="flex overflow-x-auto gap-2 mb-6 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {["Personal", "Business", "Chores", "History"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <main className="space-y-6">
        {/* PERSONAL TAB */}
        {activeTab === "Personal" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles size={20} /> Daily Habits
            </h2>

            <div className="space-y-4">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{habit.name}</span>
                    <span className="text-sm text-gray-500">
                      {habit.progress}%
                    </span>
                  </div>
                  {/* Custom Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative overflow-hidden">
                    <div
                      className={`h-4 rounded-full ${habit.color} transition-all duration-500`}
                      style={{ width: `${habit.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Plus size={20} /> Add New Habit
            </button>
          </div>
        )}

        {/* BUSINESS TAB */}
        {activeTab === "Business" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Target size={20} /> Goals
              </h2>
              <div className="space-y-2 mb-4">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-5 h-5 rounded border border-gray-400"></div>
                    <span>{goal.name}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                <Plus size={18} /> Add Goal
              </button>
            </div>

            <div>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <ListTodo size={20} /> To-Do List
              </h2>
              <div className="space-y-2 mb-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-5 h-5 rounded border border-gray-400"></div>
                    <span>{task.name}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                <Plus size={18} /> Add Task
              </button>
            </div>
          </div>
        )}

        {/* CHORES TAB */}
        {activeTab === "Chores" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock size={20} /> Cleaning & Chores
            </h2>

            <div className="space-y-4">
              {chores.map((chore) => (
                <div
                  key={chore.id}
                  className={`p-4 rounded-2xl shadow-sm border ${
                    chore.dueInDays === 0
                      ? "bg-red-50 dark:bg-red-900/20 border-red-200"
                      : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{chore.name}</span>
                    <button className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                      <Check size={18} />
                    </button>
                  </div>
                  <div
                    className={`text-sm font-bold ${
                      chore.dueInDays === 0 ? "text-red-500" : "text-blue-500"
                    }`}
                  >
                    {chore.dueInDays === 0
                      ? "OVERDUE"
                      : `${chore.dueInDays} days left`}{" "}
                    ({chore.interval})
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 flex items-center justify-center gap-2">
              <Plus size={20} /> Add Chore
            </button>
          </div>
        )}

        {/* HISTORY & CALENDAR TAB */}
        {activeTab === "History" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CalIcon size={20} /> History & Calendar
            </h2>

            <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="font-bold">November 2026</h3>
                <RefreshCw size={16} className="text-gray-400" />
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <div key={day} className="font-bold text-gray-400 pb-2">
                    {day}
                  </div>
                ))}

                {/* Empty days for offset */}
                <div></div>
                <div></div>
                <div></div>

                {/* Actual Days */}
                {calendarDays.map((day) => (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center rounded-lg border border-gray-100 dark:border-gray-700 ${
                      day === 16
                        ? "bg-blue-600 text-white font-bold"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm">
              Notion Calendar Sync integration will be activated when Firebase
              connects.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
