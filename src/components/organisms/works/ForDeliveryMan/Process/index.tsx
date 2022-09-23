import React from 'react';
import Layout from '../../common/Layout';
import Style from './style.module.scss';
import ProcessStep from 'components/atoms/ProcessStep';
import ProcessImage from 'components/atoms/ProcessImage';

const texts = [
  'コンセプト・テーマの決定',
  '調査・下調べ',
  '台割作成',
  'イラストの作成',
  '実際に使用',
  '冊子の制作',
];

const images = [
  '/images/works/for_deliveryman/process_01.jpg',
  '/images/works/for_deliveryman/process_02.JPG',
  '/images/works/for_deliveryman/process_03.jpg',
  '/images/works/for_deliveryman/process_04.jpg',
  '/images/works/for_deliveryman/process_05.jpg',
  '/images/works/for_deliveryman/process_06.jpg',
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
