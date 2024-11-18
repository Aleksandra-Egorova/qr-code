import { Routes, Route} from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';


//Чтобы создать компонент мы создаем обычную стрелочную фцию: и эта ф-циия ьудет возвращать наш див с текстом тест
//Экспортируем наш компонент для использования в файле main.jsx
//можно написать так: export Layot = () => {
const Layout = () => {
    return (
    <div>
        <Navigation/>

        <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />}/>
        <Route path="/qr-code/scan" element={<QrCodeScanner />}/>
        <Route path="/qr-code/scanHistory" element={<ScanHistory />}/>
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />}/>
      </Routes>

    </div>
    );
};
//таким образом навигация есть на всех страницах и по всем линкам переходит корректно

//а можно так:
export { Layout };
//это означает что этой ф-цией Layot могут пользоваться др файлики



//<Route path="/generate" element={<QrCodeGenerator />}> - есди переходим на /generate у нас рисуется генератор кода
//<Route path="/scan" element={<QrCodeScanner />} - если переходим на /scan то рисуется сканироващик кода