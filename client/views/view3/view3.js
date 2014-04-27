Template.view3.greeting = function () {
  return "Benvingut";
};

Template.view3.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Router.go("home");
    
  }


});
