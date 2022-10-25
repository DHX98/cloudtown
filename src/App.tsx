import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from './component/AppBar';
import ChainOpen from './component/ChainOpen';
import AnimatedSentence from './component/AnimatedSentence';

// Little helpers ...
const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

const urls = {
  yuntangText: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/32.png',
  xiaoren: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/%E5%B0%8F%E4%BA%BA.png',
  hezhao: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/1421663742802_.pic_hd.jpg',
  shanzi: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/%E6%89%87%E5%AD%90.png',
};
export default function App() {
  const parallax = useRef<IParallax>(null!);
  function naviScroll(page:string) {
    if (page === 'About') {
      parallax.current.scrollTo(0);
    }
    if (page === 'Activities') {
      parallax.current.scrollTo(1);
    }
    if (page === 'Contact') {
      parallax.current.scrollTo(2);
    }
  }
  return (
    <Box
      sx={{
        width: '100vw', height: '100vh', background: '#faf0e6',
      }}
    >
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <AppBar naviScroll={naviScroll} />

      <Parallax ref={parallax} pages={4} enabled>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#faf0e6' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#faf0e6' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#faf0e6' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}> */}
        {/*  <img */}
        {/*    src="https://raw.githubusercontent.com/DHX98/cloudtown/main/socialbook-preview.png" */}
        {/*    style={{ width: '20%', marginLeft: '70%' }} */}
        {/*  /> */}
        {/* </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={urls.shanzi} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={urls.shanzi} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={urls.shanzi} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 0.6 }}>
          <Typography
            variant="h6"
            sx={{
              paddingLeft: '10%',
              paddingTop: '25%',
              paddingRight: '10%',
              textAlign: 'left',
              width: '65vw',
            }}
          >
            Cloud Town Dance Club is a Chinese-style and ACG dance club at UBC. We aim to provide a platform for UBC students who are passionate about Neo-Chinese style dances, Japanese Odottemita dances and C-POP dances.
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.3}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img
            src={urls.shanzi}
            style={{
              width: '80%',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundImage: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/1421663742802_.pic_hd.jpg',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '20%',
          }}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <img
            src={urls.yuntangText}
            style={{ width: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >

          <img
            src={urls.xiaoren}
            style={{ width: '40vw', bottom: '0px' }}
          />

        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={urls.yuntangText} style={{ width: '50%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <AnimatedSentence />
        </ParallaxLayer>
      </Parallax>

    </Box>

  );
}
