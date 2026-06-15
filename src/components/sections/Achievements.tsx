'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Code, Star, Target, Zap } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ElementType> = {
  Trophy: Trophy,
  Award: Award,
  Code: Code,
  Star: Star,
  Target: Target,
  Zap: Zap,
};

export default function Achievements() {
  const { achievements } = portfolioConfig;
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">{achievements.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {achievements.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.items.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group glass rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-emerald-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  {achievement.date}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}