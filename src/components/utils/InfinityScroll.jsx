import { useEffect } from "react";

function Scroll({ action }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Dentro del useEffect");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // console.log("HANDLE SCROLL");
    if (
      window.scrollY > 400
    ) {
      window.removeEventListener("scroll", handleScroll);
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
      }, 200);
      action(false);
    }else {
      action(true);
    }
  };

  return <></>;
}

export default Scroll;
