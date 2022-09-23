import Layout from '../../common/Layout';
import Style from './style.module.scss';

const Story: React.FC = () => {
  return (
    <Layout heading='Story' kana='ストーリー'>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <h3>置き配の指定</h3>
          <p>
            赤ちゃんにマスクができないし、 <br />
            ネットで買い物をして
            <br />
            置き配を使うことも増えてきたけれど、
            <br />
            届けてくださった方と顔を合わせない分、
            <br />
            <span>なかなか感謝を伝えられていないなあ…</span>
            <br />
            何かいい方法はないかしら。
          </p>
          <img src='/images/works/for_deliveryman/story_01.png' alt='' />
        </div>
        <div className={Style.center}>
          <h3>冊子を知る</h3>
          <p>
            なるほど！
            <br />
            これをコピーして玄関に貼るだけなら
            <br />
            <span>手軽に感謝を伝えられそう！</span>
          </p>
          <img src='/images/works/for_deliveryman/story_02.png' alt='' />
        </div>
        <div className={Style.right}>
          <h3>実際に使う</h3>
          <p>
            見てもらえたかな？
            <br />
            お互いに気持ちが晴れていい気分。
          </p>
          <img src='/images/works/for_deliveryman/story_04.png' alt='' />
          <p>
            ちょっとの心遣いが嬉しい！
            <br />
            <span>今日も仕事を頑張ろう！</span>
          </p>
          <img src='/images/works/for_deliveryman/story_03.png' alt='' />
        </div>
      </div>
    </Layout>
  );
};

export default Story;
