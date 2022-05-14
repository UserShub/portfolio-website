import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Shubhankar Dey's Portfolio
        </SectionTitle>
        <SectionText>
        I am trying to learn new technologies and enhance my development skills to the next level and build awesome apps.
        </SectionText>
        <a href="#about"><Button onClick={props.handleClick}>Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;