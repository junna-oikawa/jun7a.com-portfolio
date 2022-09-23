import Card from 'components/atoms/Card';
import Style from './style.module.scss';

const item = {
  title: 'titletest',
  body: ['aaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbb', 'ccccccccccccccccccccccccc'],
  folderName: 'vr',
  imgNum: 5,
};

const OtherWork: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <Card {...item} />
    </div>
  );
};

export default OtherWork;
