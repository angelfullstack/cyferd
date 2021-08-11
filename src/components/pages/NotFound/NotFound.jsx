import { Styled, variables } from "../../../assets/styled/styled"


const NotFound = () => {
 
  return (
    <StyledNotFound>Oops! Not found</StyledNotFound>
  );
};

NotFound.propTypes = {

};

NotFound.defaultProps = {

};

const StyledNotFound = Styled.div`
    position: absolute;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    top: 50%;
    left: 50%;
    border: 1rem solid ${variables.colorDanger};
    border-radius: .25em;
    color: ${variables.colorPrimary};
    background-color: ${variables.colorWhite};
    padding: .25em .5em;
    font-size:${variables.fontSizeElephant};
    font-weight: bold;
    text-align: center;
    animation: blink 2s linear infinite alternate-reverse, something 5s linear infinite;

    @keyframes blink {
        from{
            box-shadow: 0px 0px 0px ${variables.colorDanger};
        }
        to{
            box-shadow: 0 0 50px ${variables.colorDanger};
        }
    }

    @keyframes something {
        0%{
            transform: translate(-50%, -50%) rotate(0deg)  scale(1);
        }
        10%{
            transform: translate(-50%, -50%) rotate(0deg)  scale(1);
        }
        13%{
            transform: translate(-50%, -50%) rotate(0deg)  scale(1.2);
        }
        20%{
            transform: translate(-50%, -50%) rotate(0deg)  scale(1);
        }
        90%{
            transform: translate(-50%, -50%) rotate(0deg)  scale(1);
        }
        100%{
            transform: translate(-50%, -50%) rotate(360deg)  scale(1);
        }
    }
   
`;
export default NotFound;
