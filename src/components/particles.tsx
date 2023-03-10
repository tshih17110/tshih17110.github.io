import React from 'react';

import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import { Engine, tsParticles } from "tsparticles-engine";


tsParticles.addShape("dot", function (context, particle, radius) {
    const shapeData = particle.shapeData;
  });

const ParticlesContainer = () => {
    const particlesOptions = {
        particles: {
            number: {
                density: {
                    enable: true,
                },
                value: 250,
                size: {
                    random: true,
                    value: {min: 1, max: 2},
                }
            },
            move: {
                enable: true,
                random: true,
                speed: 0.1,
                bounce: false,
                straight: false,
            },            
            opacity: {
                anim: {
                    enable: true,
                    minimumValue: 0,
                    speed: 1,
                    sync: false,
                },
                random: true,
                value: { min: 0, max: 0.5 },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                    link: true,
                },
            },
            modes: {            
                bubble: {
                    opacity: 1,
                    size: 2,
                    distance: 100,
                    color: {
                        value: '#FFFFFF'
                    },
                    line_linked: {
                        opacity: 1
                    }
                }
            }
        },
        background: {
            image: 'linear-gradient(0deg, #2A0092, #18067F, #050C6B, #021145, #010923)',
            zindex: -10,
        }
    }
    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
      };
    return (
        <Particles init={particlesInit} options={particlesOptions}/>
    ) 
}

export default ParticlesContainer