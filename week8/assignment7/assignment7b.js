
function contactInformationHTML(person) {
    var name = person.firstName + ' ' + person.lastName;
    var email = person.email;

    var html = '<article>';
    html = html + '<h1>' + name + '</h1>';
    html = html + '<p><strong>Email:</strong> ' + email + '</p>';
    html = html + '</article>';
    return html;
}

jQuery(document).on('ready', function() {
    var contacts = $('#contacts');

    // Add a person.
    var addContactForm = $('#addContactForm');
    addContactForm.on('submit', function(event) {
        event.preventDefault();

        var firstNameValue = $('#firstName').val();
        var lastNameValue = $('#lastName').val();
        var emailValue = $('#email').val();

        var person = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue
        };

        var html = contactInformationHTML(person);
        contacts.append(html);

    }); // End of the form's submit event handler


    // Clear the address book.
    var clearContacts = $('#clearContacts');
    clearContacts.on('click', function(event) {
        event.preventDefault();
        contacts.empty();
    }); // End of the clearContacts button's click event handler

}); // End of the document.ready event handler.

