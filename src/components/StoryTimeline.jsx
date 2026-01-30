import { motion } from "framer-motion";

export default function StoryTimeline() {
  const milestones = [
    {
      date: "Met in 2024,",
      text: "Where we least expected in my mother's pastor's office. Introduced in a quiet moment, we exchanged smiles, then contacts, and began to talk, unaware that God was gently weaving our hearts together. What seemed ordinary soon became extraordinary, as love found us where we never thought to look.",
    },
    {
      date: "First Date",
      text: "On Boxing Day, 2024, we shared our first date our favorite meal, simple moments, and quiet laughter. In that small, beautiful time, our hearts felt at home.",
    },
    {
      date: "Propose in 2025",
      text: "With love, intention, and a heart full of certainty, I first shared my intention with Aihanuwa in November, when we visited my pastor together. Then, on the 4th of January, 2026, I made it official I asked Aihanuwa to be mine for life and she said yes to forever with me.",
    },
    {
      date: "Getting Married in 2026",
      text: "On 21st February 2026, surrounded by family, friends, and the grace of God, Aihanuwa and Emmanuel will joyfully say “I do,” celebrating a love that was written with purpose and sealed to last a lifetime.",
    },
  ];

  return (
    <section className="bg-primary py-6 md:py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-600 mb-2 md:mb-10">
        Our Story
      </h2>

      <div className="max-w-6xl mx-auto grid gap-2 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <p className="text-xl text-blue-600 font-medium mt-2">
              {milestone.date}
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              {milestone.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
