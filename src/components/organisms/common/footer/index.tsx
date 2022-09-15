import Style from './style.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <img src='images/common/footer.svg' alt='' />
        <p className='en'>&copy;JUNNA OIKAWA 2022</p>
      </div>
    </>
  );
};

export default Footer;
