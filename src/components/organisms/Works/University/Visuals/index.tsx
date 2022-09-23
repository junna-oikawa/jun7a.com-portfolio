import Style from './style.module.scss';

const Visuals: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <img src='/images/works/university/visual_00.jpg' alt='' />
        </div>
        <div className={Style.right}>
          <div className={`${Style.desc} ${Style.desc1}`}>
            <h3>比較内容に合わせた多種のグラフ表現</h3>
            <div className={Style.images}>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_01.jpg' alt='' />
              </div>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_02.jpg' alt='' />
              </div>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_03.jpg' alt='' />
              </div>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_04.jpg' alt='' />
              </div>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_05.jpg' alt='' />
              </div>
              <div className={Style.img_wrapper}>
                <img src='/images/works/university/visual_06.jpg' alt='' />
              </div>
            </div>
          </div>
          <div className={`${Style.desc} ${Style.desc2}`}>
            <h3>
              CSS による統一された
              <br className='br_sp' />
              デザイン・わかりやすい見出し
            </h3>
            <div className={Style.images}>
              <img src='/images/works/university/visual_07.jpg' alt='' />
              <img src='/images/works/university/visual_08.jpg' alt='' />
            </div>
          </div>
          <div className={`${Style.desc} ${Style.desc3}`}>
            <h3>
              内容の追加・更新・削除に
              <br className='br_sp' />
              すぐに対応可能
            </h3>
            <p>
              D3.jsを基本として記事を制作しました。
              <br />
              Googleスプレッドシートにデータを入力したものをcsvに出力し、
              データを渡してデータビジュアライズをしています。
            </p>
          </div>
          <div className={`${Style.desc} ${Style.desc4}`}>
            <h3>地道なデータ収集による独自性</h3>
            <p>
              今回の制作では、海外にある大学それぞれのサイトを訪れ、泥臭くデータを集めました。
              <br />
              その結果、QS世界大学部門別ランキングの上位 200 位国別分布や、上位
              25 校 + 日本国内大学 3 校の学生数、留学生の割合、授業料、倍率と
              GPA、大学ごとの学科、学科ごとの大学を D3.js
              によってデータビジュアライズすることができました。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visuals;
