import Style from './style.module.scss';
import GenreIcon from 'components/atoms/GenreIcon';
import LangIcon from 'components/atoms/langIcon';

interface Props {
  title: string | JSX.Element;
  subtitle: JSX.Element;
  genre: string;
  langs: JSX.Element[];
  imgSrc: string;
  type: string;
}

const tmp: React.FC<Props> = ({
  title,
  subtitle,
  genre,
  langs,
  imgSrc,
  type,
}: Props) => {
  return (
    <>
      <section className={Style.wrapper}>
        <div className={Style.images}>
          <img src='/images/works/common/bg.svg' className={Style.bg} alt='' />
          <img
            src={`/images/common/works_icons/${imgSrc}`}
            className={`${Style.main} ${Style[type]}`}
            alt=''
          />
        </div>
        <div className={Style.texts}>
          <h1>
            {title}
            <br />
          </h1>
          <h2>{subtitle}</h2>
          <div className={Style.grid_wrapper}>
            <GenreIcon name={genre} />
            {langs.map((lang, index: number) => (
              <LangIcon name={lang} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default tmp;
