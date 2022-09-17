import Style from './style.module.scss';
import Layout from '../Layout';
const TargetPurpose: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <Layout heading='Target' kana='ターゲット'>
            <p>5~6歳を中心とした、就学前児童。</p>
          </Layout>
        </div>
        <div className={Style.right}>
          <Layout heading='Purpose' kana='目的'>
            <p>はとめふれんずで遊ぶことで創造力が養われること</p>
            <p>デジタルデバイスを用いて創造力を養うこと</p>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default TargetPurpose;
