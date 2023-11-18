import styled from "styled-components";

const WrapperBox = styled.div`
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  flex-direction: ${props => props.direction};
  margin-bottom: ${props => props.marginBottom};
  position: ${props => props.position};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  text-align: ${props => props.textAlign};
  transform: ${props => props.transform};
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const Wrapper = (props) => {
  return (
    <WrapperBox
      {...props}
    >
      {props.children}
    </WrapperBox>
  );
};

export default Wrapper;
