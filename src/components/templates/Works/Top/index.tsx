import Style from './style.module.scss';

import Layout from 'components/templates/Layout';
import MainWorks from 'components/organisms/Works/Top/MainWorks';
import OtherWorks from 'components/organisms/Works/Top/OtherWorks';

const Works: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={Style.wrapper}>
          <MainWorks />
          <OtherWorks />
        </div>
      </Layout>
    </>
  );
};

export default Works;
