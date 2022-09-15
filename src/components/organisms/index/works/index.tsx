import Style from './style.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import WorksIcon from 'components/atoms/worksIcon';
import MoreButton from 'components/atoms/moreButton';

interface ImageObj {
  src: string;
  className: string;
}

const imagesSrc: ImageObj[] = [
  { src: 'hatomeFriends.png', className: 'laptop' },
  { src: 'university.png', className: 'desktop' },
  { src: 'postmen.png', className: 'dtp_booklet' },
  { src: 'vr.png', className: 'goggles' },
  { src: 'flyer.jpg', className: 'dtp_flyer' },
  { src: 'drape.png', className: 'desktop' },
];

const Works: React.FC = () => {
  return (
    <>
      <section className={Style.wrapper}>
        <h2 className='en'>Works</h2>
        <div className={Style.contents}>
          {imagesSrc.map((img, index) => (
            <WorksIcon src={img.src} className={img.className} key={index} />
          ))}
        </div>
        <MoreButton />
      </section>
    </>
  );
};

export default Works;
