import WorksIcon from 'components/atoms/WorksIcon';
import WorksTag from 'components/atoms/WorksTag';
import Link from 'next/link';
import Style from './style.module.scss';

interface Props {
  imgSrc: string;
  imgClassName: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}

const MainWork: React.FC<Props> = ({
  imgSrc,
  imgClassName,
  title,
  desc,
  tags,
  href,
}: Props) => {
  return (
    <Link href={href}>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <WorksIcon src={imgSrc} className={imgClassName} />
        </div>
        <div className={Style.right}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className={Style.tags}>
            {tags.map((tag, index) => (
              <WorksTag tagName={tag} key={index} />
            ))}
          </div>

          <a>
            もっとみる
            <img src='/images/common/buttons/arrow_brown.svg' alt='' />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default MainWork;
