import Layout from '../hatomeFriends/Layout';
import Style from './style.module.scss';

interface Props {
  href: string;
}

const Link: React.FC<Props> = ({ href }: Props) => {
  return (
    <>
      <Layout heading='App URL' kana='アプリURL'>
        <div className={Style.wrapper}>
          <a href={href} target='_brank' className='en'>
            {href}
            <img
              src='/images/works/common/open_in_new.svg'
              alt='別タブでアプリを開く'
            />
          </a>
        </div>
      </Layout>
    </>
  );
};

export default Link;
