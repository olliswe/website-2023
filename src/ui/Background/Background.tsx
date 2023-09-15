import {type ReactElement} from 'react';
import {useRouter} from 'next/router';
import {Animated, type AnimatedProp, Animator, cx, Dots, Puffs} from '@arwes/react';

import * as classes from './Background.css';

interface BackgroundProps {
  className?: string
  animated?: AnimatedProp
}

const Background = (props: BackgroundProps): ReactElement => {
  const { className, animated } = props;

  const router = useRouter();
  const isIndex = router.asPath === '/';

  return (
    <Animator merge combine>
      <Animated
        role='presentation'
        className={cx(classes.root, className)}
        animated={animated}
      >
        <Animator duration={{ enter: 2 }} unmountOnDisabled>
          <Dots
            className={classes.layer2}
            color='hsla(180, 29%, 72%, 0.15)'
            size={2}
            distance={40}
            originInverted
          />
        </Animator>

      </Animated>
    </Animator>
  );
};

export type { BackgroundProps };
export { Background };
