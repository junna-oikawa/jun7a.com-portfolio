import Layout from '../../common/Layout';
import MvLayout from '../../common/tmp';
import Style from './style.module.scss';

const title = <>配達員の皆さんに感謝を</>;
const subtitle: JSX.Element = (
  <>
    <span>非対面で配達員の方々に</span>
    <span>感謝を伝える方法を提案する冊子</span>
  </>
);
const genre = 'DTP';
const langs: JSX.Element[] = [
  <>
    Illust
    <br />
    rator
  </>,
  <>
    Photo
    <br />
    shop
  </>,
];
const imgSrc = 'deliveryman.png';
const type = 'dtp';

const Mv: React.FC = () => {
  return (
    <>
      <MvLayout
        title={title}
        subtitle={subtitle}
        genre={genre}
        langs={langs}
        imgSrc={imgSrc}
        type={type}
      />
    </>
  );
};

export default Mv;
