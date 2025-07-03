// fetch data from an api and display the sprite in the dom

async function fetchdata(){
        try{
                const pokimonname = document.getElementById("pokimonName").value.toLowerCase(); 
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonname}`);

                if(!response.ok){
                        throw new Error("could not fetch the data");
                }

                const data =  await response.json();
                const sprite = data.sprites.front_default;
                const spriteImage = document.getElementById("pokimonImage");

                spriteImage.src = sprite;
                spriteImage.style.display = "block"; 

        }
        catch(error){
                console.error(error);
        }

}

