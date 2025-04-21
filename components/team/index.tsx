import React from 'react';

const Team = () => {
  // const founders = [
  //   {
  //     id: 1,
  //     img: '../images/team/Quinn.png',
  //     name: 'Quinn Gangadharan',
  //     jobTitle: 'CEO of Runopt',
  //   },
  //   {
  //     id: 2,
  //     img: '../images/team/Skye.png',
  //     name: 'Skye Zhou',
  //     jobTitle: 'COO of Runopt',
  //   },
  //   // {
  //   //   id: 3,
  //   //   img: '../images/team/Rahul.jpg',
  //   //   name: 'Rahul Pillalamarri',
  //   //   jobTitle: 'CTO of Runopt',
  //   // },
  //   {
  //     id: 3,
  //     img: '../images/team/rohan.png',
  //     name: 'Rohan Bhalla',
  //     jobTitle: 'Founding Engineer',
  //   },
  // ];

  const teamMembers = [
    {
      id: 1,
      img: '../images/team/Quinn.png',
      name: 'Quinn Gangadharan',
      jobTitle: 'CEO of Runopt',
    },
    {
      id: 2,
      img: '../images/team/Skye.png',
      name: 'Skye Zhou',
      jobTitle: 'COO of Runopt',
    },
    // {
    //   id: 3,
    //   img: '../images/team/Rahul.jpg',
    //   name: 'Rahul Pillalamarri',
    //   jobTitle: 'CTO of Runopt',
    // },
    {
      id: 3,
      img: '../images/team/rohan.png',
      name: 'Rohan Bhalla',
      jobTitle: 'Founding Engineer',
    },
    {
      id: 4,
      img: '../images/team/Vikrant.png',
      name: 'Vikrant Khedar',
      jobTitle: 'Software Engineer',
    },
    {
      id: 5,
      img: '../images/team/kay.jpg',
      name: 'Olakunbi Olabode',
      jobTitle: 'Frontend Engineer',
    },

    {
      id: 7,
      img: '../images/team/George.png',
      name: 'George El-Hachem',
      jobTitle: 'Software Engineer',
    },
    {
      id: 8,
      img: '../images/team/akshat.png',
      name: 'Akshat Saini',
      jobTitle: 'Founding Engineer',
    },
  ];
  return (
    <div className="team-container">
      <div className="title-text">
        <div className="title-big">
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
          Meet the team
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
        </div>

        <div className="desc">
          We bring a wealth of experience from a wide range of backgrounds
        </div>
      </div>

      {/* <div className="founders">
        {founders.map((member) => {
          return (
            <div className="member" key={member.id}>
              <img src={member.img} alt="" />
              <div className="title">
              </div>
              <h5>{member.name}</h5>

              <div className="job-title">{member.jobTitle}</div>
            </div>
          );
        })}
      </div> */}

      <div className="members">
        {teamMembers.map((member) => {
          return (
            <div className="member" key={member.id}>
              <img src={member.img} alt="" />
              <div className="title">
                <h5>{member.name}</h5>
              </div>

              <div className="job-title">{member.jobTitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
