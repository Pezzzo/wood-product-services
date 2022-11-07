import { StyledLink } from "../../styles/common";
import Image from 'next/image'
import { StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink href={'/'}>
        <Image src={'/logo.svg'} alt={''} width={'85'} height={'36'} />
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
