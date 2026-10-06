'use client';

import { motion, useReducedMotion } from 'motion/react';
import Nav from '@/components/Nav/Nav';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { intro } from '@/lib/content';
import { fadeUp } from '@/lib/motion';
import { siteConfig } from '@/lib/site';
import styles from './Header.module.css';

export default function Header() {
  const reduce = useReducedMotion();

  // O pai só orquestra: 80ms de espera e 90ms entre cada filho (stagger)
  const container = {
    hidden: {},
    visible: { transition: reduce ? {} : { delayChildren: 0.08, staggerChildren: 0.09 } },
  };
  const item = fadeUp({ distance: 12, duration: 0.6, reduce });

  return (
    <motion.header
      className={styles.header}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.headerIntro}>
        <motion.h1 className={styles.headerName} variants={item}>
          {siteConfig.name}
        </motion.h1>
        <motion.p className={styles.headerRole} variants={item}>
          {siteConfig.role}
        </motion.p>
        <motion.p className={styles.headerBio} variants={item}>
          {intro}
        </motion.p>
        <motion.div variants={item}>
          <Nav />
        </motion.div>
      </div>
      <motion.div variants={item}>
        <SocialLinks />
      </motion.div>
    </motion.header>
  );
}
