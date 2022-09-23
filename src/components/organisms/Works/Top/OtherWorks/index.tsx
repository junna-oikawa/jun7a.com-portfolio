import OtherWork from 'components/Molecules/Works/OtherWork';
import Layout from '../../common/Layout';
import Style from './style.module.scss';

const OtherWorks: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <Layout heading='Other Works'>
        <OtherWork />
      </Layout>
    </div>
  );
};

export default OtherWorks;
