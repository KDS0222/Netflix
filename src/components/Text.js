import styled from "styled-components";

const TextBox = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-shadow: ${(props) => props.shadow || "rgba(0, 0, 0, 0.6) 1px 1px 10px"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
  text-align: ${props=> props.textAlign};
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 1px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

function Text(props) {
  return (
    <TextBox
      size={props.size}
      weight={props.weight}
      padding={props.padding}
      line={props.line}
      shadow={props.shadow}
      color={props.color}
      margin={props.margin}
      textAlign={props.textAlign}
    >
      {props.children}
    </TextBox>
  );
}

export default Text;
