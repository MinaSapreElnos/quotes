function gnerate(){
    var quotes=[`“Be yourself; everyone else is already taken.”`,
 
    '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
 
    '“So many books, so little time.”',
    
    '“You only live once, but if you do it right, once is enough.”'];


    var outher=['― Oscar Wilde','― Albert Einstein','― Frank Zappa','― Mae West'];
 
    var oneQuote=quotes[Math.floor(Math.random()*quotes.length)];

    var oneOuther=outher[Math.floor(Math.random()*outher.length)];

    document.getElementById('quote').innerHTML=oneQuote;
    document.getElementById('outher').innerHTML=oneOuther;
 }