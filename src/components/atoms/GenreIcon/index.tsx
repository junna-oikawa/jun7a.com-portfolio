import Style from './style.module.scss';

interface Props {
  name: string;
}

const GenreIcon: React.FC<Props> = ({ name }: Props) => {
  return (
    <>
      <div className={Style.wrapper}>
        <p className='en'>{name}</p>
      </div>
    </>
  );
};

export default GenreIcon;
