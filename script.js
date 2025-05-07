document.getElementById("searchButton").addEventListener("click", function() {
    let word = document.getElementById("searchInput").value;
    if (word) {
      fetchDictionaryData(word);
    }
  });
  
  function fetchDictionaryData(word) {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Word not found');
        }
        return response.json();
      })
      .then(data => {
        displayWordData(data[0]);
      })
      .catch(error => {
        document.getElementById("result").innerHTML = `<p style="color: red;">${error.message}</p>`;
      });
  }
  
  function displayWordData(data) {
    const word = data.word;
    const definition = data.meanings[0].definitions[0].definition;
    
    document.getElementById("word").innerText = word;
    document.getElementById("definition").innerText = definition;
  }
  