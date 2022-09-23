import Card from 'components/Molecules/common/Card';
import Style from './style.module.scss';

interface Item {
  title: string;
  body: string[];
  folderName: string;
  imgNum: number;
}

interface Props {
  item: Item;
}

const MemoryItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={Style.wrapper}>
      <Card {...item} />
    </div>
  );
};

export default MemoryItem;
