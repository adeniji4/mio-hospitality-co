
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatsAppCTA = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, repeatType: 'loop' }}
    >
      <Link
        to="/book"
        className="bg-red-950 hover:bg-red-800 text-white px-4 py-3.5 rounded-full shadow-lg transition-colors duration-300 font-medium whitespace-nowrap text-base"
      >
        Book a Service
      </Link>
    </motion.div>
  );
};

export default WhatsAppCTA;
