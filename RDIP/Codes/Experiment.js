var sel = document.getElementById("sel");
$("#hide").hide()
$("#correct").hide()
$("#getcorrect").hide()
var start, new1;
var k;
var replace;
var displayingvalue = "";
function buttonDisplay(id, value) 
{
    document.getElementById("play2").innerHTML = "Formed Sentence (after selecting words):";
    displayingvalue += value + " ";
    document.getElementById("play3").innerHTML = displayingvalue;
    $("#hide").show()
    document.getElementById(id).style.display = "none";
    start++; 
    if(start == new1){
        $("#correct").show()
    }
}
function rvalue(data) {
    var combine = data.split(" ");
    var i = combine.length, temp, index;
    while (0 !== i) {
        index = Math.floor(Math.random() * i);
        i--;
        temp = combine[i];
        combine[i] = combine[index];
        combine[index] = temp;
    }
    return combine;
}
myfunction = function () {
    if (sel.value === "english") {

        var Sentence1 = ['John ate an apple before afternoon',
                         'before afternoon John ate an apple',
                         'John before afternoon ate an apple'
                ];
                var Sentence2 = ['some students like to study in the night',
                                 'at night some students like to study'
                ];
                var Sentence3 = ['John and Mary went to church',
                                 'Mary and John went to church'
                 ];
                var Sentence4 = ['John went to church after eating',
                                 'after eating John went to church',
                                'John after eating went to church'
                ];
                var Sentence5 = ['did he go to market',
                    'he did go to market'
                ];
                var Sentence6 = ['the woman who called my sister sells cosmetics',
                    'the woman who sells cosmetics called my sister',
                    'my sister who sells cosmetics called the woman',
                    'my sister who called the woman sells cosmetics'
                ];
                var Sentence7 = ['John goes to the library and studies',
                    'John studies and goes to the library'
                ];
                var Sentence8 = ['John ate an apple so did she',
                    'she ate an apple so did John'
                ];
                var Sentence9 = ['the teacher returned the book after she noticed the error',
                    'the teacher noticed the error after she returned the book',
                    'after the teacher returned the book she noticed the error',
                    'after the teacher noticed the error she returned the book',
                    'she returned the book after the teacher noticed the error',
                    'she noticed the error after the teacher returned the book',
                    'after she returned the book the teacher noticed the error',
                    'after she noticed the error the teacher returned the book'
                ];
                var Sentence10 = ['I told her that I bought a book yesterday',
                    'I told her yesterday that I bought a book',
                    'yesterday I told her that I bought a book',
                    'I bought a book that I told her yesterday',
                    'I bought a book yesterday that I told her',
                    'yesterday I bought a book that I told her'
                ];


        var earray = [Sentence1,Sentence2,Sentence3,Sentence4,
                Sentence5,Sentence6,Sentence7,Sentence8,Sentence9,Sentence10];
        
        document.getElementById("play1").innerHTML = "(Select the buttons in proper order)"
        document.getElementById("play").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
        replace = Math.floor(Math.random()*earray.length)
        document.getElementById("play2").innerHTML = ""
        document.getElementById("play3").innerHTML = ""
        document.getElementById("play4").innerHTML = ""
        document.getElementById("play5").innerHTML = " "
        document.getElementById("play6").innerHTML = " "
        answer = ""
        displayingvalue=""
        $("#hide").hide()
        $("#correct").hide()
        var newval = earray[replace][0];
        k = rvalue(newval);
        start = 0;
        new1 = 0;
        var n = "";
        for (i = 0; i <= k.length - 1; i++) {
            val = k[i];
            m = "  <button style= 'font-size:15px ; padding:4px ; margin-right:4px ' id='button1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            n += m;
            new1++;
        }
        document.getElementById("value").innerHTML = n
        }
    else if (sel.value === "hindi") {

        var firstHindiSentence = ['राम और श्याम बाजार गयें',
            'राम और श्याम गयें बाजार',
            'बाजार गयें राम और श्याम',
            'गयें बाजार राम और श्याम'
            ];
        var secondHindiSentence = ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
            'सोया राम और श्याम भी'
            ];
        var thirdHindiSentence = ['मैंने उसे बताया कि राम सो रहा है',
            'मैंने उसे बताया कि सो रहा है राम',
            'उसे मैंने बताया कि राम सो रहा है',
            'उसे मैंने बताया कि सो रहा है राम',
            'मैंने बताया उसे कि राम सो रहा है',
            'मैंने बताया उसे कि सो रहा है राम',
            'उसे बताया मैंने कि राम सो रहा है',
            'उसे बताया मैंने कि सो रहा है राम',
            'बताया मैंने उसे कि राम सो रहा है',
            'बताया मैंने उसे कि सो रहा है राम',
            'बताया उसे मैंने कि राम सो रहा है',
            'बताया उसे मैंने कि सो रहा है राम'
            ];
        var fourthHindiSentence = ['राम खाकर सोया',
            'खाकर राम सोया',
            'राम सोया खाकर',
            'खाकर सोया राम',
            'सोया राम खाकर',
            'सोया खाकर राम'
            ];
        var fifthHindiSentence = ['बिल्लियों को मारकर कुत्ता सो गया ',
            'मारकर बिल्लियों को कुत्ता सो गया',
            'बिल्लियों को मारकर सो गया कुत्ता',
            'मारकर बिल्लियों को सो गया कुत्ता',
            'कुत्ता सो गया बिल्लियों को मारकर',
            'कुत्ता सो गया मारकर बिल्लियों को',
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'
            ];
        var sixthHindiSentence = ['एक लाल किताब वहाँ है',
            'एक लाल किताब है वहाँ',
            'वहाँ है एक लाल किताब',
            'है वहाँ एक लाल किताब'
            ];
        var seventhHindiSentence = ['एक बड़ी सी किताब वहाँ है',
            'एक बड़ी सी किताब है वहाँ',
            'बड़ी सी एक किताब वहाँ है',
            'बड़ी सी एक किताब है वहाँ',
            'वहाँ है एक बड़ी सी किताब',
            'वहाँ है बड़ी सी एक किताब',
            'है वहाँ एक बड़ी सी किताब',
            'है वहाँ बड़ी सी एक किताब'
            ];
        var harray = [firstHindiSentence,secondHindiSentence,thirdHindiSentence,fourthHindiSentence,
            fifthHindiSentence,sixthHindiSentence,seventhHindiSentence];
    
        document.getElementById("play1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("play").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
        replace = Math.floor(Math.random()*harray.length)
        document.getElementById("play2").innerHTML = ""
        document.getElementById("play3").innerHTML = ""
        document.getElementById("play4").innerHTML = ""
        document.getElementById("play5").innerHTML = " "
        document.getElementById("play6").innerHTML = " "
        answer = ""
        displayingvalue="";
        $("#hide").hide()
        $("#correct").hide()
        var newval = harray[replace][0];
        k = rvalue(newval);
        start = 0;
        new1 = 0;
        var n= "";
        for (i = 0; i <= k.length - 1; i++) {
            val = k[i];
            m = "  <button style= 'margin-right:5px ;font-size:20px ; padding:5px  ' id='button1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            n += m;
            new1++;
        }
        document.getElementById("value").innerHTML = n 
        }
    else {
        document.getElementById("play").innerHTML = ""
        document.getElementById("play1").innerHTML = ""
        document.getElementById("value").innerHTML = ""
        document.getElementById("play2").innerHTML = ""
        document.getElementById("play3").innerHTML = ""
        document.getElementById("play4").innerHTML = ""
        document.getElementById("play5").innerHTML = " "
        document.getElementById("play6").innerHTML = " "
        $("#hide").hide()
        $("#correct").hide()
        answer = ""
        alert("Please choose a language")
        }
}
function reform() {
    displayingvalue=" "
    document.getElementById("play2").innerHTML = ""
    document.getElementById("play3").innerHTML = displayingvalue;
    document.getElementById("play4").innerHTML = ""
    document.getElementById("play5").innerHTML = ""
    document.getElementById("play6").innerHTML = ""
    for (var i = 0; i <=10; i++) {
        document.getElementById('button1'+i).style.display = "";
    }
    start=0;
    answer=""
    $("#hide").hide()
    $("#correct").hide()
}
var arrayvalue = ['John ate an apple before afternoon',
'before afternoon John ate an apple',
'John before afternoon ate an apple',
'some students like to study in the night',
'at night some students like to study'
    ,'John and Mary went to church',
    'Mary and John went to church',
    'John went to church after eating', 
    'after eating John went to church',
    'John after eating went to church',
    'did he go to market',
    'he did go to market',
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics',
    'John goes to the library and studies', 'John studies and goes to the library',
    'John ate an apple so did she', 'she ate an apple so did John',
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',    
    'after she noticed the error the teacher returned the book',
    'I told her that I bought a book yesterday',    
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book', 
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her',
    'राम और श्याम बाजार गयें',
    'राम और श्याम गयें बाजार',
    'बाजार गयें राम और श्याम',
    'गयें बाजार राम और श्याम',
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी',
    'मैंने उसे बताया कि राम सो रहा है',
    'मैंने उसे बताया कि सो रहा है राम',
    'उसे मैंने बताया कि राम सो रहा है',
    'उसे मैंने बताया कि सो रहा है राम',
    'मैंने बताया उसे कि राम सो रहा है',
    'मैंने बताया उसे कि सो रहा है राम',
    'उसे बताया मैंने कि राम सो रहा है',
    'उसे बताया मैंने कि सो रहा है राम',
    'बताया मैंने उसे कि राम सो रहा है',
    'बताया मैंने उसे कि सो रहा है राम',
    'बताया उसे मैंने कि राम सो रहा है',
    'बताया उसे मैंने कि सो रहा है राम',
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम',
    'बिल्लियों को मारकर कुत्ता सो गया',
    'मारकर बिल्लियों को कुत्ता सो गया',
    'बिल्लियों को मारकर सो गया कुत्ता',
    'मारकर बिल्लियों को सो गया कुत्ता',
    'कुत्ता सो गया बिल्लियों को मारकर',
    'कुत्ता सो गया मारकर बिल्लियों को',
    'सो गया कुत्ता बिल्लियों को मारकर',
    'सो गया कुत्ता मारकर बिल्लियों को',
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब',
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब'
     ];
