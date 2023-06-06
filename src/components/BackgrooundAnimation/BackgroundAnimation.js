import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './BackgroundAnimation-config';
import { ParticlesDiv } from './BackgroundAnimationStyles';

const BackgroundAnimation = () => (
  <ParticlesDiv>
    <Particles params={particlesConfig}></Particles>
  </ParticlesDiv>
)

export default BackgroundAnimation;