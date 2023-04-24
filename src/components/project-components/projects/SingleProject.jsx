import { motion } from 'framer-motion';

const SingleProject = ({ title, category, image , address }) => {
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
			<section aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className='flex justify-center py-4'>
						<img 
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-2 py-3">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<div>
						<a href={address} target='__blank' className='text-sm text-gray-500 dark:text-ternary-light underline'>
							 Visit Project
							  </a>
						</div>
						
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default SingleProject;