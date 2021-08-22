import React from "react";
import Button from "../../atoms/Button/Button";
import { NavBarUserButtons } from "../../../../constants/constants";
import ImgButton from "../../molecules/ImgButton/ImgButton";
import { Styled, variables } from "../../../../assets/styled/styled";
import img from "../../../../assets/img/logo.png"

let NavBar = () => {
  const logo = {
    name: "logo",
    url: img,
    link: "/",
    title: "Logo, click to return home",
  };

  return (
    <StyledNavBar>
      <ImgButton {...logo} />
      <div className="btn-cont">
        {NavBarUserButtons.map((props) => {
          return <Button key={props.name} {...props} />;
        })}
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = Styled.div`
position:sticky;
top:0;
left:0;
right:0;
padding:.2em 1em;
filter: drop-shadow(1rem 1rem .5rem ${variables.colorShadow});
background: ${variables.colorSecondary};
display:flex;
flex-flow: row no-wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 0;   
.btn-cont{
display:flex;
flex-flow: row no-wrap;
justify-content: space-between;
align-items: center;
gap:1em;
}
button{
  color: ${variables.colorPrimary};
  margin: 0;
}
`;

export default NavBar;
