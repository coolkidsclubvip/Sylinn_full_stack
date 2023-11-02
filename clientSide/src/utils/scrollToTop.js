import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is straightforward to handle with a component that will scroll the window up on every navigation:
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
