import Style from './style.module.scss';
import Layout from 'components/templates/layout';
import Mv from 'components/organisms/works/hatomeFriends/Mv.tsx';
import Visuals from 'components/organisms/works/hatomeFriends/Visuals.tsx';

const HatomeFriendsComponent: React.FC = () => {
  return (
    <Layout>
      <Mv />
      <Visuals />
    </Layout>
  );
};

export default HatomeFriendsComponent;
