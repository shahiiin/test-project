import { Dispatch, SetStateAction } from "react";

export default interface GeneralSetting {
  headLine: string;
  description: string;
  successMessage: string;
  setGeneralSetting: Dispatch<SetStateAction<GeneralSetting>>;
}
