import Style from './style.module.scss';
import Link from 'components/organisms/tmpworks/common/Link';
import Backgrounds from 'components/organisms/tmpworks/HatomeFriends/Backgrounds';
import DescriptionApp from 'components/organisms/tmpworks/HatomeFriends/DescriptionApp';
import DescriptionEyelet from 'components/organisms/tmpworks/HatomeFriends/DescriptionEyelet';
import Development from 'components/organisms/tmpworks/HatomeFriends/Development';
import Languages from 'components/organisms/tmpworks/HatomeFriends/Languages';
import Movie from 'components/organisms/tmpworks/HatomeFriends/Movie';
import Mv from 'components/organisms/tmpworks/HatomeFriends/Mv';
import TargetPurpose from 'components/organisms/tmpworks/HatomeFriends/Target';
import Visuals from 'components/organisms/tmpworks/HatomeFriends/Visuals';
import Layout from 'components/templates/Layout';
import BgPurpose from 'components/organisms/tmpworks/HatomeFriends/BgPurpose';

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
