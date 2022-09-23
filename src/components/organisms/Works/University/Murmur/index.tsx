import Layout from '../../common/Layout';
import Style from './style.module.scss';

const Murmur: React.FC = () => {
  return (
    <Layout heading='Murmur' kana='つぶやき'>
      <p>
        今回の制作では、海外にある大学それぞれのサイトを訪れ、泥臭くデータを集めてきました。
        <br />
        その結果、QS 世界大学部門別ランキングの上位 200 位国別分布や、上位 25 校
        + 日本国内大学 3 校の学生数、留学生の割合、授業料、倍率と
        <br />
        GPA、大学ごとの学科、学科ごとの大学を D3.js
        によってデータビジュアライズすることができました。
      </p>
    </Layout>
  );
};

export default Murmur;
