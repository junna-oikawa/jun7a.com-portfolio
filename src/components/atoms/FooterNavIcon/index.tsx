import Style from './style.module.scss';

interface Props {
  src: string;
  name: string;
  id: string;
}

const FooterNavIcon: React.FC<Props> = ({ src, name, id }: Props) => {
  return (
    <div className={Style.wrapper}>
      <img src={`/images/common/nav_icons/${src}`} alt='' />
      <p>{name}</p>
    </div>
  );
};

export default FooterNavIcon;
