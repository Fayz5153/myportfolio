import React, { Component } from 'react';
import "./about.css"

class Aboutme extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="about_asos">
                    <div className="h1">
                        <h1>Men Haqimda</h1>
                    </div>
                    <div className="about_me">
                        <p data-aos="fade-up" data-aos-duration="1500" className="fio"><span className="spanfio">FIO:</span> Fayzullo Mo'ydinjonov Ixvoliddin o'gli</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">Men Front-end dasturlash yonalishida 2020 yildan beri faoliyat yuritaman.</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">Bu sohaga qiziqishim Akdemik Litsyda o'qigan vaqtimda Informatika fanida html tili mavzusini otganimizda qiziqib qolganman.</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">O'sha vaqtda bu sohaga oid darslik yoki mukammal bilim bera oladigon o'qituvchi topa olmaganman va bu qiziqishni chetga surib boshqa yonalishdan bordim.</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">2012-2019 yilgacha telefon tuzatadigon usta bolib ishladim lekin bu sohaga qiziqish hali so'nmagan edi.</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">2020 yilga kelib Andijonda Raqamli shaxar ochildi va Web dasturlash kurslariga yozildim va o\rganishni boshladim.</p><br/>
                        <p data-aos="fade-up" data-aos-duration="1500">Shundan beri men asosiy etiborimni qulay, sodda, ishonchli,<br/>va yoqimli estetikaga ega saytlarni yaratishga harakat qilmoqdaman.</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Aboutme;