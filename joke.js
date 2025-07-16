
          const jokeBtn = document.getElementById("jokeBtn");
          const jokeText = document.getElementById("jokeText");
          const spinner = document.getElementById("spinner");
    
          jokeBtn.addEventListener("click", () => {
            spinner.classList.remove("d-none");
            jokeText.textContent = "";
    
            fetch("https://apis.ccbp.in/jokes/random")
              .then(response => response.json())
              .then(data => {
                jokeText.textContent = data.value;
                spinner.classList.add("d-none");
              })
              .catch(() => {
                jokeText.textContent = "Oops! Something went wrong.";
                spinner.classList.add("d-none");
              });
          });
