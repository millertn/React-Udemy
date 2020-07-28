var request = require("request");
var cheerio = require("cheerio");
function check104Key() {
    const options = {
      url:
        "https://www.keychron.com/products/keychron-k1-wireless-mechanical-keyboard?variant=31301928583257",
      headers: {
        "User-Agent": "request",
      },
    };
    function callback(error, response, body) {
        if(!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('.product-single__meta').filter(function() {
                var data = $(this);
                console.log("104 key - " + $(data).find('button').text().trim());
            })
        }
    }
    
    request(options, callback);
}

function check87Key() {
    const options = {
      url:
        "https://www.keychron.com/products/keychron-k1-wireless-mechanical-keyboard?variant=31301928157273",
      headers: {
        "User-Agent": "request",
      },
    };
    function callback(error, response, body) {
        if(!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('.product-single__meta').filter(function() {
                var data = $(this);
                console.log("87 key - " + $(data).find('button').text().trim());
            })
        }
    }
    
    request(options, callback);
}
check104Key();
check87Key();