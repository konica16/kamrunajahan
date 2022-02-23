import React, { useState } from 'react'
import styled from 'styled-components';
//import emailjs from 'emailjs-com'

const FormStyle = styled.form`
width: 100%;
background-color: #04202e;
text-align: center;
/* background-image:"url('https://www.google.com/search?q=images+for+website+background&sxsrf=APq-WBtxUJJbw2NbplO3ePGTJJp_qivSTg:1645180167409&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZ6eDbhYn2AhUj73MBHWjZBpwQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=70nrGpfEpxY1gM')" ;
background-position: center; */
.form-group{
    width: 100%;
    margin-bottom: 2rem;
    
}
label{
    font-size: 1.5rem;
    color: white;
}
input,
textarea{
    width: 100%;
    font-size: 1.7rem;
    padding: 0.7rem;
    color: #111;
    background-color: yellow;
    border: none;
    outline: none;
    border-radius: 8px;
    margin-top: 1rem;
}
textarea{
    min-height: 200px;
    resize: vertical;
}
button[type="submit"]{
    background-color: yellow;
    color: var(--black);
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 24px;
    cursor: pointer;
}
button[type="submit"]:hover{
    background-color:white ;
    color: black;
}

`;

export default function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');



    // function sendEmail(e){
    //     e.preventDefault();

    // emailjs.sendForm('service_0a23cmn',
    // 'template_q67r0mq',
    // e.target,
    // "user_8JCxjsux7k76eRQz0He5e").then(res=>{
    //     console.log(res);
    // }).catch(err=>console.log(err));

    // }
  return (
    
        <FormStyle >
            <div>
            <div className='form-group'>
                <label htmlFor='name'>
                    Your Name 
                    <input type="text" id='name'
                    name='name' value={name} required
                    onChange={(e)=>setName(e.target.value)}
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='email'>
                    Your Email 
                    <input type="text" id='email'
                    email='email' value={email} required
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='message'>
                    Your Message 
                    <textarea type="text" id='message'
                    message='message' value={message} required
                    onChange={(e)=>setMessage(e.target.value)}
                    />
                </label>
            </div>
            <button type='submit'>Send</button>
        
            </div>
        </FormStyle>

   
  )
}
