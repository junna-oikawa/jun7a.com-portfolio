import React from 'react';
import Layout from '../../common/Layout';
import Style from './style.module.scss';
import ProcessStep from 'components/atoms/ProcessStep';
import ProcessImage from 'components/atoms/ProcessImage';

const texts = [
  'テーマ・ターゲット決め',
  'ペルソナ・UXマップの作成',
  '調査',
  'データ収集',
  'コーディング',
  'ライティング',
];

const images = [
  '/images/works/university/process_01.jpeg',
  '/images/works/university/process_02.png',
  '/images/works/university/process_03.png',
  '/images/works/university/process_04.png',
  '/images/works/university/process_05.png',
  '/images/works/university/process_06.png',
];

const Process: React.FC = () => {
  return (
    <Layout heading='Process' kana='制作過程'>
      <div className={Style.wrapper}>
        <div className={Style.texts}>
          {texts.map((text, index) => (
            <ProcessStep text={text} key={index} />
          ))}
        </div>
        <div className={Style.images}>
          {images.map((imgSrc, index) => (
            <ProcessImage imgSrc={imgSrc} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Process;
