import Style from './style.module.scss';
import Layout from 'components/templates/layout';
import Mv from 'components/organisms/works/hatomeFriends/Mv';
import Visuals from 'components/organisms/works/hatomeFriends/Visuals';
import DescriptionEyelet from 'components/organisms/works/hatomeFriends/DescriptionEyelet';
import DescriptionApp from 'components/organisms/works/hatomeFriends/DescriptionApp';
import Link from 'components/organisms/works/Link';

const HatomeFriendsComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <Link href='https://hatome-friends.herokuapp.com/' />
      <Visuals />
      <DescriptionEyelet />
      <DescriptionApp />
    </Layout>
  );
};

export default HatomeFriendsComponent;
