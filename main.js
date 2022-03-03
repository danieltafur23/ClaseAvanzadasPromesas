// let promise = new Promise(function(resolve, reject){
//     //setTimeout(()=> resolve("OK"), 2000)
//     //resolve("Esitoso");
//     //reject(new Error("Ahhhhhhh"));
//     setTimeout(()=> resolve("Finalizado"), 5000);
// });
// // promise.then(
// //     function(result){},
// //     function(error){}
// // )
// promise.then(
//     result => alert(result),
//     error => alert(error)
// )

new Promise((resolve, reject) => {
    //Hacer algo

})
.finally(()=> stop loading indicator)
.then(result => show result, err => show error)