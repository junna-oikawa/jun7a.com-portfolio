// import Layout from '../Layout';
import BgPurposeLayout from '../../common/BgPurposeLayout';
import Style from './style.module.scss';

const item = {
  bg: {
    imgSrc: '/images/works/for_deliveryman/bg.png',
    h4: ['配達員の方に感謝を伝えたい'],
    p: (
      <>
        covid-18 の状況下で宅配サービスを利用する人が増えたが、
        <br />
        置き配が増え、感謝を伝えるタイミングが掴めない。
        <br />
        荷物を届けてくださっている 配達員の皆さんに感謝を伝えたい。
      </>
    ),
  },
  purpose: {
    imgSrc: '/images/works/for_deliveryman/purpose.png',
    h4: [
      <>
        非対面受取りが進む中で、
        <br />
        配達員の皆さんに感謝を伝える方法を
        <br />
        提案・検討する
      </>,
    ],
  },
};

const BgPurpose: React.FC = () => {
  return <BgPurposeLayout bg={item.bg} purpose={item.purpose} />;
};

export default BgPurpose;
