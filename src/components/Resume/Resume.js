import React from "react";
import PText from "../PText";
import ResumeImg from "../../assets/Images/resumepic.jpg";
import styled from "styled-components";
import ResumeInfoItem from "./ResumeInfoItem";
import ContactBanner from "../ContactMe/ContactBanner";
import SectionTitle from '../SectionTitle';



const ResumeStyles = styled.div`

padding:20rem 0 10rem 0;
margin-top: 4rem;
.top-section{
  display:flex ;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}
.left{
  flex: 3;
}
.right{
  flex: 2;
}
.resume-subheading{
  font-size: 2rem;
  margin-bottom: 2rem;
  span{
    background-color: lightskyblue;
    padding: 0.5rem;
    border-radius: 8px;
    
  }
}
.resume-heading{
  font-size: 2.6rem;
  margin-bottom: 3rem;
}
.resume-info{
  margin-bottom: 4rem;
  .para{
    max-width: 100%;
  }
}
.right{
  img{
    border:2px solid white;
    width: 90%;
    height: 90%;
  }
}
.resume-info-items{
  margin-top: 15rem;

}
.resume-info-item{
  margin-bottom: 10rem;

}
.resume-info-heading{
  font-size: 20px;
  color: yellow;
  text-transform: uppercase;
}
.highlighted-btn {
  color: black;
  border: 2px solid linen;
  font-size: 14px;
  background-color:yellow ;
  
}
.highlighted-btn:hover {
  color: aliceblue;
  border: 2px solid red;
  }

  .items{
    position: relative;
  }


@media only screen and (max-width:768px){

  
  padding: 18px 0;
  .top-section{
    flex-direction: column;
    gap: 5rem;
    }
    .resume-subheading{
      font-size: 1.8rem;

    }
    .resume-heading{
      font-size: 2.8rem;
      
    }
    .resume-info-heading{
      font-size: 3rem;
    }

  }

`;

export default function Resume() {
  return (
    <>
    <ResumeStyles>
      <div className="container">
      <SectionTitle 
              
              heading ='My Resume'
              subheading="This is me"
             />
        <div className="top-section">
          <div className="left">
            <p className="resume-subheading">
              Hi, I'm <span>Mst. Kamruna Jahan Konica</span>
            </p>
            <h2 className="resume-heading">Web Developer</h2>
            <div className="resume-info">
              <PText>
                Innovative,seasoned,forward-looking web designer.Proficient in writing and testing codes.Passion in creating new features in website.Seeking a beginner role to enhance and explore my technical knowledge gained at my educational institution in the last 5 years.A self-driven attitude, willingness to learn and a strong presence of mind.Optimistic, confident and benevolent.Energetic, devoted, sincere and hardworking.   
                
              </PText>
            </div>
            <a href="Kamruna Jahan.pdf" download="Kamruna Jahan.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
           
          </div>
          <div className="right">
            <img src={ResumeImg} alt="Konica " />
          </div>
        </div>
        <div className="resume-info-items">
          <div className="resume-info-item">
            <h1 className="resume-info-heading">
              Education
            </h1>
            <ResumeInfoItem 
            title="School"
            items={["Safiuddin Sarker Academy & College,Tongi,Gazipur"]}
            />
            <ResumeInfoItem 
            title="College"
            items={["Milestone College,Uttara,Dhaka"]}
            />
            <ResumeInfoItem 
            title="Varsity"
            items={["North South University,Basundhora,Dhaka"]}
            />
          </div>

          <div className="resume-info-item">
            <h1 className="resume-info-heading">
              My Skills
            </h1>
            <ResumeInfoItem 
            title="FrontEnd"
            items={["HTML",'CSS','JavaScript','React']}
            />
            <ResumeInfoItem 
            title="Database"
            items={["MySql"]}
            />
            <ResumeInfoItem 
            title="Others"
            items={["Powerpoint"]}
            />
          </div>

          <div className="resume-info-item">
            <h1 className="resume-info-heading">
              Experiance
            </h1>
            <div className="experiance">
            <ResumeInfoItem 
            title="1"
            items={["RESEARCH/THESIS PAPER - Real Time Monitoring and Control Process of Bio-fuel Production Using Biodegradable Waste. Supervisor-Dr. Shahnewaz Siddique, Assistant Professor, ELECTRICAL AND COMPUTER ENGINEERING,NORTH SOUTH UNIVERSITY."]}
            />
            <ResumeInfoItem 
            title="2"
            items={["Tution - I have experience of 3 years for tutoring from 3rd grade to 6th grade student from 2015 to 2018 for paying my tuition fees."]}
            />
            

            </div>
            
          </div>


        </div>
      </div>
      <ContactBanner/>
      
    </ResumeStyles>
    </>
  );
}

