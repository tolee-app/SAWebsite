module.exports.serveBlogsIndex = function (req, res) {
	res.render(
		'blogs',
		{}
	);
};

module.exports.serveSingleBlog = function (req, res) {
	res.render(
		'single-blog',
		{}
	);
};

