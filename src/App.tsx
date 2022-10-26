import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AppBar from './component/AppBar';
import Copyright from './component/Copyright';
import testVideo from './component/testbg2.mp4';
// Little helpers ...
const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const texts = {
  t1: 'Vancouver\'s biggest Neo-Chinese style dance club',
  t2: 'Neo-Chinese dance',
  t3: 'Japanese Odottemita dance',
  t4: 'C-POP dance',
};

const urls = {
  yuntangText: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/logo_text.png',
  xiaoren: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/xiaoren.png',
  hezhao: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/1421663742802_.pic_hd.jpg',
  shanzi: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/shanzi.png',
  kongmingdeng: 'https://raw.githubusercontent.com/DHX98/cloudtown/main/pics/kongmingdeng.png',
};
export default function App() {
  const parallax = useRef<IParallax>(null!);
  function naviScroll(page:string) {
    if (page === 'About') {
      parallax.current.scrollTo(1);
    }
    if (page === 'Activities') {
      parallax.current.scrollTo(2);
    }
    if (page === 'Contact') {
      parallax.current.scrollTo(3);
    }
  }
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
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

        <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 1 }}>
          <Typography
            variant="h4"
            sx={{
              justifyContent: 'center',
              textAlign: 'center',
              width: '100vw',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '10vh',
              color: '#FF7F50',
            }}
          >
            {`${texts.t1} and introductions`}
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
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
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '5%',
            opacity: 1,
          }}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <img
            src={urls.yuntangText}
            style={{ width: '80%' }}
            alt="/"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          style={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            opacity: 0.6,
          }}
        >
          {/* <video autoPlay muted loop id="myVideo"> */}
          {/*  <source */}
          {/*    src={testVideo} */}
          {/*    type="video/mp4" */}
          {/*    style={{ */}
          {/*      height: '100%', */}
          {/*      width: '100%', */}
          {/*    }} */}
          {/*  /> */}
          {/* </video> */}
          {/* <video autoPlay muted loop id="myVideo"> */}
          {/*  <source */}
          {/*    src={testVideo} */}
          {/*    type="video/mp4" */}
          {/*    style={{ */}
          {/*      height: '100vh', */}
          {/*    }} */}
          {/*  /> */}
          {/* </video> */}
          <CardMedia
            src={testVideo}
            component="video"
            loop
            autoPlay
            muted
            playsInline
            sx={{
              width: '100%',
              height: { xs: '85vh', md: '100%' },
              objectFit: 'none',
            }}
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
            height: '100vh',
          }}
        >
          <CardMedia
            component="img"
            image={urls.xiaoren}
            alt="green iguana"
            sx={{
              width: { xs: '70vw', md: '28vw' },
              height: { xs: '55vh', md: '82vh' },
              display: { xs: 'flex' },
              opacity: { xs: 0.2, md: 0.8 },
              bottom: '0px',
            }}
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
          onClick={() => parallax.current.scrollTo(3)}
        >
          <Grid
            container
            sx={{
              height: '70%',
              width: '60%',
            }}
            spacing={1}
          >

            {/* <Grid item xs={6}> */}
            {/*  <iframe */}
            {/*    src="//player.bilibili.com/player.html?aid=71268432&bvid=BV1AE411o72R&cid=123483843&page=1" */}
            {/*    scrolling="no" */}
            {/*    border="0" */}
            {/*    frameBorder="no" */}
            {/*    style={{ */}
            {/*      width: '100%', */}
            {/*      height: '100%', */}
            {/*      border: '1px', */}
            {/*      borderRadius: '16px', */}
            {/*    }} */}
            {/*  /> */}
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            {/*  <iframe */}
            {/*    src="//player.bilibili.com/player.html?aid=71268432&bvid=BV1AE411o72R&cid=123483843&page=1" */}
            {/*    scrolling="no" */}
            {/*    border="0" */}
            {/*    frameBorder="no" */}
            {/*    style={{ */}
            {/*      width: '100%', */}
            {/*      height: '100%', */}
            {/*      border: '1px', */}
            {/*      borderRadius: '16px', */}
            {/*    }} */}
            {/*  /> */}
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            {/*  <iframe */}
            {/*    src="//player.bilibili.com/player.html?aid=71268432&bvid=BV1AE411o72R&cid=123483843&page=1" */}
            {/*    scrolling="no" */}
            {/*    border="0" */}
            {/*    frameBorder="no" */}
            {/*    style={{ */}
            {/*      width: '100%', */}
            {/*      height: '100%', */}
            {/*      border: '1px', */}
            {/*      borderRadius: '16px', */}
            {/*    }} */}
            {/*  /> */}
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            {/*  <iframe */}
            {/*    src="//player.bilibili.com/player.html?aid=71268432&bvid=BV1AE411o72R&cid=123483843&page=1" */}
            {/*    scrolling="no" */}
            {/*    border="0" */}
            {/*    frameBorder="no" */}
            {/*    style={{ */}
            {/*      width: '100%', */}
            {/*      height: '100%', */}
            {/*      border: '1px', */}
            {/*      borderRadius: '16px', */}
            {/*    }} */}
            {/*  /> */}
            {/* </Grid> */}
          </Grid>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >

          <Typography>
            <Copyright />
          </Typography>
        </ParallaxLayer>

      </Parallax>

    </Box>

  );
}
