/**
 * Function to return the contents of a file
 * @example {{ getEmbed './core/styles/error.css'}}
 * @author nick mullen 
 * @version 1.0 20/03/18
 */
var fs = require('fs');
var Handlebars = require('handlebars');

Handlebars.registerHelper('getEmbed', function(filePath) {
    contents= fs.readFileSync(filePath,  'utf8');
    return contents.toString();
});