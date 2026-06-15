'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const { testimonials } = portfolioConfig;
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.items.length]);

  const goToPrev = () => {
    setCurrent((prev: number) => (prev - 1 + testimonials.items.length) % testimonials.items.length);
  };

  const goToNext = () => {
    setCurrent((prev: number) => (prev + 1) % testimonials.items.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">{testimonials.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 pt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials.items[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                    "{testimonials.items[current].text}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/50">
                      <Image
                        src={testimonials.items[current].image}
                        alt={testimonials.items[current].name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold font-heading text-foreground">
                        {testimonials.items[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials.items[current].role} at {testimonials.items[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="p-2 rounded-full bg-muted hover:bg-emerald-500/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 bg-gradient-to-r from-emerald-600 to-teal-600'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-muted hover:bg-emerald-500/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}