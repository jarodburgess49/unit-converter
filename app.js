//UNIT CONVERTER//
//CONVERTING CONTROLLER
var ConCtrl = (function () {
    //converting the units
    var CM = function (value) {
        this.value = value;
        result = value;
    }
    var M = function (value) {
        this.value = value;
        result = value;

    }
    var CM1 = function (value) {
        this.value = value;
        result = value*100;
    }
    var M1 = function (value) {
        this.value = value;
        result = value / 100;

    }
    var KM = function (value) {
        this.value = value;
        result = value / 100000;

    }
    var MILE = function (value) {
        this.value = value;
        result = value / 160938;

    }
    var INCH = function (value) {
        this.value = value;
        result = value / 2.54;

    }
    
    var FOOT = function (value) {
        this.value = value;
        result = value / 30.48;

    }

    var INCH1 = function (value) {
        this.value = value;
        result = value * 39.37;

    }
    var FOOT1 = function (value) {
        this.value = value;
        result = value * 30.48;

    }

    return {
        addItem: function (value, type, type1) {
            var newItem;
            if (type === 'cm') {
                if (type1 === 'cm') {

                    newItem = new CM(value);

                } else if (type1 === 'm') {
                    newItem = new M1(value);

                } else if (type1 === 'km') {
                    newItem = new KM(value);
                } else if (type1 === 'mile') {
                    newItem = new MILE(value);
                } else if (type1 === 'foot') {
                    newItem = new FOOT(value);
                } else if (type1 === 'inch') {
                    newItem = new INCH(value);
                }
            } else if (type === 'm') {

                if (type1 === 'cm') {

                    newItem = new CM1(value);

                } else if (type1 === 'm') {
                    newItem = new M(value);

                } else if (type1 === 'km') {
                    newItem = new KM(value);
                } else if (type1 === 'mile') {
                    newItem = new MILE(value);
                } else if (type1 === 'foot') {
                    newItem = new FOOT1(value);
                } else if (type1 === 'inch') {
                    newItem = new INCH1(value);
                }

            }

            return newItem;
        }

    }

})();
//UI CONTROLLER
var UserInterface = (function () {

    return {
        getUnit: function () {
            return {
                value: document.querySelector('.unit__1').value,
                type: document.querySelector('.unit--type0').value,
                type1: document.querySelector('.unit--type1').value,

            }


        },
        clearValue: function () {
            var clearInfo = document.querySelectorAll('.unit__1');
            field = Array.prototype.slice.call(clearInfo);
            field.forEach(function (current, index, Array) {
                current.value = "";
            })


        }
    };




})();

//MAIN CONTROLLER
var controller = (function (UICtrl, ConCtrl) {
    var unitCtrl = function () {
        // get input from the input fiels
        var input = UICtrl.getUnit();


        // push the input data to conversion module
        var newItem = ConCtrl.addItem(input.value, input.type, input.type1);
        console.log(result);

        //get the converted data


        //display in the UI
        var html = ' <div class="result">RESULTS</div>'
        var newHtml = html.replace('RESULTS', result);
        document.querySelector('.result').insertAdjacentHTML('beforeend', newHtml);
        //clearing the input fields
        UICtrl.clearValue();

    }


    //add eventlisteners
    document.querySelector('.add__btn').addEventListener('click', unitCtrl);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            unitCtrl();
        }
    })

})(UserInterface, ConCtrl);
