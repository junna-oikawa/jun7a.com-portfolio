import MvLayout from '../../common/mvLayout';

const title = 'はとめふれんず';
const subtitle: JSX.Element = (
  <>
    子どもの創造力を養うための
    <br />
    キャラクターWebアプリケーション
  </>
);
const langs: JSX.Element[] = [
  <>
    Java
    <br />
    Script
  </>,
  <>
    CSS
    <br />
    SCSS
  </>,
  <>
    Ruby
    <br />
    on
    <br />
    Rails
  </>,
  <>C#</>,
];
const imgSrc = 'hatomeFriends.png';
const type = 'laptop';

const Mv: React.FC = () => {
  return (
    <MvLayout
      title={title}
      subtitle={subtitle}
      langs={langs}
      imgSrc={imgSrc}
      type={type}
    />
  );
};

export default Mv;
