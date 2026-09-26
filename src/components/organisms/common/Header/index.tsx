import Link from 'next/link';
import Style from './style.module.scss';

interface Props {
  isTopPage?: boolean;
}

const Header: React.FC<Props> = ({ isTopPage }: Props) => {
  return (
    <>
      <div className={Style.wrapper}>
        <Link href='/'>
          <img src='/images/common/header_logo.png' alt='J' />
          <h1 className={`en ${Style.logo_en}`}>unna Oikawa</h1>
          {isTopPage && <h1 className={Style.logo_jp}>ゅんな おいかわ</h1>}
        </Link>
        <nav>
          <ul>
            <li className='en'>
              <Link href='/#works'>Works</Link>
            </li>
            <li className='en'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='en'>
              <Link href='/#memory'>Memory</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
