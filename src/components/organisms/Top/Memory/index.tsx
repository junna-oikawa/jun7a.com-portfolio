import MemoryItem from 'components/Molecules/MemoryItem';
import Style from './style.module.scss';

const items = [
  {
    title: 'PFサイト リニューアル',
    body: [
      'ポートフォリオサイトをリニューアルしました。',
      'Next.js, TypeScriptを中心に製作しました。',
      '作品ページは未完成ですが、今後少しずつバックエンド側にも手を出しつつ、管理していこうと思います。',
    ],
    folderName: 'top/memory/pf',
    imgNum: 1,
  },
  {
    title: 'カナダ留学(2019)',
    body: [
      '2018年にカナダへ留学しました。',
      '他の人が写っている写真は掲載を控えますが、いろんな国のとっても素敵な人々と出会うことができました。',
      '学んだ価値観、交友関係を大事にして今後も過ごしていきたいです☺︎',
    ],
    folderName: 'top/memory/canada',
    imgNum: 4,
  },
  {
    title: 'WDWで研修を受けました！(2018)',
    body: [
      'アメリカ/フロリダにある、Walt Disney Worldにて大学生向けの研修に参加しました！',
      'ディズニーのホスピタリティや、ダイバーシティーを学ぶことができました。',
      '絶叫アトラクションも最高でした…',
    ],
    folderName: 'top/memory/wdw',
    imgNum: 3,
  },
];
const Memory: React.FC = () => {
  return (
    <section className={Style.wrapper} id='memory'>
      <h2 className='en'>Memory</h2>
      <div className={Style.memories}>
        {items.map((item, index) => (
          <MemoryItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Memory;
