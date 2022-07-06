import { useLocation } from "react-router";
import React from "react";

const SmoothScrollLoader = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 720,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default SmoothScrollLoader;
