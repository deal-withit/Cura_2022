import React from "react";
import video from "../../video/video.mp4";
import {
  HomeContainer,
  HomeContent,
  HomeBg,
  VideoBg,
  HomeP,
  HomeH1,
} from './HomeElements';
import SubHeading from './SubHeading/SubHeading';

const Home = () => {
  return (
    <HomeContainer>
      <HomeBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>
          Cura 2022
        </HomeH1>
        <HomeP>
          <SubHeading />
        </HomeP>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;