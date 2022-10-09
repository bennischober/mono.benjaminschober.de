import { useEffect, useState } from "react";

export function useScrolledToTop() {
    // check, if the page is scrolled to the top
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const handleScroll = () => {
        const { scrollTop } = document.documentElement;
        setScrolledToTop(scrollTop === 0);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrolledToTop;
}