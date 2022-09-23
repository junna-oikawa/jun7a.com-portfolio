import Style from './style.module.scss';
import BgPurpose from 'components/organisms/tmpWorks/University/BgPurpose';
import Mv from 'components/organisms/tmpWorks/University/Mv';
import Process from 'components/organisms/tmpWorks/University/Process';
import Target from 'components/organisms/tmpWorks/University/Target';
import UxMap from 'components/organisms/tmpWorks/University/UxMap';
import Layout from 'components/templates/Layout';
import Murmur from 'components/organisms/tmpWorks/University/Murmur';
import Visuals from 'components/organisms/tmpWorks/University/Visuals';
import Link from 'components/organisms/tmpWorks/common/Link';

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
