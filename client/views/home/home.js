Template.home.created = function () {
  Session.set("currentPage", "view1");
}

Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});
  