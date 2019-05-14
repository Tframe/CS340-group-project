(function() {

    const states = [
       'Alabama',
       'Alaska',
       'Arizona',
       'Arkansas',
       'California',
       'Colorado',
       'Connecticut',
       'Delaware',
       'Florida',
       'Georgia',
       'Hawaii',
       'Idaho',
       'Illinois',
       'Indiana',
       'Iowa',
       'Kansas',
       'Kentucky',
       'Louisiana',
       'Maine',
       'Maryland',
       'Massachusetts',
       'Michigan',
       'Minnesota',
       'Mississippi',
       'Missouri',
       'Montana',
       'Nebraska',
       'Nevada',
       'New Hampshire',
       'New Jersey',
       'New Mexico',
       'New York',
       'North Carolina',
       'North Dakota',
       'Ohio',
       'Oklahoma',
       'Oregon',
       'Pennsylvania',
       'Rhode Island',
       'South Carolina',
       'South Dakota',
       'Tennessee',
       'Texas',
       'Utah',
       'Vermont',
       'Virginia',
       'Washington',
       'West Virginia',
       'Wisconsin',
       'Wyoming'
    ];

    let newPatron = {
        name: {
            first: '',
            last: ''
        },
        address: {
            street: '',
            city: '',
            state: '',
            zip: 0
        },
        phone: '',
        email: ''
    };

    const extractPatronInput = function (patron) {
        patron.name.first = $('#name-first').val();
        patron.name.last = $('#name-last').val();
        patron.address.street = $('#addr-street').val();
        patron.address.city = $('#addr-city').val();
        patron.address.state = $('#addr-state-opts').val();
        patron.address.zip = $('#addr-zip').val();
        patron.phone = $('#phone').val();
        patron.email = $('#email').val();
    };

    const validate = function (patron) {
        // TODO: implement validation of input values
        // TODO: implement specific value type validation functions for better
        //       modularity
    };

    const buildAcntSummary = function (patron) {
        return (
            "<h6>The following account:</h6>" +
            "<p>" + patron.name.first + " " + patron.name.last + "<br/>" +
                    patron.address.street + " " + patron.address.city + ", " +
                    patron.address.state + "  " + patron.address.zip + "<br/>" + 
                    patron.phone + "<br/>" +
                    patron.email + "</p>" +
            "<h6>has been created</h6>"
        );
    };

    

    // wrap any dom manipulations or event listeners in this event listener
    document.addEventListener("DOMContentLoaded", function(event) {

        // add all state options
        $.each(states, function (key, value) {
            $('#addr-state-opts').append(new Option(value, value));
        });

        // TODO: implement action for ok click on acnt confirmation modal
        $('#acnt-conf-btn').click(function () {
            // reload window? redirect back to home page?
            console.log('account confirmation ok button clicked');
        });


        // event listener for new account submission
        $('#new-acnt-form').submit((event) => {
            event.preventDefault();

            // get patron data
            extractPatronInput(newPatron);
            console.log(newPatron);

            // TODO: validate patron info

            // load and display confirmation modal
            $('#acnt-conf-body').html(buildAcntSummary(newPatron));
            $('#acnt-conf').modal('show');
        });

    });
})();

// Get the modal
var addModal = document.getElementById('addModal');
var editModal = document.getElementById('editModal');
var deleteModal = document.getElementById('deleteModal');

// Get the button that opens the modal
var addBtn = document.getElementById("addBtn");
var editBtn = document.getElementById("editBtn")
var deleteBtn = document.getElementById("deleteBtn");

// Get the <span> element that closes the modal
var spanAdd = document.getElementsByClassName("closeAdd")[0];
var spanEdit = document.getElementsByClassName("closeEdit")[0];
var spanDelete = document.getElementsByClassName("closeDelete")[0];

// When the user clicks on the button, open the modal 
addBtn.onclick = function() {
  addModal.style.display = "block";
}
editBtn.onclick = function() {
  editModal.style.display = "block";
}
deleteBtn.onclick = function() {
  deleteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAdd.onclick = function() {
  addModal.style.display = "none";
}
spanEdit.onclick = function() {
  editModal.style.display = "none";
}
spanDelete.onclick = function() {
  deleteModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == editModal) {
    editModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == deleteModal) {
    deleteModal.style.display = "none";
  }
}