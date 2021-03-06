function titleCase(phrase) {
    let to_combine = []
    phrase = phrase.toLowerCase()
    let words = phrase.split(' ');
    words.forEach(word => {
        let new_word = word.slice(0, 1).toUpperCase() + word.slice(1, word.length)
        to_combine.push(new_word);
    });
    return(to_combine.join(' '))
};








async function windowActions() {
  const form = document.querySelector(".userform");
  const search = document.querySelector("#zipcity");

  const request = await fetch('/api')
  const data = await request.json();
  const myPageData = document.querySelector('#content')

  //form.addEventListener("submit", async (event) => {
    //event.preventDefault();
    //console.log("submit fired");
    //const display = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());

    //console.log(display);
    //console.table(display);
    
    
    


    


    

  //});

  

  search.addEventListener("input", (event) => {
    while (myPageData.hasChildNodes()) {
      myPageData.removeChild(myPageData.lastChild);
    };
    event.preventDefault();
    console.log("input", event.target.value);
    
    const display = data.filter((record) => record.city.toUpperCase().includes(search.value.toUpperCase()));
    console.log(display);

    if (search.value !== '') {
      display.forEach(restaurant => {
          let newDiv = document.createElement("div");

          newDiv.classList.add('restaurants')
          
          let resDataName = document.createElement("h2");
          let resDataAdd = document.createElement("address");
          let resDataCata = document.createElement("h4");
          let cityHeader = document.createElement("h4");
          
          let divResName = document.createTextNode(titleCase(restaurant.name));
          let divResAdd = document.createTextNode(restaurant.address_line_1);
          let divResCata = document.createTextNode(titleCase(restaurant.category));
          let cityHeaderContent = document.createTextNode(titleCase(restaurant.city));
          
          resDataName.appendChild(divResName);
          resDataAdd.appendChild(divResAdd);
          resDataCata.appendChild(divResCata);
          cityHeader.appendChild(cityHeaderContent);

          
          newDiv.appendChild(resDataName);
          newDiv.appendChild(resDataCata);
          newDiv.appendChild(resDataAdd);
          newDiv.appendChild(cityHeader);
          
          myPageData.appendChild(newDiv);
      });
    };
  });
}

window.onload = windowActions;














//HOW TO WRITE POST REQUEST
    //    const request = await fetch("/api", {
    //    method: "POST",
    //    headers: {
    //       "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({ data: search.value }),
    //    });

//THIS GOES IN SUBMIT EVENT LISTENER
    //    const request = await fetch("/api", {
    //    method: "POST",
    //    headers: {
    //       "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({ data: search.value }),
    //    });
