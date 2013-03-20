// formplode.js
// Copyright (c) 2013 Jamieson Becker (MIT)
// https://github.com/jamiesonbecker/formplode.js

$.fn.formplode = function(data) {
    var form = this;
    $.each(data, function(name, value) {
        var inp = $("[name='" + name + "']", form);
        if (inp.attr("type") === "radio") {
            $("[type='radio'][value='" + value + "']").attr("checked", "")
        } else if (inp.attr("type") === "checkbox") {
            if (value === true) inp.attr("checked", "");
            else inp.removeAttr("checked");
        } else {
            inp.val(value);
        }
    });
    return form;
}
