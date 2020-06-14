// TASK 1
// var array1 = [];

// TASK 2
// var arr2 = ("");

// TASK 3
// var arr3 = ["Proud","Digital","Hub"]

// TASK 4
// var arr4 = [1,2,3,4,5,6,7,8,9,10]

// TASK 5
// var arr5 = [true,false];

// TASK 6
// var arr6 = ["Shujaat",false,5,true,3,"Romi"]

// TASK 7
// document.write("<h1>Qualifications:</h1>")
// var arr7 = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PHD"]

// for (var i=0; i<arr7.length ; i++){


//     document.write(i+1 +") "+arr7[i] +"<br>")
// }
// // TASK 8
// var name1 = prompt("Enter first student name")
// var name2 = prompt("Enter second student name")
// var name3 = prompt("Enter third student name")

// var arr8 = [name1,name2,name3]

// var score1 = prompt("Enter first student score")
// var score2 = prompt("Enter second student score")
// var score3 = prompt("Enter third student score")

// var arr9 = [score1,score2,score3]

// totalmarks = 500;

// var percen1 = (score1 / totalmarks) * 100;
// var percen2 = (score2 / totalmarks) * 100;
// var percen3 = (score3 / totalmarks) * 100;

// document.write("Score of "+ name1 + " is "+score1 + ". Percentage: "+ percen1 + "%<br>")
// document.write("Score of "+ name2 + " is "+score2 + ". Percentage: "+ percen2 + "%<br>")
// document.write("Score of "+ name3 + " is "+score3 + ". Percentage: "+ percen3 + "%<br>")


// TASK 9
// document.write("<h3>Array</h3>")

// var color = [,"Green","Brown","Red","Purple","Yellow"]

//     document.write(color)
// var color1 = prompt("What color you want to add at the beginning")

// color.unshift(color1);
// document.write("<h3>Updated Array</h3>")
// document.write(color)

// var color2 = prompt("What color you want to add at the end")

// color.push(color2);
// document.write("<h3>Updated Array</h3>")
// document.write(color)

// var color3 = prompt("What color you want to add at the beginning")
// var color4 = prompt("What color you want to add at the beginning")

// color.unshift(color3,color4);
// document.write("<h3>Updated Array</h3>")
// document.write(color)

// color.shift();
// document.write("<h3>Updated Array</h3>")
// document.write(color)

// color.pop();
// document.write("<h3>Updated Array</h3>")
// document.write(color)

// document.write("<h3>Updated Array</h3>")
// var index = +prompt("In which index you want to add the color ?")
// var indexcolor = prompt("Color name?")

// color.splice(index,0,indexcolor)
// document.write(color)


// document.write("<h3>Updated Array</h3>")
// var index = +prompt("In which index you want to delete the color ?")
// var indexcolor = +prompt("How many colors you want to delete ?")

// color.splice(index,indexcolor)
// document.write(color)

// TASK 10
// var scores = [320,230,480,120];
// document.write(" Scores of Students : "+scores+"<br>")
// document.write(" Ordered Scores of Students : "+scores.sort()+"<br>")

// TASK 11
// var arr = ["This ", " is ", " my ", " cat"]; 

// var check = "";
// for(var i=0; i<arr.length;i++){
//     check += arr[i] ;
// }

// document.write("<h3>Array:</h3>")
// document.write(arr)
// document.write("<h3>String:</h3>")

// document.write(check)

// TASK 11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write("<h2>Cities:</h2>")

// document.write(cities)

// var sliceCities = cities.slice(1,3)
// document.write("<h3>Selected Cities:</h3>")

// document.write(sliceCities)

// TASK 13

// var outputs = [ "keyboard","mouse","printer","moniter"]

// for (i=0  ; i <= outputs.length ; i++){
//     document.write("Output: "+ outputs.shift() + "<br>")
// }

// document.write("Output: "+ outputs.pop() + "<br>")

// TASK 14
// var outputs = [ "keyboard","mouse","printer","moniter"]

// for (i=outputs.length -1  ; i >= 0 ; i--){
//     document.write("Output: "+ outputs.splice(i,1) + "<br>")
// }
// TASK 15

// var cellPhone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write(" <select>")
// for(var i=0; i < cellPhone.length;i++){
//     document.write("<option value='Pakistan'>" + cellPhone[i]+ "</option>")
    
// }document.write("</select><br>")
