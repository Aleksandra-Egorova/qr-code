// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'

//импортируем для навигации react-router-dom
import { BrowserRouter } from "react-router-dom";

//воспльзуемся нашим компонентом Layout.jsx. импортируем из него ф-цию Layout
import { Layout } from './Layout';// так как в одной папке наши фалы лежат пишем так 
// ./ - в текущей директории есть Layout


//проверим что у нас импортировался данный Layout:
// console.log(Layout);


///описываем конфиг для навигации react-router-dom
// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element: <Layout/>,
//   },
//   //на основной странице будем рисовать какой-то текст
//   {
//     path: "/generate", //переадем путь по кот будет открываться наш компонент
//     element: <QrCodeGenerator/>,//это наш компонент
//   },
  //будем рисовать QrCodeGenerator, если пользователь зайдет на "/generate"

//   {
//     path: "/scan", //переадем путь по кот будет открываться наш компонент
//     element: <QrCodeScanner/>,//это наш компонент
//   },
 //будем рисовать QrCodeScanner, если пользователь зайдет на "/scan"
// ]);

//вместо выше написанного конфига будем вызывать BrowserRouter

//в html есть <div id="root"></div> и втсаляем туда весь наш код который в ф-ции render мы будем писать
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
) 

