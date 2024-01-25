//Arrays Functions
//Array.length

let num=[10,20,30,40,50];
console.log(num.length);

//Array.length example 2

let len=['Lyba','Ayesha','Amna','Naveeda'];
console.log(len.length);

//To String Example 1

let str_array=['Corolla','City','Mehran','Move','Fortuner','Owdy'];

console.log(str_array.toString());

//To String Example 2

let str2=[1,2,3,4,5,6,7,8,9,10];

console.log(str2.toString());

//concat() String EX1

let array1=[2,4,6,8,10,12,14,16,18,20];
let array2=['Lyba','Laiba','Layba','Laeba'];
let array3=['a','b','c','d','e','f'];

console.log((array1).concat(array2).concat(array3));

//Concat() EX2

let array4=[1,3,5,7,9,11,13,15];
let array5=["Odd Numbers"];
let array6=["Mathematics Team"];

console.log((array4).concat(array5).concat(array6));

//join() EX1

let join_array=['Max','James','Sofia','Ballerina','Snowwhite','Elsa','Anna'];

console.log(join_array.join('+'));

//join() Ex2

let join_array2=[1,2,3,4,5,6,7,8,9,10];

console.log(join_array2.join('^'));

//Logic # 1

let word_array=['My','name','is','Lyba','.'];

console.log(`The sentence is: ${word_array.join(" ")}`);    //generate a proper sentence

//Logic # 2
//concat both lists

let list1=['A','B','C','D','E','F'];
let list2=['G','H','I','J','K','L'];

let combined_lists= (list1).concat(list2);
console.log(`The combined list of both arrays after concatination: ${combined_lists}`);

//Logic # 3
//To string conversion

let numeric_values=[0,1,2,3,4,5,6,7,8,9,10];

console.log(numeric_values.toString());

//Logic # 4
//array length

let data_array=[2,'Robert','Max','Plank','Bohr','a',50,'I'];

console.log(`The length of array is: ${data_array.length}`);

//Logic # 5
//join()

let names=['Haya,','Jahan,','Taliya,','Salar,','Imama,','and','Fateh'];

console.log(`Ni hao! ${names.join(' ')}`);

//array destructuring

let[Name1,Name2,Name3]=["Nobita","Shizuka","Sunyo"];

console.log(Name2);
console.log(Name1);