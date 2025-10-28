"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/professional-tennis-coach-on-court-with-racket.jpg"
                alt="Coach Alex Martinez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello, my name is Abenezer Tsegaye (abel). I am a tennis coach
                and a national team player. I started playing when I was a
                child.Since then, I have worked hard and participated in various
                tournaments and games and win some of them. Then, I became
                interested in becoming a coach and learning more about tennis.To
                fulfill this desire, I am taking some tennis coaching courses,
                updating and qualifying myself, and working to become a better
                coach.
              </p>
              <p>
                I hold certifications from the Professional Tennis Registry
                (PTR). My coaching philosophy combines technical excellence with
                mental toughness and strategic game development.
              </p>
              <p>
                Whether you're a beginner learning the fundamentals or an
                advanced player refining your competitive edge, I create
                personalized training programs that focus on sustainable
                improvement and long-term success.
              </p>
              <p className="font-semibold text-foreground">
                Let's work together to elevate your game to the next level.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
