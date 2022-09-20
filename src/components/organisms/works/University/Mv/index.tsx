import Layout from '../../common/Layout';
import MvLayout from '../../common/mvLayout';
import Style from './style.module.scss';

const title = (
  <>
    あなたにぴったりの
    <br />
    アート・デザインを
    <br className='br_sp' />
    学べる学校は？
  </>
);
const subtitle: JSX.Element = <>D3.js を用いたデータビジュアライズによる記事</>;
const langs: JSX.Element[] = [
  <>
    Java
    <br />
    Script
  </>,
  <>CSS</>,
  <>D3.js</>,
  <>
    Obser
    <br />
    vable{' '}
  </>,
];
const imgSrc = 'university.png';
const type = 'desktop';

const Mv: React.FC = () => {
  return (
    <>
      <MvLayout
        title={title}
        subtitle={subtitle}
        langs={langs}
        imgSrc={imgSrc}
        type={type}
      />
    </>
  );
};

export default Mv;
