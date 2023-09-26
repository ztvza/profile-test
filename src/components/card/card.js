import React from 'react';
import './card.css';
import card_img_UX from "../../img/card_img_UX.png";
import card_img from "../../img/card.png";

const Card = () => {
    return (
            <div className="card">
                <div className="yellow_сards -bottom" id="yellow_сards">

                    <div className="cards_item">
                        <h3 className="card_title">UX/UI</h3>
                        <img className="card_img" src={card_img_UX} alt=""/>
                        <p className="card_txt">
                            Так же я отлично умею работать с Figma, цветами и пользовательским интерфейсом, помогу определиться с основными технологиями необходимыми в сайте и создать интересное дизайнерское и программное решение.
                        </p>
                    </div>

                    <div className="cards_item">
                        <h3 className="card_title">Web-Develop</h3>
                        <img className="card_img" src={card_img} alt=""/>
                        <p className="card_txt">
                            Я могу создать рабочий сайт, лендинг, который будет полностью соответствовать вашим требованиям и условиям. Обладающим всеми последними решениями в сфере web разработки и дизайна.
                        </p>
                    </div>

                    <div className="cards_item">
                        <h3 className="card_title">Communication</h3>
                        <p className="card_txt">
                            Имею отличный опыт коммуникации с людьми, явлюсь капитаном сборной вуза и отлично нахожу подход к людям, умею подстраиваться под ситуацию и учиться новому опыту. Я помогаю людям по мере своих знаний, и не отказываюсь от помощи и советов, всегда готов прислушаться к человеку и принять его точку зрения.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Card;