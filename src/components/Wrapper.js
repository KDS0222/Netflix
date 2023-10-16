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

  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

const Wrapper = (props) => {
  return (
    <WrapperBox
      maxWidth={props.maxWidth}
      width={props.width}
      height={props.height}
      display={props.display}
      justify={props.justify}
      align={props.align}
      margin={props.margin}
      padding={props.padding}
      background={props.background}
    >
      {props.children}
    </WrapperBox>
  );
};

export default Wrapper;
