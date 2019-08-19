import React from 'react';

function Home() {
  return (
    <div id="content" className="container p-4">
      <div id="main">
        <div className="photobox">
          <img className="img-fluid " src="images/coverphoto.jpg" alt="Michael Fedell" />
        </div>
        <div className="bio">
          <p className="">
            A passion for data science and analytical problem solving led me to Northwestern University where I am
            currently pursuing a Master’s in Analytics. I grew up in Texas and then attended the University of Oklahoma
            for a degree in Chemical Engineering, but am excited to now live in the Chicago area. I am interested in
            fast-paced, innovative companies that leverage powerful software and technology to solve complex engineering
            and technical problems both internal and external. I crave a work environment that promotes empowering
            leadership and rewards individual initiative at all levels. You can usually catch me spending time outdoors,
            reading up on the latest tech trends, or searching far and wide for the best ice cream spots.
          </p>
        </div>
        <div id="social-lg" className="row px-5 text-center">
          <div className="col-md-6">
            <a
              href="https://www.mccormick.northwestern.edu/analytics/our-students-alumni/meet-students/student-profiles/class-of-2019/fedell-steven-michael.html"
              className="fas fa-university col-5"></a>
            <a href="mailto:s.michaelfedell@gmail.com?subject=Email%20Me!" className="fas fa-envelope col-5"></a>
          </div>
          <div className="col-md-6">
            <a href="https://www.linkedin.com/in/michaelfedell/" className="fab fa-linkedin col-5"></a>
            <a href="https://github.com/michaelfedell" className="fab fa-github col-5"></a>
          </div>
        </div>
        <div id="quote">
          <p><em>"Don’t ask yourself what the world needs. Ask yourself what makes you come alive, and go do that,
            because
            what the world needs is people who have come alive.”</em><br/><span>- Howard Thurman</span></p>
        </div>
      </div>
    </div>
);
}

export default Home;