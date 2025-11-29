// useCountUp.js
import { useEffect, useState } from "react";

export function useCountUp(target, duration = 1500, startWhen = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      if (current !== start) {
        start = current;
        setValue(current);
      }
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, startWhen]);

  return value;
}
