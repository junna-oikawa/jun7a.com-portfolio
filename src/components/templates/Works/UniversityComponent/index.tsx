import Style from './style.module.scss';
import BgPurpose from 'components/organisms/works/University/BgPurpose';
import Mv from 'components/organisms/works/University/Mv';
import Process from 'components/organisms/works/University/Process';
import Target from 'components/organisms/works/University/Target';
import UxMap from 'components/organisms/works/University/UxMap';
import Layout from 'components/templates/layout';
import Murmur from 'components/organisms/works/University/Murmur';
import Visuals from 'components/organisms/works/University/Visuals';
import Link from 'components/organisms/works/common/Link';

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
