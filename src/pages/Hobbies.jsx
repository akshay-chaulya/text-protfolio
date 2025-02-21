import { motion } from "framer-motion";
const Hobbies = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold luxury-gold mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-light-text max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          molestiae, ea et iusto quam sit tenetur temporibus nihil, rerum
          veritatis dolorem blanditiis quo deleniti quisquam error impedit,
          maxime enim eveniet.
        </p>
      </div>
    </motion.section>
  );
};

export default Hobbies;
