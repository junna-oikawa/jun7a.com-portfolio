import Style from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <img src='/images/common/footer.svg' alt='' />
        <p className='en'>&copy;JUNNA OIKAWA 2022</p>
      </div>
    </>
  );
};

export default Footer;
