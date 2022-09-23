import MainWork from 'components/Molecules/Works/MainWork';
import Layout from '../../common/Layout';
import Style from './style.module.scss';

const works = [
  {
    imgSrc: 'hatomeFriends.png',
    imgClassName: 'laptop',
    title: 'はとめふれんず',
    desc: '子どもの創造力を養うためのキャラクターWebアプリケーション。',
    tags: ['Web', 'Ruby on Rails', 'JavaScript'],
    href: '/works/hatome_friends',
  },
  {
    imgSrc: 'university.png',
    imgClassName: 'desktop',
    title: 'あなたにぴったりのアート・デザインを学べる学校は？',
    desc: 'D3.js を用いたデータビジュアライズによる記事',
    tags: ['Web', 'JavaScript', 'D3.js'],
    href: '/works/university',
  },
  {
    imgSrc: 'deliveryman.png',
    imgClassName: 'dtp_booklet',
    title: '配達員の皆さんに感謝を',
    desc: '非対面で配達員の方々に感謝を伝える方法を提案する冊子',
    tags: ['DTP', 'Illustrator', 'Photoshop'],
    href: '/works/for_deliveryman',
  },
];

const MainWorks: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <Layout heading='Main Works'>
        <div className={Style.contents}>
          {works.map((work, index) => (
            <MainWork {...work} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default MainWorks;
