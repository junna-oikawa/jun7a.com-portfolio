import Layout from '../Layout';
import About from 'components/organisms/index/tmpAbout';
import MV from 'components/organisms/index/tmpMv';
import Works from 'components/organisms/index/tmpWorks';

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
