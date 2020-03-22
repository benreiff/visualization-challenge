// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9
//                                                                     data.filter(function(d,i){ return i<10 })

// function filterTopTen(unit) {
//   return unit.sample_values < 10;
// }

// // 2. Use filter() to pass the function as its argument
// var filteredUnits = data.filter(filterTopTen);

// //  Check to make sure your are filtering your movies.
// console.log(filteredUnits);

// // 3. Use the map method with the arrow function to return all the filtered movie titles.
// var titles = filteredUnits.map(movies =>  movies.title);

// //  Check your filtered movie titles
// console.log(titles);

// // 4. Use the map method with the arrow function to return all the filtered movie metascores.
// var ratings = filteredUnits.map(movies => movies.metascore);

// //  Check your filtered metascores.
// console.log(ratings);


function randomNumbersBetween0and9() {
    var randomNumberArray = [];
    for (var i = 0; i < 10; i++) {
      var randomNumber = Math.floor(Math.random() * 10);
      randomNumberArray.push(randomNumber);
    }
    return randomNumberArray;
  }