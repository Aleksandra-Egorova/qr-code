//научимся теперь читать qr код: чтобы читать qr код нужна ещё одна библиотека и мы ее установили
//Этот файл у нас еще один компонент для сканнера - этот компонент открывает камеру на нашем ноутбуке для сканирования 
import { Scanner } from '@yudiel/react-qr-scanner';

//из react импортируем хранилище useState:
import { useState } from 'react';

//подключаем css файл:
import s from './qrCodeScanner.module.css';

//импортируем наш ключ SCAN_DATA из constants.js:
import { SCAN_DATA } from '../../constants.js'; 

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue); //в консоли показывается ссылка по qr коду

    //ранее сканированные данные: так как по умолчанию в localStorage лежит пустое значение (null) и чтобы при певром сканировании нам вывелся сразу наш рещультат а не null пишем что prevData по умолчанию пустой массив || '[]' - в кавычках потому что есть JSON.parse
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    //JSON.parse чтобы конвертировать в массив

    //положим в хранилище значение:
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue]));
      //...prevData - значение из старого массива
      // [...prevData, result[0].rawValue] - то ест создали новый массив, в него вложили значение старого массива ...prevData и добавили новое значение result[0].rawValue


    //сканируем наш код, заходим в консоль раработчика, там Application, localStorage, наш сайт и види что в ключе scan_data и в значении ссылка на то что мы сканировали (https://vk.com/domvet)
    //[result[0].rawValue] - массив чтобы мы хранили все отсканированные коды в том числе и ранее отсканированные
    // пишем JSON.stringify чтобы массив грамотно сделался строкой

    //то есть localStorage возвращает строку JSON.stringify(...) и мы ее обратно конвертируем в массив JSON.parse(localStorage.getItem(SCAN_DATA) 
  };



  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        components={{
          audio: false, //чтобы сканировал без звука
          finder: false, //отключает красную область сканнера
        }}
        styles={{
          container: { width: 300 }, //изменим размер сканера:
        }}
      />
      {/* allowMultiple без всего означет что он true (allowMultiple={true} ) */}

      <p className={s.result}>{scanned}</p>
      {/* таким образом наша ссылка по отсканированному коду вывелась на странице */}
    </div>
  );
};

//В реакте есть такое понятие как Props это тож самое что атрибут
//В Props мы можем передавать и ф-ции и строки, числа, булевы значения
//Prop allowMultiple отвечает за то что мы сможем сканировать несколько раз один и тоже код


//после сканирования кода выводим инфу об объекта на экран