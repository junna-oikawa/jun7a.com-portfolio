import Style from './style.module.scss';
import Link from 'components/organisms/works/common/Link';
import Backgrounds from 'components/organisms/works/hatomeFriends/Backgrounds';
import DescriptionApp from 'components/organisms/works/hatomeFriends/DescriptionApp';
import DescriptionEyelet from 'components/organisms/works/hatomeFriends/DescriptionEyelet';
import Development from 'components/organisms/works/hatomeFriends/Development';
import Languages from 'components/organisms/works/hatomeFriends/Languages';
import Movie from 'components/organisms/works/hatomeFriends/Movie';
import Mv from 'components/organisms/works/hatomeFriends/Mv';
import TargetPurpose from 'components/organisms/works/hatomeFriends/Target';
import Visuals from 'components/organisms/works/hatomeFriends/Visuals';
import Layout from 'components/templates/layout';
import BgPurpose from 'components/organisms/works/hatomeFriends/BgPurpose';

const HatomeFriendsComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <div className={Style.width}>
        <Link href='https://hatome-friends.herokuapp.com/' />
        <Movie />
        <Visuals />
        <DescriptionEyelet />
        <DescriptionApp />
        <TargetPurpose />
        <BgPurpose />
        <Backgrounds />
        <Languages />
        <Development />
      </div>
    </Layout>
  );
};

export default HatomeFriendsComponent;
