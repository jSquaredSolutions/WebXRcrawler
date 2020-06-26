var fs = require('fs');
var WebXRsites = './WebXRsites.json';
var WebXRsitesfile = require(WebXRsites);
var Bookmarks = './Bookmarks.json';
var Bookmarksfile = require(Bookmarks);

for (let [key1, value2] of Object.entries(Bookmarksfile.children[2].children)) {
  console.log(value2.uri);
  WebXRsitesfile.push({uri:value2.uri,title:value2.title});
};

fs.writeFile(WebXRsites, JSON.stringify(WebXRsitesfile), function (err) {
    if (err) return console.log(err);
});

/*
fs.writeFile(Bookmarks, JSON.stringify(Bookmarksfile), function (err) {
    if (err) return console.log(err);
});


*/