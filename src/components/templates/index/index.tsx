import Style from './style.module.scss';
import HeadComponent from 'components/atoms/HeadComponent';
import MV from 'components/organisms/index/mv';
import Header from 'components/organisms/common/header';
import Works from 'components/organisms/index/works';
import About from 'components/organisms/index/about';
import Footer from 'components/organisms/common/footer';
import FooterNav from 'components/organisms/common/footer_nav';

const Top: React.FC = () => {
  return (
    <>
      <HeadComponent />
      <header className={Style.header}>
        <Header />
      </header>
      <main className={Style.main}>
        <MV />
        <Works />
        <About />
      </main>
      <footer className={Style.footer}>
        <Footer />
      </footer>
      <div className={Style.footer_nav}>
        <FooterNav />
      </div>
    </>
  );
};

export default Top;
