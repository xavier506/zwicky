var fs = require('fs');

module.exports = {
  header: function() {
    var template = fs.readFileSync('./views/header.html', 'utf-8'); // load HTML template
    return template;
  },

  footer: function() {
    var template = fs.readFileSync('./views/footer.html', 'utf-8'); // load HTML template
    return template;
  },

  index: function() {
    var template = fs.readFileSync('./views/index.html', 'utf-8'); // load HTML template
    return template;
  },
  about: function() {
    var template = fs.readFileSync('./views/about.html', 'utf-8'); // load HTML template
    return template;
  },
  markdown: function() {
    var template = fs.readFileSync('./views/markdown.html', 'utf-8'); // load HTML template
    return template;
  },
  view_users: function() {
    var template = fs.readFileSync('./views/view-users.html', 'utf-8'); // load HTML template
    return template;
  },
  edit_users: function() {
    var template = fs.readFileSync('./views/edit-users.html', 'utf-8'); // load HTML template
    return template;
  },
  categories: function() {
    var template = fs.readFileSync('./views/categories.html', 'utf-8'); // load HTML template
    return template;
  },
  articles: function() {
    var template = fs.readFileSync('./views/article.html', 'utf-8'); // load HTML template
    return template;
  }
};