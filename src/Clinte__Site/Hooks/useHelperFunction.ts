import { useState } from "react";
const HelperFunction = () => {
  const [active, setActive] = useState(false);

  let quickViewClick: () => void;

  quickViewClick = () => {
    alert("Hello");
    setActive(!active);
  };

  return { quickViewClick, active };
};

export default HelperFunction;
