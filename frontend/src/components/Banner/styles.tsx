import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 3.6rem;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-top: 3.6rem;
  }

  @media (min-width: 1278px) and (max-width: 1355px) {
    margin-top: 3.8rem;
  }

  @media (min-width: 1356px) and (max-width: 1919px) {
    margin-top: 4rem;
  }

  @media (min-width: 1920px) {
    margin-top: 5rem;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerContent = styled.div`
  z-index: 1;
  text-align: center;
`;

export const BannerText = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  margin-top: -15.5rem;
`;

export const SubtitleText = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 137px;
  height: 48px;
  margin-top: -0.5rem;
  padding: 12px 24px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
