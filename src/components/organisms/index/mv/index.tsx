import Style from './style.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const MV: React.FC = () => {
  return (
    <>
      <section className={Style.wrapper} id='top'>
        <img src='/images/top/mv.jpg' alt='' />
        <h1 className='en'>
          Junna
          <br />
          Oikawa
        </h1>
        <p className='en'>
          HELLO.
          <br />
          This is a portfolio of Junna Oikawa.
          <br />
          Web Engineering, Web design, Glaphic design, Game design etc...
        </p>
      </section>
    </>
  );
};

export default MV;
