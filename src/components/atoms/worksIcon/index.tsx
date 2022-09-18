import Style from './style.module.scss';

interface Props {
  src: string;
  className: string;
}

const WorksIcon: React.FC<Props> = ({ src, className }: Props) => {
  return (
    <>
      <div className={Style.container}>
        <img
          src={`images/common/works_icons/${src}`}
          className={Style[className]}
        />
      </div>
    </>
  );
};

export default WorksIcon;
