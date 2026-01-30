import { motion } from "framer-motion";
import AE9 from "../assets/AE9.jpeg";

export default function Hero() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <section
        className="relative flex flex-col justify-center items-center h-screen w-full bg-center md:min-h-[164vh]"
        style={{
          backgroundImage: `url(${AE9})`, // Correctly reference imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-cyan-100 font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Aihanuwa & Emmanuel
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            February 21, 2026
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
