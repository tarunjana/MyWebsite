import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Coding',
    Svg: require('../../static/img/coder.svg').default,
    description: (
      <>
        Coding was my first love. I've broken up with her and married Mathematics years ago. But illicit love
        has its own flavors. You
        know what I mean!
      </>
    ),
  },
  {
    title: 'Mathematics',
    Svg: require('../../static/img/mathematics.svg').default,
    description: (
      <>
        I'm a teacher of Mathematics by profession. Besides giving excessive homework to my students, I produce mathematical
        tutorials sometimes.
      </>
    ),
  },
  {
    title: 'Literature',
    Svg: require('../../static/img/pen.svg').default,
    description: (
      <>
        Every Bengali is a poet when it rains. I'm not an exception to it. I love to express my emotions using
        keyboard in my native language Bengali.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
