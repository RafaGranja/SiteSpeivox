import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


setInterval(function(){

 $(".cardItem").each(function(){
    if(isScrolledIntoView($(this))){
      $(this).addClass("hover")
    }
    else{
      $(this).removeClass("hover")
    }
 })

},1)

function isScrolledIntoView(elem)
{
var docViewTop = $(window).scrollTop();
var docViewBottom = docViewTop + $(window).height();

var elemTop = $(elem).offset().top;
var elemBottom = elemTop + $(elem).height();

return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

