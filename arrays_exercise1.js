const musketeers =["Athos", "Porthos", "Aramis"];

//for (let i=0; i < musketeers.length; ++i){
//    console.log(musketeers[i]);
//}
musketeers.push("D'Artagan")
console.log(musketeers[3]);
console.log(musketeers.length);

//musketeers.forEach(musketeer => {
//    console.log(musketeer);
//});

musketeers.splice(1, 2);

musketeers.forEach(musketeer => {
    console.log(musketeer);
});