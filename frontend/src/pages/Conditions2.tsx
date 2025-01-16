import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaFileContract, FaInfoCircle, FaExchangeAlt, FaBox, FaCreditCard, FaTools, FaLink, FaComments, FaUserShield, FaExclamationTriangle, FaBan, FaHandPaper, FaBalanceScale, FaFileSignature, FaGavel, FaEdit } from 'react-icons/fa';
import Section from '@/components/Section';
import React from 'react';

const Conditions2 = () => {
    const [activeSection, setActiveSection] = useState<string | null>('overview');
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { id: 'overview', title: 'Overview', icon: FaInfoCircle },
        { id: 'online-store-terms', title: 'Online Store Terms', icon: FaStore },
        { id: 'general-conditions', title: 'General Conditions', icon: FaFileContract },
        { id: 'accuracy', title: 'Accuracy of Information', icon: FaExchangeAlt },
        { id: 'modifications', title: 'Modifications to Service', icon: FaEdit },
        { id: 'products', title: 'Products or Services', icon: FaBox },
        { id: 'billing', title: 'Billing Information', icon: FaCreditCard },
        { id: 'optional-tools', title: 'Optional Tools', icon: FaTools },
        { id: 'third-party-links', title: 'Third-Party Links', icon: FaLink },
        { id: 'user-comments', title: 'User Comments', icon: FaComments },
        { id: 'personal-information', title: 'Personal Information', icon: FaUserShield },
        { id: 'errors', title: 'Errors and Omissions', icon: FaExclamationTriangle },
        { id: 'prohibited-uses', title: 'Prohibited Uses', icon: FaBan },
        { id: 'disclaimer', title: 'Disclaimer of Warranties', icon: FaHandPaper },
        { id: 'indemnification', title: 'Indemnification', icon: FaBalanceScale },
        { id: 'severability', title: 'Severability', icon: FaFileSignature },
        { id: 'termination', title: 'Termination', icon: FaGavel },
        { id: 'entire-agreement', title: 'Entire Agreement', icon: FaFileContract },
        { id: 'governing-law', title: 'Governing Law', icon: FaGavel },
        { id: 'changes', title: 'Changes to Terms', icon: FaEdit },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <main className='flex-grow container mx-auto px-4 py-8'>
                <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#253858]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Terms and Conditions
                </motion.h1>

                <div className=''>
                    <motion.div
                        className='bg-white rounded-lg shadow-lg p-4 lg:p-6 mb-8'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl lg:text-2xl font-semibold text-[#253858]">Sections</h2>
                            <button
                                className="text-[#253858]"
                                onClick={toggleMenu}
                            >
                                {menuOpen ? 'Close' : 'Menu'}
                            </button>
                        </div>
                        <ul className={`space-y-2 ${menuOpen ? 'block' : 'hidden '}`}>
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => {
                                            setActiveSection(section.id);
                                            setMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm lg:text-base ${activeSection === section.id
                                            ? 'bg-[#253858] text-white'
                                            : 'text-[#253858] hover:bg-blue-100'
                                            }`}
                                    >
                                        <section.icon className="mr-2" />
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className=" bg-white rounded-lg shadow-lg p-4 lg:p-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {sections.map((section) => (
                            <Section
                                key={section.id}
                                id={section.id}
                                title={section.title}
                                icon={section.icon}
                                isActive={activeSection === section.id}
                            />
                        ))}
                    </motion.div>

                </div>

            </main>
        </>
    )
}

export default Conditions2