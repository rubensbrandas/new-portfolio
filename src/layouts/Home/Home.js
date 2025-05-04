import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';

import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';

import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';

import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

import hmsPreview from 'assets/hms-preview.png';
import cicd from 'assets/cicd.png';
// import algoVE from 'assets/algo-ve-preview.png';
import blockchain from 'assets/FutureCoders.png';
// import algoVE2 from 'assets/algoVE2.png';
import stockDash from 'assets/vidgiLogin.jpg';
import stockDash2 from 'assets/vidgiGames.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Prototyper', 'Designer', 'Engineer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Rubens Brandas — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="The Louvershop"
        description="Developed websites to capture new orders and showcase products, significantly boosting customer engagement and sales. Optimized databases for better performance, ensuring scalability and long-term efficiency. Worked closely with leadership to design and prototype innovative tools that enhanced data management and analysis. Additionally, maintained and debugged existing systems to ensure smooth operation and rapid resolution of technical issues."
        buttonText="View project"
        buttonLink="https://louvershop.com"
        model={{
          type: 'laptop',
          alt: 'Displaying the home page of the website.',
          textures: [
            {
              srcSet: [hmsPreview, hmsPreview],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        // alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Future Coders"
        description="I designed and developed a dynamic institutional website with user data collection features, seamlessly integrating a robust database to ensure efficient data storage, retrieval, and administrative management. Additionally, I taught programming fundamentals to children aged 5–11 using LEGO robotics, encouraging creativity and hands-on learning. I also guided students through collaborative projects that strengthened their teamwork, strategic thinking, and problem-solving skills."
        buttonText="View project"
        buttonLink="https://futurecoders.com"
        model={{
          type: 'laptop',
          alt: 'landing page',
          textures: [
            {
              srcSet: [blockchain],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="GFT consulting"
        description="I worked as a Mid-Level Frontend Engineer, enhancing user interfaces for high-traffic applications. I led the implementation of open-insurance solutions at a major insurance company using ReactJs, NodeJs, and advanced form libraries like React Hook Form, Formik, and Yup to improve form handling and validation. Additionally, I developed a scalable tool that allowed employees to upload and store large volumes of Excel data efficiently. I also created visually rich, data-driven reports by extracting backend information, providing clients with clear, actionable insights."
        buttonText="View company"
        buttonLink="https://www.gft.com/us/en"
        model={{
          type: 'laptop',
          alt: 'Visual description of the pipeline workflow',
          textures: [
            {
              srcSet: [cicd],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Vidgi Games"
        description="Partnered with the gaming company, VIDGI, to develop their website and enhance their in-game betting system, improving user engagement and functionality."
        buttonText="View Project"
        buttonLink="/manual-vidgi-1.pdf"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [stockDash],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [stockDash2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
