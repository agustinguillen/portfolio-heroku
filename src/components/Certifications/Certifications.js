import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ExternalLinks } from './CertificationsStyles';
import { data } from '../../constants/constants';

const Certifications = () => (
  <Section id="certifications">
    <SectionTitle>Certifications & Courses</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.name}`}</BoxNum>
          <BoxText>{card.text}</BoxText><br />
          <ExternalLinks href={card.link}>See certification</ExternalLinks>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Certifications;
