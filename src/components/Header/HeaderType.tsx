import { type PropsWithChildren } from "react";

export type HeaderProp = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;