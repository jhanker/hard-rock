document.getElementById("search-btn").addEventListener("click", searchResult);
   
    

function searchResult() {
    
const songTitle = document.getElementById("title-input").Value;
fetch(`https://api.lyrics.ovh/suggest/${songTitle}`)
  .then(response => response.json())
  .then(data => { 

    for (i = 0; i < data.data.length; i++) {
       
     const title = data.data[i].title;
     const artist = data.data[i].artist.name;

     document.getElementById("search-result").innerHTML += `<div> <h3>${title}</h3>
                                                                    <h5> ${artist} </h5></div>`;
       if (i==9) {
           break;
        }                                                             
    }
 });

}