import React from "react";
import GeneralSetting from "./GeneralSetting";

export const INITIAL_GENERALSETTING: GeneralSetting = {
  headLine: "NEW STUFF",
  description: "Sign up for our newsletter and get 15% off your first order!",
  successMessage: "Success",
  setGeneralSetting: (): void => {
    throw new Error("setGeneralSetting function must be overridden");
  },
};
export const GeneralContext = React.createContext(INITIAL_GENERALSETTING);
