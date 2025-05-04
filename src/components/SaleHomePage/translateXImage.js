import { useEffect, useRef, useState } from 'react';

const useTranslateX = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
        const [translateXPosition, setTranslateXPosition] = useState(80);
        const [scrollPosition, setScrollPosition] = useState(0);
        const previousScrollPosition = useRef(0);
        const scrollTracking = () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > previousScrollPosition.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            previousScrollPosition.current =
                currentScrollPosition <= 0 ? 0 : currentScrollPosition;
            setScrollPosition(currentScrollPosition);
        };
    
        const handleTranslateX = () => {
            if (scrollDirection === 'down' && scrollPosition >= 1500) {
                {
                    setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
                }
            } else if((scrollDirection === 'up')) {
                {
                    setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
                }
            }
        };
    
        useEffect(() => {
            window.addEventListener('scroll', scrollTracking);
    
            return () => {
                window.removeEventListener('scroll', scrollTracking);
            };
        }, []);

        useEffect(() => {
            handleTranslateX();
          }, [scrollPosition]);

        return { translateXPosition };
};

export default useTranslateX;