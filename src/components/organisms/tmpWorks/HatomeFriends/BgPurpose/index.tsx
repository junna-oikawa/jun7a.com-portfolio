// import Layout from '../Layout';
import BgPurposeLayout from '../../common/BgPurposeLayout';
import Style from './style.module.scss';

const item = {
  bg: {
    imgSrc: '/images/works/hatomeFriends/summary_bg.png',
    h4: ['デジタルデバイスを活用して、創造力を高められないか？'],
    p: (
      <>
        就学前児童のデジタルデバイスは動画視聴が8-9割を占めており、
        受動的な活動が多い現状である。
        <br />
        一方で、社会や親からは創造力を求められている。
      </>
    ),
  },
  purpose: {
    imgSrc: '/images/works/hatomeFriends/purpose.png',
    h4: [
      <>
        はとめふれんずで遊ぶことで
        <br />
        創造力が養われること
      </>,
      <>
        デジタルデバイスを用いた
        <br />
        能動的な活動を誘発すること
      </>,
    ],
  },
};

const BgPurpose: React.FC = () => {
  return <BgPurposeLayout bg={item.bg} purpose={item.purpose} />;
};

export default BgPurpose;
