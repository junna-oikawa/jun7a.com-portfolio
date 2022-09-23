import Style from './style.module.scss';

const Visuals: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.top}>
        <div className={Style.left}>
          <h4>
            <span>荷物を受け取る時・荷物を送る時 × </span>
            <span>手書きメッセージスペースあり・なしの４パターン</span>
          </h4>
          <img src='/images/works/for_deliveryman/visuals_01.jpg' alt='' />
        </div>
        <div className={Style.right}>
          <img src='/images/works/for_deliveryman/visuals_02.jpg' alt='' />
          <img src='/images/works/for_deliveryman/visuals_03.jpg' alt='' />
          <img src='/images/works/for_deliveryman/visuals_04.jpg' alt='' />
        </div>
      </div>
      <div className={Style.middle}>
        <h4>手軽に使える工夫</h4>
        <div className={Style.images}>
          <img src='/images/works/for_deliveryman/visuals_05.jpg' alt='' />
          <img
            src='/images/works/for_deliveryman/visuals_06.jpg'
            alt=''
            className={Style.border_radius}
          />
        </div>
        <h5>すぐに冊子をコピー・使用できる工夫</h5>
        <p>
          冊子の右上をコピー機に合わせてA4でコピーすると、
          <br />
          ポスター部分 のみを印刷でき、すぐに使えるようなデザインとなっている。
        </p>
        <h5>QRコードからデザインをダウンロードできる工夫</h5>
        <p>
          最後のページにQRコードをつけ、ポスターのデザインをダウンロードが可能。
        </p>
      </div>
      <div className={Style.bottom}>
        <img src='/images/works/for_deliveryman/visuals_07.jpg' alt='' />
        <img src='/images/works/for_deliveryman/visuals_08.jpg' alt='' />
      </div>
    </div>
  );
};

export default Visuals;
