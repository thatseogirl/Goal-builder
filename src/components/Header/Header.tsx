import { type PropsWithChildren } from "react";

type HeaderProp = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

const Header = ({ image, children }: HeaderProp) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
