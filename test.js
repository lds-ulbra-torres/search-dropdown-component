var json = '[{"titulo":"Sep\u00e9 Tiaraj\u00fa :","agendado":"29\/08\/2016","devolvido":"02\/09\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O po\u00e7o dos desejos","agendado":"22\/08\/2016","devolvido":"22\/08\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Di\u00e1rio de aventuras da Ellie :","agendado":"11\/07\/2016","devolvido":"15\/08\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O homem da m\u00e1scara de ferro","agendado":"05\/07\/2016","devolvido":"04\/07\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Feras futebol clube :","agendado":"24\/06\/2016","devolvido":"28\/06\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Amaz\u00f4nia :","agendado":"14\/04\/2016","devolvido":"28\/04\/2016","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O natal de Baltazar","agendado":"20\/03\/2015","devolvido":"02\/09\/2015","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O resgate de Fiona","agendado":"27\/10\/2014","devolvido":"10\/11\/2014","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Ramelete","agendado":"18\/09\/2014","devolvido":"20\/10\/2014","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Toy story","agendado":"21\/08\/2014","devolvido":"11\/09\/2014","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Tudo em cores e outras poesias","agendado":"14\/08\/2014","devolvido":"14\/08\/2014","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Bento, o super-her\u00f3i do espa\u00e7o!","agendado":"07\/08\/2014","devolvido":"07\/08\/2014","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Apatossauro","agendado":"01\/11\/2013","devolvido":"06\/11\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O espantalho","agendado":"16\/10\/2013","devolvido":"16\/10\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Marina :","agendado":"09\/10\/2013","devolvido":"09\/10\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Serelepe, e o mist\u00e9rio do leite","agendado":"25\/09\/2013","devolvido":"02\/10\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O tear das moiras","agendado":"18\/09\/2013","devolvido":"18\/09\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"One stormy night","agendado":"11\/09\/2013","devolvido":"11\/09\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Buddies","agendado":"04\/09\/2013","devolvido":"04\/09\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"The real mother goose :","agendado":"28\/08\/2013","devolvido":"28\/08\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"The real mother goose :","agendado":"21\/08\/2013","devolvido":"21\/08\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Era uma vez um lobo mau...","agendado":"14\/08\/2013","devolvido":"14\/08\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Almanaque b\u00edblico 2","agendado":"07\/08\/2013","devolvido":"08\/08\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Nascimento de Jesus","agendado":"03\/07\/2013","devolvido":"04\/07\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Fugindo do tubar\u00e3o","agendado":"26\/06\/2013","devolvido":"26\/06\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Jos\u00e9 e seus irm\u00e3os","agendado":"20\/06\/2013","devolvido":"19\/06\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Noite feliz :","agendado":"22\/05\/2013","devolvido":"13\/06\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Um amigo no globo da morte","agendado":"15\/05\/2013","devolvido":"20\/05\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"Labirinto maluco","agendado":"02\/05\/2013","devolvido":"08\/05\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"},{"titulo":"O monstro","agendado":"24\/04\/2013","devolvido":"22\/04\/2013","biblioteca":"UE-S\u00e3oJo\u00e3o"}]';
var url = "https://jsonplaceholder.typicode.com/photos";
var invalid = "lala";

$('#s1').simpleSelect2Json(json,'agendado','titulo');
$('#s2').simpleSelect2Json(url,'id','title');
$('#s3').simpleSelect2Json(invalid,'key','valid');
