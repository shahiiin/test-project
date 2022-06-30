import React from "react";
import Aside from "../../components/Aside/Aside";
import Content from "../../components/Content/Content";
import GeneralSetting from "../../models/GeneralSetting";
import { GeneralContext, INITIAL_GENERALSETTING } from "../../models/Context";
import Success from "../../components/Success/Success";

const MainPage = () => {
  const [generalSetting, setGeneralSetting] = React.useState<GeneralSetting>(
    INITIAL_GENERALSETTING
  );
  return (
    <div className="main">
      <GeneralContext.Provider value={{ ...generalSetting, setGeneralSetting }}>
        <div className="layout">
          <Aside />
        </div>
        <div className="content-body">
          <Content />
          {/* <Succsess/> */}
        </div>
      </GeneralContext.Provider>
    </div>
  );
};

export default MainPage;
