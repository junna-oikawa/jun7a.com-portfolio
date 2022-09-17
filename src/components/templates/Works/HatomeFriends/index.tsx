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

const HatomeFriendsComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <Link href='https://hatome-friends.herokuapp.com/' />
      <Visuals />
      <DescriptionEyelet />
      <DescriptionApp />
      <TargetPurpose />
      <Backgrounds />
      <Languages />
    </Layout>
  );
};

export default HatomeFriendsComponent;
