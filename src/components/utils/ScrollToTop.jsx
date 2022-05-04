import { useState } from "react";
import InfinityScroll from "./InfinityScroll";

function ScrollToTop() {
  const [onTop, setOnTop] = useState(true);

  return <>
    <InfinityScroll action={setOnTop} />
    {/* <!-- Scroll to Top Button--> */}
    <button
      className="scroll-to-top rounded border-0"
      onClick={() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          setOnTop(true);
        }, 1000);
      }}
      style={{ display: onTop ? "none" : "inline" }}
    >
      <i className="fas fa-angle-up"></i>
    </button>
  </>;
}

export default ScrollToTop;
