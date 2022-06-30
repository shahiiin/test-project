import "./content.css";
import React, { useState, useEffect, useContext } from "react";
import { GeneralContext } from "../../models/Context";
import FontService from "../../services/font/FontService";

const Content = () => {
  const [fonts, setFonts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const generalSetting = useContext(GeneralContext);

  const loadFonts = async () => {
    await FontService.getFonts().then((res) => {
      setFonts(res);
      setIsFetching(false);
    });
  };
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <>
      {}
      <div className="content">
        <form className="form-content">
          <h1>{generalSetting.headLine}</h1>
          <p>{generalSetting.description}</p>
          <div className="form-input">
            <input
              id="email"
              type="text"
              name="email"
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div className="form-input">
            <input
              id="password"
              type="text"
              name="password"
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="form-input">
            <select name="fonts" id="fonts" className="form-input">
              {isFetching ? (
                <option disabled>Loading Information, Please wait...</option>
              ) : (
                fonts
                  .filter((item) => item["family"] !== "monospace")
                  .sort((a, b) => (a["family"] < b["family"] ? -1 : 1))
                  .map((item, index) => {
                    return <option key={index}>{item["family"]}</option>;
                  })
              )}
            </select>
          </div>
          <button>GET MY 30% OFF</button>
        </form>
      </div>
    </>
  );
};
export default Content;
