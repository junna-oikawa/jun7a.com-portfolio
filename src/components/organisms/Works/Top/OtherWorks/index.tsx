import OtherWork from 'components/Molecules/Works/OtherWork';
import Layout from '../../common/Layout';
import Style from './style.module.scss';

const items = [
  {
    title: 'STROLLER',
    body: [
      '家で街を散策できるVRアプリケーション。',
      'Unity, C#, Mayaを主として製作しました。計2名での共同製作です。',
      '主にキャラクターモデリング・骨入れ・アニメーション、カメラ(コーディング)、コントローラ連携を担当しました。',
    ],
    href: 'https://jun7a.com/works_page/VR/index.php',
    folderName: 'works/others/vr',
    imgNum: 5,
    id: 'stroller',
  },
  {
    title: 'SDフォーラム フライヤー',
    body: [
      '東京都立大学で行われたイベントのフライヤーを製作しました。',
      'Blender, Illustratorを使用しました。',
      '大学はイラストではなく、3Dモデルになっています。',
    ],
    folderName: 'works/others/sd_forum',
    imgNum: 4,
    id: 'sdForum',
  },
  {
    title: 'Drape',
    body: [
      'インターンシップにて、商品のプロモーションサイトの制作を行いました。',
      '実際にある製品をもとに、架空のショップ・ブランディング・企画・Webデザインを提案する一連の流れを1人で担当しました。',
    ],
    folderName: 'works/others/drape',
    imgNum: 6,
    id: 'drape',
  },
];
const OtherWorks: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <Layout heading='Other Works'>
        <p className={Style.desc}>
          Other worksは、現在各ページを準備中です。
          <br />
          今しばらくお待ちください。
        </p>
        <div className={Style.works}>
          {items.map((item, index) => (
            <OtherWork item={item} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default OtherWorks;
