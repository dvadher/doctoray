$(document).ready(function(){
    $('.front_contact').validate({
        ignore: 'input[type=hidden], .select2-search__field',
        errorElement: 'span',
        errorClass: 'validation-error-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        // errorPlacement: function (error, element) {
        //     if (element.parents('div').hasClass('profile-photo')) {
        //         error.appendTo(element.parent());
        //     } else if (element.parents('div').hasClass('consultation-type')) {
        //         error.appendTo(element.parent().parent());
        //     } else if (element.parents('div').hasClass('form-group')) {
        //         error.appendTo(element.parent());
        //     } else if (element.parents('div').hasClass('licence-upload')) {
        //         error.appendTo(element.parent());
        //     } else {
        //         error.insertAfter(element);
        //     }
        // },
        rules: {
            fname: {
                required: true,
            },
            lname: {
                required: true,
            },
            email: {
                required: true,
            },
            phnumber: {
                required: true,
            },
            message: {
                required: true,
            },
        },
        messages: {
            fname: {
                required: "Please Enter first name",
            },
            lname: {
                required: "Please enter last name",
            },
            email: {
                required: "Please enter email",
            },
            phnumber: {
                required: "Please enter phone number",
            },
            message: {
                required: "Please enter message",
            },
        }
    });
});