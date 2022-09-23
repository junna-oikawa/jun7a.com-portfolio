import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/works/ForDeliveryMan/Mv';
import Visuals from 'components/organisms/works/ForDeliveryMan/Visuals';
import Target from 'components/organisms/works/ForDeliveryMan/Target';
import BgPurpose from 'components/organisms/works/ForDeliveryMan/BgPurpose';
import Story from 'components/organisms/works/ForDeliveryMan/Story';
import Process from 'components/organisms/works/ForDeliveryMan/Process';
import Murmur from 'components/organisms/works/ForDeliveryMan/Murmur';

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
