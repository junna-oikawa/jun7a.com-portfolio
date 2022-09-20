import Style from './style.module.scss';
import Link from 'components/organisms/works/common/Link';
import Mv from 'components/organisms/works/University/Mv';
import Visuals from 'components/organisms/works/University/Visuals';
import Layout from 'components/templates/layout';
import BgPurpose from 'components/organisms/works/University/BgPurpose';
import Target from 'components/organisms/works/University/Target';
import UxMap from 'components/organisms/works/University/UxMap';
import Process from 'components/organisms/works/University/Process';
import Murmur from 'components/organisms/works/University/Murmur';

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
