import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import { useTransition, animated } from '@react-spring/web';

import Typography from '@mui/material/Typography';

const texts = {
  t1: 'Vancouver\'s biggest Neo-Chinese style dance club',
  t2: '-Neo-Chinese dance',
  t3: '-Japanese Odottemita dance',
  t4: '-C-POP dance',
};

export default function AnimatedSentence() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: { position: 'absolute', opacity: 0 },
    enter: [
      {
        opacity: 1, height: '20vh', innerHeight: '10vh',
      },
      { opacity: 1 },
    ],
    leave: [{ color: '#000000' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#000000' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([texts.t1]), 1500));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <Typography
      variant="h4"
      sx={{
        justifyContent: 'center',
        textAlign: 'left',
        width: '100vw',
        paddingLeft: '10%',
        paddingRight: '10%',
      }}
    >
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
          onClick={reset}
        >
          <animated.div style={{ overflow: 'hidden', paddingTop: '15%', paddingBottom: '5%' }}>{item}</animated.div>
          <animated.div style={{ overflow: 'hidden' }}>{texts.t2}</animated.div>
          <animated.div style={{ overflow: 'hidden' }}>{texts.t3}</animated.div>
          <animated.div style={{ overflow: 'hidden' }}>{texts.t4}</animated.div>
        </animated.div>

      ))}
    </Typography>
  );
}
