Template.view2.greeting = function () {
  return "Welcome to myfirstapp.";
};

Template.view2.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Session.set("currentPage", "view1");
    
  }
});