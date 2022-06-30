import "./aside.css";
import React, { useContext } from "react";
import { GeneralContext } from "../../models/Context";
import GeneralSetting from "../../models/GeneralSetting";
const Aside = () => {
  const generalSetting = useContext(GeneralContext);

  const handleHeadLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let generalSetting: GeneralSetting = {
      headLine: "mohsen Asadi",
      description: "developer",
      successMessage: "Fail",
      setGeneralSetting: (): void => {
      },
    };
    
    generalSetting.setGeneralSetting(generalSetting);

    console.log(generalSetting);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleSuccessMessageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value);
  };
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>General Settings</h1>
        <div className="form-input">
          <p className="form-label">Headline</p>
          <input
            id="headline"
            type="text"
            name="headline"
            className="form-input"
            //value={generalSetting.headLine}
            onChange={handleHeadLineChange}
          />
        </div>
        <div className="form-input">
          <p className="form-label">Description</p>
          <input
            id="description"
            type="text"
            name="description"
            className="form-input"
            value={generalSetting.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-input">
          <p className="form-label">Success Message</p>
          <input
            id="successMessage"
            type="text"
            name="successMessage"
            className="form-input"
            value={generalSetting.successMessage}
            onChange={handleSuccessMessageChange}
          />
        </div>
      </form>
    </div>
  );
};
export default Aside;