function checktheCorrectsentence(){
    var savedvalue = displayingvalue.trim()
    for(var i =0;i<arrayvalue.length;i++){
        var temporary = arrayvalue[i]
        var localValue = temporary.localeCompare(savedvalue)
        if(localValue === 0){
            document.getElementById("play4").innerHTML = "Right answer!!!"
            document.getElementById("play4").style.color = "green"
            return  document.getElementById("play4").innerHTML = "Right answer!!!"
            }
            document.getElementById("play4").innerHTML = "Wrong answer!!!"
            document.getElementById("play4").style.color = "red"
        }
        document.getElementById("play5").innerHTML = "<button id='getcorrect' onclick='answerwers();'>Get Correct Sentence</button>"
 }


var firstHindiSentence = ['राम और श्याम बाजार गयें',
            'राम और श्याम गयें बाजार',
            'बाजार गयें राम और श्याम',
            'गयें बाजार राम और श्याम'
            ];
        var secondHindiSentence = ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
            'सोया राम और श्याम भी'
            ];
        var thirdHindiSentence = ['मैंने उसे बताया कि राम सो रहा है',
            'मैंने उसे बताया कि सो रहा है राम',
            'उसे मैंने बताया कि राम सो रहा है',
            'उसे मैंने बताया कि सो रहा है राम',
            'मैंने बताया उसे कि राम सो रहा है',
            'मैंने बताया उसे कि सो रहा है राम',
            'उसे बताया मैंने कि राम सो रहा है',
            'उसे बताया मैंने कि सो रहा है राम',
            'बताया मैंने उसे कि राम सो रहा है',
            'बताया मैंने उसे कि सो रहा है राम',
            'बताया उसे मैंने कि राम सो रहा है',
            'बताया उसे मैंने कि सो रहा है राम'
            ];
        var fourthHindiSentence = ['राम खाकर सोया',
            'खाकर राम सोया',
            'राम सोया खाकर',
            'खाकर सोया राम',
            'सोया राम खाकर',
            'सोया खाकर राम'
            ];
        var fifthHindiSentence = ['बिल्लियों को मारकर कुत्ता सो गया ',
            'मारकर बिल्लियों को कुत्ता सो गया',
            'बिल्लियों को मारकर सो गया कुत्ता',
            'मारकर बिल्लियों को सो गया कुत्ता',
            'कुत्ता सो गया बिल्लियों को मारकर',
            'कुत्ता सो गया मारकर बिल्लियों को',
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'
            ];
        var sixthHindiSentence = ['एक लाल किताब वहाँ है',
            'एक लाल किताब है वहाँ',
            'वहाँ है एक लाल किताब',
            'है वहाँ एक लाल किताब'
            ];
        var seventhHindiSentence = ['एक बड़ी सी किताब वहाँ है',
            'एक बड़ी सी किताब है वहाँ',
            'बड़ी सी एक किताब वहाँ है',
            'बड़ी सी एक किताब है वहाँ',
            'वहाँ है एक बड़ी सी किताब',
            'वहाँ है बड़ी सी एक किताब',
            'है वहाँ एक बड़ी सी किताब',
            'है वहाँ बड़ी सी एक किताब'
            ];
        var harray = [firstHindiSentence,secondHindiSentence,thirdHindiSentence,fourthHindiSentence,
            fifthHindiSentence,sixthHindiSentence,seventhHindiSentence];

        var Sentence1 = ['John ate an apple before afternoon',
                    'before afternoon John ate an apple',
                    'John before afternoon ate an apple'
                ];
                var Sentence2 = ['some students like to study in the night',
                    'at night some students like to study'
                ];
                var Sentence3 = ['John and Mary went to church',
                    'Mary and John went to church'
                 ];
                var Sentence4 = ['John went to church after eating',
                    'after eating John went to church',
                    'John after eating went to church'
                ];
                var Sentence5 = ['did he go to market',
                    'he did go to market'
                ];
                var Sentence6 = ['the woman who called my sister sells cosmetics',
                    'the woman who sells cosmetics called my sister',
                    'my sister who sells cosmetics called the woman',
                    'my sister who called the woman sells cosmetics'
                ];
                var Sentence7 = ['John goes to the library and studies',
                    'John studies and goes to the library'
                ];
                var Sentence8 = ['John ate an apple so did she',
                    'she ate an apple so did John'
                ];
                var Sentence9 = ['the teacher returned the book after she noticed the error',
                    'the teacher noticed the error after she returned the book',
                    'after the teacher returned the book she noticed the error',
                    'after the teacher noticed the error she returned the book',
                    'she returned the book after the teacher noticed the error',
                    'she noticed the error after the teacher returned the book',
                    'after she returned the book the teacher noticed the error',
                    'after she noticed the error the teacher returned the book'
                ];
                var Sentence10 = ['I told her that I bought a book yesterday',
                    'I told her yesterday that I bought a book',
                    'yesterday I told her that I bought a book',
                    'I bought a book that I told her yesterday',
                    'I bought a book yesterday that I told her',
                    'yesterday I bought a book that I told her'
                ];


        var earray = [Sentence1,Sentence2,Sentence3,Sentence4,
                Sentence5,Sentence6,Sentence7,Sentence8,Sentence9,Sentence10];
