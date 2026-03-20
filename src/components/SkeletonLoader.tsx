import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        <div className="gradient-hero px-6 py-5">
          <div className="h-6 w-3/4 rounded-lg bg-primary-foreground/20 animate-shimmer" 
               style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)", backgroundSize: "200% 100%" }} />
        </div>
        <div className="p-6 space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-24 rounded bg-muted animate-pulse" />
              <div className="space-y-1.5">
                <div className="h-4 w-full rounded bg-muted animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                <div className="h-4 w-5/6 rounded bg-muted animate-pulse" style={{ animationDelay: `${i * 150 + 75}ms` }} />
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-7 w-20 rounded-full bg-muted animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        Generating with AI...
      </motion.p>
    </div>
  );
};

export default SkeletonLoader;
