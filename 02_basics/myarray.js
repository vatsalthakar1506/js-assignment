// const myArr = [0, 1, 2, 3, 3, 45, 6]


// const newArr = myArr.join()

// console.log(newArr);
 

const marvel_heros = ["thor", "IronMan", "Spiderman"]

const dc_heros = ["superman", "flash", "batman","TEMP"]

// marvel_heros.push(dc_heros)

// const temp = marvel_heros.concat(dc_heros)


// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


const another_array =  [1, 2, 3, 4, 5, [4, 5, 6], 7, [6, 7, 8, [99, 104]] ]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


Array.isArray("vatzzz")



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));