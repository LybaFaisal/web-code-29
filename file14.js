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

//Similar example

let fruits=["Apple","Mango","Pear"];
let[Fruit1,Fruit2,Fruit3]= fruits;

console.log(Fruit2);
console.log(Fruit1);

//Example 3
// swapping:

let num1= 6;
let num2= 7;

[num1,num2]=[num2,num1];

console.log(num1,num2);

//skipping Elements

let coordinates= [10,20,30,40,50,60,70];
let[x,y, ,a,b, ,d]=coordinates;

console.log(x,y,a,b,d);

//Rest / spread operator  (...)

let colors= ["red","yellow","green","purple","pink","black"];

let [primary, ...secondary]=colors;

console.log(primary);
console.log(secondary);

//Ignoring elements using Rest Op

let[head, , , ...tail]=[10,2,3,20,30,40,50];
//ignoring 2,3

console.log(head);
console.log(tail);

//Assignment From Chatgpt
//Array manipulation with push & pop

let Array=[];
Array.push(2);
Array.push(4);
Array.push(6);
Array.push(5);
Array.push(7);

console.log("The wrong order of Odd Numbers:");
console.log(Array);

console.log("The correct order of Odd Numbers:");
Array.pop();
Array.pop();
console.log(Array);

//Q#2
//Shifting & Unshifting Elements

let characters=['a','b','c'];

console.log("The three characters in the array are:");
console.log(characters);

console.log("The new character at the start is:");
characters.unshift('new character');
console.log(characters);

characters.shift();
console.log("Modified array:");
console.log(characters);

//Q#3
//Splice & Concatenation

let vector1=[10,20,30];
let vector2=[40,50,60];

console.log(vector1);
vector1.splice(0,2,40,50);

console.log("After splicing vector 1 becomes:");
console.log(vector1);

console.log("After concatenating both vectors:");
console.log((vector1).concat(vector2));

//q#4
//joining array elements

let breakfast= ["Water","Milk","Sugar","Bread","Egg"];

console.log(breakfast.join('+'));

//Q#5
//ToString & Concatenate

let table1=['a','b','c','d'];
let table2=['e','f','g','h'];

console.log(table1.toString());
console.log(table2.toString());

console.log((table1).concat(table2));

//Q#6
//Swapping Using Array Destructuring

let i= 4;
let j= 5;

[i,j]=[j,i];
console.log(i,j);

//Q#7
//Ignoring Values with Array Destructuring

let points=[1,2,3,4,5,6,7];

let[p,q,r, , ,u,v]=points;

console.log(p,q,r,u,v);

//Q#8
//Rest Parameter with Array Destructuring

let Novels=["JKP","Mushaf","Peer-e-Kamil","Maala","Namal","Ab-e-Hayat"];

let [first,second, ...Others]=Novels;

console.log(first,second);
console.log(Others);

//Q#9
//String Array Transformation

let word_str=["word1","word2","word3"];

console.log("Initial string:");
console.log(word_str);
word_str.splice(1,1,"New Word");

console.log("String after the replacement:");
console.log(word_str);

console.log("Array after using ToString Method");
console.log(word_str.toString());