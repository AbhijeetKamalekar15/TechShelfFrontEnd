import React from 'react';
import person1Image from '../../public/newpa.png'; // Import images
import person2Image from '../../public/newpn.png';
import Navbar from './Navbar';
import Footer from './Footer';


const AboutPage = () => {
  const teamMembers = [
    {
      title: 'Tech Enthusiast',
      name: 'Person 1',
      description:
        "Hello! I'm Abhijeet Kamalekar, a dedicated Software Engineer and a B.Tech student in Computer Science and Engineering. I have a solid background in programming and web development, with a keen interest in creating intuitive applications and tackling challenging problems. I thrive on exploring new technologies and turning innovative ideas into reality!",
      buttonLabel: 'Check Profile',
      image: person1Image, // Use imported image
      link: 'https://abhijeetkamalekar15.github.io/Portfolio/',
    },
    {
      title: 'Creative Designer',
      name: 'Person 2',
      description:
        "Hi, I'm Nivedita Kumar Londhe, a passionate Software Engineer currently pursuing a B.Tech in Electronics Engineering. With a strong foundation in programming and web development, I enjoy building user-centric applications and solving complex problems. I’m always eager to learn new technologies and bring creative ideas to life!",
      buttonLabel: 'Know More',
      image: person2Image, // Use imported image
      link: 'https://niveditalondhe.github.io/portfolio/',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="dark:bg-slate-900 dark:text-white bg-white min-h-screen mt-10 py-10">
      {/* About TechShelf Box */}
      <div className="dark:bg-slate-900 dark:text-white max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-16">
  <h1 className="text-5xl font-extrabold text-slate-800 mb-8 text-center dark:text-white">
    About <span className="text-pink-500">TechShelf</span>
  </h1>
  <p className="text-slate-600 text-lg leading-loose text-justify dark:text-white">
    Welcome to <span className="dark:text-white font-semibold text-pink-500">TechShelf</span>, a dedicated online bookstore created by final-year students of Walchand College of Engineering. Our goal is to provide a seamless platform for accessing books, catering to both college students and the general public.
  </p>
  <p className="text-slate-600 text-lg leading-loose text-justify mt-4 dark:text-white">
    TechShelf offers a versatile browsing experience, allowing anyone to explore a wide variety of books right from the homepage—no login required. For our fellow college students, logging in with your college email unlocks exclusive access to essential academic resources, including must-have titles like Java and Operating Systems textbooks.
  </p>
  <p className="text-slate-600 text-lg leading-loose text-justify mt-4 dark:text-white">
    Developed by a team of two passionate creators, TechShelf represents our vision of simplifying access to knowledge and empowering students with the tools they need for success.
  </p>
</div>

      {/* Team Section */}
      <div>
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-10 dark:text-white">
          There's More to Our Story
        </h2>
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 px-6 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center dark:bg-slate-900 dark:text-white rounded-md dark:border ">
              <img
                src={member.image} // Use imported image
                alt={member.name}
                className="w-72 h-80 object-cover "
              />
              <div className="p-6 text-center dark:text-white">
                <h3 className="text-xl font-bold text-slate-800 mb-2 dark:text-white">
                  {member.title}
                </h3>
                <p className="text-slate-600 mb-4 dark:text-white">{member.description}</p>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 btn btn-secondary text-white rounded-lg hover:bg-pink-600">
                    {member.buttonLabel}
                  </button>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default AboutPage;