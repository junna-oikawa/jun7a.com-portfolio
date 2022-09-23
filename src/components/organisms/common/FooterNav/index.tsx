import Link from 'next/link';
import Style from './style.module.scss';
import FooterNavIcon from 'components/atoms/FooterNavIcon';

const datas = [
  { name: 'top', src: 'nav_top.svg', id: 'top' },
  { name: 'works', src: 'nav_works.svg', id: 'works' },
  { name: 'about', src: 'nav_about.svg', id: 'about' },
  { name: 'memory', src: 'nav_memory.svg', id: 'memory' },
];

const FooterNav: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        {datas.map((data, index: number) => (
          <Link href={`/#${data.id}`} key={index}>
            <a className={Style.icon}>
              <FooterNavIcon
                name={data.name}
                src={data.src}
                id={data.id}
                key={data.id}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FooterNav;
