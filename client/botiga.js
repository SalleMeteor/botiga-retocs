if (Meteor.isClient) {
	Meteor.Router.add({
		'/':'intro',
		'/horarios':'horarios',
		'/done_estamos':'donde_estamos'
	})

}