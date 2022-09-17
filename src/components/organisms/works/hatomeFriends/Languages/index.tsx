import Style from './style.module.scss';
import Layout from '../Layout';
const Languages: React.FC = () => {
  return (
    <>
      <Layout heading='Languages Framework pbrary' kana='使用言語/フレームワーク/ライブラリ'>
        <div className={Style.wrapper}>
          <div className={Style.left}>
            <img src='/images/works/hatomeFriends/langs.jpg' alt='' />
          </div>
          <div className={Style.right}>
            <p className='en'>- Ruby on Rails</p>
            <p className='en'>- JavaScript</p>
            <p className='en'>- Konva</p>
            <p className={Style.desc_konva}>
              HTML5, JavaScriptのライブラリ。
              <br />
              2Dグラフィックスを描くためのライブラリ。
              <br />
              ホワイトボードアプリの開発などに使われる。
              <br />
              本アプリケーションでは、図形のクリック判定やグループ機能に使用。
            </p>
            <p className='en'>- SCSS</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Languages;
