const { Builder, By, Key, until } = require('selenium-webdriver');
const request = require('request');
var fs = require('fs');
var WebXRsites = './WebXRsites.json';
var WebXRsitesfile = require(WebXRsites);
uriArray = [];
for (let [key1, value2] of Object.entries(WebXRsitesfile)) {
    console.log(value2.uri);
    uriArray.push(value2.uri);
  };
  console.log(uriArray);
(async function example() {
    i = 1;
    let driver = await new Builder().forBrowser('firefox').build();
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    while (i < 4) {
        await driver.get(uriArray[i]);
        await timeout(getRandomIntInclusive(50000, 60000));
        var element = await driver.findElements(By.xpath("//html/body/div[2]/div/div[4]/button/span"));
        if (element.length > 0) {
            var element2 = await driver.findElement(By.xpath("//html/body/div[2]/div/div[4]/button/span")).getText();
            if (element2 > 5) {
                driver.executeScript("msg = new SpeechSynthesisUtterance('I see dead people!');speechSynthesis.speak(msg);");
            };
        };
        i++;
    };
})();
