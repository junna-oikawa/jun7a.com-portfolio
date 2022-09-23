import Link from 'next/link';
import Layout from '../Layout';
import Style from './style.module.scss';

interface Props {
  href: string;
}

const AppLink: React.FC<Props> = ({ href }: Props) => {
  return (
    <>
      <Layout heading='App URL' kana='アプリURL'>
        <div className={Style.wrapper}>
          <Link href={href}>
            <a href={href} target='_brank' className='en'>
              {href}
              <img
                src='/images/works/common/open_in_new.svg'
                alt='別タブでアプリを開く'
              />
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default AppLink;
