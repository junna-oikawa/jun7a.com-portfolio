import { ReactNode } from 'react';
import Style from './style.module.scss';

interface Props {
  children: ReactNode;
  heading: string;
  kana: string;
}

const Layout: React.FC<Props> = ({ children, heading, kana }: Props) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.heading}>
        <h2 className='en'>{heading}</h2>
        <p>{kana}</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
