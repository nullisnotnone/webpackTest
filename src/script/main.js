/**
 * Created by sunchuang on 2017/8/8.
 */

const greet = require("./greet.js");

let greetEle = document.querySelector("#root");
greetEle.appendChild(greet());
