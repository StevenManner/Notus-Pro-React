import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Notus Pro</title>
        <meta property="og:title" content="Notus Pro" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <div className={styles['Bg1']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>JUNGLE MYSTERY</h1>
            <span className={styles['text01']}>
              <span>
                Jungle Escape! You&apos;re in a jungle-themed room. You have 60
                minutes
              </span>
              <br></br>
              <span>
                to solve the puzzles, find the clues, and make your escape!
              </span>
            </span>
            <a
              href="#purchase"
              className={` ${styles['link']} ${projectStyles['button']} `}
            >
              Book Now!
            </a>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image01']}
          />
        </div>
      </div>
      <div className={styles['Section1']}>
        <div className={styles['container03']}>
          <div className={styles['Container04']}>
            <h6 className={styles['text05']}>
              <span>jungle mystery</span>
              <span className={styles['text07']}>&amp;#8203;</span>
            </h6>
            <h3 className={` ${styles['text08']} ${projectStyles['healine']} `}>
              YOUR MISSION
            </h3>
            <span
              className={` ${styles['text09']} ${projectStyles['textXL']} `}
            >
              <span className={styles['text10']}>
                Your group has 1 hour to escape from Big Island&apos;s best
                Escape Room!
              </span>
            </span>
          </div>
          <div className={styles['CardsContainer']}>
            <div className={styles['Card1']}>
              <div className={styles['container05']}>
                <img
                  alt="image"
                  src="/playground_assets/search-200h.png"
                  className={styles['image02']}
                />
              </div>
              <h6
                className={` ${styles['text11']} ${projectStyles['textXL']} `}
              >
                FOLLOW THE CLUES
              </h6>
              <span className={styles['text12']}>
                Most clues will be hidden in plain sight
              </span>
            </div>
            <div className={styles['Card2']}>
              <div className={styles['container06']}>
                <img
                  alt="image"
                  src="/playground_assets/icons8-key-120-200h.png"
                  className={styles['image03']}
                />
              </div>
              <h6
                className={` ${styles['text13']} ${projectStyles['textXL']} `}
              >
                FIND THE KEYS
              </h6>
              <span className={styles['text14']}>
                Once you find puzzles to solve, you might need to find the keys
                to unlock them!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className={styles['Card3']}>
              <div className={styles['container07']}></div>
              <h6
                className={` ${styles['text15']} ${projectStyles['textXL']} `}
              >
                SOLVE THE MYSTERY
              </h6>
              <span className={styles['text16']}>
                Use your wit and creativity to think outside the box
              </span>
            </div>
          </div>
          <div className={styles['CardsContainer1']}>
            <div className={styles['Card21']}>
              <div className={styles['container08']}>
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className={styles['icon']}
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <img
                alt="image"
                src="/playground_assets/hourglass-200h.png"
                className={styles['image04']}
              />
              <h6
                className={` ${styles['text17']} ${projectStyles['textXL']} `}
              >
                TIME LIMIT
              </h6>
              <span className={styles['text18']}>
                You have 60 minutes to crack the codes that will allow you to
                beat the room! Can you beat other people&apos;s high score? Find
                out today!
              </span>
            </div>
          </div>
          <div className={styles['Container09']}>
            <a
              href="#purchase"
              type="button"
              className={` ${styles['link1']} ${projectStyles['button']} `}
            >
              Do you have what it takes to escape? Book Now!
            </a>
          </div>
          <div className={styles['WorkWithUs']}>
            <div className={styles['container10']}>
              <h6
                className={` ${styles['text19']} ${projectStyles['healine']} `}
              >
                Don&apos;t let US tell you it&apos;s a great time.
              </h6>
              <span className={styles['text20']}>
                <span className={styles['text21']}>
                  &quot;Awesome game, awesome time. This was my first time
                  playing and what I had envisioned it to be; it was exactly
                  that. It was exciting, challenging, and completely well
                  thought out.&quot; - Holly
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text24']}>
                  &quot;The experience was amazing. Unlike anything else in
                  Hilo. Definitely would recommend to any locals or anyone
                  visiting the island.&quot; - Elias
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text28']}>
                  &quot;We have done a couple of escape rooms before and this
                  one was really ingenious â Challenging enough to be fun but
                  not too hard. A great way to spend an hour in Hilo!&quot; -
                  Jim
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles['container11']}>
              <div className={styles['container12']}>
                <img
                  alt="image"
                  src="/playground_assets/blue_wave.svg"
                  className={styles['image05']}
                />
              </div>
              <div className={styles['container13']}>
                <h4
                  className={` ${styles['text29']} ${projectStyles['healine']} `}
                >
                  Over 93 FIVE STAR Google reviews!
                </h4>
                <span className={styles['text30']}>
                  <span>
                    Escape Hilo is perfect for businesses, groups, family,
                    friends, and tourists. One hour may not seem like a lot, but
                    if you&apos;re quick on your feet and fast to think,
                    you&apos;re in the running to beat our all time leaderboard!
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#purchase"
          type="button"
          className={` ${styles['Button']} ${projectStyles['button']} `}
        >
          Do you have what it takes to escape? Book Now!
        </a>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image06']}
        />
      </div>
      <div className={styles['Section2']}>
        <div className={styles['container14']}></div>
        <div className={styles['container15']}>
          <h6 className={styles['text32']}>
            <span>THE ONES WHO GOT AWAY</span>
          </h6>
          <h3 className={` ${styles['text34']} ${projectStyles['healine']} `}>
            Our escapee&apos;s
          </h3>
          <span className={` ${styles['text35']} ${projectStyles['textXL']} `}>
            <span className={styles['text36']}>
              It depends on your friends and companions, it depends on who goes
              out with you, if they have money, if you have money.
            </span>
          </span>
        </div>
        <div className={styles['container16']}>
          <div className={styles['container17']}>
            <img
              alt="image"
              src="/playground_assets/3-400w.jpg"
              className={styles['image07']}
            />
          </div>
          <div className={styles['container18']}>
            <img
              alt="image"
              src="/playground_assets/6-300h.jpg"
              className={styles['image08']}
            />
          </div>
          <div className={styles['container19']}>
            <img
              alt="image"
              src="/playground_assets/7-300h.jpg"
              className={styles['image09']}
            />
          </div>
        </div>
        <div className={styles['Team']}>
          <div className={styles['container20']}>
            <div className={styles['Container21']}>
              <img
                alt="image"
                src="/playground_assets/1-400h.jpg"
                className={styles['image10']}
              />
            </div>
            <div className={styles['container22']}>
              <img
                alt="image"
                src="/playground_assets/265261649_1555641698147865_2116659240139234306_n-1400w.jpg"
                className={styles['image11']}
              />
            </div>
            <div className={styles['container23']}>
              <img
                alt="image"
                src="/playground_assets/4-1400w.jpg"
                className={styles['image12']}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container24']}>
        <iframe
          id="purchase"
          src="https://fareharbor.com/embeds/calendar/escapehilo/?u=155e6a5a-c72b-456b-b124-ecc802e7fc34&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/book/"
          className={styles['iframe']}
        ></iframe>
      </div>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Home
