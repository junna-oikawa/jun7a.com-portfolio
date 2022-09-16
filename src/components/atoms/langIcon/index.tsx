import Style from './style.module.scss';

interface Props {
  name: JSX.Element;
}

const LangIcon: React.FC<Props> = ({ name }: Props) => {
  return (
    <>
      <div className={Style.wrapper}>
        <p className='en'>{name}</p>
      </div>
    </>
  );
};

export default LangIcon;
