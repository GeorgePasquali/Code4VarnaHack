var hack4Varna = {
    mainContainer: null,

    json: null,

    lastSaid: null,

    firstButton:null,

    secondButton:null,



    initialize: function(id) {

        this.mainContainer = document.getElementById(id);

        this.json = possibleSpeeches;
        this.firstButton = document.getElementById('askButton');
        this.secondButton = document.getElementById('tellMeMoreButton');

        this.firstButton.addEventListener("click" , function(){
           hack4Varna.initialize();
        });


        hack4Varna.startVoiceRecognition();


    },

    startVoiceRecognition: function(language) {

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            var recognition = new webkitSpeechRecognition();

            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = function(e) {

                hack4Varna.lastSaid = e.results[0][0].transcript;
                var answer = hack4Varna.getAnswer(hack4Varna.json, hack4Varna.lastSaid);
                if(answer){
                  console.log(answer);
                  responsiveVoice.speak(answer);
                }

                console.log(hack4Varna.lastSaid);

                var tellMeMoreBtn = document.getElementById("tellMeMoreButton");
                tellMeMoreBtn.addEventListener("click" , function(){


                responsiveVoice.speak(hack4Varna.getTellMeMore(hack4Varna.json , hack4Varna.lastSaid));

                responsiveVoice.speak(hack4Varna.getToggleableAndAppend(hack4Varna.json , hack4Varna.lastSaid , tellMeMoreToggle));



                })

            };

            recognition.onerror = function(e) {
                recognition.stop();
            }

        }


    },

    getAnswer: function(jsonObject, inputSpeech) {

        for (var input in jsonObject) {
            if (jsonObject.hasOwnProperty(input) && input == inputSpeech) {
                return jsonObject[input].answer;
            }
        }

    },

    getTellMeMore: function(jsonObject, inputSpeech){

      for (var input in jsonObject) {
          if (jsonObject.hasOwnProperty(input) && input == inputSpeech) {
              return jsonObject[input].tellMeMore[0];

          }
      }



    },

    getToggleableAndAppend: function(jsonObject, inputSpeech ,appendableObj){

      for (var input in jsonObject) {
          if (jsonObject.hasOwnProperty(input) && input == inputSpeech) {
              var displayIndex = jsonObject[input].isToggle;
          }
      }


      var wrapper = document.createElement("DIV");
      wrapper.setAttribute("class" , "boxesClassGogo");

      for (var isToggleIndex in appendableObj) {
        if (appendableObj.hasOwnProperty(isToggleIndex)) {
          console.log(appendableObj[isToggleIndex].length );
          for (var i = 0 , len = appendableObj[isToggleIndex].length ; i < len; i++) {

            for (var config in appendableObj[isToggleIndex][i]) {
              if ( config == "headerConfig") {

                var header = document.createElement("H3");
                var headerText = document.createTextNode(appendableObj[isToggleIndex][i][config].attributes.text) ;
                header.appendChild(headerText);

                wrapper.appendChild(header);

              }
              if ( config == "imageConfig") {

                var image = document.createElement("IMG");
                elementsCreator.setAttributes(image , appendableObj[isToggleIndex][i][config].attributes);

                wrapper.appendChild(image);

              }
              if ( config == "textConfig") {

                      var text = document.createElement("P");
                      var headerText = document.createTextNode(appendableObj[isToggleIndex][i][config].attributes.text) ;
                      text.appendChild(headerText);

                      wrapper.appendChild(text);

              }
            }


          }
        }
      }
      document.getElementById('mainDivId').appendChild(wrapper);


    },




};


var askButton = document.getElementById('askButton')
askButton.addEventListener("click" , function(){
   hack4Varna.initialize();
});
