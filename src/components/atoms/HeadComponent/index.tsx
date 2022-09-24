import Head from 'next/head';

const HeadComponent: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>Junna Oikawa's Portfolio | 及川純奈</title>
        <meta
          name='description'
          content='Junna Oikawa | 及川純奈のポートフォリオサイトです。'
        />
        <link rel='canonical' href='https://jun7a-portfolio.vercel.app/' />
        <link
          rel='icon'
          href='./images/common/header_logo.png'
          sizes='16x16'
          type='image/png'
        />
        <link
          rel='icon'
          href='./images/common/header_logo.png'
          sizes='32x32'
          type='image/png'
        />
        <link
          rel='icon'
          href='./images/common/header_logo.png'
          sizes='48x48'
          type='image/png'
        />
        <link
          rel='icon'
          href='./images/common/header_logo.png'
          sizes='62x62'
          type='image/png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          href='/images/common/header_logo.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@__jnn___' />
        <meta property='og:url' content='https://jun7a-portfolio.vercel.app/' />
        <meta property='og:title' content="Junna Oikawa's Portfolio" />
        <meta property='og:site_name' content='Jun7a Portfolio' />
        <meta
          property='og:description'
          content='Junna Oikawa | 及川純奈のポートフォリオサイトです。'
        />
        <meta
          property='og:image'
          content='https://jun7a-portfolio.vercel.app/images/top/mv.jpg'
        />
        <link rel='canonical' href='https://jun7a-portfolio.vercel.app/' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'yau5jig',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `,
          }}
        />
      </Head>
    </>
  );
};

export default HeadComponent;
