var myModule = (function () {
    var counter = 0; // private variable

    return {
        // public functions
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log( "counter value prior to reset: " + counter );
            counter = 0;
        }
    };
})();