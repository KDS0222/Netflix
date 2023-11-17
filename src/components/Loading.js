import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";


const LoadingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export function Loading() {
  return (
    <LoadingBox>
      <SpinnerCircular
        size={81}
        thickness={100}
        speed={100}
        color="rgba(172, 57, 59, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </LoadingBox>
  );
}
