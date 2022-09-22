import Layout from '../Layout';
import About from 'components/organisms/index/about';
import MV from 'components/organisms/index/mv';
import Works from 'components/organisms/index/works';

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
