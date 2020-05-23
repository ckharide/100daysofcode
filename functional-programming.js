// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
  
    // Only change code below this line
  
    // Use slice non mutation instead of splice . 
    var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;

    
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  var finalTabs1 = socialWindow
    .tabOpen().join(videoWindow.tabClose(2));
    console.log(finalTabs1.tabs);
  // Now perform the tab opening, closing, and other operations


  var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);
  

  var fixedValue = 4;
  function incrementer (val) {
    return val  + 1;
  }

  var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList , bookName) {
  var mybooklist = [...bookList]
  mybooklist.push(bookName);
  return mybooklist;
  
  // Change code above this line
}

// Change code below this line
// Mutation.
function remove (bookList, bookName) {
  var mybooklist = [...bookList]
  var book_index = mybooklist.indexOf(bookName);
  if (book_index >= 0) {

    mybooklist.splice(book_index, 1);
    return mybooklist;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(incrementer(fixedValue));

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const sublist = watchList.map(key => ({title: key["Title"], rating: key["imdbRating"]}));

console.log(sublist);
var filteredList;
filteredList = sublist.filter(x => (x.rating > 8.0));

// Only change code above this line

console.log(filteredList);

// non mutating concat , avoid push 
function nonMutatingConcat(original, attach) {
  var thirdarray = [...original];
  for(let i =0 ; i < attach.length ; i++) {
    thirdarray.push(attach[i]);
  }
  return thirdarray;

  // concat doesn't mutate original array. 
  //   return original.concat(attach);

  
}

function getRating(watchList){
  // Only change code below this line
  var averageRating;
  var temp = watchList.filter(x => (x["Director"] === "Christopher Nolan"));
  const sumofRating = temp.reduce((sum, user) => sum + parseFloat(user.imdbRating), 0);
  averageRating = sumofRating/temp.length;
  console.log(sumofRating);
  // Only change code above this line
  return averageRating;

  /*
  watchList.filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
  */
}

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 6];
console.log(nonMutatingPush(first, second));

  //thirdarray.join(attach);

var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

function nonMutatingSplice(cities) {
  // Only change code below this line
  let n = 3;
  return cities.slice(0,n);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


// Compute square of only positive integers. 
const squareList = (arr) => {
  return arr.filter(x => x > 0 && (typeof x == 'number' && (x % 1 === 0))).map(x => x * x);
  // Only change code above this line
/* reduce(func, initial valuee)
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []); */
};

function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a,b) {
  return a === b ? 0 : a < b ? -1 : 1;
});

  // Only change code above this line
}

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr.slice(0,arr.length).sort(function(a,b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
console.log("Original Mutated Array " + nonMutatingSort(globalArray));
var globalArray = [5, 6, 3, 2, 9];
console.log("Original Global " + globalArray);

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

function splitify(str) {
  // Only change code below this line
return str.split(/[^A-Za-z]/);

  // Only change code above this line
}

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  let localsplit = title.toLowerCase().split(" ").filter(x => (x.length > 0));
  return localsplit.reduce((str, join) => {
    if(str.length ==0 )
    return join;
    else
    return str + '-' + join;
  },[]);
  
}

// Every element
function checkPositive(arr) {
  // Only change code below this line
return arr.every(function(currentValue){
  return currentValue > 0;
});

}

// some element. 
function checkPositiveSome(arr) {
  // Only change code below this line
return arr.some(function(currentValue){
  return currentValue > 0;
});

}



console.log("Every Element " + checkPositive([1, -2, -3, 4, 5]));
console.log("Some Element " + checkPositiveSome([-1, 2, 3, 4, 5]));


//console.log(sentensify("May-the-force-be-with-you"));
//console.log(sentensify("The.force.is.strong.with.this.one"));
//console.log(splitify("This.is.a-sentence"));
console.log(urlSlug(" Winter Is  Coming"));
console.log(urlSlug(" Winter Is   Coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug("Hold The Door"));