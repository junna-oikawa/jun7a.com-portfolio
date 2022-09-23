import Youtube from 'react-youtube';
import Layout from '../Layout';
import Style from './style.module.scss';
const Movie: React.FC = () => {
  return (
    <>
      <Layout
        heading='Movie'
        kana='使用動画(1分23秒,
        音あり)'
      >
        <div className={Style.wrapper}>
          <Youtube videoId='cnex0aor12M' className={Style.iframe} />
        </div>
      </Layout>
    </>
  );
};

export default Movie;
