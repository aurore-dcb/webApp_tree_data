var routes = {
	'/' : function () { showHomepage(); },
	'/trees/districts/count': function () { count_trees('/trees/districts/count'); },
	'/trees/types/count': function () { count_trees('/trees/types/count'); },
	'*': function () { showErrorPage(404, 'Page not found'); },
};

var router = Router(routes);

router.init();