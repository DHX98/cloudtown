import React, {
  useState,

} from 'react';
import { animated, useTransition } from '@react-spring/web';

import Typography from '@mui/material/Typography';

const texts = {
  t1: 'Vancouver\'s biggest Neo-Chinese style dance club',
  t2: 'Neo-Chinese dance',
  t3: 'Japanese Odottemita dance',
  t4: 'C-POP dance',
};

export default function AnimatedSentence() {
  const [items, set] = useState<string[]>([]);
  const ref = React.useRef<ReturnType<typeof setTimeout>[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) translateY(0)',
      color: '#FF7F50',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) translateY(20px)', color: '#FF7F50' },
      { transform: 'perspective(600px) translateY(0)' },
    ],
    leave: [{ color: '#FF7F50' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#FF7F50' },
  });
  const reset = React.useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([texts.t2]), 2000));
    ref.current.push(setTimeout(() => set([texts.t2, texts.t3]), 2200));
    ref.current.push(setTimeout(() => set([texts.t2, texts.t3, texts.t4]), 2400));

    // ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000));
  }, []);

  React.useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);
  return (
    <Typography
      variant="h4"
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        width: '100vw',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10vh',
      }}
    >
      {transitions(({ innerHeight, ...rest }, item) => (
        <animated.div style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </Typography>
  );
}
