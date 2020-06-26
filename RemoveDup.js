var fs = require('fs');
var WebXRsites = './WebXRsitesCopy.json';
var WebXRsitesfile = require(WebXRsites);

jsonObject = WebXRsitesfile.map(JSON.stringify); 
uniqueSet = new Set(jsonObject); 
uniqueArray = Array.from(uniqueSet).map(JSON.parse);

// empty the file
WebXRsitesfile = [];
fs.writeFile(WebXRsites, JSON.stringify(WebXRsitesfile), function (err) {
    if (err) return console.log(err);
});

fs.writeFile(WebXRsites, JSON.stringify(uniqueArray), function (err) {
    if (err) return console.log(err);
});
