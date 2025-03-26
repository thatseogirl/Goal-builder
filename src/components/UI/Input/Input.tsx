import { InputProps } from "./inputType"

const Input = ({label, id, ...props}: InputProps) => {
  return (
    <div className="flex-item">
      <label htmlFor={id}>{label}</label>
      <input  id={id} {...props}/>
    </div>
  )
}

export default Input
