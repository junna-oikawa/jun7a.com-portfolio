import Style from './style.module.scss';

interface Props {
  text: string;
}

const ProcessStep: React.FC<Props> = ({ text }: Props) => {
  return <h4 className={Style.content}>{text}</h4>;
};

export default ProcessStep;
