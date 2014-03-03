*Now also available in [unframework.js](https://github.com/jamiesonbecker/unframework.js)*

formplode.js
============

Formplode is a tiny (14 lines!) jQuery plugin that explodes previously-filled out form values back onto an HTML form.  No more messing with .val()!
        

Let's say you have a simple sign-up form:

    <form id=myform>
        <label for="name">Name</label>:  <input name=name id=name><br>
        <label for="address">Address</label>:  <input name=address id=address><br>
        <label for="city">City</label>:  <input name=city id=city><br>
        <label for="state">State</label>:  <input name=state id=state><br>
        <label for="zip">Zip</label>:  <input name=zip id=zip><br>
        <label for="email">Email</label>:  <input name=email id=email><br>
        <label for="username">Username</label>:  <input name=username id=username><br>
    </form>

The old way:

    // form drawn in DOM, now we populate the data for it
    $.get(..., function(values) {
        $("#name").val(values["name"]);
        $("#address").val(values["address"]);
        $("#city").val(values["city"]);
        $("#state").val(values["state"]);
        $("#zip").val(values["zip"]);
        $("#email").val(values["email"]);
        $("#username").val(values["username"]);
        $("#myform").show();
    });

The new way with formplode!

    $.get(..., function(values) {
        $("#myform").formplode(values).show();
    });


The requirements are simply that the form input fields have matching `name`
attributes -- that is, that for this form there is a `<input name=name>` and
an `<input name=email>`. Id's are no longer required (but useful for `<label>` tags.)

Checkboxes or radio values should be provided in the JSON as boolean values (`true` and `false`) (formscrape.js does this.)

NOTE: if using with fillup.js, be sure to specify your stage div; for example, $(".myform", ".stage").formplode(data); Otherwise, you may explode your data onto your off-stage form, which is probably blank. This warning is true with formscrape.js as well.


Related
-------

See [formscrape.js](https://github.com/jamiesonbecker/formscrape.js) for the reverse of this plugin -- scrape the data from the form after the user edits it.



