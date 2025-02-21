import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center dark-bg"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-light-text max-w-2xl mx-auto">
          Hi, I am Akshay Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis, tempore. Rem inventore, tempora libero modi aut
          tenetur quidem, rerum labore iste praesentium, quisquam officia quod.
          Obcaecati sint natus nostrum voluptates.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
