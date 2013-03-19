// formplode.js
// Copyright (c) 2013 Jamieson Becker (MIT License like jQuery)

/*
 *   Scrape a form for values
 *
 *   var data = {
 *      name: "Jamieson Becker",
 *      email: "myoldemail@somewhere.com"
 *   });
 *   $("form .myform").formscrape(data);
 *   
 *   Now, the data object has been updated with the name and email address
 *   scraped from the .myform form!
 *
 *   The only requirement is that the form input fields have matching name=
 *   attributes. And, yes, it's really this short! (thx to jQuery!)
 *
 *   (note: checkboxes and radios will be converted to JSON true and false)
 *
 */
  

$.fn.formscrape = function(data) {
    var form = this;
    var data = data || {};
    // wipe checkboxes and radio buttons from current data
    $("[type=checkbox], [type=radio]").each(function() {
        var name = $(this).attr("name");
        delete data[name];
    });
    $.each($(form).serializeArray(), function(i, field) {
        data[field.name] = field.value;
    });
    // fixup checkboxes
    $("[type=checkbox]").each(function() {
        var name = $(this).attr("name");
        // convert "checked" to true/false
        data[name] = name in data;
    });
    return data;
}


/*
 *   Explodes a dictionary of values back onto an HTML form
 *  
 *   $("form .myform").formplode({
 *      name: "Jamieson Becker",
 *      email: "jamieson@jamiesonbecker.com"
 *   });
 *  
 *   The requirements are that the form input fields have matching name=
 *   attributes. Checkboxes and radios should be JSON boolean values (true
 *   and false).
 *
 */

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
}

