'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useInView } from '@/hooks/useInView';

export default function Education() {
  const { education } = portfolioConfig;
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">{education.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {education.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          {education.items.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-heading mb-2">{edu.degree}</h3>
                  <p className="text-lg text-emerald-400 font-medium mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.startDate} - {edu.endDate}
                    </span>
                    {edu.gpa && (
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        {edu.gpa}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  {edu.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-green-500">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8">
            Certifications & Courses
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="group glass rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 card-hover block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold font-heading text-foreground group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                      <ExternalLink className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}