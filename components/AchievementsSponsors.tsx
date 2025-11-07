"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
// Removed sponsors import as we're displaying a certificate image instead

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AchievementsSponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Players Coached" },
    { value: 13, suffix: "", label: "Tournament Wins" },
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="text-center p-8 bg-secondary rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  <Counter end={achievement.value} />
                  {achievement.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Certification
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-3xl p-4 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition-shadow">
              <img
                src={"/AbelCertificate.jpg"}
                alt="Coaching Certification"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
