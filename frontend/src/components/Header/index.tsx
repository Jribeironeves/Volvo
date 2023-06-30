import React from "react";
import { HeaderContainer, Logo} from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg" alt="Logo" />
    </HeaderContainer>
  );
};
