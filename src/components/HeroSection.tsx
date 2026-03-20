import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Zap, ArrowRight } from "lucide-react";

const features = [
  { icon: Sparkles, label: "AI-Powered Ideas" },
  { icon: Lightbulb, label: "Tailored to Your Course" },
  { icon: Zap, label: "Instant Generation" },
];

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <Sparkles className="h-4 w-4" />
          AI-Powered Capstone Generator
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl"
        >
          Generate Your{" "}
          <span className="text-primary">Capstone Idea</span>{" "}
          in Seconds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Stop stressing over your capstone project. Let AI craft the perfect idea
          tailored to your course, interests, and timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Button variant="hero" size="xl" onClick={onGetStarted}>
            Generate Now
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-muted-foreground">
              <f.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
