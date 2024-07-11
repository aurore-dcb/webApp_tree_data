var count_trees = function (route) {
  fetch (window._env_.API_BASE_URL + route, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(response => {
    if (!response.ok) {
      console.log("ERROR fetch failed");
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

var routes = {
  '/trees/districts/count': function() { count_trees('/trees/districts/count') },
  '/trees/types/count': function() { count_trees('/trees/types/count') },
  // '/books/view/:bookId': viewBook
};

var router = Router(routes);

router.init();