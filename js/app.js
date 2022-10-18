///////////////////////

// Assign form element var
const form = document.getElementById("generateLink");
// Assign image url var
let imageUrl = document.getElementById("imageUrl");

// This function generates the thumbnail link
function generateThumbnailLink() {
  // est. regex match pattern
  const regex = /(watch\?v=|.be\/)[0-9A-Za-z-_]*/g;
  // url form input
  let urlInput = document.getElementById("url").value;
  // resolution value
  let res = document.querySelector('input[name="resolution"]:checked').value;
  // assign regex match to new var (as array)
  const regexArr = urlInput.match(regex);
  // if regex match is null/undefined return invalid msg
  if (regexArr == null) {
    imageUrl.textContent = `Invalid URL. Please try again.`;
    return;
  }
  // otherwise...
  else {
    // for url youtube shortened url format
    if (regexArr[0].startsWith(".be/")) {
      splitId = regexArr[0].split("/");
      imageUrl.textContent = `https://img.youtube.com/vi/${splitId[1]}/${res}default.jpg`;
    }
    // for watch?v=... format
    else {
      splitId = regexArr[0].split("=");
      imageUrl.textContent = `https://img.youtube.com/vi/${splitId[1]}/${res}default.jpg`;
    }
  }
}

form.addEventListener("submit", generateThumbnailLink);
