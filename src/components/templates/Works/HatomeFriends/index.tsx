import Style from './style.module.scss';
import Link from 'components/organisms/Works/common/Link';
import Backgrounds from 'components/organisms/Works/HatomeFriends/Backgrounds';
import DescriptionApp from 'components/organisms/Works/HatomeFriends/DescriptionApp';
import DescriptionEyelet from 'components/organisms/Works/HatomeFriends/DescriptionEyelet';
import Development from 'components/organisms/Works/HatomeFriends/Development';
import Languages from 'components/organisms/Works/HatomeFriends/Languages';
import Movie from 'components/organisms/Works/HatomeFriends/Movie';
import Mv from 'components/organisms/Works/HatomeFriends/Mv';
import TargetPurpose from 'components/organisms/Works/HatomeFriends/Target';
import Visuals from 'components/organisms/Works/HatomeFriends/Visuals';
import Layout from 'components/templates/Tmp';
import BgPurpose from 'components/organisms/Works/HatomeFriends/BgPurpose';

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
