import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

const COURSES = [
  "Computer Science",
  "Information Technology",
  "Information Systems",
  "Data Science",
  "Cybersecurity",
  "Software Engineering",
  "Business Administration",
  "Education",
  "Engineering",
  "Health Sciences",
  "Nursing",
  "Social Work",
  "Psychology",
  "Accountancy",
];

const INTEREST_OPTIONS = [
  "Web Development", "Mobile App", "Machine Learning", "IoT",
  "Blockchain", "Cloud Computing", "Game Development", "Data Analytics",
  "E-commerce", "Social Media", "Healthcare", "Education Tech",
  "Community Service", "Finance", "Research", "Design",
];

export interface GeneratorFormData {
  course: string;
  difficulty: string;
  interests: string[];
  timeframe: string;
  budget: string;
  notes: string;
}

interface GeneratorFormProps {
  onSubmit: (data: GeneratorFormData) => void;
  isLoading: boolean;
}

const GeneratorForm = ({ onSubmit, isLoading }: GeneratorFormProps) => {
  const [course, setCourse] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [interests, setInterests] = useState<string[]>([]);
  const [timeframe, setTimeframe] = useState("3 months");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ course, difficulty, interests, timeframe, budget, notes });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl mx-auto space-y-5"
    >
      {/* Course */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">Course / Program</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select your course...</option>
          {COURSES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Difficulty */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">Difficulty</label>
        <div className="flex gap-2">
          {["Easy", "Medium", "Hard"].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficulty(d)}
              className={`flex-1 h-10 rounded-lg text-sm font-medium border transition-colors ${
                difficulty === d
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Interests <span className="text-slate-400 font-normal">(pick any)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INTEREST_OPTIONS.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                interests.includes(interest)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-slate-700"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Timeframe */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">Timeframe</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {["1 month", "2 months", "3 months", "4 months", "6 months", "1 year"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Budget <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="e.g. $500, Free, Low budget..."
          className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Notes */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Notes <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Any specific requirements or ideas..."
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !course}
        className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Generate Capstone
          </>
        )}
      </button>
    </motion.form>
  );
};

export default GeneratorForm;