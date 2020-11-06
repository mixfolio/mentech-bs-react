import React from 'react';
import Particles from 'react-particles-js'
import Typed from 'react-typed';
import RobotAvatar from '../../assets/img/svg/robot-red.svg';


function Hero() {
   return (
     <section className="hero">
       <Particles
        params = {{
          "particles": {
            "number": {
              "value": 45,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 1,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 10
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            // "opacity": {
            //   "value": 0.5,
            //   "random": false,
            //   "anim": {
            //     "enable": false,
            //     "speed": 1,
            //     "opacity_min": 0.1,
            //     "sync": false
            //   }
            // },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        }}


        className="particles"></Particles>
       <div className="hero-block">
         <img className="" src={RobotAvatar} alt="Robot Avatar" height="96" />
         <h2 className="h2" style={{ color: '#D04F45' }}>-&nbsp;MAN&nbsp;+TECH&nbsp;-</h2>
         <h4 className="font-weight-normal">
           <Typed strings={[
             "Artificial Intelligence",
             "Big Data",
             "Internet of Things",
             "Virtual Reality",
             "Augmented Reality",
             "Software Development",
             "Machine Learning"
            ]} typeSpeed={40} backSpeed={60} loop={true}/>
          </h4>
      
       </div>
     </section>
   )
}

export default Hero;
