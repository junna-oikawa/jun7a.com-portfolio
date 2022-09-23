import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
// eslint-disable-next-line
import 'swiper/css';

SwiperCore.use([Pagination, Navigation, Autoplay]);

import Style from './style.module.scss';

interface Props {
  folderName: string;
  imgNum: number;
  title: string;
  body: string[];
}

const Card: React.FC<Props> = ({ title, body, folderName, imgNum }: Props) => {
  const images = [...Array(imgNum)].map((_, i) => i);
  return (
    <div className={Style.wrapper}>
      <div className={Style.top}>
        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
          }}
          loop={true}
          autoplay={{ delay: 4000 }}
          className={Style.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={Style.swiper_slide_content}>
                <img src={`/images/works/others/${folderName}/${image}.jpg`} />
              </div>
            </SwiperSlide>
          ))}
          <div className={`swiper-button-prev ${Style.btn_prev}`}>
            <img src='/images/common/buttons/arrow_back.png' alt='前へ' />
          </div>
          <div className={`swiper-button-next ${Style.btn_next}`}>
            <img src='/images/common/buttons/arrow_next.png' alt='次へ' />
          </div>
        </Swiper>
      </div>
      <div className={Style.bottom}>
        <h3>{title}</h3>
        {body.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
