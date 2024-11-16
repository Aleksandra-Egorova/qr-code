import { QRCodeSVG } from 'qrcode.react';

//импортируем наш ключ GENERATE_DATA из constants.js:
import { GENERATE_DATA } from '../constants';

//подключаем css файл:
import s from './qrGenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'); 

    return (
        // вывод массивов в реакте с помощью цикла map: map пробегается по массиву data и возвращает новый массив 
        <div className={s.container}>
            {data.map((text) => (
                <p key={text} className={s.text}>
                    {text}
                    {/* код ниже показывает QR коды нишх ссылок из историии сканирования*/}
                    <QRCodeSVG value={text} size ={100} marginSize={40}/>
                    </p>
            ))}
        </div>
    );
};