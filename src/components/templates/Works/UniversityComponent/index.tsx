import Style from './style.module.scss';
import Link from 'components/organisms/works/common/Link';
import Mv from 'components/organisms/works/University/Mv';
import Visuals from 'components/organisms/works/University/Visuals';
import Layout from 'components/templates/layout';
import BgPurposeLayout from 'components/organisms/works/common/BgPurposeLayout';
import BgPurpose from 'components/organisms/works/University/BgPurpose';
import Target from 'components/organisms/works/University/Target';

const UniversityComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}>
        <Link href='https://observablehq.com/@junna-oikawa/second-semester-assignment' />
        <Visuals />
        <Target />
        <BgPurpose />
      </div>
    </Layout>
  );
};

export default UniversityComponent;
