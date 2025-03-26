import { type ComponentPropsWithoutRef } from "react"

export type InputProps = {
  label: string,
  id: string
} & ComponentPropsWithoutRef<'input'>
