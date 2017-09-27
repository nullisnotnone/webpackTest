/**
 * Created by sunchuang on 2017/8/8.
 */

module.exports =  function(){
    let parEle = document.getElementById("txt");
    parEle.textContent = 'hello webpack!';
    return parEle;
};



// export function greet(){
//     let parEle = document.getElementById("txt");
//     parEle.textContent = 'hello webpack!';
//     return parEle;
// }