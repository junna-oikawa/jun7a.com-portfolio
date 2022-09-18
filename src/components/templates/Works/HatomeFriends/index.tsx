import Style from './style.module.scss';
import Layout from 'components/templates/layout';
import Mv from 'components/organisms/works/hatomeFriends/Mv';
import Visuals from 'components/organisms/works/hatomeFriends/Visuals';
import DescriptionEyelet from 'components/organisms/works/hatomeFriends/DescriptionEyelet';
import DescriptionApp from 'components/organisms/works/hatomeFriends/DescriptionApp';
import Link from 'components/organisms/works/Link';
import TargetPurpose from 'components/organisms/works/hatomeFriends/TargetPurpose';
import Backgrounds from 'components/organisms/works/hatomeFriends/Backgrounds';
import Languages from 'components/organisms/works/hatomeFriends/Languages';
import Movie from 'components/organisms/works/hatomeFriends/Movie';
import Development from 'components/organisms/works/hatomeFriends/Development';

const HatomeFriendsComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <Link href='https://hatome-friends.herokuapp.com/' />
      <Movie />
      <Visuals />
      <DescriptionEyelet />
      <DescriptionApp />
      <TargetPurpose />
      <Backgrounds />
      <Languages />
      <Development />
    </Layout>
  );
};

export default HatomeFriendsComponent;
