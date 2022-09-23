import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/tmpworks/ForDeliveryMan/Mv';
import Visuals from 'components/organisms/tmpworks/ForDeliveryMan/Visuals';
import Target from 'components/organisms/tmpworks/ForDeliveryMan/Target';
import BgPurpose from 'components/organisms/tmpworks/ForDeliveryMan/BgPurpose';
import Story from 'components/organisms/tmpworks/ForDeliveryMan/Story';
import Process from 'components/organisms/tmpworks/ForDeliveryMan/Process';
import Murmur from 'components/organisms/tmpworks/ForDeliveryMan/Murmur';

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
