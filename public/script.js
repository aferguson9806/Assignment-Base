async function windowActions() {
  const form = document.querySelector(".userform");
  const search = document.querySelector("#zipcity");

  const request = await fetch('/api')
  const data = await request.json();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    const display = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());

    console.log(display);
    console.table(display);
    
    
    
    //    const request = await fetch("/api", {
    //    method: "POST",
    //    headers: {
    //       "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({ data: search.value }),
    //    });


    

  });

  

  search.addEventListener("input", (event) => {
    console.log("input", event.target.value);
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
