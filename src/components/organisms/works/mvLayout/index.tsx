import Style from './style.module.scss';
import LangIcon from 'components/atoms/langIcon';
import GenreIcon from 'components/atoms/GenreIcon';

interface Props {
  title: string;
  subtitle: JSX.Element;
  langs: JSX.Element[];
  imgSrc: string;
  type: string;
}

const MvLayout: React.FC<Props> = ({ title, subtitle, langs, imgSrc, type }: Props) => {
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
            <GenreIcon name='Web' />
            {langs.map((lang) => (
              <LangIcon name={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MvLayout;
