// import Layout from '../Layout';
import BgPurposeLayout from '../../common/BgPurposeLayout';
import Style from './style.module.scss';

const item = {
  bg: {
    imgSrc: '/images/works/university/background.png',
    h4: '大学の選択肢は国内だけでいいのか？',
    p: (
      <>
        大学を決める時、国内の大学から選ぶ人が多い。 <br />
        しかし、QS世界大学ランキングにおいて、日本の大学は100
        位以内には入っていない。
        <br />
        選択肢は本当に国内だけでいいのか？
      </>
    ),
  },
  purpose: {
    imgSrc: '/images/works/university/purpose.jpg',
    h4: (
      <>
        大学の選択肢を広げ、
        <br />
        海外の大学にも興味を持ってもらう
      </>
    ),
    p: '記事を読んだ人が、「日本の大学」以外にも選択肢があるということに気づくきっかけになることを目指す。',
  },
};

const BgPurpose: React.FC = () => {
  return <BgPurposeLayout bg={item.bg} purpose={item.purpose} />;
};

export default BgPurpose;
