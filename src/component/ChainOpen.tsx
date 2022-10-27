import React, { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

// eslint-disable-next-line import/extensions,import/no-unresolved
import data from './data';
// @ts-ignore
import styles from './styles.module.css';

export default function ChainOpen() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'E9967A' },
    to: {
      size: open ? '95%' : '20%',
      background: open ? '#E9967A' : '#E9967A',
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0, width: '10px' },
    enter: { opacity: 1, scale: 1, width: '20px' },
    leave: { opacity: 0, scale: 0, width: '10px' },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{
              ...style, background: item.css, width: '100%', display: 'inline',
            }}
          />
        ))}
      </animated.div>
    </div>
  );
}
