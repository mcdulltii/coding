let filenames = [
  "746892.jpg",
  "746999.jpg",
  "748101.jpg",
  "gy6UI3W.jpg",
  "P2fUg39.jpg",
  "PHO4DzO.jpg",
  "SPpQob7.jpg"
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'Pictures/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}