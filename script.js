const delay = ms => new Promise(res => setTimeout(res, ms));
const redirectTo = async (url, waitTime) => {
    waitTime = waitTime * 1000;
    await delay(waitTime);
    console.log("Waited: " + waitTime);
    location.href = url;
};

var link = window.location.href;
var url = new URL(link);
var sender = url.searchParams.get("sender");
var to = url.searchParams.get("to");
var wait = url.searchParams.get("wait");
console.log(sender);
console.log(to);
console.log(wait);

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
            redirectTo(redirect, wait);
        }
    } catch {
        console.warn("Invalid Link");
    }
}