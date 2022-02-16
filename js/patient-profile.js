



$(document).ready(function () {
           // patient profile form
    $('.patient_profile_form').validate({
        ignore: 'input[type=hidden], .select2-search__field',
        errorElement: 'span',
        errorClass: 'validation-error-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        errorPlacement: function (error, element) {
            if (element.parents('div').hasClass('patient-profile-photo')) {
                error.appendTo(element.parent().parent().parent());
            } else if (element.parents('div').hasClass('consultation-type')) {
                error.appendTo(element.parent().parent());
            } else if (element.parents('div').hasClass('form-group')) {
                error.appendTo(element.parent());
            } else if (element.parents('div').hasClass('licence-upload')) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            patient_profile: {
                required: true,
                normalizer: function (value) { return $.trim(value); },
                extension: 'jpg|jpeg|png',
                filesize: 1000000,
            },
            fname: {
                required: true,
                maxlength: 255,
            },
            lname: {
                required: true,
                maxlength: 255,
            },
            birth_date:{
                required:true,
            },
            nationality:{
                required:true,
            },
            phone_code: {
                required: true,
            },
            phone_number: {
                required: true,
                minlength: 8,
                maxlength: 20,
            },

            email: {
                required: true,
                email: true,
                maxlength: 255,
            },
            gender: {
                required: true,
            },
            country: {
                required: true,
            },
            languages: {
                required: true,
            },
            specialization: {
                required: true,
            },
            subspecialization: {
                required: true,
            },
            edu_qua: {
                required: true,
            },
            exp_serve: {
                required: true,
            },
            upload_cv: {
                required: true,
            },
            upload_licence: {
                required: true,
            },
            "consultation_type[]": {
                required: true,
                minlength: 1,
            },
            fees: {
                required: true,
            },
            duration: {
                required: true,
            }
        },
        messages: {
            patient_profile: {
                required: "Please select profile picture",
                extension: "Accepted file formats: jpg, jpeg, png."
            },
            fname: {
                required: "Plase enter first name",
                maxlength: 255,
            },
            lname: {
                required: "Plase enter last name",
                maxlength: "Maximum 25000 charcters are allowed",
            },
            birth_date:{
                required:"Please Enter date",
            },
            nationality:{
                required:"Please select nationality",
            },
            phone_code: {
                required: "Please select country code",
            },
            phone_number: {
                required: "Please enter phone number",
                minlength: "Minimum 8 charcters are allowed",
                maxlength: "Maximum 20 charcters are allowed",
            },
            email: {
                required: "Please enter email address",
                email: "Please enter valid email address",
                maxlength: "Maximum 255 charcters are allowed",
            },
            gender: {
                required: "Plase select gender",
            },
            country: {
                required: "Please select country",
            },
            languages: {
                required: "Please select languages",
            },
            specialization: {
                required: "Please select specialization",
            },
            subspecialization: {
                required: "Please select subspecialization",
            },
            edu_qua: {
                required: "Please enter education & qualification",
            },
            exp_serve: {
                required: "Please enter expertise & services",
            },
            upload_cv: {
                required: "Please upload your cv",
            },
            upload_licence: {
                required: "Please upload your licence",
            },
            "consultation_type[]": "You must check at least 1 Consultation Type",
            fees: {
                required: "Please enter consultation fees",
            },
            duration: {
                required: "Please enter consultation duration",
            },
        }
    });
});
