import { motion } from "framer-motion";

const Passions = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-accent-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 luxury-gold">Passions</h2>
        <p className="text-light-text max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          quibusdam porro explicabo voluptate. Iusto accusamus illo nemo non
          officia ad, qui maiores ea reiciendis neque atque odit voluptas
          molestiae amet!
        </p>
      </div>
    </motion.section>
  );
};

export default Passions;
