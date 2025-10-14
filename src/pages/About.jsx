import React from 'react'
import FactsData from '../Api/countryData.json';
const About = () => {


  return (
    <>
     <div className="about-container">
      <div className="about-header">
        <h1>Here are the Interesting Facts we're proud of</h1>
      </div>

      <div className="card-container-box">
        <div className="card-container">
          {FactsData.map((data) => (
            <div key={data.id} className="card">
              <h2 className="card-title">{data.countryName}</h2>
              <p><span>Capital:</span> {data.capital}</p>
              <p><span>Population:</span> {data.population}</p>
              <p><span>Interesting Fact:</span> {data.interestingFact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
  )
}

export default About
