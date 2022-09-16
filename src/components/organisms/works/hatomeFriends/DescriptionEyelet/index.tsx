import Style from './style.module.scss';
import Layout from '../Layout';
const DescriptionEyelet: React.FC = () => {
  return (
    <>
      <Layout heading='What is Eyelet?' kana='はとめ とは？'>
        <div className={Style.wrapper}>
          <p>
            靴や紙ばさみなどのひもを通す丸い穴で
            <br className={Style.br_sp} />
            環状の金具のついたもの。
            <br />
            また、その金具 鳩の目に似ているところからいう。
            <span>出典：編 小学館(2006) 『精選版　日本国語大辞典』第二版，小学館．</span>
          </p>
          <img src='/images/works/hatomeFriends/eyelet.jpg' alt='' />
        </div>
      </Layout>
    </>
  );
};

export default DescriptionEyelet;
