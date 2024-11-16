//внутри тега nav вместо того чтобы писать теги a мы будем использовать такое понятие как ссылка которая в React Router  представлена как компонент link 
//импортируем компонент который имитирует тег a
import { Link } from "react-router-dom";

//подключаем css файл:
import s from './Navigation.module.css';


export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать QR код</Link> 
            <Link to="/scan">Сканировать QR код</Link>
            <Link to="/generateHistory">История генерирования</Link>
            <Link to="/scanHistory">История сканирования</Link>
        </nav>
    );
};
//"/generate" и "/scan" см в файле main.jsx

//сделаем навигацию на всех страницах, а не только на главной