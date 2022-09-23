import React from 'react';
import Modal from 'react-modal';
import Style from './style.module.scss';

interface Props {
  imgSrc: string;
}

const ProcessImage: React.FC<Props> = ({ imgSrc }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={Style.img_wrapper}>
        <img src={imgSrc} alt='' onClick={openModal} />
        <img
          src='/images/common/buttons/full_screen.svg'
          alt='フルスクリーン表示'
          className={Style.full_screen_icon}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={Style.modal}
        ariaHideApp={false}
        overlayClassName={Style.overlay}
      >
        <div onClick={closeModal} className={Style.modal_bg}>
          <img src={imgSrc} alt='' />
        </div>
      </Modal>
    </>
  );
};

export default ProcessImage;
