import { StyledLink } from "../../styles/common";
import Nav from "../nav/nav";
import Image from 'next/image'
import { StyledHeader } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href={'/'}>
        <Image src={'/logo.svg'} alt={''} width={'85'} height={'36'} />
      </StyledLink>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
