const res = fetch("https://restcountries.com/v3.1/all");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      console.log(data1[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
         <div class="col">
           <div class="card">
           <div class="card-header">${data1[i].name.common}</div>
             <img src="${data1[i].flags.png}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <p class="card-text"><b><i>Capital: ${data1[i].capital}</i></b></p>
               <p class="card-text"><b><i>Region: ${data1[i].region}</b></p>
               <p class="card-text"><b><i>SubRegion: ${data1[i].subregion}</i></b></p>
               <p class="card-text"><b><i>Population: ${data1[i].population}</i></b></p>
               <p class="card-text"><b><i>Country Code: ${data1[i].cca3}</i></b></p>
               
               </div>
             </div>
           </div>
        </div>`;
      document.body.append(div);
    }
  });