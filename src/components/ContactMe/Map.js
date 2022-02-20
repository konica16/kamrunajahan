import React from 'react'
import styled from 'styled-components'
import PText from '../PText'
import MapImg from '../../assets/Images/mapimg.PNG'

const MapStyles = styled.div`

background: url(${MapImg}) no-repeat ;
background-position: center;
background-size: cover;
min-height: 250px;

.container{
    position: relative;
    min-height: 300px;
    margin-bottom: 5rem;
}
.map-card{
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: yellow;
    width: 100%;
    max-width: 350px;
    border-radius: 12px;
    }
    .map-card-heading{
        font-size: 1.8rem;
        margin-bottom:1rem ;
    }
    .map-card-link{
        display: inline-block;
        font-size: 1.2rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    .para{
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map-card {
      max-width: none;
      right: auto;
    }
  }

`;

export default function Map() {
  return (
    <MapStyles>
        <div className='container'>
            <div className='map-card'>
                <h3 className='map-card-heading'>
                    Here is me
                </h3>
                <PText>Tongi, Dhaka,Bangladesh</PText>
                <a href='https://www.google.com/maps/place/Tongi/@23.9067212,90.3572587,13z/data=!3m1!4b1!4m5!3m4!1s0x3755c4488706e2d9:0xee45004fa6ba8d03!8m2!3d23.9010413!4d90.4088223' 
                 target="_blank"
                 rel='noreferrer'
                 className='map-card-link'
                >
                    Open in Google Map</a>
            </div>
        </div>
    </MapStyles>
  )
}
