const FakeAPI = require('../../fakeapi');

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.serveIndexPage = function (req, res) {

	FakeAPI.getAthletesList()
		.then(result => {

			res.render(
				'index',
				{
					data: result
				}
			);

		})
		.catch(err => {
			res.status(404).send(err);
		});

};
