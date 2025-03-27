import { ContainerProps } from "./containerType"

const Container = ({as, children }: ContainerProps) => {
    const Component = as
  return <Component>{children}</Component>
}

export default Container
