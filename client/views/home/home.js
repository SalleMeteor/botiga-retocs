Template.home.created = function () {
  Session.set("currentPage", "view1");
  //Meteor.subscribe("allContacts");
}

Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});

Template.home.events({
  'click #contacts': function () {
    Router.go("contacts");
  }
});

Template.home.events({
  'click #buto_3': function () {
    Router.go("view3");
  }
});


