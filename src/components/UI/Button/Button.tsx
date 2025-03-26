
import { ButtonProps } from "./ButtonType"

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
