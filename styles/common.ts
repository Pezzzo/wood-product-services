import Link from "next/link";
import styled from "styled-components";

export const WideWrapper = styled.div`
position: relative;
max-width: 1440px;
padding-left: 20px;
padding-right: 20px;
margin: 0 auto;

@media ${(props) => props.theme.media.tablet} {
  padding-left: 60px;
  padding-right: 60px
}
@media ${(props) => props.theme.media.desktop} {
  padding-left: 100px;
  padding-right: 100px
}
`
export const NarrowWrapper = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto;
`
export const Title = styled.h2`
font-family: ${(props) => props.theme.fonts.fontKyivTypeSans};
font-size: 30px;
line-height: 110%;
`
export const StyledLink = styled(Link)`
color: ${(props) => props.theme.colors.white};
:hover {
  color: ${(props) => props.theme.colors.greyBlue4};
}
`
export const PageWrapper = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
min-height: 100vh;
`
export const StyledMain = styled.main`

`
