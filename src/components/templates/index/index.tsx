import Layout from '../Layout';
import About from 'components/organisms/Top/About';
import MV from 'components/organisms/Top/Mv';
import Works from 'components/organisms/Top/Works';

const Top: React.FC = () => {
  return (
    <>
      <Layout isTopPage>
        <MV />
        <Works />
        <About />
      </Layout>
    </>
  );
};

export default Top;
