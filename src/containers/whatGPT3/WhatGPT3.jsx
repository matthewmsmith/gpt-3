import React from "react";
import Feature from '../../components/feature/Feature'
import "./whatGPT3.css";

const featureData = [ 

 {
  title:'Chatbot', 
  text: 'A chatbot is a software or computer program that simulates human conversation or through text or voice interactions. Users in both business-to-consumer and business-to-business environments increasingly use chatbot virtual assistants to handle simple tasks.'
 },
 {
  title: 'Knowledgebase',
  text:' A knowledge base in artificial intelligence aims to capture human expert knowledge to support decision-making, problem-solving, and more.'
 }, 
 {
  title:'Education',
  text:'We host lectures monthly to teach the youth about Artificial Intelligence.'
 },
]
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
      <Feature title='What is GPT-3'
    text = 'We are creating the future of AI: building devices now that have the potential to help people, and inventing new technologies that could expand our abilities, our community, and our world.' />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
