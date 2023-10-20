import { SpinnerCircular } from "spinners-react";

export function Loading() {
  return (
    <>
        {
            console.log('asd')
        }
      <SpinnerCircular
        size={81}
        thickness={100}
        speed={100}
        color="rgba(172, 57, 59, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </>
  );
}
