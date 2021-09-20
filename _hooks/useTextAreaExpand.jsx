import { useEffect, useRef } from "react";

const useTextAreaExpander = () => {
  const ref = useRef();

  useEffect(() => {
    if (!ref || !ref.current) return;

    const areaRef = ref.current;
    const rowsLimit = 5;
    let lastScrollHeight = areaRef.scrollHeight;

    areaRef.oninput = () => {
      const rows = parseInt(areaRef.getAttribute("rows"));

      areaRef.setAttribute("rows", "1");

      if (rows < rowsLimit && areaRef.scrollHeight > lastScrollHeight) {
        rows++;
      } else if (rows > 1 && areaRef.scrollHeight < lastScrollHeight) {
        rows--;
      }

      lastScrollHeight = areaRef.scrollHeight;
      areaRef.setAttribute("rows", rows);
    };
  }, [ref]);

  return ref;
};

export default useTextAreaExpander;
