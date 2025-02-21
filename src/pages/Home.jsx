import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold luxury-gold mb-4">
          Welcome to My Personal Website
        </h1>
        <p className="text-light-text max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minima
          molestias. Deserunt sed illo iste veritatis quia necessitatibus, optio
          expedita non animi, amet ducimus possimus voluptates minus. Natus, a
          sint!
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
