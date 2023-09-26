import React from 'react';
import './HomePage.css';
import '../../bace/container.css';
import aboutMe from '../../img/aboutMe_img.PNG';

const HomePage = () => {
    return (
        <div className="container">
            <div className="homePage">
                <div className="homePage_txt">
                    <p className="homePage_subtitle">Frontend Developer</p>
                    <h1 className="homePage_title">Привет, я <span className="colortext">Захар </span>Дорошенко из СПб</h1>
                </div>
                <div className="homePage_items">
                    <h2 className="homePage_items_title">PORTFOLIO</h2>
                </div>
            </div>

            <div className="aboutMe">
                <img src={aboutMe} alt="" className="aboutMe_img"/>

                <div className="aboutMe_info">
                    <h3 className="aboutMe_title">Обо мне</h3>
                    <p className="aboutMe_txt">Привет, меня зовут Захар, я начинающий программист из СПб. Я учусь в БГТУ "ВОЕНМЕХ", по направлению информационные системы и технологии(программная инженерия). Еще до вуза я стал изучать Web разработку и учиться панорамированию. На данный момент, у меня уже накопилось определенное количество знаний которые, могу пригодиться в компании. Я думаю, что работа в команде поможет мне стать лучше как программисту научиться новому и стать более перспективным Frontend разработчиком.</p>

                    <h4 className="aboutMe_title_subtitle">Skills</h4>
                    <ul className="aboutMe_skills">
                        <li className="aboutMe_skills_items">React</li>
                        <li className="aboutMe_skills_items">Js</li>
                        <li className="aboutMe_skills_items">SCSS</li>
                        <li className="aboutMe_skills_items">HTML</li>
                        <li className="aboutMe_skills_items">Figma</li>
                        <li className="aboutMe_skills_items">Bootstrap</li>
                        <li className="aboutMe_skills_items">Node.js</li>
                        <li className="aboutMe_skills_items">БЭМ</li>
                    </ul>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </div>
            </div>

        </div>
    );
};

export default HomePage;