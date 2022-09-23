import Style from './style.module.scss';
import Link from 'components/organisms/works/common/Link';
import Backgrounds from 'components/organisms/works/HatomeFriends/Backgrounds';
import DescriptionApp from 'components/organisms/works/HatomeFriends/DescriptionApp';
import DescriptionEyelet from 'components/organisms/works/HatomeFriends/DescriptionEyelet';
import Development from 'components/organisms/works/HatomeFriends/Development';
import Languages from 'components/organisms/works/HatomeFriends/Languages';
import Movie from 'components/organisms/works/HatomeFriends/Movie';
import Mv from 'components/organisms/works/HatomeFriends/Mv';
import TargetPurpose from 'components/organisms/works/HatomeFriends/Target';
import Visuals from 'components/organisms/works/HatomeFriends/Visuals';
import Layout from 'components/templates/Layout';
import BgPurpose from 'components/organisms/works/HatomeFriends/BgPurpose';

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
