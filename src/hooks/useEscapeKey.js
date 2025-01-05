import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

export default useEscapeKey;