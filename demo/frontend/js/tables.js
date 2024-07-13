/**
 * Show the homepage
 * @return {void}
 */
function showHomepage() {
    let place = document.getElementById("table-place");
    place.style.backgroundColor = "whitesmoke";
    if (place) {
        var children = place.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "none";
        }
    }
    let text = place.querySelector("p");
    text.style.display = "inline";
    let tableChoices = document.querySelector("#table-choices");
    for (let i = 0; i < tableChoices.children.length; i++) {
        tableChoices.children[i].style.backgroundColor = "white";
    }
    adaptTableChoicesSize();
}

/** 
 *  Build the table "Nombre d'arbres par arrondissement" with the data fetched from the API
 *  @param {Array} data - The data from the API
 * 	@return {void}
 */
function buildTableArr(data) {
	let table = document.getElementById("nb-trees-district");
	let tbody = table.getElementsByTagName("tbody")[0];
	while (tbody.rows.length > 0) {
		tbody.deleteRow(0);
	}
	for (let i = 0; i < data.length; i++) {
		let row = tbody.insertRow(-1);
		let cell_dist = row.insertCell(0);
		cell_dist.innerHTML = data[i].district;
		let cell_count = row.insertCell(1);
		cell_count.innerHTML = data[i].count;
	}
	table.style.display = "flex";

	initTableChoices();

	let districtButton = document.getElementById("nb-arbre-dist");
	districtButton.style.backgroundColor = "#ffc24a";
	document.getElementById("nb-trees-types").style.display = "none";

	hideTablePlace();
}

/** 
 *  Build the table "Nombre d'arbres par genre d'arbre" with the data fetched from the API
 *  @param {Array} data - The data from the API
 * 	@return {void}
 */
function buildTableTypes(data) {
	let table = document.getElementById("nb-trees-types");
	let tbody = table.getElementsByTagName("tbody")[0];
	while (tbody.rows.length > 0) {
		tbody.deleteRow(0);
	}
	for (let i = 0; i < data.length; i++) {
		let row = tbody.insertRow(-1);
		let cell_type = row.insertCell(0);
        if (!data[i].type) {
            cell_type.innerHTML = "Aucun";
        } else {
		    cell_type.innerHTML = data[i].type;
        }
        let cell_count = row.insertCell(1);
		cell_count.innerHTML = data[i].count;
	}
	table.style.display = "flex";

	initTableChoices();

	let districtButton = document.getElementById("nb-arbre-type");
	districtButton.style.backgroundColor = "#ffc24a";
	document.getElementById("nb-trees-district").style.display = "none";

	hideTablePlace();
}

/** 
 *  Fetch the data from the API to count the number of trees for a category
 *  @param {String} route - The route to fetch the data from
 * 	@return {void}
 */
var count_trees = function (route) {
	fetch(window._global_.API_BASE_URL + route, {
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

/**
 * Adapt the size of the table choices according to the window width
 * @return {void}
 */
function adaptTableChoicesSize() {
    let tableChoices = document.querySelector("#table-choices");
    const nbChoices = tableChoices.children.length;
    // fixed width of 250px for each choice in css : #table-choices a min-width: 250px;
    if (window.innerWidth < nbChoices * 250) {
        tableChoices.style.flexDirection = "column";
        for (let i = 0; i < tableChoices.children.length - 1; i++) {
            tableChoices.children[i].style.border = 0;
            tableChoices.children[i].style.borderBottom = "1px solid lightgray";
        }
    } else {
        tableChoices.style.flexDirection = "row";
        for (let i = 0; i < tableChoices.children.length - 1; i++) {
            tableChoices.children[i].style.border = 0;
            tableChoices.children[i].style.borderRight = "1px solid lightgray";
        }
    }
}

/**
 * Initialize the table choices style
 * @return {void}
 */
function initTableChoices() {
	let tableChoices = document.querySelector("#table-choices");
	tableChoices.querySelectorAll("a").forEach(function (element) {
		element.style.backgroundColor = "white";
	});
    adaptTableChoicesSize();
}

/**
 * Hide the initial table gray place
 * @return {void}
 */
function hideTablePlace() {
	let content = document.getElementById("table-place");
    content.style.backgroundColor = "white";
    let text = content.querySelector("p");
    text.style.display = "none";
}

window.addEventListener('resize', function(event) {
    adaptTableChoicesSize();
});

document.addEventListener('DOMContentLoaded', function() {
    adaptTableChoicesSize();
});