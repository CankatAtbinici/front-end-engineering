import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', showScrollToTop);
		return function cleanup() {
			window.removeEventListener('scroll', showScrollToTop);
		};
	});

	const showScrollToTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		
			<FiChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{
					height: 100,
					width: 60,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					display: showScroll ? 'flex' : 'none',
					padding: 5,
                    position :"fixed"
				}}
			/>
		
	);
};

export default useScrollToTop;
