import React from "react";
import { Styled } from "../../../assets/styled/styled";
import RegisterForm from "../../UI/organisms/RegisterForm/RegisterForm";

const WelcomePage = (props) => {
  return (
    <StyledWelcomePage>
      <RegisterForm></RegisterForm>
    </StyledWelcomePage>
  );
};

const StyledWelcomePage = Styled.main`
width:100%;
height:100vh;
position: relative;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
`;
export default WelcomePage;
