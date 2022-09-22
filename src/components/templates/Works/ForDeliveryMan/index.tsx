import Style from './style.module.scss';
import Layout from 'components/templates/Layout';
import Mv from 'components/organisms/works/ForDeliveryMan/Mv';

const ForDeliveryManComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}></div>
    </Layout>
  );
};

export default ForDeliveryManComponent;
