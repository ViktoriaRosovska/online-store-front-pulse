import { useState, useEffect } from "react";

function useScrollLock(initialLock = false) {
  const [isLocked, setIsLocked] = useState(initialLock);

  const toggleBodyScrollLock = lock => {
    document.body.style.overflow = lock ? "hidden" : "visible";
  };

  useEffect(() => {
    toggleBodyScrollLock(isLocked);
    return () => {
      toggleBodyScrollLock(false);
    };
  }, [isLocked]);

  return [isLocked, setIsLocked];
}

export default useScrollLock;
