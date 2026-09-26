import MemoryItem from 'components/Molecules/MemoryItem';
import Style from './style.module.scss';

const items = [
  {
    title: '海外旅行が好きです(2026)',
    body: [
      '海外旅行が好きで、まだ多くはないですがさまざまな国を訪れました！',
      'アメリカ(フロリダ・ロサンゼルス・ハワイ)/カナダ(トロント)/ギリシャ/香港/中国(上海)/韓国/シンガポール/オーストラリア/シンガポール',
      '今後もいろんな土地・いろいろな価値観に触れられるよう、英語学習を頑張ります！',
    ],
    folderName: 'top/memory/travel',
    imgNum: 6,
  },
  {
    title: 'カメラを始めました(2026)',
    body: [
      '新しくx100viをお迎えし、カメラを本格的に使い始めました！',
      'たくさん良い写真が撮れるよう頑張ります！',
    ],
    folderName: 'top/memory/camera',
    imgNum: 6,
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
    imgNum: 2,
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
