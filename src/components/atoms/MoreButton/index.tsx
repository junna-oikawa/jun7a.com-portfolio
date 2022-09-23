import Link from 'next/link';
import Style from './style.module.scss';

const MoreButton: React.FC = () => {
  return (
    <>
      <Link href='/'>
        <a className={Style.wrapper}>
          <img
            src='/images/common/buttons/btn_more.svg'
            alt=''
            className={Style.bg}
          />
          <p className='en'>more</p>
          <img
            src='/images/common/buttons/arrow.svg'
            alt=''
            className={Style.arrow}
          />
        </a>
      </Link>
    </>
  );
};

export default MoreButton;
