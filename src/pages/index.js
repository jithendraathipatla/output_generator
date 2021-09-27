import React from "react";
import { useState, useEffect } from "react"; 
import {css} from '@emotion/react';


const Page = ({ pageContext }) => {
  const [show, setshow] = useState(0);
  const [show1, setshow1] = useState(0);

  useEffect(() =>{
    console.log(pageContext.loginName);
  });
  
const handelFormSubmit = (event) =>{
  event.preventDefault();
  let windowsName = event.target.elements.windows.value;
  //console.log(windowsName);
  setshow(1);
  {pageContext.loginName === windowsName ? setshow1(1) : setshow1(2)}
}
  

  return <div css={globalStyle}>
    <div css={second}>
       <h2>Hitachi Form</h2>
       <br/>
       <br/>
       <form onSubmit={handelFormSubmit} id="myForm">
         
         <div>
          <input type="text" placeholder="Your Windows Login Name" name="windows" required/> <button className="blog_button">Submit</button>
         </div>
        <br/>
       <br/>
       <br/>
       <div css={show === 0 ? one : two}>
        <span css={show1 === 1 ? two : one}>Your Login is Successful</span>
        <span css={show1 === 2 ? three : four}>Please check your login!</span>
       </div>
    
       </form>
    </div>
  </div>
}

export default Page;

const three = css`
  display: block;
`
const four = css`
  display: None;
`
const one = css`
 display: none;
`

const two = css`
 display: block;
`

const globalStyle = css`
   margin: 10px 20%;
   padding:1px 30px 10px 30px;
   height:20%;
   box-shadow: 0px 0px 11px 1px rgb(0 0 0 / 25%);
   font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
`

const second = css`
  text-align: center;
`