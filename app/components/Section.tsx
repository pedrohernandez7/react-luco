import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
}
export const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <section className="prose prose-lg dark:prose-invert mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
};
