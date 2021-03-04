async function windowActions() {
  const form = document.querySelector(".userform");
  const search = document.querySelector("#textentry");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    const request = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: search.value }),
    });


    const data = await request.json();
    console.table(data.data)

  });

  

  search.addEventListener("input", (event) => {
    console.log("input", event.target.value);
  });
}

window.onload = windowActions;
