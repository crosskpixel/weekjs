var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday","holiday"],binValue=[1,2,4,8,16,32,64,128],main={_calc:function(e){return e.reduce(function(e,n){var r=days.indexOf(String(n).toLowerCase());if(-1===r)throw new Error("Weeksjs::The given day is not supported\nVALUE INCORRECT="+n);return e+=binValue[r]},0)},_dayWeeks:function(){return days.reduce(function(e,n,r){return n=String(n),e[n]={bin:binValue[r]},e[n].value=!0,e},{})},getDaysOfWeek:function(){return days.map(function(e,n){return{day:e,value:binValue[n]}})},_intToWeek:function(e,n){if(e=Number(e),!Number.isInteger(e)||e>255||e<0)throw new Error("Week.js::Value must be in the range 0 to 255");var r=(255-e>>>0).toString(2).split("").reverse(),t=Object.keys(this._dayWeeks()).reduce(function(e,n,t){return e[n]=!parseInt(r[t]),e},{});return n&&n.array?Object.keys(t).map(function(e){var n={};return n.day=e,n.value=t[e],n}):t},_weekToInt:function(e){if(Array.isArray(e))return this._calc(e);if("object"==typeof e)return this._calc(Object.keys(e).filter(function(n){return e[n]}));throw new Error("Weeksjs::The given data type is not valid")},encode:function(e){return this._intToWeek(e)},decode:function(e){return this._weekToInt(e)}};export default main;
