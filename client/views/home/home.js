Template.home.created = function () {
  Session.set("currentPage", "view1");
  
  Meteor.subscribe("allContacts");
}

Template.view1.events({
  'click1 #button': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button 1");
    
    Session.set("currentPage", "view1");
  }
  'click2 #button': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button 2");
    
    Session.set("currentPage", "view2");
  }
  
});



Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});
  