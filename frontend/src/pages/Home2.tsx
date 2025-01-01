import * as React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBook, FaUsers } from 'react-icons/fa';
import Courses from '@/components/Courses';

const Home2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>  
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold mb-6 text-center" variants={itemVariants}>
        Welcome 
      </motion.h1>
      <motion.p className="text-xl mb-8 text-center" variants={itemVariants}>
        Empowering minds through interactive and engaging online education.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <FaRocket className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2 text-center">Learn at Your Pace</h2>
          <p className="text-gray-600 text-center">Flexible learning schedules tailored to your needs.</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <FaBook className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2 text-center">Diverse Courses</h2>
          <p className="text-gray-600 text-center">Wide range of subjects to choose from and explore.</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <FaUsers className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2 text-center">Expert Instructors</h2>
          <p className="text-gray-600 text-center">Learn from industry professionals and experienced educators.</p>
        </motion.div>
      </div>
    </motion.div>

    <Courses/>
    </>
  );
};

export default Home2;

