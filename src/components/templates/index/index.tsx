import MV from 'components/organisms/index/mv';
import Works from 'components/organisms/index/works';
import About from 'components/organisms/index/about';
import Layout from '../layout';

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
