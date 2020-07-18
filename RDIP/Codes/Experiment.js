var sel = document.getElementById("sel");
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

                


   	document.getElementById("play1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("play").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
  
        var rwords = Math.floor(Math.random()*earray.length)
	document.getElementById("play2").innerHTML = ""
	document.getElementById("play3").innerHTML = ""
	$("#hide").hide()

	var changeWords = Math.floor(Math.random() * earray.length);
	var gettingValue = earray[changeWords][0];
    var k = rvalue(gettingValue);
    var m = "";
    var n = "";
    for (i = 0; i <= k.length - 1; i++) {
        val = k[i];
        m = "  <button style= 'font-size:15px ; padding:4px ; margin-right:4px ' id='btn1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
        n += m;
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
        var fifthHindiSentence = ['बिल्लियों को मारकर कुत्ता सो गया	',
            'मारकर बिल्लियों को कुत्ता सो गया',
            'बिल्लियों को मारकर सो गया कुत्ता',
            'मारकर बिल्लियों को सो गया कुत्ता',
            'कुत्ता सो गया बिल्लियों को मारकर',
            'कुत्ता सो गया मारकर बिल्लियों को',
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'
        ];
        var sixHindiSentence = ['एक लाल किताब वहाँ है',
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

        var harray = [firstHindiSentence, secondHindiSentence, thirdHindiSentence, fourthHindiSentence,
            fifthHindiSentence, sixHindiSentence, seventhHindiSentence];



        document.getElementById("play1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("play").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"


        var rwords = Math.floor(Math.random()*harray.length)

	document.getElementById("play2").innerHTML = ""
	document.getElementById("play3").innerHTML = ""
	$("#hide").hide()



	var changeWords = Math.floor(Math.random() * harray.length);
	var gettingValue = harray[changeWords][0];
    var k = rvalue(gettingValue);
    var m = "";
    var n = "";
    for (i = 0; i <= k.length - 1; i++) {
        val = k[i];
        m = "  <button style= 'font-size:15px ; padding:4px ; margin-right:4px ' id='btn1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
        n += m;
    }
    document.getElementById("value").innerHTML = n 

    } else {
        document.getElementById("play1").innerHTML = ""
        document.getElementById("play").innerHTML = ""
 	document.getElementById("play2").innerHTML = ""
   	document.getElementById("play3").innerHTML = ""
        document.getElementById("value").innerHTML = ""
	
        alert("select any language")
    }
}



$("#hide").hide()
var k;
var displayingvalue = "";
function buttonDisplay(id, value) {
    document.getElementById("play2").innerHTML = "Formed Sentence (after selecting words):";
    displayingvalue += value + " ";
    document.getElementById("play3").innerHTML = displayingvalue;
    $("#hide").show()
    document.getElementById(id).style.display = "none";
}

function rvalue(data) {
    var combine = data.split(" ");
    var i = combine.length, temp, startvalue;
    while (0 !== i) {
        startvalue = Math.floor(Math.random() * i);
        i --;
        temp = combine[i];
        combine[i] = combine[startvalue];
        combine[startvalue] = temp;
    }
    return combine;
}

function reform()
{
displayingvalue= " "
document.getElementById("play2").innerHTML =""
document.getElementById("play3").innerHTML = displayingValue;
for(var i=0;i <= 10;i++)
{
document.getElementById('button1'+i).style.display= "";
}
$("#hide").hide()
}

