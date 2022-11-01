import { useState } from "react";
import Lottie from "react-lottie";

import cat from "../../../assets/Animations/lf30_editor_ceupvuwj.json";
import { Container } from "./styles";

const AnimationCat = () => {
  const [animate] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={animate.isStopped}
        isPaused={animate.isPaused}
      />
    </Container>
  );
};

export default AnimationCat;
