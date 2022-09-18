import Style from './style.module.scss';
import Layout from '../Layout';
const Backgrounds: React.FC = () => {
  return (
    <>
      <Layout heading='Backgrounds' kana='背景'>
        <div className={Style.wrapper}>
          <div className={Style.top}>
            <h3>子どもにとってのデジタルデバイスとは？</h3>
            <p>平日１日あたりのインターネット平均使用時間</p>
            <p>
              ５歳児　５６．５分
              <br />
              ６歳児　５５．１分
            </p>
            <p className={Style.emphasis}>
              子どもにとってデジタルデバイスは
              <br className={Style.br_sp} />
              <span>身近な存在</span>
            </p>
          </div>
          <div className={Style.middle}>
            <h3>行われている活動は？</h3>
            <p>利用内容</p>
            <p>８・９割　動画視聴</p>
            <p className={Style.emphasis}>
              行われている活動は
              <span>
                受動的<span></span>
              </span>
            </p>
            <p className={Style.source}>
              <span>出典：</span>
              内閣府，2017，「低年齢層の子供のインターネット利用環境実態調査調査結果」，内閣府，(2022
              年 1 月 15 日取得，
              <a
                href='https://www8.cao.go.jp/youth/youth-harm/chousa/h28/net-jittai_child/pdf/gaiyo.pdf'
                target='_blank'
              >
                https://www8.cao.go.jp/youth/youth-harm/chousa/h28/net-jittai_child/pdf/gaiyo.pdf
              </a>
              )
            </p>
          </div>
          <div className={Style.bottom}>
            <h3>
              親・社会からは
              <br className={Style.br_sp} />
              どんな能力が望まれているのか？
            </h3>
            <div className={Style.contents}>
              <div className={Style.left}>
                <p>子どもに身につけさせたいスキル</p>
                <p>
                  １位　<span>発想力</span> ( 想像力 )　６３．１％
                  <br />
                  ２位　<span>チャレンジ精神</span>　 ４５．７％
                </p>
                <p className={Style.etc}>…</p>
              </div>
              <div className={Style.right}>
                <p>
                  若手社員に対して
                  <br />
                  特に不足していると思う要素 (YES/NO)
                </p>
                <div className={Style.graph}>
                  <img src='/images/works/hatomeFriends/bg_graph.png' alt='' />
                  <p>
                    創造力
                    <br />
                    44.2%
                  </p>
                </div>
              </div>
            </div>
            <p className={Style.emphasis}>
              親・社会から
              <br className={Style.br_sp} />「<span>創造力</span>」が望まれている
            </p>
            <p className={Style.source}>
              <span>出典：</span>
              wacom，2019，「AI（人工知能）が発達しても活躍できる仕事は？」，ワコムタブレットサイト，(2022
              年 1 月 15 日取得，
              <a href='https://tablet.wacom.co.jp/article/future-job-survey' target='_blank'>
                https://tablet.wacom.co.jp/article/future-job-survey
              </a>
              )
              経済産業省，2007，　『企業の「求める人材像」調査２００７～社会人基礎力との関係～』(2022
              年 1 月 15 日取得，
              <a
                href='https://warp.da.ndl.go.jp/info:ndljp/pid/281883/www.meti.go.jp/press/20070312001/jinzaizou-point.p-r.pdf'
                target='_blank'
              >
                https://warp.da.ndl.go.jp/info:ndljp/pid/281883/www.meti.go.jp/press/20070312001/jinzaizou-point.p-r.pdf
              </a>
              )
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Backgrounds;
