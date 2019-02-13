import { useEffect } from "react";

export default function useInterval(cb, time) {
  console.log("cb", cb);
  console.log("time", time);

  useEffect(() => {
    if (time == null) {
      return;
    }

    const interval = setInterval(cb, time);
    return () => clearInterval(interval);
  });
}
