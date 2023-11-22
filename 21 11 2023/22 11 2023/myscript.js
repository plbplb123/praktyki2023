var id = 1;
let titleprompt = document.getElementById("title");
let idprompt = document.getElementById("id");
let div = document.getElementById("div");

const genText = () => (arg) =>
{
    fetch(`https://jsonplaceholder.typicode.com/${arg}`)
      .then((response) => 
      {
        if (!response.ok) 
        {
          throw new Error("Network response was not OK.");
        } 
        else
        {
          return response.json();
        }
      })

      .then((myJson) => 
      {
        const idJson = myJson.filter((post) => post.id == id)[0];
        idprompt.textContent = "ID:" + id;
        div.textContent = "BODY: " + idJson["body"];
        document.querySelector("titleprompt");
        titleprompt.textContent = "TITLE: "+ idJson["title"];
        document.querySelector("idprompt");
      })
      .catch((error) => console.error("Error: ", error))
}

const next = () =>
{
    const input = document.getElementById("input").value;
    id++;
    genText()(input);
    
}

const previous = () => 
{
    const input = document.getElementById("input").value;
    if (id == 1)
    {
      alert("ID musi być wieksze od 0");
    } 
    else 
    {
        id--;
        genText()(input);
    }
  
}