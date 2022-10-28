import { useEffect, useState } from "react";

import UpArrow from "../../assets/FooterIcons/UpArrow.svg";
import { BtnScroll } from "./styles";

const BtnScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <BtnScroll onClick={scrollTop} hidden={showBtn ? false : true}>
      <img src={UpArrow} />
    </BtnScroll>
  );
};

export default BtnScrollTop;
