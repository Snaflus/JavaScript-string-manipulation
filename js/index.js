const wordApp = Vue.createApp({
    data() {
        return {
            word: "pLACEHoldEr",
            words: ["run me first!"],
        }
    },
    computed: {
        arrayToResult() {
            wordsToString = this.words.toString();
            wordsToString = wordsToString.replace(/,/g, ", ") //adds space after comma between words
            parsedString = "Parsed string is: " + wordsToString
            return parsedString;
        },
        // listedResult() {
        //     list = document.getElementById("orderedResults");
        //     for (i = 0; i < this.words.length; i++) {
        //         item = document.createElement("li");
        //         item.appendChild(this.words[i]);
        //         list.appendChild(item);
        //     }
        //     return list;
        // }
    },
    methods: {
        showWord(word) {
            this.words = [];
            if (word == null || word == "") {
                this.words.push("invalid input");
                this.resultToListDOM();
            } else if (!isNaN(parseInt(word, 10))) { //tryParse to int verifies string doesnt contain a letter
                this.words.push("input is not a string");
                this.resultToListDOM();
            } else {
                this.words.push(word); //a: word as input             
                this.words.push(word.toLowerCase()); //b: word in lowercase
                this.words.push(word.toUpperCase()); //c: word in uppercase
                this.words.push(word.charAt(0).toUpperCase() + word.slice(1)); //d: word capitalized first letter v2
                this.words.push(word.slice(0, -1) + word.slice(-1).toUpperCase()); //e: word capitalized last letter v2
                this.words.push(word.split("").reverse().join("")); //f: word reversed
            }
            this.resultToListDOM();
            this.resultToTableDOM();
        },


        // This is a DOM solution in pure Javascript done before we had any vue.js introduction
        // resultToListDOM() {
        //     list = document.getElementById("orderedResultsList");
        //     list.innerHTML = ""; //wipes list for reruns of function
        //     for (i = 0; i < this.words.length; i++) {
        //         item = document.createElement("li");
        //         item.appendChild(document.createTextNode(this.words[i]));
        //         list.appendChild(item);
        //     }
        // },

        // resultToTableDOM() {
        //     table = document.getElementById("orderedResultsTableBody");
        //     table.innerHTML = ""; //wipes table for reruns of function
        //     for (i = 0; i < this.words.length; i++) {
        //         item = document.createElement("tr");
        //         item.appendChild(document.createTextNode(this.words[i]));
        //         table.appendChild(item);
        //     }
        // }
    }
}).mount("#wordApp")