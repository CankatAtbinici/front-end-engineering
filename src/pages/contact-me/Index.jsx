import { motion } from 'framer-motion';
import ContactDetails from '../../components/project-components/contact-form/ContactDetail';
import ContactForm from '../../components/project-components/contact-form/Index';
import Head from './Contact.head';

const ContactMe = () => {
	return (
		<section>
				<Head/>
				<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
		
			<ContactForm />
			<ContactDetails />
		</motion.div>
		</section>

	);
};

export default ContactMe;
