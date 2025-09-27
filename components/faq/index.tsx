import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const CalendlyPopup = dynamic(() => import('../calendly'), { ssr: false, loading: () => null });
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
const Faq: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id); // Toggle open/close
  };

  const faqs: FAQItem[] = [
    {
      id: 0,
      question: 'What is Runopt?',
      answer:
        // 'Runopt is an innovative software solution that integrates layout, grading, drainage, and utilities into one large optimization problem driven by artificial intelligence. It aims to revolutionize the land development design process by drastically increasing design speed, reducing costs, and mitigating environmental impacts of development.',
        'Runopt is an AI-powered platform that enables developers, data center operators, and utilities to collaborate on site feasibility in real time. It combines 3D visualization, zoning, terrain, and utility insights to align stakeholders early in the planning process. Teams can score, compare, and export sites to make faster, informed development decisions.'
    },
    // {
    //   id: ,
    //   question:
    //     'How does Runopt differ from existing land development software like autograder?',
    //   answer:
    //     'Runopt integrates all components of design into one optimization problem. There are cases in which saving on cut and fill can increase costs in other aspects of construction: Runopt identifies this. This allows for synergies between variables and eliminates the need for time-consuming manual iterations.',
    // },
    {
      id: 1,
      question: 'Who can benefit from using Runopt? ',
      answer:
        // 'Runopt is designed for civil engineers, urban planners, developers, and construction firms. It is particularly valuable for those working on site development projects, from small-scale residential developments to large commercial or industrial sites. Additionally, stakeholders who prioritize ecological and environmental benefits, such as governments and NGOs, can also benefit from Runopt s sustainable design capabilities',
        'Runopt is an AI-powered platform that helps land developers and data center operators collaborate with utilities, regulators, and the public on site feasibility from the start. From small-scale residential developments to large commercial, data center, and industrial sites, it integrates 3D visualization, zoning, terrain, and utility data to make opportunities and constraints transparent. Teams can score, compare, and share sites to align stakeholders early, speeding up approvals and reducing costly redesigns.',
    },
    {
      id: 2,
      question: 'What kinds of projects can Runopt manage?',
      answer:
        // 'Runopt can handle most residential, commercial, transportation, and industrial projects. There are specific use cases that will come in later packages such as rail and agricultural.',
        'Runopt can handle most residential, commercial, transportation, and industrial projects, including a specific focus on data centers. There are specific use cases that will come in later packages such as rail and agricultural.',
    },
    // {
    //   id: 3,
    //   question: 'Can I choose to not automate any parts of the design?',
    //   answer:
    //     'Yes. You can either opt out of automating parts of design before running, or alter specific positions, grading, sizes etc. after optimization is done.',
    // },
    {
      id: 4,
      question:
        'What measures are in place to protect the privacy of the data I uploaded?',
      answer:
        'When it comes to the data you’ve uploaded, we prioritize data privacy. We encrypt data during transit (using HTTPS) and while at rest (in databases). You also have the option to delete any data you’ve uploaded at any time. Additionally, for larger companies, we offer assistance with local data storage.',
    },
  ];
  return (
    <div className="faq-container features-container" id='faqs'>
      <div className="title-text">
        <div className="title-big">
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
          Frequently<br/> Asked Questions
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
        </div>
      </div>

      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div className="faq" key={faq.id} onClick={() => toggleFAQ(faq.id)}>
              <div className="title">
                <div className="question">{faq.question}</div>

                <div className={`open-faq ${openFAQ === faq.id ? 'open' : ''}`}>
                  {openFAQ === faq.id ? (
                    <img src="./images/icons/minus.svg" alt="Collapse FAQ" />
                  ) : (
                    <img src="./images/icons/add.svg" alt="Expand FAQ" />
                  )}
                </div>
              </div>

              <div className={`answer ${openFAQ === faq.id ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          );
        })}

        <div className="contact-us">
          <img src="./images/contact.svg" alt="Contact illustration" />
          <h4>Still Got Questions?</h4>
          <p>Can’t find the answer you are looking for?</p>
            <CalendlyPopup />
        </div>
      </div>
    </div>
  );
};

export default Faq;
