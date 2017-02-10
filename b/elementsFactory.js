var elementsCreator = {

    firstInputValue: null,

    secondInputValue: null,

    createWrapper: function(config) {

        var wrapper = document.createElement("DIV");

        this.setAttributes(wrapper, config);

        return wrapper

    },

    appendToWrapper: function(wrapperId, elementToAppend) {

        var wrapper = document.getElementById(wrapperId);

        wrapper.appendChild(elementToAppend);

    },

    deleteIfExists: function(location, config) {


        elementId = document.getElementById(config.id);

        if (elementId) {

            location.removeChild(elementId)

        }


    },

    toggleOnEnter: function(event) {

        var pressedKey = event.key;

        if (pressedKey == 'Enter') {

            taskTwoInitialiser.createDropdown();

        }

    },

    // Will remove all falsy values: undefined, null, 0, false, NaN and "" (empty string)
    cleanArray: function(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    },


    nodeReplacer: function(oldChildId, newChild) {

        itemToReplace = document.getElementById(oldChildId);

        itemToReplace.replaceChild(newChild, itemToReplace);

    },

    setAttributes: function(element, attributesObj) {

        for (var key in attributesObj) {
            element.setAttribute(key, attributesObj[key]);
        }
    },

    // add event cross browser
    addEvent: function(elem, event, fn) {
        if (elem.addEventListener) {
            elem.addEventListener(event, fn, false);
        } else {
            elem.attachEvent("on" + event, function() {
                // set the this pointer same as addEventListener when fn is called
                return (fn.call(elem, window.event));
            });
        }
    },

    setEvent: function(element, eventObject) {

        for (var key in eventObject) {

            element.addEventListener(key, eventObject[key])

        }
    },

    setText: function(element, textsObject) {
        for (var key in textsObject) {
            var textToAdd = document.createTextNode(textsObject[key]);
            element.appendChild(textToAdd);
        }
    },

    addImage: function(element , imageSrc) {

      imageDom = document.createElement("IMG");
      imageDom.setAttribute("src" , imageSrc);
      element.appendChild(imageDom);

    },

    ///////////////////////////////////////////////////////////////////////////////////////////

    createInput: function(config) {

        var input;

        input = document.createElement("INPUT");

        elementsCreator.setAttributes(input, config);

        return input;

    },


    /////////////////////////////////////////////////////////////////////////////////////////////

    createButton: function(config) { // we create a button and set its config

        var button;

        button = document.createElement("BUTTON");

        elementsCreator.setAttributes(button, config.attributes);
        elementsCreator.setEvent(button, config.listeners);
        elementsCreator.setText(button, config.text);



        return button;

    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    createSelect: function(config) { // this has to create an empty dropdown

        var dropdown = document.createElement("SELECT"); //create a select variable

        dropdown.setAttribute("id", config.attributes.id); //set its attributes
        dropdown.setAttribute("class", config.attributes.class);
        dropdown.setAttribute("onchange", config.attributes.onchange);

        var options = elementsCreator.createOptions(config.options);

        dropdown.appendChild(options);

        return dropdown;

    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    createOptions: function(optionsObject) {
        var options = document.createDocumentFragment();

        for (var key in optionsObject) {
            if (optionsObject.hasOwnProperty(key)) {

                var option = document.createElement("OPTION");

                option.setAttribute("value", optionsObject[key]);

                objectText = document.createTextNode(optionsObject[key]);

                option.appendChild(objectText);

                options.appendChild(option);

            }
        }



        return options;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    createTextBox: function(attributes) {

        var textArea;

        textArea = document.createElement("TEXTAREA");

        elementsCreator.setAttributes(textArea, attributes);

        return textArea;

    },

    createTable: {
        table: function(config) {

            var table = document.createElement("TABLE");





            return table;

        },
        tr: function(config) {

            var row = document.createElement("TR");

            return row;

        },
        th: function(data) {

            var header = document.createElement("TH");

            return header;

        },
        td: function(data, config) {

            var td = document.createElement("TD");
            elementsCreator.setText(td, data);

            return td;

        },
        initialize: function(data, config) {

            var table = elementsCreator.createTable.table(); // here we create the table tags

            if (config.headers) { // then we check if we are going to include a header at all

                var row = elementsCreator.createTable.tr(config.headers) // if yes then we add a row to include all headers

                for (var key in config.headers) {
                    if (config.headers.hasOwnProperty(key)) {

                        var header = elementsCreator.createTable.th() // after that we create a header and append it to the row

                        if (config.attributes) {
                            elementsCreator.setAttributes(header, config.attributes.headers);
                        }

                        var title = document.createTextNode(config.headers[key]);

                        header.appendChild(title);

                        row.appendChild(header); // append the header in the row

                        table.appendChild(row); // and we append the row over thentable

                    }

                }

            }

            if (data) { // here we check if we have ANY data to put under the headers

                for (var i = 0; i < data.length; i++) { //we loop trough every element in the data that we have to append to a row

                    var row = elementsCreator.createTable.tr(); // we create a dom row where we append



                    for (var key in data[i]) {

                        if (data[i].hasOwnProperty(key)) {

                            if (typeof data[i][key] === "string" || typeof data[i][key] === "number" || typeof data[i][key] === "object"  ) {

                                var tableData = elementsCreator.createTable.td(); // we create a dom column to append to the row

                                var cellContent = document.createTextNode(data[i][key]);

                                tableData.appendChild(cellContent);

                                row.appendChild(tableData);

                            } else {

                                var tableData = elementsCreator.createTable.td();

                                tableData.appendChild(data[i][key]);

                                row.appendChild(tableData);

                            }

                        }

                    }



                    table.appendChild(row); // we append the data row inside the table

                }

            }

            if (config.attributes) {

                elementsCreator.setAttributes(table, config.attributes.table);




            }

            return table;

        },


    },

    createTab: function(config) {

        /*
          config = {
            navigation: {
              attributes: {}
            },

            tabs: [

              tab1: {
                attributes: {}
                listeners: {}

              },
              tab2: {
                attributes: {}
                listeners: {}

              }

            ]

          }

        */


        var tabs = document.createDocumentFragment(); //this ill represent the navigation

        var navigation = document.createElement("UL"); //this is the ul which will hold the tabs
        elementsCreator.setAttributes(navigation, config.navigation.attributes);


        var tabsConfig = config.tabs;
        for (var i = 0, j = tabsConfig.length; i < j; i++) { // here we create the tabs and append them to the navigation

            var tab = document.createElement("LI");

            for (var key in tabsConfig[i]) { // in this loop we add the config to the tab
                if (tabsConfig[i].hasOwnProperty(key)) {

                    if (key === "listeners") {

                        elementsCreator.setEvent(tab, tabsConfig[i].listeners);

                    } else if (key === "text") {

                        elementsCreator.setText(tab, tabsConfig[i].text);

                    }else if (key === "attributes") {

                      elementsCreator.setAttributes(tab , tabsConfig[i].attributes);

                    }

                }
            }

            navigation.appendChild(tab);

        }
        tabs.appendChild(navigation);
        return navigation;

    }





};
