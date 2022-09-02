import React from 'react';
import './Experiences.css';

const Experiences = () => {
    return (
        <section className="experiences">
            <div className="experiences-title"><h1>Experiences</h1></div>
      
      <div className="timeline-container">
          <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
              <h3>Apr 2018</h3>
              <span>Kasetsart University</span>
              <p>Bachelor of Science, Computer Science
                  <ul style={{listStyleType: 'none'}}> 
                      <li className="list">Thesis: Opisthorchis viverrini and Minute Intestinal Fluke Parasite Egg Detection and Classification using Deep
                  Learning Methods</li>

                  <li className="list">Supervisor: Assist. prof. Phakaket Wattuya</li>
                  </ul>
              </p>
              </div>
          </div>
          <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                 <h3>Jun 2021, Internship</h3>
                 <span>Mombie Club Co., Ltd</span>
                 <p>As Computer Vision Engineer at Mombie Club, one of my key challenges was to find a way that can help clients to sell their products more easily.
                  I was developed an autofill system on an e-commerce website by using image recognition techniques to solve this problem. And other challenges that use deep learning techniques especially to verify client information by using OCR models</p>
              </div>
           </div>
        
           <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                 <h3>Dec 2021, Senior Project </h3>
                 <span>Kasetsart University</span>
                 <p>My senior project is to detect and classify 2 species of parasite egg using a state-of-the-art object detection model to perform medical functions for diagnosing of bile duct cancer from microscopic images.  I worked closely with an expert physician from Phramongkutklao Hospital.
                  And deep learning model was deployed into production using Heroku cloud platform as a service</p>
              </div>
           </div>
      </div>
        </section>
    )
}

export default Experiences;