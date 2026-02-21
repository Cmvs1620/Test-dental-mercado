import { motion } from "framer-motion";

/** 4-pointed sparkle star like DentMe */
export const Sparkle = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 0C12 0 14.5 9.5 12 12C9.5 14.5 0 12 0 12C0 12 9.5 9.5 12 12C14.5 14.5 12 24 12 24C12 24 9.5 14.5 12 12C14.5 9.5 24 12 24 12C24 12 14.5 14.5 12 12C9.5 9.5 12 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);

/** Animated sparkle */
export const AnimatedSparkle = ({ className = "", size = 24, delay = 0 }: { className?: string; size?: number; delay?: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: -30, opacity: 0 }}
    animate={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" as const }}
  >
    <motion.div
      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
    >
      <Sparkle size={size} className={className} />
    </motion.div>
  </motion.div>
);

/** Floating dots grid pattern */
export const DotGrid = ({ className = "", rows = 5, cols = 5 }: { className?: string; rows?: number; cols?: number }) => (
  <svg width={cols * 12} height={rows * 12} viewBox={`0 0 ${cols * 12} ${rows * 12}`} className={className}>
    {Array.from({ length: rows * cols }).map((_, i) => (
      <circle
        key={i}
        cx={(i % cols) * 12 + 6}
        cy={Math.floor(i / cols) * 12 + 6}
        r={2}
        fill="currentColor"
        opacity={0.3}
      />
    ))}
  </svg>
);

/** Geometric cross/plus pattern tile (like the arched window in DentMe) */
export const GeometricPattern = ({ className = "" }: { className?: string }) => (
  <svg width="120" height="120" viewBox="0 0 120 120" className={className} fill="none">
    {Array.from({ length: 16 }).map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const x = col * 30 + 15;
      const y = row * 30 + 15;
      return (
        <g key={i}>
          <circle cx={x} cy={y} r={10} fill="currentColor" opacity={0.15} />
          <path
            d={`M${x} ${y - 8} L${x + 5} ${y} L${x} ${y + 8} L${x - 5} ${y} Z`}
            fill="currentColor"
            opacity={0.25}
          />
        </g>
      );
    })}
  </svg>
);

/** Abstract arch shape */
export const ArchShape = ({ className = "" }: { className?: string }) => (
  <svg width="200" height="280" viewBox="0 0 200 280" className={className} fill="none">
    <path
      d="M0 280V100C0 44.77 44.77 0 100 0C155.23 0 200 44.77 200 100V280H0Z"
      fill="currentColor"
    />
  </svg>
);

/** Circle ring / orbital shape */
export const CircleRing = ({ className = "", size = 80 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <circle cx="40" cy="4" r="4" fill="currentColor" opacity="0.4" />
  </svg>
);
