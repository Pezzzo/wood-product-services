import Head from "next/head";
import { PageWrapper, StyledMain, WideWrapper } from "../../styles/common";
import { IChildren } from "../../types/types";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout: React.FC<IChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Wood products</title>
      </Head>
      <PageWrapper>
        <Header />
        <StyledMain>
          <WideWrapper>
            {children}
          </WideWrapper>
        </StyledMain>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
