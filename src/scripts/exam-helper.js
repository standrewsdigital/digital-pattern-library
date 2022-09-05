//****************
// helper to create standalone example pages and link to the page 
// eg {{{ exam  "header" mode this }}} 
//*************** */
module.exports.register = function (Handlebars, options)  { 
  Handlebars.registerHelper('exam', function (name,context, opt)  { 
    var template = Handlebars.partials[name];
    fnTemplate = null;
    if (typeof template === 'function') {
        fnTemplate = template;
    }else {
        fnTemplate = Handlebars.compile(template);
    }
    var html = fnTemplate( opt )
    var fs = require('fs');
    let r = (Math.random() + 1).toString(36).substring(7);
    var blob = String(new Handlebars.SafeString(html));
    var fileName = "src/patterns/"+name+"/"+r+"__example.html";
    var fileName_ = "../"+name+"/"+r+"__example.html";
    fs.appendFile(fileName , blob, function (err) {
    if (err) throw err;
       // console.log('Saved example page!');
    });
   var out = '<a href="'+fileName_+'"class="btn btn-xsmall-tag btn-icon__copy" type="button" ">View example</a';
  return out;
  });
};