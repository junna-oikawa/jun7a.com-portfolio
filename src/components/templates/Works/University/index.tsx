import Style from './style.module.scss';
import BgPurpose from 'components/organisms/tmpworks/University/BgPurpose';
import Mv from 'components/organisms/tmpworks/University/Mv';
import Process from 'components/organisms/tmpworks/University/Process';
import Target from 'components/organisms/tmpworks/University/Target';
import UxMap from 'components/organisms/tmpworks/University/UxMap';
import Layout from 'components/templates/Layout';
import Murmur from 'components/organisms/tmpworks/University/Murmur';
import Visuals from 'components/organisms/tmpworks/University/Visuals';
import Link from 'components/organisms/tmpworks/common/Link';

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
