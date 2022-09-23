import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/tmpWorks/ForDeliveryMan/Mv';
import Visuals from 'components/organisms/tmpWorks/ForDeliveryMan/Visuals';
import Target from 'components/organisms/tmpWorks/ForDeliveryMan/Target';
import BgPurpose from 'components/organisms/tmpWorks/ForDeliveryMan/BgPurpose';
import Story from 'components/organisms/tmpWorks/ForDeliveryMan/Story';
import Process from 'components/organisms/tmpWorks/ForDeliveryMan/Process';
import Murmur from 'components/organisms/tmpWorks/ForDeliveryMan/Murmur';

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
