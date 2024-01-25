
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Img = () => {

 const[sta,setSta]=useState([])

 const[tra,setTra]=useState('')
  const data= async () =>{
        const da=await axios.get('https://fakestoreapi.com/products');

       setSta(da.data);
    }
   
   useEffect(()=>{
    data()
   },[]);

   console.log(tra)
  return (
    <Wrapper>
          <div className='pa'>
              <img src={tra}/>
          </div>
          <div className='chi'>
                {
                sta.map((a,b)=>{
                   // console.log(a)
                    return <div  className='docu' key={b}>
                        <img src={a.image} onClick={()=>setTra(a.image)}/>
                    </div>
                })
                }
          </div>
    </Wrapper>
  ) 
}

const Wrapper=styled.section`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 gap:10px;
 
 .pa{
 
  width:40%;
   
   height:300px;
   img{
    height:300px;
    width: 50%;
   }
 }

 .chi{
    scroll-behavior: smooth;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  gap:10px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      rem;
  .docu{
    border:1px solid;
    display: flex;
    justify-content: center;
    justify-items: center;
    width: 22%;
    height: 180px;
    
    

    img{
        width:100%;
        height: auto;
    }

  }

 }

`;
export default Img