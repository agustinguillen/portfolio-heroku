import Head from 'next/head';
import Certifications from '../components/Certifications/Certifications';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Sidebar from '../components/Sidebar/Sidebar';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Head>
        <title>Agustín Nicolás Guillén</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Sidebar />
        <Projects />
        <Technologies />
        <Timeline />
        <Certifications />
      </Layout>
    </>
  );
};

export default Home;