hidden = function(){
    document.getElementById('play5').innerHTML = "<button id='getcorrect' onclick='changebutton()'>Get Answers</button>"
    document.getElementById("play6").innerHTML = "";
}
changebutton = function(){
    while(document.getElementById("play6").innerHTML ==""){
        document.getElementById('play5').innerHTML = "<button id='getcorrect' onclick='hidden();'>Hide the Correct Sentence</button>"
        document.getElementById("play6").innerHTML = answer;
    }
}


var total,answer;
 function answerwers(){
    answer=""
    total = 0
    document.getElementById("play6").innerHTML = ""
    if(sel.value=='hindi'){
        total = harray[replace].length-1;
        document.getElementById('play5').innerHTML = "<button id='getcorrect' onclick='hidden();'> Hide the Correct Sentence</button>"
        for(i=0;i<=total;i++){
            answer = answer + harray[replace][i]+"<br/>"
        }
        document.getElementById("play6").innerHTML = answer;
    }else if (sel.value=='english'){
        total = earray[replace].length-1;
        document.getElementById('play5').innerHTML = "<button id='getcorrect' onclick='hidden();'>Hide the Correct Sentence</button>"
        for(i=0;i<=total;i++){
            answer = answer + earray[replace][i]+"<br/>"
        }
        document.getElementById("play6").innerHTML = answer;
    }
}
