import Style from './style.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import LangIcon from 'components/atoms/langIcon';
import GenreIcon from 'components/atoms/GenreIcon';

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

const Mv: React.FC = () => {
  return (
    <>
      <section className={Style.wrapper}>
        <div className={Style.images}>
          <img src='/images/works/common/bg.svg' className={Style.bg} alt='' />
          <img src='/images/common/works_icons/hatomeFriends.png' className={Style.main} alt='' />
        </div>
        <div className={Style.texts}>
          <h1>
            はとめふれんず
            <br />
          </h1>
          <h2>
            子どもの創造力を養うための
            <br />
            キャラクターWebアプリケーション
          </h2>
          <div className={Style.grid_wrapper}>
            <GenreIcon name='Web' />
            {langs.map((item) => (
              <LangIcon name={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mv;
