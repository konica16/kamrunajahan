import React from 'react';
import SectionTitle from '../SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {Navigation} from "swiper"
import project from '../../assets/data/project';
import ProjectsItems from './ProjectsItems';
import styled from 'styled-components';
import 'swiper/css/bundle';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div `

padding: 10rem 0;

.project-items{
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
  
}
.swiper-container{
  padding-top: 8rem;
  max-width: 100%;
  
}
.swiper-button-prev,
.swiper-button-next{
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: yellow;
  z-index: 10;
  right: 60px;
  left: auto;
  top: 0;
  transform: translateY(50%);
  color: black;
  border-radius: 8px;

}
.swiper-button-next{
  right: 0;
}
.swiper-button-prev ::after,
.swiper-button-next ::after{
  font-size: 2rem;
}
@media only screen and (max-width: 768px) {
  .project-items{
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
  }
  .projectsitems-img{
    width: 100%;
      }
  
}
`;

export default function ProjectSection() {
  return (
  <ProjectSectionStyle>
    <div className='project-container'>
      <SectionTitle heading='Projects' subheading='Some of my recent works'/>
      <div className='project-items'>
        <Swiper spaceBetween={30} slidesPerView={1} navigation
        breakpoints={
          {
            640 : {
              slidesPerView : 1,
            },
            768 : {
              slidesPerView : 2,
            },
            1200 : {
              slidesPerView : 3,
            }
            
          }
          
        }>
          {project.map((project , index) => {
            if(index>=3) return;
            return (
            <SwiperSlide key={project.id}>
              <ProjectsItems 
              title={project.name}
              img={project.img}
              desc = {project.desc}
              />
            </SwiperSlide>
            )
          })}

        </Swiper>

      </div>
    </div>
  </ProjectSectionStyle>
  );
}

