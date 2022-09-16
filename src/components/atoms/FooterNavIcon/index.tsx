import { Link as Scroll } from 'react-scroll';

import Style from './style.module.scss';

interface Props {
  src: string;
  name: string;
  id: string;
}

const FooterNavIcon: React.FC<Props> = ({ src, name, id }: Props) => {
  return (
    <Scroll to={id} smooth={true} offset={-50}>
      <div className={Style.wrapper}>
        <img src={`images/common/nav_icons/${src}`} alt='' />
        <p>{name}</p>
      </div>
    </Scroll>
  );
};

export default FooterNavIcon;
