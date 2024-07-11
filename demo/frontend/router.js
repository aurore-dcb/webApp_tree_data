/** 
 *  Build the table "Nombre d'arbres par arrondissement" with the data fetched from the API
 *  @param {Array} data - The data from the API
 * 	@return {void}
 */
function buildTableArr(data) {
	// console.log(data);
	var table = document.getElementById("nb-trees-district");
	var tbody = table.getElementsByTagName("tbody")[0];
	while (tbody.rows.length > 0) {
		tbody.deleteRow(0);
	}
	for (let i = 0; i < data.length; i++) {
		var row = tbody.insertRow(-1);
		var cell_dist = row.insertCell(0);
		cell_dist.innerHTML = data[i].district;
		var cell_count = row.insertCell(1);
		cell_count.innerHTML = data[i].count;
	}
	table.style.display = "inline";
	document.getElementById("nb-trees-types").style.display = "none";
}

/** 
 *  Build the table "Nombre d'arbres par genre d'arbre" with the data fetched from the API
 *  @param {Array} data - The data from the API
 * 	@return {void}
 */
function buildTableTypes(data) {
	var table = document.getElementById("nb-trees-types");
	var tbody = table.getElementsByTagName("tbody")[0];
	while (tbody.rows.length > 0) {
		tbody.deleteRow(0);
	}
	console.log(tbody);
	for (let i = 0; i < data.length; i++) {
		var row = tbody.insertRow(-1);
		var cell_arr = row.insertCell(0);
		cell_arr.innerHTML = data[i].type;
		var cell_count = row.insertCell(1);
		cell_count.innerHTML = data[i].count;
	}
	table.style.display = "inline";
	document.getElementById("nb-trees-district").style.display = "none";
}

/** 
 *  Fetch the data from the API to count the number of trees for a category
 *  @param {String} route - The route to fetch the data from
 * 	@return {void}
 */
var count_trees = function (route) {
	fetch(window._env_.API_BASE_URL + route, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include'
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		if (route === '/trees/districts/count') {
			buildTableArr(data);
		} else if (route === '/trees/types/count') {
			buildTableTypes(data);
		}
	})
	.catch(error => console.error('Error:', error));
}

var routes = {
	'/trees/districts/count': function () { count_trees('/trees/districts/count') },
	'/trees/types/count': function () { count_trees('/trees/types/count') },
	// '/books/view/:bookId': viewBook
};

var router = Router(routes);

router.init();