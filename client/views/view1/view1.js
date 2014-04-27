Template.view1.greeting = function () {
  return "Benvingut";
};

Template.view1.events({
  'click #button1': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
        
    //Session.set("currentPage", "view2");
    
    var doc = {
      name: $("#name").val(),
      Descripció : $("#description").val(),
    };
    
    Contacts.insert(doc);
    
    // async call
    Meteor.call('foo', 1, 2, function (error, result) {
      console.log("result(async): ", result);
    });
    
    // sync call
    var result = Meteor.call('bar');
    console.log("result(sync): ", result);
  }



});








Template.view1.events({
  'click #button2': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
        
    Session.set("currentPage", "view2");
  }



});
