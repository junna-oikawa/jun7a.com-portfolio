import Style from './style.module.scss';
import Layout from '../Layout';
import Script from 'next/script';

const Development: React.FC = () => {
  return (
    <>
      <Layout heading='Development' kana='開発について'>
        <div className={Style.wrapper}>
          <div className={Style.feature}>
            <div className={Style.heading}>
              <h3>1. ハトメをつける機能</h3>
              <p>ハトメ(関節)を自動で作成するために、以下の関数を実装した。</p>
            </div>
            <div className={Style.content}>
              <div className={Style.desc1}>
                <img src='/images/works/hatomeFriends/process_01.jpg' />
                <p>
                  図形同士が重なっているかを判定し、
                  重なっていた場合、新規ポリゴンを作成する(図:赤のポリゴン)
                  <br />
                </p>
              </div>
              <div className={Style.desc2}>
                <div className={Style.left}>
                  <img src='/images/works/hatomeFriends/process_02.jpg' />
                  <p>
                    Canvasの全てのピクセル座標に対して、交差数判定アルゴリズムを用いてポリゴンに対する内外判定を行う。
                    <br />
                    内判定が出たもピクセルの個数と、各点のx座標、y座標から重心を計算し、その座標にハトメを作成する。
                  </p>
                </div>
                <div className={Style.right}>
                  <iframe src='/codes/hatomeFriends/func01.html'></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.feature}>
            <div className={Style.heading}>
              <h3>2. ハトメ選定機能</h3>
              <p>パーツを操作する際回転基準となるハトメについて、以下の関数を実装した。</p>
            </div>
            <div className={Style.content}>
              <div className={Style.desc3}>
                <img src='/images/works/hatomeFriends/process_03.jpg' />
                <p>パーツに複数ハトメがついている場合、マウスから一番遠いものが基準となる。</p>
                <iframe src='/codes/hatomeFriends/func02.html'></iframe>
              </div>
            </div>
          </div>
          <div className={Style.feature}>
            <div className={Style.heading}>
              <h3>3. ハトメで動かす機能1</h3>
              <p>ハトメを中心として図形を回転させるために、以下の関数を実装した。</p>
            </div>
            <div className={Style.content}>
              <div className={Style.desc3}>
                <img src='/images/works/hatomeFriends/process_05.jpg' />
                <p>
                  ハトメとカーソルの位置から、回転角度と回転方向を算出する。
                  <br />
                  動かされるたびに各パーツに対して座標計算を行う。
                </p>
                <iframe src='/codes/hatomeFriends/func03.html'></iframe>
                <p>※可読性のため実際のコードと改行位置などを変更しています。</p>
              </div>
            </div>
          </div>
          <div className={Style.feature}>
            <div className={Style.heading}>
              <h3>3. ハトメで動かす機能2</h3>
              <p>
                アニメーション時に、ハトメでつながるパーツ同士を連動させるため、以下の関数を実装した。
              </p>
            </div>
            <div className={Style.content}>
              <div className={Style.desc4}>
                <div className={Style.top}>
                  <img src='/images/works/hatomeFriends/process_07.jpg' />
                  <p>
                    選択されたパーツの状況に応じて（図） 条件分岐を行う。
                    <br />
                    回転するパーツを１つのグループにまとめ、グループごと回転させる。
                  </p>
                </div>
                <div className={Style.bottom}>
                  <img src='/images/works/hatomeFriends/process_06.jpg' />
                  <p>
                    &lt;既に１２３を含んだグループがある場合についての例&gt;
                    <br />
                    次に１・２が選択された場合、newInExistingとなり、新しいグループBがグループAの下にできる（上図）。
                    <br />
                    １・２は A から削除、B に追加する。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Development;
