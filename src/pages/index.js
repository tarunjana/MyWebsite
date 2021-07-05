import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="avatar avatar--vertical margin-bottom--md">
          <img className="avatar__photo avatar__photo--xl" src="https://avatars.githubusercontent.com/u/76617446" />
        </div>
        <h1>{siteConfig.title}</h1>
        <h3>{siteConfig.tagline}</h3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/bn">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Personal website of Tarun Jana">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
