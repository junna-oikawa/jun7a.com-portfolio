import Layout from '../Tmp';
import About from 'components/organisms/index/About';
import MV from 'components/organisms/index/Mv';
import Works from 'components/organisms/index/Works';

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
