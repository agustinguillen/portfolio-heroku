import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubtitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section id="hero" row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my Portfolio
      </SectionTitle>
      <SectionSubtitle>
        Agustín Nicolás Guillén
      </SectionSubtitle>
      <SectionText>
        Front-End Developer - La Plata, Buenos Aires, Argentina
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;