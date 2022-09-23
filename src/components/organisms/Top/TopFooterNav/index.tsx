import { Link as Scroll } from 'react-scroll';
import Style from './style.module.scss';
import FooterNavIcon from 'components/atoms/FooterNavIcon';
import index from 'components/templates/index';

const datas = [
  { name: 'top', src: 'nav_top.svg', id: 'top' },
  { name: 'works', src: 'nav_works.svg', id: 'works' },
  { name: 'about', src: 'nav_about.svg', id: 'about' },
  { name: 'memory', src: 'nav_memory.svg', id: 'memory' },
];

const TopFooterNav: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        {datas.map((data, index: number) => (
          <Scroll to={data.id} smooth={true} offset={-50} key={index}>
            <div className={Style.icon} key={index}>
              <FooterNavIcon
                name={data.name}
                src={data.src}
                id={data.id}
                key={data.id}
              />
            </div>
          </Scroll>
        ))}
      </div>
    </>
  );
};

export default TopFooterNav;
