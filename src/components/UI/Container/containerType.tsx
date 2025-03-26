import { PropsWithChildren, type ElementType } from "react"

export type ContainerProps = PropsWithChildren<{
as: ElementType
}>