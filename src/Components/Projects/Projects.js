import React from 'react';
import './Projects.css';
import project1 from '../../static/images/project1.png';
import project2 from '../../static/images/project2.jpg';
import project3 from '../../static/images/project3.png';
import project4 from '../../static/images/project4.png';

import tensorflow from '../../static/images/tensorflow.png';
import pytorch from '../../static/images/pytorch.png';
import flask from '../../static/images/flask.png';
import heroku from '../../static/images/heroku.png';
import reactLogo from '../../static/images/react.png';
import nodejs from '../../static/images/nodejs.png';
import postgresql from '../../static/images/postgresql.png';
import html5 from '../../static/images/html.png';
import css3 from '../../static/images/css.png';
import javascriptLogo from '../../static/images/js.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects-title"><h1>Projects</h1></div>
                    <div className="projects-container">
                        <div className="project-block">
                            
                                <img width="483" src={project1} alt="" />
                        
                            <div className="project-content">
                                <h3>Products Recognition</h3>
                                <span>Image clasification model for Autofill system</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore culpa ipsum ullam iusto, voluptatum beatae quis autem minus vero assumenda laudantium, commodi ut ratione quo asperiores amet explicabo maiores.</p>
                                <div className='source-btn'>

                                    <a href='https://colab.research.google.com/drive/1kU229EFf-6cGpKcldEpn1p5K41jT4Mot?usp=sharing' >
                                    <img src='https://colab.research.google.com/assets/colab-badge.svg' alt="" />
                                    </a>
                                </div>
                                <div className='frameworks'>
                                    <img width="280" src={tensorflow} alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="project-block">
                            
                            <img width="483" src={project2} alt="" />
                       
                            <div className="project-content">
                                <h3>Parasite eggs detection</h3>
                                <span>Senior project</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore culpa ipsum ullam iusto, voluptatum beatae quis autem minus vero assumenda laudantium, commodi ut ratione quo asperiores amet explicabo maiores.</p>
                                <div className='source-btn'>
                                <a href='https://github.com/discdetsu/MIFvsOV'>
                                    <button  ><FontAwesomeIcon icon={faGithubAlt} /> Source</button>
                                </a>
                                <a href='https://mifvsov.herokuapp.com/'>
                                    <button >Demo</button>
                                </a>
                                </div>
                                <div className='frameworks'>
                                    <img width="180" src={pytorch} alt="" />
                                    <img width="80" src={flask} alt="" />
                                    <img width="80" src={heroku} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="project-block">
                            <img width="483" src={project3} alt="" />
                            <div className="project-content">
                                <h3>Face detection web app</h3>
                                <span>Course project</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore culpa ipsum ullam iusto, voluptatum beatae quis autem minus vero assumenda laudantium, commodi ut ratione quo asperiores amet explicabo maiores.</p>
                                <div className='source-btn'>
                                    <a href='https://github.com/discdetsu/face-detection-clarifai-api'>
                                    <button ><FontAwesomeIcon icon={faGithubAlt} /> Source</button>
                                    </a>
                                    <a href='https://face-recognition-by-clarifai.herokuapp.com/' >
                                    <button >Demo</button>
                                    </a>
                                </div>
                                <div className='frameworks'>
                                <img width="80" src={reactLogo} alt="" />
                                <img width="200" src={nodejs} alt="" />
                                <img width="80" src={postgresql} alt="" />
                                <span style={{font: '100 2em helvetica neue,open sans,sans-serif', color: 'white'}}>express</span> 
                                </div>
                            </div>
                        </div>
                        <div className="project-block">
                            <img width="483" height="340" src={project4} alt="" />
                            <div className="project-content">
                                <h3>Yearly charm</h3>
                                <span>Personal project</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore culpa ipsum ullam iusto, voluptatum beatae quis autem minus vero assumenda laudantium, commodi ut ratione quo asperiores amet explicabo maiores.</p>
                                <div className='source-btn'>
                                    <a href='https://github.com/discdetsu/yearly-landing.github.io'>
                                    <button ><FontAwesomeIcon icon={faGithubAlt} /> Source</button>
                                    </a>
                                    <a href='https://discdetsu.github.io/yearly-landing.github.io/' >
                                    <button >Demo</button>
                                    </a>
                                </div>
                                <div className='frameworks'>
                                <img width="80" src={html5} alt="" />
                                <img width="80" src={css3} alt="" />
                                <img width="80" src={javascriptLogo} alt="" />
                                
                                </div>
                            </div>
                            
                        </div>
                </div>
        </section>
    )
}

export default Projects;