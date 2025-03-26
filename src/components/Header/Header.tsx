import { HeaderProp } from "./HeaderType";

const Header = ({ image, children }: HeaderProp) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
