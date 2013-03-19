formplode.js
============


Formplode is two simple jQuery plugins that:


1.  Scrape an entire form for you and return all the
    inputs/checkboxes/textareas/radio buttons in a JSON dictionary!
    No more messing with .val()!


2.  Re-populate the same HTML form with the data after loading
    from the server (doing the right thing with checkboxes
    and radios!) No more messing with .val()!
        


Scrape a form for values
------------------------

Here's how to scrape a form for its values and get them back in a nice JSON
dictionary, with the keys being the "name" attributes for the input/radios/etc,
and the values being, of course, the values entered on the form.  (Note: unlike
the horrible HTML defaults, where absence or presence of a "checked" attribute
indicates false or true, this actually converts checkboxes to boolean
true/false values!)

    // this is our old data that needs to be updated from the form myform

    var data = {
       name: "Jamieson Becker",
       email: "myoldemail@somewhere.com"
    });

    $("form .myform").formscrape(data);


Now, the data object has been completely updated with the new name and email
address scraped from the .myform form!



Explodes a dictionary of values back onto an HTML form
------------------------------------------------------


This simply explodes the same AJAX JSON data back onto the HTML form, no more messing with .val()!


    var data = {name: "Jamieson Becker", email: "jamieson@jamiesonbecker.com"}
    $("form .myform").formplode(data);


The requirements are simply that the form input fields have matching `name`
attributes -- that is, that for this form there is a <input name=name> and
an <input name=email>.

Checkboxes and radios should be JSON boolean values (`true` and `false`).

