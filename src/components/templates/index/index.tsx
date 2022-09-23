import Style from './style.module.scss';
import Layout from '../Layout';
import About from 'components/organisms/Top/About';
import MV from 'components/organisms/Top/Mv';
import Works from 'components/organisms/Top/Works';
import Memory from 'components/organisms/Top/Memory';

const Top: React.FC = () => {
  return (
    <Layout isTopPage>
      <div className={Style.inner}>
        <MV />
        <Works />
        <About />
        <Memory />
      </div>
    </Layout>
  );
};

export default Top;
