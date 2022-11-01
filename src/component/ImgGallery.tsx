import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper';

const galleryImgUrls = [
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/caiwei.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/chunwan.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/coincidance.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/dwkm.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/jiemeng.png',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/lsb.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/manzhan.jpg',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/pailian.JPG',
  'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/gallery/sfks.jpg',
];
export default function ImgGallery() {
  const [displayVideo, setDisplayVideo] = React.useState(false);
  return (
    <Swiper
      rewind
      navigation
      modules={[Navigation]}
      className="mySwiper"
      cssMode
      pagination
    >
      {
        galleryImgUrls.map((url) => (
          <SwiperSlide
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={async () => {
              setDisplayVideo(!displayVideo);
            }}
          >
            <iframe
              src="https://drive.google.com/file/d/1zoYJIf8_o-cRm-1gDvdGA5A0WmcJawk1/preview"
              width="80%"
              height="80%"
              allowFullScreen
              style={{
                display: displayVideo ? 'block' : 'none',
                border: '1px',
                borderRadius: '32px',
              }}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
