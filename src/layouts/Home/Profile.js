import profileImgPlaceholder from 'assets/profile-placeholder.jpg';

import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
// import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import myImage from 'assets/profile2.jpeg';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m Rubens, a Systems Analysis graduate from the Federal Institute of Bahia,
      currently working as a Frontend Developer with over 9 years of experience in the
      tech industry. My main focus is building scalable and dynamic web applications using
      React, TypeScript, Redux, and modern UI libraries like Material-UI and Styled
      Components.
      {/* I&apos;m Mayank, currently enrolled at{' '}
      <Link href="https://kiit.ac.in">KIIT University</Link> to pursue an engineering
      degree in Information Technology. My area of expertise in web development is the
      MERN stack. As a self-taught developer, I&apos;m constantly searching for ways to
      improve. I pick things up quickly, and I&apos;m constantly eager to learn something
      new. I work well in teams and am constantly willing to lend a hand. In addition to
      this, I am a <b>Content Writer/Marketer</b> as well. */}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      As someone passionate about technology and continuous learning, I enjoy tackling new
      challenges and delivering solutions that make a real impact. I also have experience
      with cloud services like AWS and have worked as an IT Coordinator, supporting a team
      of 36 employees and managing a daily public service of over 400 users. Beyond
      development, I&apos;ve had the opportunity to teach web development at a technical
      level, helping students master PHP, HTML, JavaScript, and CSS.
      {/* I am a member of the{' '}
      <Link href="https://msckiit.tech">
        Microsoft Learn Student Ambassadors, KIIT Chapter
      </Link>{' '}
      as a{' '}
      <span style={{ fontWeight: 'bold' }}>Creative Lead and Operations Executive</span>{' '}
      and <span style={{ fontWeight: 'bold' }}>Senior Executive</span> at the{' '}
      <Link href="https://ecell.org.in">KIIT Entrepreneurship Cell</Link>. I&apos;ve
      helped organised several events having a cumulative footfall of more than 3000+
      people, and have the experience of managing a team of 100+ members as well. */}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My international experiences across the Americas, Europe, Southeast Asia, and the
      Middle East have shaped my ability to adapt, communicate, and collaborate with
      diverse teams. I&apos;m always looking forward to growing both technically and
      personally — and contributing wherever I can add value.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[myImage, myImage]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  {/* <use href={`${profileKatakana}#katakana-profile`} /> */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
