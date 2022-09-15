import Style from './style.module.scss';
import HeadComponent from 'components/atoms/HeadComponent';
import MV from 'components/organisms/index/mv';
import Header from 'components/organisms/common/header';
import Works from 'components/organisms/index/works';
import About from 'components/organisms/index/about';
import Footer from 'components/organisms/common/footer';

const Top: React.FC = () => {
  return (
    <>
      <HeadComponent />
      <header className={Style.header}>
        <Header />
      </header>
      {/* <main className={Style.main}>
        <MV />
        <Works />
        <About />
      </main>
      <footer className={Style.footer}>
        <Footer />
      </footer> */}
    </>
  );
};

export default Top;
