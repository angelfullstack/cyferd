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
font-size: ${variables.fontSizeCow};
color: ${variables.colorDanger};
display: block;
position: absolute;
right:-1em;
top: 50%;
transform: translate(100%, calc(50% - 2.2em));
padding:1rem;
background-color: ${variables.colorWhite};
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

`;
Tooltip.propTypes = {
  message: PropTypes.string.isRequired
};

Tooltip.defaultProps = {
};

export default Tooltip;
