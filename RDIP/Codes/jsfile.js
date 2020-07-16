            
            var sel = document.getElementById("sel");

        myfunction = function (){

            
            if (sel.value == "eng") {
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

                

                var engRandom = earray[Math.floor(Math.random() * earray.length)]

                document.getElementById("value").innerHTML =engRandom[Math.floor(Math.random())]

            }

            

            else {

                var HSentence1 = ['राम और श्याम बाजार गयें',
                    'राम और श्याम गयें बाजार',
                    'बाजार गयें राम और श्याम',
                    'गयें बाजार राम और श्याम'

                ];
                var HSentence2 = ['राम सोया और श्याम भी',
                    'श्याम सोया और राम भी',
                    'सोया श्याम और राम भी',
                    'सोया राम और श्याम भी'
                ];
                var HSentence3 = ['मैंने उसे बताया कि राम सो रहा है',
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
                var HSentence4 = ['राम खाकर सोया',
                    'खाकर राम सोया',
                    'राम सोया खाकर',
                    'खाकर सोया राम',
                    'सोया राम खाकर',
                    'सोया खाकर राम'
                ];
                var HSentence5 = ['बिल्लियों को मारकर कुत्ता सो गया	',
                    'मारकर बिल्लियों को कुत्ता सो गया',
                    'बिल्लियों को मारकर सो गया कुत्ता',
                    'मारकर बिल्लियों को सो गया कुत्ता',
                    'कुत्ता सो गया बिल्लियों को मारकर',
                    'कुत्ता सो गया मारकर बिल्लियों को',
                    'सो गया कुत्ता बिल्लियों को मारकर',
                    'सो गया कुत्ता मारकर बिल्लियों को'
                ];
                var HSentence6 = ['एक लाल किताब वहाँ है',
                    'एक लाल किताब है वहाँ',
                    'वहाँ है एक लाल किताब',
                    'है वहाँ एक लाल किताब'
                ];
                var HSentence7 = ['एक बड़ी सी किताब वहाँ है',
                    'एक बड़ी सी किताब है वहाँ',
                    'बड़ी सी एक किताब वहाँ है',
                    'बड़ी सी एक किताब है वहाँ',
                    'वहाँ है एक बड़ी सी किताब',
                    'वहाँ है बड़ी सी एक किताब',
                    'है वहाँ एक बड़ी सी किताब',
                    'है वहाँ बड़ी सी एक किताब'
                ];

                var harray = [HSentence1,HSentence2,HSentence3,HSentence4,
                HSentence5,HSentence6,HSentence7];

                

                var hRandom = harray[Math.floor(Math.random() * harray.length)]


                

                document.getElementById("value").innerHTML =  hRandom[Math.floor(Math.random())]


            }
            
        } 