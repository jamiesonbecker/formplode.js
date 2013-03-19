formplode.js
============


Formplode is two simple jQuery plugins that:

    1.  Scrape an entire form for you and return all the
        inputs/checkboxes/textareas/radio buttons in a JSON dictionary!

    2.  Re-populate the same HTML form with the data after loading
        from the server (doing the right thing with checkboxes
        and radios!)
        


Scrape a form for values
------------------------

    // this is our old data that needs to be updated from the form myform

    var data = {
       name: "Jamieson Becker",
       email: "myoldemail@somewhere.com"
    });

    $("form .myform").formscrape(data);


Now, the data object has been updated with the name and email address
scraped from the .myform form!

The only requirement is that the form input fields have matching name=
attributes. And, yes, it's really this short! (thx to jQuery!)

(Note: checkboxes and radios will be converted to JSON `true` and `false`.)



Explodes a dictionary of values back onto an HTML form
------------------------------------------------------


This will explode the AJAX JSON data back onto an HTML form:


    var data = {name: "Jamieson Becker", email: "jamieson@jamiesonbecker.com"}
    $("form .myform").formplode(data);


The requirements are simply that the form input fields have matching `name`
attributes -- that is, that for this form there is a <input name=name> and
an <input name=email>.

Checkboxes and radios should be JSON boolean values (`true` and `false`).

