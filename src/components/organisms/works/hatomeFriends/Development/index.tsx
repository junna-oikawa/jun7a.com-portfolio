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
                <iframe
                  className={Style.right}
                  src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=zenburn&wt=none&l=auto&width=680&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520calc%28polygon%29%2520%257B%250A%2520let%2520n%2520%253D%25200%253B%250A%2520centX%2520%253D%25200%253B%250A%2520centY%2520%253D%25200%253B%250A%2520polygon%255Bpolygon.length%255D%2520%253D%2520polygon%255B0%255D%253B%250A%2520for%28var%2520j%2520%253D%25200%253B%2520j%2520%253C%2520height%253B%2520j%252B%252B%29%2520%257B%250A%2520%2520%2520for%28var%2520i%2520%253D%25200%253B%2520i%2520%253C%2520width%253B%2520i%252B%252B%29%2520%257B%250A%2520%2520%2520%2520%2520if%2520%28cn%28polygon%252C%2520i%252C%2520j%29%2520%253D%253D%2520true%29%2520%257B%250A%2520%2520%2520%2520%2520centX%2520%252B%253D%2520i%253B%250A%2520%2520%2520%2520%2520centY%2520%252B%253D%2520j%253B%250A%2520%2520%2520%2520%2520n%252B%252B%253B%250A%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%257D%250A%2520%257D%250A%2520centX%2520%252F%253D%2520n%253B%250A%2520centY%2520%252F%253D%2520n%253B%250A%2520%250A%2520%252F%252F%2520%25E3%2581%25AF%25E3%2581%25A8%25E3%2582%2581%25E3%2582%2592%25E4%25BD%259C%25E6%2588%2590%25E3%2581%2599%25E3%2582%258B%25E9%2596%25A2%25E6%2595%25B0%25E3%2581%25B8%25E5%25BA%25A7%25E6%25A8%2599%25E3%2582%2592%25E6%25B8%25A1%25E3%2581%2599%250A%2520drawEyelet%28centX%252C%2520centY%29%253B%250A%257D'
                  sandbox='allow-scripts allow-same-origin'
                ></iframe>
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
                <p>パーツに複数ハトメがついている場合、マウスから一番遠いものを選択</p>
                <iframe
                  src='https://carbon.now.sh/embed/4pXvGkwZru30HYAViDpj'
                  sandbox='allow-scripts allow-same-origin'
                ></iframe>
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
                <iframe
                  src='https://carbon.now.sh/embed/QVt8HUDDRDXiytgavFsO'
                  sandbox='allow-scripts allow-same-origin'
                ></iframe>
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
