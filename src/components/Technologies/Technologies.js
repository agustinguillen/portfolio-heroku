import React from 'react';
import { DiFirebase, DiMysql, DiNodejsSmall, DiMongodb, DiReact, DiAngularSimple, DiJqueryLogo, DiBootstrap, DiSass } from 'react-icons/di';
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiNextDotJs, SiAmazonaws } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIconFlex } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <ListIconFlex>
          <DiReact size="3rem"/>
          <SiNextDotJs size="2.4rem" style={{marginTop: '3px'}} />
          <DiAngularSimple size="3rem"/>
          <DiJqueryLogo size="3rem"/>
          <DiBootstrap size="3rem"/>
          <DiSass size="3rem"/>
        </ListIconFlex>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, Angular 11+, AngularJS, Jquery, Material UI, Bootstrap and SASS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconFlex>
          <DiNodejsSmall size="3rem"/>
          <DiMongodb size="3rem"/>
          <DiMysql size="3rem"/>
          <DiFirebase size="3rem"/>
          <SiAmazonaws size='3rem' />
        </ListIconFlex>
        <ListContainer>
          <ListTitle>Back-End and Infrastructure</ListTitle>
          <ListParagraph>
            Knowledge in <br />
            Node.js, Express, MongoDB, MySQL, Firebase and AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconFlex>
          <SiAdobeillustrator style={{marginRight: '5px'}} size="2.5rem"/>
          <SiAdobephotoshop style={{marginRight: '5px'}} size="2.5rem" />
          <SiAdobexd style={{marginRight: '5px'}} size="2.5rem" />
          <SiFigma style={{marginRight: '5px'}} size="2.5rem"/>
        </ListIconFlex>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Tools like <br />
            Illustrator, Photoshop, Adobe XD and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
