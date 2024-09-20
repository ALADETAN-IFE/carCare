import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({pages, book}) => {
  const { pathname } = useLocation();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, pages, book]);

  return null;
};

export default ScrollToTop;
