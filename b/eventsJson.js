var possibleSpeeches = {

    "hello": {

        "answer": "Hey there, how can I help you?",
        "isToggle": "false",
        "tellMeMore": [
            "Varna is the marine capital of Bulgaria. I am sure, that everyone can find their favoutite thing to do here"]
    },

    "what is the weather": {
        "answer": "I am not a meteorologist",
        "isToggle": "false",
        "tellMeMore": ["You can type Varna weather in google"]
    },



    "show me the best clubs":{
      "answer": "i've got some clubs for you, party animal..",
      "isToggle": "clubs",
      "tellMeMore":["Top three clubs are Avenue, Plaza and Varna live. Have fun!"]
    },

    "clubs in Varna":{
      "answer": "if you want to party hard i will tell you the three best clubs in Varna",
      "isToggle": "clubs",
      "tellMeMore":["They are Avenue, Plaza and Varna live"]
    },

    "show me dance clubs in Varna":{
      "answer": "night life in Varna is very wild, i have something for you",
      "isToggle":"clubs",
      "tellMeMore":["Avenue, Plaza and Varna live are some of the good places"]
    },

    "show me some clubs in Varna":{
      "answer": "Okay i will suggest you the best clubs",
      "isToggle":"clubs",
      "tellMeMore":["I've got some nice places for you, like Plaza, Avenue and Varna live"]
    },

    "where can i go to a club in Varna":{
      "answer": "there are some very nice places to go wild",
      "isToggle":"clubs",
      "tellMeMore":["Clubs like Varna live, Avenue and Plaza are just awesome"]
    },

    "dance clubs in Varna":{
      "answer": "I have some very good suggestions for you",
      "isToggle":"clubs",
      "tellMeMore":["Varna live , Avenue and Plaza are very good dance clubs"]
    },



    "best coffee in Varna":{
      "answer": "There are a lot of places where you can drink great hot coffee, go to the tellMeMore section",
      "isToggle": "coffee",
      "tellMeMore":["Costa coffee, Modera bar and Muffin coffee and bar, are some of the greatest places for coffee lovers"]
    },

    "show me the coffee shops in Varna":{
      "answer": "There are a lot of places where you can drink great hot coffee",
      "isToggle": "coffee",
      "tellMeMore":["Costa coffee, Modera bar and Muffin coffee and bar, are some of the greatest places for coffee lovers"]
    },

    "which are the best coffee shops in Varna":{
      "answer": "click tellMeMore and i will show you",
      "isToggle":"coffee",
      "tella me more":["Costa coffee, Modera bar and Muffin coffee and bar are some of the best coffee shops"]
    },

    "where can i drink coffee in Varna":{
      "answer": "i have some great suggestions for you",
      "isToggle":"coffee",
      "tella me more":["Some nice places to drink hot coffee are Cost coffee, Modera bar and Muffin coffee and bar"]
    },





    "where to eat in Varna":{
      "answer": "I have got something for you, click tellMeMore",
      "isToggle": "eat",
      "tellMeMore":["If you like fast food Le Chef is for you, for pizza lovers- Godzila and some fancy stuff- Villa Marciana"]
    },

    "show me places where i can eat in Varna":{
      "answer": "Okay, i have got something for you, click tellMeMore",
      "isToggle": "eat",
      "tellMeMore":["If you like fast food Le Chef is for you, for pizza lovers- Godzila and some fancy stuff- Villa Marciana"]
    },

    "hotels in Varna":{
      "answer": "just click tellMeMore and you will see",
      "isToggle": "hotels",
      "tellMeMore":["Golden tulip-business hotel, Graffit hotel and Oceanic hotel are some of the good places where you can sleep"]
    },

    "show me the best hotels in Varna":{
      "answer": "just click tellMeMore and i will give you my suggestions",
      "isToggle": "hotels",
      "tellMeMore":["Golden tulip-business hotel, Graffit hotel and Oceanic hotel are some of the good places where you can sleep"]
    },

    "where can I drink beer":{
      "answer": "i found some pubs",
      "isToggle": "pub",
      "tellMeMore":["Black sheep, Averi beers and Sundogs have some great beer and food"]
    },

    "show me the pubs in Varna":{
      "answer": "Okay, click tellMeMore and see them",
      "isToggle": "pub",
      "tellMeMore":["Black sheep, Averi beers and Sundogs have some great beer and food"]
    },

    "you are stupid":{
      "answer": "You created me, idiot",
      "isToggle": "false",
      "tellMeMore":["@.@.@.@.@.@.@.@.@.@.@.@.@.@. and have a nice day"]
    }
}



var tellMeMoreToggle = {

    "clubs": [ // 0 1 2 3 will be properties for the clubs we are going to create and append as a dom eement
        {
            "imageConfig": {
                "attributes": {
                    "src": "barchetaMarcheta\\clubs_avenue.jpg",
                    "class": "bottomToggleableImagesByTellMeMore"
                }
            },

            "textConfig": {


                "attributes": {

                    "text": " INSERT CLUB DESCRIPTION HERE "

                }



            },
            "headerConfig": {

                "attributes": {

                    "text": " INSERT CLUB HEADER HERE "

                }



            }



        }, {
            "imageConfig": {
                "attributes": {
                    "src": "barchetaMarcheta\\clubs_live.jpg",
                    "class": "bottomToggleableImagesByTellMeMore"
                }
            },

            "textConfig": {


                "attributes": {

                    "text": " INSERT CLUB DESCRIPTION HERE "

                }



            },
            "headerConfig": {

                "attributes": {

                    "text": " INSERT CLUB HEADER HERE "

                }



            }

        }, {
            "imageConfig": {
                "attributes": {
                    "src": "barchetaMarcheta\\clubs_plazza.jpg",
                    "class": "bottomToggleableImagesByTellMeMore"
                }
            },

            "textConfig": {


                "attributes": {

                    "text": " INSERT CLUB DESCRIPTION HERE "

                }



            },
            "headerConfig": {

                "attributes": {

                    "text": " INSERT CLUB HEADER HERE "

                }



            }

        }

    ]





}
