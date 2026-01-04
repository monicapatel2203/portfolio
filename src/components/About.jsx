import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, points = [] }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        <ul className="mt-4 list-disc space-y-2 text-secondary text-[14px] text-left self-start">
          {points.map((point, pointIndex) => (
            <li key={`service-point-${index}-${pointIndex}`}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Creative and detail-driven Unity Game Developer with 4+ years shaping code-driven gameplay
        and polished mobile releases. I took titles from prototype to
        launch, mentoring junior developers and partnering with artists and designers to iterate on
        player feedback across iOS and Android.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.15, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My toolkit spans Unity with C#, gameplay systems, UI and UX iteration, mobile optimization
        for iOS and Android, and rapid live tuning. I integrate multiplayer services, platform APIs,
        third-party SDKs, and in-app purchases while safeguarding stability through disciplined
        source control.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-12">
        <p className={`${styles.sectionHeadText} text-[30px]`}>Core Skills</p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
