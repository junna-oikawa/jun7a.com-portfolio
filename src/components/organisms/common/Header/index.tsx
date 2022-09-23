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
          <a>
            <img src='/images/common/header_logo.png' alt='J' />
            <h1 className={`en ${Style.logo_en}`}>unna Oikawa</h1>
            {isTopPage && <h1 className={Style.logo_jp}>ゅんな おいかわ</h1>}
          </a>
        </Link>
        <nav>
          <ul>
            <li className='en'>
              <Link href='/#works'>
                <a>Works</a>
              </Link>
            </li>
            <li className='en'>
              <Link href='/#about'>
                <a>About</a>
              </Link>
            </li>
            <li className='en'>
              <Link href='/#memory'>
                <a>Memory</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
