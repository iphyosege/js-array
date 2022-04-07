var array = ["Banana", "Apples", "Oranges", "Blueberries"];
//Remove the Banana from the array.
array.shift();
console.log(array); //["Apples", "Oranges", "Blueberries"];

//Sort the array in order.
array.sort();
console.log(array);

//Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array); //["Apples", "Oranges", "Blueberries", "Kiwi"];

// Remove "Apples" from the array.
array.shift();
console.log(array); //["Oranges", "Blueberries", "Kiwi"];

//Sort the array in reverse order.
array.reverse();
console.log(array); //["Kiwi", "Oranges", "Blueberries",  ];

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[2]); //"Oranges"
