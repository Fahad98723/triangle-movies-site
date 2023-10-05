import React from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
