
import React from "react";
import "./WhyChooseUs.css";
import icon1 from "../../../assets/images/whyChooseUs/Frame 189.png"
import icon2 from "../../../assets/images/whyChooseUs/Frame 190.png"
import icon3 from "../../../assets/images/whyChooseUs/Frame 191.png"
import icon4 from "../../../assets/images/whyChooseUs/Frame 192.png"
const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Convenience",
      description:
        "Effortlessly book, conveniently schedule, and manage your car repairs from your home.",
      icon: icon1, // Image for convenience
    },
    {
      title: "Trust and Safety",
      description:
        "Know your car is in good hands with vetted and trusted professionals.",
      icon: icon2, // Image for trust and safety
    },
    {
      title: "Time-Saving",
      description:
        "Skip the garage waits and get your car serviced at your convenience.",
      icon: icon3, // Image for time-saving
    },
    {
      title: "Cost Efficiency",
      description:
        "Compare quotes and choose the best service for your budget.",
      icon: icon4, // Image for cost efficiency
    },
  ];


  return (
    <section className="whyChooseUs">
      <div className="whyChooseUs__title">
      <h2>Why Choose CarCare?</h2>
      <p>
        Here’s what makes CarCare your go-to solution for <br /> hassle-free car
        maintenance.
      </p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="icon"><img src={benefit.icon} /></div>
            <div className="benefit__text">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;






