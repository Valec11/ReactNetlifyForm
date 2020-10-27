import React from 'react';
import './PortfolioProject'

const Intro = () => {

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })




    return (
        <div className="intro-container">
            <ul className="tabs">
                <li data-tab-target="#home" >
                    <a href="#home">About</a>
                </li>
                <li data-tab-target="#skills" class="tab">
                    <a href="#skills">Education & skills</a>
                </li>
                <li data-tab-target="#projects" class="tab">
                    <a href="#form">Contact</a>
                </li>
            </ul>



            <div className="intro">
                <h1>Hello,</h1>

                <h3>
                    My name is <mark>Chaddy Valerio</mark> A web developer based in NY.
        </h3>
                <div className="links">
                    <a href="#projects"><button className="vw-btn" > View My Work</button></a>

                </div>
            </div>

        </div>


    )
}

export default Intro;





