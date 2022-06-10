///Redirect code
const delay = ms => new Promise(res => setTimeout(res, ms));
const redirectTo = async (url, waitTime) => {
    waitTime = waitTime * 1000;
    await delay(waitTime);
    console.log("Waited: " + waitTime);
    location.href = url;
};
const hashCode = function(s) {
    if (s == null) return -1; 
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
};

var link = window.location.href;
var url = new URL(link);
var sender = url.searchParams.get("sender");
var to = url.searchParams.get("to");
var wait = url.searchParams.get("wait"); 
/// TODO: Add specific link preset ?preset=ncksite&wait=0,8

///Image Code
var nekoImage = document.getElementById("link_img");
var linkText = document.getElementById("link_text");
var linkTextLeft = document.getElementById("link_text_left");
nekoImage.src = `https://count.getloli.com/get/@nitisredir:${sender}^${hashCode(to)}?theme=gelbooru34`;


if (to != null) {
    if (sender != null) {

    }
    try {
        wait = parseFloat(wait);
    } catch {
        wait = 0.5;
        console.warn("Invalid Wait Time");
    }
    try {
        redirect = new URL(to);
        if (redirect != null) {
            linkText.textContent = redirect.host;
            linkTextLeft.textContent = "Redirect to:";
            linkText.href = redirect;
            redirectTo(redirect, wait);
        }
    } catch {
        console.warn("Invalid Link");
    }
}