import React from "react";
import PropTypes from "prop-types";
import {Link, Router} from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { Styled, variables } from "../../../../assets/styled/styled";

const ImgButton = ({
  name,
  url,
  link,
  title
}) => {
  console.log(url)
  return (
        <StyledImgButton>
            <a href={link}><img src={url} alt={title}></img></a>
        </StyledImgButton>
  );
};

const StyledImgButton = Styled.button`
border:none;
background: none;
display:block;
&:visited,&:active{
  border:none;
}
img{
  height:3em;
  border: none;

}


`;

ImgButton.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

ImgButton.defaultTypes = {
  name: "img-button",
  url: "/",
  link: "/",
  title: "Dummy img-button",
};

export default ImgButton;
