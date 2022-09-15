import Style from './style.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import LangIcon from 'components/atoms/langIcon';

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
  <>Next.js</>,
  <>
    Type
    <br />
    Script
  </>,
  <>
    Ruby
    <br />
    on
    <br />
    Rails
  </>,
  <>PHP</>,
  <>Unity</>,
  <>C#</>,
];

const About: React.FC = () => {
  return (
    <>
      <section className={Style.wrapper}>
        <img src='images/top/about_bg.svg' alt='' className={Style.bg} />
        <h2 className='en'>About</h2>
        <div className={Style.content}>
          <div className={Style.left}>
            <div className={Style.profile_wrapper}>
              <img src='images/top/about_profile.jpg' alt='' />
            </div>
          </div>
          <div className={Style.right}>
            <h3>
              及川 純奈 | <span className='en'>Junna Oikawa</span>
            </h3>
            <p>岩手県出身</p>
            <p>
              東京都立大学(旧 首都大学東京)
              <br />
              システムデザイン学部インダストリアルアート学科 卒業
            </p>
            <p>
              東京都立大学院
              <br />
              システムデザイン研究科インダストリアルアート学域 在学中
            </p>
            <div className={Style.grid_wrapper}>
              {langs.map((item) => (
                <LangIcon name={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
