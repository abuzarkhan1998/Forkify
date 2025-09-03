import {TIMER_SECONDS} from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const returnJson = async function(url){
try{
// const res = await fetch(url);
const res = await Promise.race([fetch(url), timeout(TIMER_SECONDS)])
const data = await res.json();
console.log(data);
return data;
}
catch(err){
    throw err;
}
};