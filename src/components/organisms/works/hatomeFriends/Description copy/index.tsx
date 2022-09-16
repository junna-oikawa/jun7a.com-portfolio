import Style from './style.module.scss';
import Layout from '../Layout';
const Visuals: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={Style.wrapper}></div>
      </Layout>
    </>
  );
};

export default Visuals;
