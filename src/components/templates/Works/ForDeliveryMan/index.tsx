import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/Works/ForDeliveryMan/Mv';
import Visuals from 'components/organisms/Works/ForDeliveryMan/Visuals';
import Target from 'components/organisms/Works/ForDeliveryMan/Target';
import BgPurpose from 'components/organisms/Works/ForDeliveryMan/BgPurpose';
import Story from 'components/organisms/Works/ForDeliveryMan/Story';
import Process from 'components/organisms/Works/ForDeliveryMan/Process';
import Murmur from 'components/organisms/Works/ForDeliveryMan/Murmur';

const ForDeliveryManComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}>
        <Visuals />
        <Target />
        <BgPurpose />
        <Story />
        <Process />
        <Murmur />
      </div>
    </Layout>
  );
};

export default ForDeliveryManComponent;
