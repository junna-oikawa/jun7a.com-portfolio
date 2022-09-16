import { ReactNode } from 'react';
import Style from './style.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={Style.wrapper}>
      <img src='/images/works/hatomeFriends/deco_01.svg' alt='' className={Style.deco01} />
      <img src='/images/works/hatomeFriends/deco_02.svg' alt='' className={Style.deco02} />
      <div className={Style.heading}>
        <h2 className='en'>Screen Shots</h2>
        <p>スクリーンショット</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
