import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../../assets/Images/17.jpg'

const ProjectItemStyles = styled.div`
.projectsitems-img{
    width :100%;
    height: 320px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid white;
    
    img{
        height: 100%;
    }
}
.projectitem-info{
    margin-top: 1rem;
    background-color: yellow;
    padding: 1rem;
    border-radius: 12px;
}
.projectitem-title{
    font-size: 1.4rem;
    color: darkblue;
    
}
.projectitem-desc{
    font-size: 1.3rem;
    font-family: "Poppins Regular";
    margin-top: 1rem;
    color: black;
}
@media only screen and (max-width: 768px){
    .projectsitems-img{
        height: 350px;
    }

}

`;
export default function ProjectsItems(
    {
        img = projectImg,
        title ='Project Name',
        desc = 'Lorem10',
    }
) {
  return (
  
      <ProjectItemStyles>
      <Link to="/projects" className="projectsitems-img">
          <img src={img} alt='project img' />
      </Link>
      <div className='projectitem-info'>
          <Link to='#'>
              <h3 className='projectitem-title'>{title}</h3>
          </Link>
          <p className='projectitem-desc'>
              {desc}
          </p>

      </div>
      </ProjectItemStyles>
      
  
  );
}

