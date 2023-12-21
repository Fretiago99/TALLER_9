const but = document.getElementById("button");

but.addEventListener("click",button);


function button () {

    but.style.visibility = "hidden";

    const character = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    const span = document.getElementsByTagName("span");

    function addName(person) {
            const lower = person.toLowerCase();
            const idCharacter = document.getElementById(lower);
            
            switch (lower) {
                case "mario":
                    span[0].innerText = "Mario";
                    idCharacter.title = "Presentado"
                    break;        
                    
                case "luigi":
                    span[0].innerText = "Luigi";
                    idCharacter.title = "Presentado"
                    break;
                        
                case "bowser":
                    span[0].innerText = "Bowser Morton Koopa";
                    idCharacter.title = "Presentado"
                    break;
                        
                case "peach":
                    span[0].innerText = "Princesa Peach Toadstool";
                    idCharacter.title = "Presentado"
                    break;
                    
                case "yoshi":
                    span[0].innerText = "T. Yoshisaur Munchakoopas";
                    idCharacter.title = "Presentado"
                    break;
                        
                case "toad":
                    span[0].innerText = "Toad";
                    idCharacter.title = "Presentado"
                    break;
                        
                case "toadette":
                    span[0].innerText = "Toadette";
                    idCharacter.title = "Presentado"
                    break;
                    
                case "daisy":
                    span[0].innerText = "Princesa Daisy";
                    idCharacter.title = "Presentado"
                    break;
                        
                default:
                    span[0].innerText = "(desconocido)";
                    break;
            }

        }
  
        addName(character);
        return character.toLowerCase();
    }

