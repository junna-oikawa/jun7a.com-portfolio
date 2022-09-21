import { ReactNode } from 'react';
import Style from './style.module.scss';

interface Props {
  bg: Item;
  purpose: Item;
}

interface Item {
  imgSrc: string;
  p?: string | ReactNode;
  h4: ReactNode[];
}

const BgPurposeLayout: React.FC<Props> = ({ bg, purpose }: Props) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.left}>
        <h2>
          <img src='/images/works/common/icon_background.svg' />
          <span>Backgournds</span>
        </h2>
        <div className={Style.img_wrapper}>
          <img src={bg.imgSrc} />
        </div>
        {bg.h4.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
        <p>{bg.p}</p>
      </div>
      <div className={Style.right}>
        <h2>
          <img src='/images/works/common/icon_purpose.svg' />
          <span>Purpose</span>
        </h2>
        <div className={Style.img_wrapper}>
          <img src={purpose.imgSrc} />
        </div>
        {purpose.h4.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
        <p>{purpose.p}</p>
      </div>
    </div>
  );
};

export default BgPurposeLayout;
