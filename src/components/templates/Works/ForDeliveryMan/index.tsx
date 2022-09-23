import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/works/ForDeliveryMan/Mv';
import Visuals from 'components/organisms/works/ForDeliveryMan/Visuals';
import Target from 'components/organisms/works/ForDeliveryMan/Target';
import BgPurpose from 'components/organisms/works/ForDeliveryMan/BgPurpose';
import Story from 'components/organisms/works/ForDeliveryMan/Story';

const ForDeliveryManComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}>
        <Visuals />
        <Target />
        <BgPurpose />
        <Story />
      </div>
    </Layout>
  );
};

export default ForDeliveryManComponent;
