import React, {useContext} from "react";
import "./Talks.css"
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <div class="responsive-google-slides">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQvLI9Iwm6nSqtqeLS1NWN_HElqAoz_TkkMpBpsMC2Z-mjjFaJCZZd8tElYekDWHO6HPQEYMV2ogU5T/embed?start=true&loop=true&delayms=15000"></iframe>
        </div>
        </div>
      </div>
    </Fade>
  );
}
