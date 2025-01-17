
import { motion } from 'framer-motion';


const courses = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React and build your first app.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into advanced JavaScript concepts and patterns.' },
  { id: 3, title: 'Web Design Fundamentals', description: 'Master the principles of effective web design.' },
  { id: 4, title: 'Data Science Essentials', description: 'Explore the world of data science and analytics.' },
];

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold mb-6 text-center" variants={itemVariants}>
        Our Courses
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            {/* <motion.button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button> */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;

