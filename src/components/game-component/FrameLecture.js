import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default  class FrameLecture extends Component {
    render() {
        return (
            <div className="frame">
                <div className='contentFrame'>
                    <h1>Вас вітає бортовий комп'ютер ЕР-К-Р.1970</h1>
                    <h1>Вхідна лекція. Задачі та етапи розвитку Схемотехніки</h1>
                    <p>
                        Схемотехніка є спадкоємницею технічної електроніки і її задачею є ство-рення пристроїв і приладів для перетворення електромагнітної енергії, пере-давання, оброблення та зберігання інформації. Внаслідок досягнень схемо-техніки промисловість випускає радіоелектронну апаратуру (РЕА) для зв’язку, автоматики, телебачення, радіолокації, навігації, обчислювальної техніки, систем керування технологічними процесами, світлотехніки, інфрачервоної техніки, рентгенотехніки тощо.
                        Весь період розвитку схемотехніки можна поділити на чотири нступних покоління: <br/>
                        – схемотехніка на електровакуумних електронних приладах;<br/>
                        – схемотехніка на напівпровідникових приладах;<br/>
                        – схемотехніка на інтегральних мікросхемах;<br/>
                        – схемотехніка на функціональних вузлах.<br/>
                        Перше покоління схемотехніки зв’язку починається з 1896 р., тобто часу винаходу російським вченим О.С. Поповим радіо. У зв’язку з цим (...)
                    </p>
                    <Link to="/lecture">
                        <h1>Перейти до повної лекції</h1>
                    </Link>
                </div>
            </div>
        )
    }
}