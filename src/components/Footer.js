import React from 'react'
import styled from 'styled-components'

const FooterStyles= styled.div`

.row{  
  color: yellow;
  font-size: 14px;
    width: fit-content; 
}
.container{
  margin-left: 0;
  margin-bottom: 1px;
}



`;

export default function Footer() {
  return (
    <FooterStyles>
        <div className="footer">
        <div className="container">          
          <div className="row">
            <div className="col text-center ">
              <p> &copy; All right reserved to Mst. Kamruna Jahan Konica</p>
            </div>
          </div>

        </div>
      </div>
    </FooterStyles>
  )
}
