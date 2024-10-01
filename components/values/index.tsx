import React from 'react';

const Values = () => {
  const values = [
    {
      id: 1,
      icon: '../images/icons/efficiency.svg',
      title: 'Efficiency',
      desc: 'Streamlining complex processes to save time and resources',
    },
    {
      id: 2,
      icon: '../images/icons/cost-2.svg',
      title: 'Cost Effective',
      desc: 'Optimized plans allow for more efficient use of resources, reducing waste',
    },
    {
      id: 3,
      icon: '../images/icons/insight.svg',
      title: 'Foresight',
      desc: 'Offering "What-If" analysis to anticipate unforeseen conditions',
    },
  ];
  return (
    <div className="values-container">
      <div className="title-text">
        <div className="title-big">
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
          Our Values
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
        </div>
      </div>

      <div className="values">
        {values.map((value) => {
            return (
                <div className="value" key={value.id}>
                    <img src={value.icon} alt="" />
                    <h5>{value.title}</h5>
                    <p>{value.desc}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Values;
