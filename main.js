fetch("./adri.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("adri").innerHTML = data;
  });
  