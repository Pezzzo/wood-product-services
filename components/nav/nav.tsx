import { StyledLink } from "../../styles/common";

const Nav = () => {
  return (
    <nav>
      <StyledLink href={'/gallery'}>Gallery</StyledLink>
      <StyledLink href={'/prices'}>Prices for services</StyledLink>
      <StyledLink href={'/about'}>About us</StyledLink>
      <StyledLink href={'/contact'}>Contact</StyledLink>
    </nav>
  );
};

export default Nav;
