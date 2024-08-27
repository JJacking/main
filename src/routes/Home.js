/* Home.js */
import React from 'react';
import BoardList from "./BoardList";
import img1 from '../image/dog_1.jpg';
import img2 from '../image/dog_2.jpg'
import img3 from '../image/dog_3.jpg'


const Home = () => {
  return (
    <div className='menubar'>
        <ul>
            <li>
                <a href='/board'>
                    <img src={img1} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img2} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img3} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img1} width='100%' />
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img2} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img3} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img1}  width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img2} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
            <li>
                <a href='/board'>
                    <img src={img3} width='100%'/>
                    <p>test</p>
                </a>
                <p>설명</p>
            </li>
        </ul>
    </div>
  );
};

export default Home;