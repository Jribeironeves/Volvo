import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #fafafa;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (max-width: 767px) {
    height: 64px;
    padding: 0 24px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 64px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 64px;
    padding: 0 24px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 64px;
    padding: 0 24px;
  }

  @media (min-width: 1920px) {
    height: 64px;
    padding: 0 24px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 100px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 100px;
  }

  @media (min-width: 1920px) {
    width: 100px;
  }
`;
