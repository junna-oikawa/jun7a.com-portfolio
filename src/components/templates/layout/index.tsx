import { ReactNode } from 'react';
import Style from './style.module.scss';
import HeadComponent from 'components/atoms/HeadComponent';
import Footer from 'components/organisms/common/footer';
import FooterNav from 'components/organisms/common/footer_nav';
import Header from 'components/organisms/common/header';

interface Props {
  children: ReactNode;
  isTopPage?: boolean;
}

const Layout: React.FC<Props> = ({ children, isTopPage }: Props) => {
  return (
    <>
      <HeadComponent />
      <header className={Style.header}>
        <Header isTopPage={isTopPage} />
      </header>
      <main className={Style.main}>{children}</main>
      <footer className={Style.footer}>
        <Footer />
      </footer>
      <div className={Style.footer_nav}>
        <FooterNav />
      </div>
    </>
  );
};

export default Layout;
