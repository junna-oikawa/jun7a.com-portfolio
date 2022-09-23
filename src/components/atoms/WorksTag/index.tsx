import Style from './style.module.scss';

interface Props {
  tagName: string;
}

const WorksTag: React.FC<Props> = ({ tagName }: Props) => {
  return (
    <>
      <p className={Style.wrapper}>{tagName}</p>
    </>
  );
};

export default WorksTag;
