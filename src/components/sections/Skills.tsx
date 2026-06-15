'use client';

import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  TrendingUp,
  Filter,
  GitBranch,
  Github,
  Terminal,
  BookOpen,
  Calculator,
  Table,
  FileCode,
} from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useInView } from '@/hooks/useInView';
import ProgressBar from '@/components/ui/ProgressBar';

const iconMap: Record<string, React.ElementType> = {
  PowerBI: BarChart3,
  Database: Database,
  Excel: FileSpreadsheet,
  BarChart: BarChart3,
  TrendingUp: TrendingUp,
  Filter: Filter,
  Python: Code,
  Table: Table,
  Calculator: Calculator,
  Code: Code,
  FileCode: FileCode,
  Git: GitBranch,
  GitHub: Github,
  Terminal: Terminal,
  BookOpen: BookOpen,
};

export default function Skills() {
  const { skills } = portfolioConfig;
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">{skills.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {skills.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold font-heading mb-6 gradient-text">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="ml-auto text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar value={skill.level} showValue={false} size="sm" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold font-heading mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'DAX',
              'Power Query',
              'Pivot Tables',
              'VLOOKUP',
              'Data Modeling',
              'ETL',
              'Statistics',
              'Machine Learning Basics',
              'Jupyter Notebooks',
              'REST APIs',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}