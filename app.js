var select = document.getElementById("select");
var arr = [
    { id: 1, language: 'Latvian', title: 'Labdien' },
    { id: 2, language: 'English', title: 'Hello' },
    { id: 3, language: 'Russian', title: 'Добрый день' }
];

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("OPTION");
    var txt = document.createTextNode(arr[i].language);
    
    option.appendChild(txt);
    option.setAttribute('value', arr[i].id);
    select.insertBefore(option, select.lastChild);
}

select.addEventListener('change', changeHeading);
select.dispatchEvent(new Event('change'));

function changeHeading(event) {
    var language = arr.find(
        (language) => language.id === parseInt(event.target.value)
    );

    document.getElementById('heading').innerHTML = language.title;
}