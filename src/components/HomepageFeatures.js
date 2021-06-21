import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mathematics',
    Svg: require('../../static/img/mathematics.svg').default,
    description: (
      <>
       I'm a teacher by profession. Besides giving excessive homework to my students, I produce mathematical 
       tutorials sometimes.
      </>
    ),
  },
  {
    title: 'Literature',
    Svg: require('../../static/img/book.svg').default,
    description: (
      <>
        Every Bengali is a poet when it rains. I'm not an exception to it. I write nonsense poems and short 
        stories in my native language Bengali.
      </>
    ),
  },
  {
    title: 'Coding',
    Svg: require('../../static/img/computer.svg').default,
    description: (
      <>
        Coding was my first love. I've broken up with her and married Mathematics years ago. But illicit love has its own flavors. You 
        know what I mean!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
