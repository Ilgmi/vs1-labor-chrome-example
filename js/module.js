

var myTestModuel = (function (initialValues) {

    this.test = initialValues;


    var privateCalc = function (foo, bar) {
        return foo + bar;
    };

    return {
        getTest: function () {
            return test;
        },

        calcTest: function(foo){
            test = privateCalc(foo, 10);

            console.log(test);
            console.info(test);
            console.error(test);
            console.debug(test);
            console.warn(test);
        }
    }
})(10);
