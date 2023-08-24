import { useState } from "react";
import { FormItems } from "../App";

const useMultiForm = (
  { name, email, phone }: FormItems,
  sideNavElements: Array<string>
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Email & Phone Validation
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegEx = /^[0-9]+$/;

  const goForwards = () => {
    if (currentIndex === sideNavElements.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
    // if (name === "" || !emailRegEx.test(email) || !phoneRegEx.test(phone)) {
    //   alert("Please enter full details");
    // } else {
    // }
  };

  const goBackwards = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return {
    currentIndex,
    setCurrentIndex,
    goForwards,
    goBackwards,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === sideNavElements.length - 1,
  };
};

export default useMultiForm;
