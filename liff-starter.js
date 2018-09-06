window.onload = function (e) {
    liff.init(function () {
        makeList();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('home').src = 'bg.jpg';
    } else {
        makeList();
    }
    }
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeList(){
    var tipe = getParameterByName('type');
    url = getParameterByName('url');
    if (tipe === 'text') {
    	document.getElementById("message").textContent = 'Loading....';
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
        	document.getElementById("message").textContent = 'Success';
            liff.closeWindow();
        });
    };
    if (tipe === 'image') {
    	document.getElementById("message").textContent = 'Loading....';
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
        	document.getElementById("message").textContent = 'Success';
            liff.closeWindow();
        });
    };
    if (tipe === 'tp' && url !== "undefined") {
        document.getElementById("message").textContent = 'Loading....';
    	liff.sendMessages([{
          {
            "type": "template",
            "altText": "MEMEK",
            "template": {
                "type": "image_carousel",
                "columns": [
                    {
                      "imageUrl": "https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-home.gif",
                      "action": {
                          "type": "uri",
                          "uri": url
                      }
                  }
              ]
          }
      }
    ]);
    document.getElementById("message").textContent = 'Success';
    liff.closeWindow();
    };
    if (tipe === 'video') {
    	document.getElementById("message").textContent = 'Loading....';
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
        	document.getElementById("message").textContent = 'Success';
            liff.closeWindow();
        });
    } else {
        liff.closeWindow();
    }
}