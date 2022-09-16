import Style from './style.module.scss';
const Header: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div>
          <img src='images/common/header_logo.png' alt='J' />
          <h1 className={`en ${Style.logo_en}`}>unna Oikawa</h1>
          <h1 className={Style.logo_jp}>ゅんな おいかわ</h1>
        </div>
        <nav>
          <ul>
            <li className='en'>Works</li>
            <li className='en'>About</li>
            <li className='en'>Prototype</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
