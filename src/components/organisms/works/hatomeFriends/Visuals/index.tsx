import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';

import Style from './style.module.scss';
import Layout from '../Layout';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const images: string[] = [
  'visual_01.JPG',
  'visual_02.JPG',
  'visual_03.JPG',
  'visual_04.JPG',
  'visual_05.JPG',
  'visual_06.JPG',
];

const heading: string = 'Screen Shots';
const kana: string = 'スクリーンショット';

const Visuals: React.FC = () => {
  return (
    <>
      <Layout heading={heading} kana={kana}>
        <div className={Style.wrapper}>
          <div className={Style.swiper_wrapper}>
            <Swiper
              breakpoints={{
                768: {
                  spaceBetween: 30,
                },
              }}
              spaceBetween={10}
              slidesPerView={1.2}
              pagination={{
                clickable: true,
                el: '#pagination',
                bulletClass: `swiper-pagination-bullet ${Style.custom_bullet}`,
                bulletActiveClass: `swiper-pagination-bullet-active ${Style.custom_bullet_active}`,
              }}
              loop={true}
              autoplay={{ delay: 5000 }}
              centeredSlides={true}
              className={Style.swiper}
            >
              {images.map((src: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={`/images/works/hatomeFriends/${src}`} alt='' />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div id='pagination' className={Style.swiper_pagination}></div>
        </div>
      </Layout>
    </>
  );
};

export default Visuals;
