import React from 'react';
import { motion } from 'framer-motion';


function singleSkill({title , description , icon , key}) {

    
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
            ease: 'easeInOut',
            duration: 0.7,
            delay: 0.15,
        }}
    >
        <section aria-label="Single Skill" key={key}>
            <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-transparent">
                <div className='flex justify-center py-4'>
                    <div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light' >
                      {icon} 
                    </div>
                </div>
                <div className="text-center px-2 py-3">
                    <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                        {title}
                    </p>
                    <div>
                    <p className='font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2'>
                        {description}
                    </p>
                    </div>
                    
                </div>
            </div>
        </section>
    </motion.div>
    );
}

export default singleSkill;