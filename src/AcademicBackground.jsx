import { motion } from "framer-motion";
const AcademicBackground = () => {
  return (
    <motion.section
      className="min-h-screen flex
      flex-col felx-col items-center justify-center bg-dark-bg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold luxury-gold mb-8">
        Academic Background
      </h2>
      <div className="text-light-text max-w-3xl mx-auto space-y-4">
        <p>B.tech in Computer Science</p>
      </div>
    </motion.section>
  );
};

export default AcademicBackground;
