
import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import ProjectsItems from './ProjectsItems';
import ProjectInfo from "../../assets/data/project"
const ProjectStyles =styled.div`

padding: 10rem 0;

.project-items{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;
  margin-top: 5rem;
  
}
.projects-searchbar{
  position: relative;
  width: 300px;
  margin-top: 5rem;
}
.projects-searchbar input{
  width: 100%;
  font-size: 1.5rem;
  padding: 0.6rem;
  color: black;
  border: 6px;
  outline: none;
  border: none;
}
.projects-searchbar .searchIcon{
  position: absolute;
  width: 2rem;
  right: 1rem;
}
.projects-searchbar .searchIcon path{
  color: black;
}
@media only screen and (max-width:768px) {
  .project-searchbar,
  .project-searchbar form,
  .project-searchbar input{
    width: 100%;
  }
  
}

`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState (ProjectInfo);
  
  useEffect(()=>{
    if(searchText==='') return;
    setProjectData(()=>
    
      ProjectInfo.filter(item=>
        item.name.toLowerCase().match(searchText.toLowerCase())
      ))

    
  },[searchText]);

  function handleChange(e){
    e.preventDefault();
    setSearchText(e.target.value);
    if(!e.target.value.length>0){
      setProjectData(ProjectInfo);
    }
  }
  return( 
  <>
  <ProjectStyles>
   
    <div className='container'>
      <SectionTitle 
      heading='Projects'
      subheading='Some of my recent Works'
      />
      <div className='projects-searchbar'>
        <form>
          <input type='text' 
          value={searchText}
          onChange={handleChange}
          placeholder="Project Name"
          />
          <MdSearch className='searchIcon'/>
        </form>
      </div>
      <div className='project-items'>
        {projectData.map((item) => (
        <ProjectsItems 
        key={item.id}
        title={item.name}
        desc={item.desc}
        img={item.img}
        />
        ))}
      </div>
    </div>
      
  </ProjectStyles>;
  </>
  );
}

