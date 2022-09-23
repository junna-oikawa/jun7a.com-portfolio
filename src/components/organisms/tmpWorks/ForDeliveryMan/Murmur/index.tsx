import Layout from '../../common/Layout';
import Style from './style.module.scss';

const Murmur: React.FC = () => {
  return (
    <Layout heading='Murmur' kana='つぶやき'>
      <p>
        　今回の制作では、自身も
        covid-19の感染リスクを負いながらも、荷物を届けてくださっている配達員さんに感謝を伝える方法を、
        荷物を受け取る時、荷物を送る時の２つのシチュエーションで使える計４つのポスターを提案しました。
        <br />
        　冊子をコピーするとそのまま使えるようにサイズを調整し、気軽に使えるようにしました。
      </p>
    </Layout>
  );
};

export default Murmur;
