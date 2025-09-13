import { useEffect } from "react";
import SpinnerSelfAnimated from "./Spinner";
// If SpinnerSelfAnimated accepts props, ensure it validates them with PropTypes

function LoadingScreen({ visible, onHide }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 3000); // Simulate a loading time of 3 seconds
    return () => clearTimeout(timer);
  }, [onHide]);

  if (visible)
    return (
      <div
        className={`fixed inset-0 h-screen bg-slate-300 dark:bg-slate-800 dark:text-white/80 text-slate-700 flex flex-col justify-center items-center z-100 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500`}
      >
        <SpinnerSelfAnimated size={60} stroke={6} color="currentColor" />
        <div className="mt-4 text-lg font-bold">Zico App</div>
      </div>
    );

  return null;
}

export default LoadingScreen;
