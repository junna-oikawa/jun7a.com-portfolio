import Layout from '../../common/Layout';
import Style from './style.module.scss';

const UxMap: React.FC = () => {
  return (
    <Layout heading='UXmap' kana='UXマップ'>
      <div className={Style.wrapper}>
        <div className={Style.persona}>
          <img src='/images/works/university/ux_persona.svg' alt='' />
          <div className={Style.text}>
            <p>桜田 あさひ</p>
            <p>17 歳 / 高校２年生</p>
            <p>
              趣味は、洋画を見ること。
              <br />
              最近になり、真剣に大学について考え始めた。
              <br />
              大学ではプロダクトデザインを学びたいと思っている。
              <br />
              無意識のうちに国内の大学ばかり調べているが、海外に憧れを抱いている。
            </p>
          </div>
        </div>
        <div className={Style.ux_map}>
          <img src='/images/works/university/ux_map.jpg' alt='' />
        </div>
      </div>
    </Layout>
  );
};

export default UxMap;
