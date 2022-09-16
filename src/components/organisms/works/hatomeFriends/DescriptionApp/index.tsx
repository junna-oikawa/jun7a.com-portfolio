import Style from './style.module.scss';
import Layout from '../Layout';
import { ReactNode } from 'react';

interface Item {
  desc: ReactNode;
  imgSrc: string;
}

const items: Item[] = [
  {
    desc: (
      <>
        1. 丸・三角・四角と表情を組み合わせて
        <br />
        キャラクターを作る
      </>
    ),
    imgSrc: 'desc_app_01.png',
  },
  {
    desc: (
      <>
        2. 重なっている部分に
        <br />
        自動ではとめ(関節)がつく
      </>
    ),
    imgSrc: 'desc_app_02.png',
  },
  {
    desc: (
      <>
        3. キャラクターと背景を
        <br />
        配置する
      </>
    ),
    imgSrc: 'desc_app_03.png',
  },
  {
    desc: (
      <>
        4. はじめのポーズとおわりのポーズを
        <br />
        設定する
      </>
    ),
    imgSrc: 'desc_app_04.png',
  },
  {
    desc: <>5. アニメーションがつく</>,
    imgSrc: 'desc_app_05.png',
  },
];

const DescriptionApp: React.FC = () => {
  return (
    <>
      <Layout heading='What is はとめふれんず?' kana='はとめふれんず とは？'>
        <div className={Style.wrapper}>
          {items.map((item, index: number) => (
            <div className={Style.card} key={index}>
              <p>{item.desc}</p>
              <img src={`/images/works/hatomeFriends/${item.imgSrc}`} alt='' />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default DescriptionApp;
