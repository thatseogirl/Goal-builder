import { ContainerProps } from "./containerType"

const Container = ({as}: ContainerProps) => {
    const Component = as
  return <Component />
}

export default Container
