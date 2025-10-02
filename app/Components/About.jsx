import './About.css';
import Image from 'next/image'; // replace with your image path
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id='RABOUT'>
    <div className="ACheck">Check Our Details</div>
    <div className='about'>
      <div className='imageContainer'>
        <img src='./details.png' alt="About QuickMentors" className='image'/>
      </div>
      <div className='textContainer'>
        <p className='sectionTitle'>DETAILS</p>
        <h2 className='heading'>Empowering Students with Free Quality Education</h2>
        <p className='subheading'>
          <em>
            QuickMentors is an initiative to provide accessible, engaging, and 100% free education for students who need it the most.
          </em>
        </p>
        <ul className='list'>
          <li><FaCheckCircle className='icon' /> Offers animated videos, notes, PYQs, and exercises.</li>
          <li><FaCheckCircle className='icon' /> Tailored for students who can’t afford offline/paid learning.</li>
          <li><FaCheckCircle className='icon' /> Built by self-taught devs for equal learning opportunities.</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
