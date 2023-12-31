import { type ReactElement } from "react";
import Link from "next/link";
import { TransitionRight } from "iconoir-react";
import {
  Animator,
  Animated,
  aaVisibility,
  aa,
  BleepsOnAnimator,
} from "@arwes/react";
import type { BleepNames } from "src/types";
import { Button, Model } from "src/ui";
import { hiddenSMDown } from "src/styles";

const PageIndex = (): ReactElement => {
  return (
    <>
      <style jsx global>{`
        .page {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .container {
          display: grid;
          row-gap: 1rem;
          padding: 1rem;
          padding-bottom: 4rem;
        }

        .title {
          display: flex;
          justify-content: center;
          margin: 0;
        }

        .logo {
          margin: 0;
          max-height: 2.5rem;
        }

        .subtitle {
          display: flex;
          justify-content: center;
          margin: 0;
          font-size: 1rem;
        }

        .nav {
          display: grid;
          grid-auto-flow: column;
          column-gap: 0.5rem;
        }

        .nav-item,
        .nav-item a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 768px) {
          .container {
            row-gap: 1.25rem;
          }

          .logo {
            max-height: 3.75rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .nav {
            column-gap: 1rem;
          }
        }
      `}</style>

      <Animator combine manager="sequenceReverse">
        <BleepsOnAnimator<BleepNames>
          transitions={{ entering: "intro" }}
          continuous
        />
        <main className="page">
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100vh",
              paddingBottom: "10vh",
            }}
          >
            <div style={{ display: "flex", height: "50%", margin: "0 20px" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <Model />
              </div>
              <div style={{ width: 200 }} />
              <div style={{ display: "flex", flex: 1 }}>
                <Model />
              </div>
            </div>
            <div style={{ display: "flex", height: "50%", margin: "0 20px" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <Model />
              </div>
              <div style={{ width: 200 }} />
              <div style={{ display: "flex", flex: 1 }}>
                <Model />
              </div>
            </div>
          </div>
          <Animated className="container" animated={aa("y", 12, 0)}>
            <Animator>
              <Animated as="h1" className="title" animated={[aaVisibility()]}>
                OLIVERIYER
              </Animated>
            </Animator>

            <Animator>
              <nav className="nav">
                <Animated
                  className="nav-item"
                  animated={[aaVisibility(), aa("x", -24, 0)]}
                >
                  <Link href="/src/pages/docs">
                    <Button
                      size="small"
                      tabIndex={-1}
                      title="Go to Documentation"
                    >
                      <TransitionRight className={hiddenSMDown} />
                      <span>GET IN TOUCH</span>
                    </Button>
                  </Link>
                </Animated>
              </nav>
            </Animator>
          </Animated>
        </main>
      </Animator>
    </>
  );
};

export default PageIndex;
