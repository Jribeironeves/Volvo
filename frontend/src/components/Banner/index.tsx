import React from "react";
import {
  BannerContainer,
  BackgroundVideo,
  BannerContent,
  BannerText,
  SubtitleText,
  Button,
} from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <BackgroundVideo autoPlay loop muted>
        <source
          src="https://www.volvocars.com/images/v/-/media/applications/homepage/homepage/landing/videos/hp-hero-ex30-video-tablet-1x1-reveal.mp4"
          type="video/mp4"
        />
      </BackgroundVideo>
      <BannerContent>
        <BannerText>A grandiosidade do nosso menor SUV</BannerText>
        <SubtitleText>EX30</SubtitleText>
        <Button>Saiba mais</Button>
      </BannerContent>
    </BannerContainer>
  );
};
