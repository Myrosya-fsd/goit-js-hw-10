import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as c}from"./assets/vendor-A92OCY9B.js";function o(e){return String(e).padStart(2,"0")}function b(e){const h=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:h,hours:f,minutes:y,seconds:p}}let s=null,m=null;const t=document.querySelector("[data-start]"),a=document.querySelector("input#datetime-picker"),n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s<=new Date?(c.error({title:"Error",message:"Please choose a date in the future",position:"topRight",timeout:3e3}),t.disabled=!0):(c.success({title:"Success",message:"You have selected a valid date!",position:"topRight"}),t.disabled=!1)}};S(a,v);function l(){const e=s-new Date;if(e<=0){clearInterval(m),t.disabled=!1,a.disabled=!1;return}const{days:r,hours:d,minutes:i,seconds:u}=b(e);n.days.textContent=o(r),n.hours.textContent=o(d),n.minutes.textContent=o(i),n.seconds.textContent=o(u)}function g(){t.disabled=!0,a.disabled=!0,m=setInterval(l,1e3),l()}t.addEventListener("click",g);
//# sourceMappingURL=1-timer.js.map
