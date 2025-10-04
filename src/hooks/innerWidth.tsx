import { useEffect, useState } from "react";

const InnerW = () => {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setW(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-0 left-0 z-[1000] px-[10px] py-[5px] text-[20px] bg-black text-white fixed">
      {w}px
    </div>
  );
};

export default InnerW;
