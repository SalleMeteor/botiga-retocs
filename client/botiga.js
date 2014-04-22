if (Meteor.isClient) {
 	Meteor.Router.add({
 		'/':'intro',
		'/horarios':'horarios',
		'/donde_estamos':'donde_estamos'
 	})
}