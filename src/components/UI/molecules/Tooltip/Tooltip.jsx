import React from "react";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";

const Tooltip = ({
  message,
  type = "error"
}) => {
  return (
    <React.Fragment>
   
        <StyledTooltip  className={type}>
            {message}
        </StyledTooltip>
    </React.Fragment>
  );
};

const StyledTooltip = Styled.p`
font-size: ${variables.fontSizeHuman};
color: ${variables.colorDanger};
display: block;
position: absolute;
right:-1em;
top: 50%;
transform: translate(100%, calc(-50% + .6em));
padding:.5rem;
background-color: ${variables.colorWhite};
width: 15rem;
filter: drop-shadow(1rem 1rem .5rem ${variables.colorShadow});
&::after{
    content:'';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left:0;
    top: 50%;
    transform: translate(-100%,-50%);
    border-top: .5em solid transparent;
    border-bottom: .5em solid transparent;
    border-right: 1em solid ${variables.colorWhite};
}
@media(max-width: 1024px) {
width:8rem;
}
@media(max-width: 764px) {
width:100%;
right: 50%;
top: 50%;
transform: translate(50%, 100%);
z-index:2;
&::after{
    left:50%;
    top: 0%;
    transform: translate(-100%,-100%);
    border-top: none;
    border-left: .5em solid transparent;
    border-right: .5em solid transparent;
    border-bottom: 1em solid ${variables.colorWhite};
}
}

`;
Tooltip.propTypes = {
  message: PropTypes.string.isRequired
};

Tooltip.defaultProps = {
};

export default Tooltip;
