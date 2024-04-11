import { useEffect, useCallback } from "react";

const useEscapePress = onEscape => {
  const handleKeyDown = useCallback(
    event => {
      if (event.key === "Escape") {
        onEscape();
      }
    },
    [onEscape]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useEscapePress;
