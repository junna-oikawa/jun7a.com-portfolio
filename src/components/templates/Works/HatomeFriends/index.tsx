import Style from './style.module.scss';
import Link from 'components/organisms/tmpWorks/common/Link';
import Backgrounds from 'components/organisms/tmpWorks/HatomeFriends/Backgrounds';
import DescriptionApp from 'components/organisms/tmpWorks/HatomeFriends/DescriptionApp';
import DescriptionEyelet from 'components/organisms/tmpWorks/HatomeFriends/DescriptionEyelet';
import Development from 'components/organisms/tmpWorks/HatomeFriends/Development';
import Languages from 'components/organisms/tmpWorks/HatomeFriends/Languages';
import Movie from 'components/organisms/tmpWorks/HatomeFriends/Movie';
import Mv from 'components/organisms/tmpWorks/HatomeFriends/Mv';
import TargetPurpose from 'components/organisms/tmpWorks/HatomeFriends/Target';
import Visuals from 'components/organisms/tmpWorks/HatomeFriends/Visuals';
import Layout from 'components/templates/Layout';
import BgPurpose from 'components/organisms/tmpWorks/HatomeFriends/BgPurpose';

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
