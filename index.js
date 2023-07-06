function print(word) {
    console.log(word)
}

const urlparams = new URLSearchParams(window.location.search);
const keyword = urlparams.get("link");
print(keyword);
document.write(keyword)


// デフォ
function button2() {
    links = keyword.slice(keyword.lastIndexOf("@"));
    print(links)
    links = links.replace("@","");
    userid = (keyword.substring(0, keyword.lastIndexOf("@")));
    print(userid)
    print(userid + links)
    url = ("https://" + links +"/"+ userid)
    print(url)
    window.location.href = url
}

// function button2(){
// links = keyword.slice(keyword.lastIndexOf("@"));
// print(links)
// userid = (keyword.substring(0,keyword.lastIndexOf("@")));
// print(userid)
// print(userid+links)
// }

function button1() {
    print("button");
}

