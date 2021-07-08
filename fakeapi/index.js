module.exports.getAthletesList = function () {

	return new Promise(
		(resolve, reject) => {

			setTimeout(() => {

				resolve(
					[

						{
							name: 'Himanshu',
							sport: 'cricket',
							dob: '19-Jan-2000'
						},
						{
							name: 'Rishab',
							sport: 'badminton',
							dob: '19-Jan-1999'
						},
						{
							name: 'Himanshu',
							sport: 'cricket',
							dob: '19-Jan-2000'
						},
						{
							name: 'Rishab',
							sport: 'badminton',
							dob: '19-Jan-1999'
						},
						{
							name: 'Himanshu',
							sport: 'cricket',
							dob: '19-Jan-2000'
						},
						{
							name: 'Rishab',
							sport: 'badminton',
							dob: '19-Jan-1999'
						},
						{
							name: 'Himanshu',
							sport: 'cricket',
							dob: '19-Jan-2000'
						},
						{
							name: 'Rishab',
							sport: 'badminton',
							dob: '19-Jan-1999'
						}

					]
				);

			}, 100);

		}
	);

};
