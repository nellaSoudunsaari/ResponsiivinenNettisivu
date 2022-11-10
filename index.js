var finnish = document.getElementById('fi_click'),
    english = document.getElementById('en_click'),
    fi_txt = document.querySelectorAll('#fi'),
    en_txt = document.querySelectorAll('#en'),
    nb_fi = fi_txt.length,
    nb_en = en_txt.length;

finnish.addEventListener('click', function() {
    language(finnish,english);
}, false);

english.addEventListener('click', function() {
    language(english,finnish);
}, false);

function language(languageOn,languageOff){
    if (!languageOn.classList.contains('current_lang')) {
        languageOn.classList.toggle('current_lang');
        languageOff.classList.toggle('current_lang');
    }
    if(languageOn.innerHTML == 'Fi'){
        display(fi_txt, nb_fi);
        hide(en_txt, nb_en);
    }
    else if(languageOn.innerHTML == 'En'){
        display(en_txt, nb_en);
        hide(fi_txt, nb_fi);
    }
}

function    display(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function hide(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    language(finnish,english);
}
init();