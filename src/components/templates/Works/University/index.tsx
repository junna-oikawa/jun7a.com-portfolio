import Style from './style.module.scss';
import BgPurpose from 'components/organisms/Works/University/BgPurpose';
import Mv from 'components/organisms/Works/University/Mv';
import Process from 'components/organisms/Works/University/Process';
import Target from 'components/organisms/Works/University/Target';
import UxMap from 'components/organisms/Works/University/UxMap';
import Layout from 'components/templates/Layout';
import Murmur from 'components/organisms/Works/University/Murmur';
import Visuals from 'components/organisms/Works/University/Visuals';
import Link from 'components/organisms/Works/common/Link';

const UniversityComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}>
        <Link href='https://observablehq.com/@junna-oikawa/second-semester-assignment' />
        <Visuals />
        <Target />
        <BgPurpose />
        <UxMap />
        <Process />
        <Murmur />
      </div>
    </Layout>
  );
};

export default UniversityComponent;
