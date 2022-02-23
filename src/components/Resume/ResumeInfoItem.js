import React from 'react'
import styled from 'styled-components'
import PText from '../PText'

const ResumeItemStyles =styled.div`

display : flex;
align-items : center;
justify-content : flex-start;
margin-top:3rem;
position: relative;
.title{
    font-size: 2rem;
    color: black;
}
.items{
    display: flex;
    gap: 2rem;
    position: absolute;
    left: 3rem;
    
}
.item{
    background-color:  #04202e;
    padding: 0.8rem;
    border-radius: 24px;
    font-size: 1.0rem;
    
}
@media only screen and (max-width:768px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items{
    position: initial;
    gap: 1rem;
}
.title{
    font-size: 1.5rem;
}
}


`;

export default function ResumeInfoItem({
    title ="this is title",
    items=["HTML","CSS","JS"]
}) {
  return (
    <ResumeItemStyles>
         <h1 className='title'>{title}</h1>
         <div className='items'>
             {items.map((item, index)=>(
                 <div className='item' key={index}>
                     <PText>{item}</PText>
                     </div>
             ))}
         </div>
    </ResumeItemStyles>
  )
}
