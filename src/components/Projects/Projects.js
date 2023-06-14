import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer style={{ paddingBottom: '5vh' }}>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i} style={{ height: '760px' }}>
            <Img src={p.image} style={{ height: '250px' }} />
            <TitleContent>
              <HeaderThree title="true">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info" style={{ fontSize: '1.2rem' }}>{p.description}</CardInfo>
            <div style={{ marginTop: '15px' }}>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {
                p && p.code &&
                <ExternalLinks href={p.code} target={'_blank'} rel={'noreferrer'}>Code</ExternalLinks>
              }
              <ExternalLinks href={p.visit} target={'_blank'} rel={'noreferrer'}>Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;