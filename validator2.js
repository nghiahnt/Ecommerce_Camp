// Constructure function
const Validator2 = (options) => {
    // let selectorRules = {};
    let formElement = document.querySelector(options.form);
    console.log(options.emailValueSeted);

    // Validate
    function validate(element, rule) {
        let errorMessage;
        // Get all rules of element through selector
        // let rules = selectorRules[rule.selector];

        let errorElement = getParent(element, options.formGroupSelector).querySelector(options.errorSelector);
        // errorMessage = rule(errorElement.value)

        // validate
        // for (let i = 0; i < rules.length; i++) {
        //     switch (element.type) {
        //         /**
        //          * Case for radio, checkbox
        //          * case "...":
        //          */
        //         default:
        //             errorMessage = rule[i](element.value);
        //         // rule[i](element.value) - Specifies the minimum number of characters (password)
        //     }
        //     if (errorMessage) break;
        // }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(element, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(element, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Func get element parent
    function getParent(chilren, parent) {
        while (chilren.parentElement) {
            if (chilren.parentElement.matches(parent)) {
                return chilren.parentElement;
            }
            chilren = chilren.parentElement;
        }
    }

    if (formElement) {
        // Loop over rules
        // options.rules.forEach((rule) => {
        // Save each selector - all its rule
        // if (Array.isArray(selectorRules[rule.selector])) {
        //     selectorRules[rule.selector].push(rule.test);
        // } else {
        //     selectorRules[rule.selector] = [rule.test];
        // }

        const rule = options.rules[0];

        // Get all selector
        let inputElements = formElement.querySelector(rule.selector);
        // Array.from(inputElements).forEach((inputElement) => {
        //     // Listening onBlur
        //     inputElement.onblur = function () {
        //         validate(inputElement, );
        //     };
        // });

        inputElements.onblur = function() {
            validate(inputElements, rule.test)
        }

        // });
    }
};

// Define rules
Validator2.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return pattern.test(value) ? undefined : message || 'Vui long nhap dung email';
        },
    };
};

export default Validator2;
