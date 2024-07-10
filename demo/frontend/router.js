var trees = function () { 
  console.log("trees");
  fetch ('http://localhost:8081/api/tree/types', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
var author = function () { console.log("author"); };
var books = function () { console.log("books"); };
var viewBook = function (bookId) {
  console.log("viewBook: bookId is populated: " + bookId);
  fetch ('http://localhost:8081/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
};
var routes = {
  '/trees': trees,
  '/author': author,
  '/books': [books, function() {
    console.log("An inline route handler.");
  }],
  '/books/view/:bookId': viewBook
};
var router = Router(routes);
router.init();