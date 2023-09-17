import {type ReactElement, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useAtom} from 'jotai';
import {
  Codepen,
  CollageFrame,
  DashboardSpeed,
  Discord,
  GitHub,
  Instagram, LinkedIn,
  Menu as MenuIcon,
  Page,
  SoundHigh,
  SoundOff,
  Spotify,
  Twitter
} from 'iconoir-react';
import {aa, aaOpacity, aaVisibility, Animator, AnimatorGeneralProvider, cx} from '@arwes/react';

import {atomAudio} from 'src/utils';
import {hiddenLG, hiddenLGDown, hiddenSMDown, hiddenXLDown} from 'src/styles';
import {HeaderLayout, type HeaderLayoutProps, Menu, MenuItem} from 'src/ui';
import {ModalNavigate} from '../ModalNavigate';
import * as classes from './Header.css';

interface HeaderProps extends HeaderLayoutProps {}



const Header = (props: HeaderProps): ReactElement => {
  const router = useRouter();
  const [audio, setAudio] = useAtom(atomAudio);
  const [showModal, setShowModal] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);

  // The pages where the page content elements are floating instead
  // of being container by containers.
  const isFloatingRoutePath = router.asPath === '/';

  const leftItemAnimation = isFloatingRoutePath ? aaOpacity() : [aaVisibility(), aa('x', -4, 0, 0)];
  const rightItemAnimation = isFloatingRoutePath ? aaOpacity() : [aaVisibility(), aa('x', 4, 0, 0)];

  return (
    <>
      <HeaderLayout
        {...props}
        hasFrame={!isFloatingRoutePath}
        left={
        <Animator>
          <>
            <Animator>
              <MenuItem className={classes.menuItem} animated={rightItemAnimation}>
                <a   title='Spotify' onClick={()=>setShowSpotify((prev)=>!prev)}>
                  <Spotify />
                </a>
              </MenuItem>
            </Animator>
            <div style={{opacity: showSpotify ? 1 :0 , transition: 'opacity 0.3s ease-in-out'}}>
            <iframe  src="https://open.spotify.com/embed/playlist/58y3p9CODhvsSoGLucWyDf?utm_source=generator&theme=0" width="400" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
            </div>
          </>
          {!isFloatingRoutePath && (
              <Animator combine manager='stagger' duration={{ stagger: 0.03 }}>
                <Menu>
                  <Animator>
                    <MenuItem
                      className={cx(classes.menuItem, hiddenSMDown)}
                      active={router.asPath.startsWith('/docs')}
                      animated={leftItemAnimation}
                    >
                      <Link href='/src/pages/docs' title='Go to Documentation'>
                        <Page /> <span className={hiddenXLDown}>Docs</span>
                      </Link>
                    </MenuItem>
                  </Animator>
                  <Animator>
                    <MenuItem
                      className={cx(classes.menuItem, hiddenSMDown)}
                      active={router.asPath.startsWith('/samples')}
                      animated={leftItemAnimation}
                    >
                      <Link href='/src/pages/samples' title='Go to Samples'>
                        <CollageFrame /> <span className={hiddenXLDown}>Samples</span>
                      </Link>
                    </MenuItem>
                  </Animator>
                  <Animator>
                    <MenuItem
                      className={cx(classes.menuItem, hiddenSMDown)}
                      animated={leftItemAnimation}
                    >
                      <a href='/play' title='Go to Playground'>
                        <Codepen /> <span className={hiddenXLDown}>Play</span>
                      </a>
                    </MenuItem>
                  </Animator>
                  <Animator>
                    <MenuItem
                      className={cx(classes.menuItem, hiddenSMDown)}
                      animated={leftItemAnimation}
                    >
                      <a href='/perf' title='Go to Performance'>
                        <DashboardSpeed /> <span className={hiddenXLDown}>Perf</span>
                      </a>
                    </MenuItem>
                  </Animator>
                </Menu>
              </Animator>
            )}
          </Animator>
        }
        center={<></>}
        right={
          <Animator
            combine
            manager={isFloatingRoutePath ? 'parallel' : 'staggerReverse'}
            duration={{ stagger: 0.03 }}
          >
            <Menu className={hiddenLGDown}>
              <Animator>
                <MenuItem className={classes.menuItem} animated={rightItemAnimation}>
                  <a href='https://github.com/olliswe' target='github' title='Go to GitHub'>
                    <GitHub />
                  </a>
                </MenuItem>
              </Animator>
              <Animator>
                <MenuItem className={classes.menuItem} animated={rightItemAnimation}>
                  <a href='https://www.linkedin.com/in/oliver-iyer/' target='linkedin' title='LinkedIn'>
                    <LinkedIn />
                  </a>
                </MenuItem>
              </Animator>
              <Animator>
                <MenuItem className={classes.menuItem} animated={rightItemAnimation}>
                  <a href='https://instagram.com/olliswe' target='instagram' title='Instagram'>
                    <Instagram />
                  </a>
                </MenuItem>
              </Animator>
            </Menu>
            <Menu>
              <Animator>
                <MenuItem className={cx(classes.menuItem, hiddenLGDown)} animated={rightItemAnimation}>
                  <button
                    className={classes.button}
                    title={audio ? 'Disable audio' : 'Enable audio'}
                    onClick={() => setAudio(!audio)}
                  >
                    {audio ? <SoundHigh /> : <SoundOff />}
                  </button>
                </MenuItem>
              </Animator>
              <Animator>
                <MenuItem className={cx(classes.menuItem, hiddenLG)} animated={rightItemAnimation}>
                  <button
                    className={classes.button}
                    title='Navigate'
                    onClick={() => setShowModal(v => !v)}
                  >
                    <MenuIcon />
                  </button>
                </MenuItem>
              </Animator>
            </Menu>
          </Animator>
        }
      />

      <AnimatorGeneralProvider
        duration={{
          enter: 0.1,
          exit: 0.1,
          stagger: 0.05
        }}
        // TODO: How to handle the rendering on Animations disabled?
        // The root parent <AnimatorGeneralProvider> disables all <Animator>
        // children components, but the modal components depend on the
        // animations enabled.
        disabled={false}
        dismissed={false}
      >
        <Animator root active={showModal}>
          <ModalNavigate onClose={() => setShowModal(false)} />
        </Animator>
      </AnimatorGeneralProvider>
    </>
  );
};

export type { HeaderProps };
export { Header };
