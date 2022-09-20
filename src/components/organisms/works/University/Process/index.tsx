import React from 'react';
import Modal from 'react-modal';
import Layout from '../../common/Layout';
import Style from './style.module.scss';

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
  const modalIsOpen: boolean[] = [];
  const setIsOpen: any[] = [];
  [modalIsOpen[0], setIsOpen[0]] = React.useState(false);
  [modalIsOpen[1], setIsOpen[1]] = React.useState(false);
  [modalIsOpen[2], setIsOpen[2]] = React.useState(false);
  [modalIsOpen[3], setIsOpen[3]] = React.useState(false);
  [modalIsOpen[4], setIsOpen[4]] = React.useState(false);
  [modalIsOpen[5], setIsOpen[5]] = React.useState(false);
  const openModal = (num: number) => {
    setIsOpen[num](true);
  };

  const closeAllModal = () => {
    for (let i = 0; i < images.length; i++) {
      setIsOpen[i](false);
    }
  };

  return (
    <Layout heading='Process' kana='制作過程'>
      <div className={Style.wrapper}>
        <div className={Style.texts}>
          {texts.map((text, index) => (
            <h4 key={index}>{text}</h4>
          ))}
        </div>
        <div className={Style.images}>
          {images.map((img, index) => (
            <div key={index}>
              <div className={Style.img_wrapper}>
                <img
                  src={img}
                  key={index}
                  alt=''
                  onClick={() => openModal(index)}
                />
              </div>
              <Modal
                isOpen={modalIsOpen[index]}
                onRequestClose={closeAllModal}
                className={Style.modal}
                ariaHideApp={false}
                overlayClassName={Style.overlay}
              >
                <div
                  onClick={() => setIsOpen[index](false)}
                  className={Style.modal_bg}
                >
                  <img src={img} key={index} alt='' />
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Process;
