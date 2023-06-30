import styled, { css } from "styled-components";
import { GrNext } from "react-icons/gr";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 12rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-weight: bold;
  margin-top: 5rem;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
`;

export const TabNavContainer = styled.div`
  display: flex;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 20px;
`;

export const TabItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  padding: 10px 10px 2px 10px;
  margin-bottom: 2rem;
  background-color: ${(props) => (props.active ? "#fff" : "#fff")};
  color: ${(props) => (props.active ? "#000" : "#000")};
  border-bottom: ${(props) => (props.active ? "2px solid #2A609D" : "none")};

  &:hover {
    background-color: ${(props) => (props.active ? "#fff" : "#fff")};
  }
`;

export const Carousel = styled.div<{ currentSlide: number; isMobile: boolean }>`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 20px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1920px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  width: 300px;
  margin-right: 10px;
  scroll-snap-align: start;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  }

  p {
    margin-top: 7px;
    color: #000;
    font-weight: 500;
    font-weight: bold;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 200px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 200px;
  }

  @media (min-width: 1278px) and (max-width: 1355px) {
    width: 250px;
  }

  @media (min-width: 1356px) and (max-width: 1919px) {
    width: 300px;
  }

  @media (min-width: 1920px) {
    width: 400px;
  }
`;

export const ButtonSlide = styled.button`
  background-color: white;
  color: #2a609d;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 24px;
  margin-left: 50px;
  margin-right: -30px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 50px;
    margin-right: -30px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 50px;
    margin-right: -30px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    margin-left: 50px;
    margin-right: -30px;
  }

  @media (min-width: 1920px) {
    margin-left: 50px;
    margin-right: -30px;
  }
`;


export const NextIcon = styled(GrNext)`
  width: 10px;
  height: 10px;
`;

export const CarouselContainer = styled.div`
  position: relative;
  margin-left: 152px;
  margin-right: 143px;
  max-width: 100%;

  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1920px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const NextButton = styled.button`
  background-color: #fff;
  color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const PrevButton = styled.button`
  background-color: #fff;
  color: #fff;
  border: none;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -5rem;
  right: 10px;
  display: flex;
  margin-top: 5rem;

  @media (max-width: 767px) {
    right: 110px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    right: 110px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1920px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2.5rem;
`;

export const CarouselImage = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;