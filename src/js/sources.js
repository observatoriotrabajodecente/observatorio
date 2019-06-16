// nav
var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = '#ffffffcf'; 
    } else {
        nav.style.backgroundColor = 'white';
    }
});




// Get data and create lists
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

   sources = data.reduce(function (r, a) {
        r[a.source_name] = r[a.source_name] || [];
        r[a.source_name].push(a);
        return r;
    });
    const sourcesNames =  Object.keys(sources).slice(8);

// div
const accSources= document.getElementById('accordionSources');
for (i = 0; i < sourcesNames.length; i++) { 
    let source = Object.values(sources[sourcesNames[i]]);
    for (j = 0; j < source.length; j++){
        source_link = source[j].source_link;
        source_description= source[j].source_description;
    }
        accSources.innerHTML+=`
        <div class="card">
        <div class="card-header">
          <a class="card-link" data-toggle="collapse" href="#`+ sourcesNames[i]+`">
            Fuente: `+ sourcesNames[i]+` <i class="fas fa-plus float-right"></i>
          </a>
        </div>
        <div id="` + sourcesNames[i]+`" class="collapse" data-parent="#accordionSources">
          <div class="card-body">
          <p>`+ source_link + ` </p>
          <p>`+ source_description + ` </p>
          <p> Archivos: 
          </div>
        </div>
      </div>`;
    
}})

