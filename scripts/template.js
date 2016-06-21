var hbs = require('handlebars');
hbs.registerHelper('is', function(variable,test,options) {
  // console.log(`VARIABLE:\n${variable}\nTEST:\n${test}\nOPTIONS:\n${options.fn(this)}\n`);
  if (variable !== test) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

module.exports = function(template,data) {
  var render = hbs.compile(template);
  return render(data);
};
