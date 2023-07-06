function print(word) {
    console.log(word)
}

const urlparams = new URLSearchParams(window.location.search);
const keyword = urlparams.get("link");
print(keyword);
