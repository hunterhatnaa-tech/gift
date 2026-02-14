import { useState } from "react";
import Confetti from 'react-confetti-boom';
import "./Envelope.css";
import Heart from './Heart.jsx';
import TrackPlayer from './TrackPlayer.jsx';

export default function Envelope() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="wrapper">
            {isOpen && <Confetti className="particle" mode="boom" shapeSize={25} y={0.5} particleCount={500} colors={['#ff577f', '#ff884b']}/>}
            <Heart />
            <div className={`wrapper ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="lid one"></div>
                <div className="lid two"></div>
                <div className="envelope">
                    <h6>To Namuun</h6>
                </div>
                <div className="letter">
                    <p>Сайн уу!</p>
                    <p>Энэ хариу захидлын очих өдрийн мэндийг хүргэе 😁</p>
                    <p>Юун түрүүнд надад баярлаж буй сэтгэлийг чинь би маш баяртайгаар хүлээн авлаа 🙂‍↕️</p>
                    <p>Цаашид өнгөрүүлэх хэцүү болон хөгжилтэй мөчүүдийг нэг нэгэндээ тустай, дэмтэй мөн ханьтай байх болно гэдэгт итгэлтэй байна.</p>
                    <p>Хэдий одоогоор хол байгаа ч чамд талархалснаа илэрхийлмээр байгаа учраас бэлэг бэлэглэлмээр байгаа тул энэхүү захидлыг дурын нэгэн амттаныхаа coupon 🎟️ болгоорой.</p>
                    <p>🍰🧁🥧</p>
                    <p>Хүндэтгэсэн, Хатанаа</p>
                </div>
            </div>
            <TrackPlayer/>
        </div>
    );
}

