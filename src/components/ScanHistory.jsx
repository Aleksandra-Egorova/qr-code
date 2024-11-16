//импортируем наш ключ SCAN_DATA из constants.js:
import { SCAN_DATA } from '../constants.js'; 

//импортируем бибилиотеку чтобы рядом с историей ссылок были и QR коды
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'); 

    return (
        // вывод массивов в реакте с помощью цикла map: map пробегается по массиву data и возвращает новый массив 
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    {/* код ниже показывает QR коды нишх ссылок из историии сканирования*/}
                    <QRCodeSVG value={text} size ={100}/>
                    </p>
            ))}
        </div>
    );
};

