import Link from 'next/link';
import Style from './style.module.scss';
import MoreButton from 'components/atoms/moreButton';
import WorksIcon from 'components/atoms/worksIcon';

interface ImageObj {
  src: string;
  className: string;
  href: string;
}

const imagesSrc: ImageObj[] = [
  {
    src: 'hatomeFriends.png',
    className: 'laptop',
    href: '/works/hatome_friends',
  },
  { src: 'university.png', className: 'desktop', href: '/works/university' },
  {
    src: 'deliveryman.png',
    className: 'dtp_booklet',
    href: '/works/for_deliveryman',
  },
  { src: 'vr.png', className: 'goggles', href: '/works/strollers' },
  { src: 'flyer.jpg', className: 'dtp_flyer', href: '/works/sd_forum' },
  { src: 'drape.png', className: 'desktop', href: '/works/drape' },
];

const Works: React.FC = () => {
  return (
    <>
      <section className={Style.wrapper} id='works'>
        <h2 className='en'>Works</h2>
        <div className={Style.contents}>
          {imagesSrc.map((img, index) => (
            <Link href={img.href} key={index}>
              <a>
                <WorksIcon src={img.src} className={img.className} />
              </a>
            </Link>
          ))}
        </div>
        <MoreButton />
      </section>
    </>
  );
};

export default Works;
