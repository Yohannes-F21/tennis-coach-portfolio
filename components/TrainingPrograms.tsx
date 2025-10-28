"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Zap, Footprints, Dumbbell, Brain, Calendar, Clock } from "lucide-react"
import { programs } from "@/data/programs"

const focusAreas = [
  { icon: Target, title: "Game Style", key: "gameStyle" },
  { icon: Zap, title: "Strategy & Tactics", key: "strategy" },
  { icon: Footprints, title: "Movement", key: "movement" },
  { icon: Dumbbell, title: "Physical Training", key: "physical" },
  { icon: Brain, title: "Mental Conditioning", key: "mental" },
]

export default function TrainingPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">Training Programs</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            My training approach focuses on technical, physical, and mental development to help players perform their
            best on court.
          </p>

          {/* Focus Areas */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Training Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => {
                const Icon = area.icon
                const content = programs.focusAreas[area.key as keyof typeof programs.focusAreas]

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2">{area.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Program Options */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Program Options</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* After School Program */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h4 className="text-2xl font-bold text-foreground">After School Program</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{programs.options.afterSchool.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Ages:</span>
                    {programs.options.afterSchool.ages}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Schedule:</span>
                    {programs.options.afterSchool.schedule}
                  </div>
                </div>
              </motion.div>

              {/* Week-to-Week Program */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <h4 className="text-2xl font-bold text-foreground">Week-to-Week Program</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{programs.options.weekToWeek.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Levels:</span>
                    {programs.options.weekToWeek.levels}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Schedule:</span>
                    {programs.options.weekToWeek.schedule}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
