$(document).ready(function () {
    var min_height = $(window).height() - ($("#header").height() + $(".footer").height());
    $(".page-content").css('min-height',min_height+'px');
    $(window).scroll(function(){
        var navHeight = $('#header').height();
        if ($(window).scrollTop() >= 0) {
            $('#header').addClass("sticky")
            $('#body').css('padding-top',navHeight+"px");
        } else {
            $('#header').removeClass("sticky")
            $('#body').css('padding-top',0);
        }
    });

    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $(".doctor_profile").change(function () {
        readURL(this);
    });

    $(".flaticon-camera").click(function () {
        $(".doctor_profile").trigger("click");
    });

    $(".upload_licence").change(function () {
        readLicence(this);
    });

    $(".select-files").click(function () {
        $(".upload_licence").trigger("click");
    });

    $(".upload_cv").change(function () {
        readCv(this);
    });

    $(".select-cv").click(function () {
        $(".upload_cv").trigger("click");
    });


    jQuery.validator.addMethod("extension", function (value, element, param) {
        param = typeof param === "string" ? param.replace(/,/g, '|') : "pdf|doc?x";
        return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
    });

    $.validator.addMethod('filesize', function (value, element, param) {
        return this.optional(element) || (element.files[0].size <= param)
    });

    $('.doctor_profile_form').validate({
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
            if (element.parents('div').hasClass('profile-photo')) {
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
            doctor_profile: {
                required: true,
                normalizer: function (value) { return $.trim(value); },
                extension: 'jpg|jpeg|png',
                filesize: 1000000,
            },
            title: {
                required: true,
            },
            fname: {
                required: true,
                maxlength: 255,
            },
            lname: {
                required: true,
                maxlength: 255,
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
            doctor_profile: {
                required: "Please select profile picture",
                extension: "Accepted file formats: jpg, jpeg, png."
            },
            title: {
                required: "Please select appropriate title",
            },
            fname: {
                required: "Plase enter first name",
                maxlength: 255,
            },
            lname: {
                required: "Plase enter last name",
                maxlength: "Maximum 25000 charcters are allowed",
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
    
    //Career validation
    $('.careear-form').validate({
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
            if (element.parents('div').hasClass('profile-photo')) {
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
            fname: {
                required: true,
                maxlength: 255,
            },
            lname: {
                required: true,
                maxlength: 255,
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
            birth_date:{
                required:true,
            }
        },
        messages: {
            fname: {
                required: "Plase enter first name",
                maxlength: 255,
            },
            lname: {
                required: "Plase enter last name",
                maxlength: "Maximum 25000 charcters are allowed",
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
            birth_date:{
                required:"Please enter date",
            },
        }
    });

    // Account-setting
    $('.account-seeting-form').validate({
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
            if (element.parents('div').hasClass('profile-photo')) {
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
            console.log("hiiiii,validate");
        },
        rules: {
            current_password: {
                required: true,
            },
            new_password: {
                required: true,
            },
            confirm_password: {
                required: true,
            },
        },
        messages: {
            current_password: {
                required: "Please enter current password",
            },
            new_password: {
                required: "Please enter new password",
            },
            confirm_password: {
                required: "Please enter confirm password",
            },
        },
    });    



    var $select = $('.form-control-select2').select2({
        width: '100%',
    });
    // Trigger value change when selection is made
    $select.on('change', function () {
        $(this).trigger('blur');
    });
    $('.multiselect').multiselect({
        allSelectedText: 'All',
        includeSelectAllOption: true,
        enableFiltering: true,
        disableIfEmpty: true,
        includeSelectAllOption: true,
        onSelectAll: function() {
            $.uniform.update();
        },
        onChange: function () {
            $.uniform.update();
        },
        onDropdownHidden: function (event) {
            $('.multiselect').blur();
        }
    });

    $("#mobile_menu").mmenu({
        "pageScroll": true,
        extensions: ["pageshadow", "border-full", "effect-listitems-slide"],
        offCanvas: { position: "right" }
    },
    {
        // configuration
        classNames: {
            fixedElements: {
                fixed: "abc",
                "pageScroll": true,
            }
        }
    });

    // show more less js
    $(".add-more").click(function () {
        var html = $(".copy").html();
        $(".after-add-more").after(html);
    });
    $("body").on("click", ".remove", function () {
        $(this).parents(".repeateinput").remove();
    });

    // show more less js
    $('.moreless-button').click(function () {
        $(this).parents('.article').toggleClass('show')
        $(this).parents('.article').find('.moretext').slideToggle();
      
    });
    // show more less js
    $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
     }).datepicker('update', new Date());


     // for gallery
     let modalId = $('#image-gallery');
     loadGallery(true, '.patient-gallery .thumbnail');
     $(document).keydown(function (e) {
        switch (e.which) {
          case 37: // left
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
              $('#show-previous-image')
                .click();
            }
            break;
      
          case 39: // right
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
              $('#show-next-image')
                .click();
            }
            break;
      
          default:
            return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    $('#payment-history').DataTable( {
        "paging":   false,
        responsive: true,
        "ordering": false,
        "info":     false,
        "searching": false,
    });
});
function readURL(element) {
    console.log(element);
    
    var permitted = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/jpg'];
    $('.doctor_profile_form').validate().element(element);
    if (element.files && element.files[0]) {
        var file = element.files[0];
        if ($.inArray(file['type'], permitted) < 1) {
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log(e);
                
                $('.imagedisplay').attr('src', e.target.result);
            }
            reader.readAsDataURL(element.files[0]);
        }
    }
}
function readLicence(element) {
    
    var permitted = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/jpg'];
    $('.doctor_profile_form').validate().element(element);
    if (element.files && element.files[0]) {
        var file = element.files[0];
        
        if ($.inArray(file['type'], permitted) < 1) {
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                
                $('.uploadedLicence').text(file['name']);
            }
            reader.readAsDataURL(element.files[0]);
        }
    }
}
function readCv(element) {
    
    var permitted = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/jpg'];
    $('.doctor_profile_form').validate().element(element);
    if (element.files && element.files[0]) {
        var file = element.files[0];
        if ($.inArray(file['type'], permitted) < 1) {
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                
                $('.uploadedCv').text(file['name']);
            }
            reader.readAsDataURL(element.files[0]);
        }
    }
}
function disableButtons(counter_max, counter_current) {
    $('#show-previous-image, #show-next-image')
      .show();
    if (counter_max === counter_current) {
      $('#show-next-image')
        .hide();
    } else if (counter_current === 1) {
      $('#show-previous-image')
        .hide();
    }
}
function loadGallery(setIDs, setClickAttr) {
    let current_image,
      selector,
      counter = 0;

    $('#show-next-image, #show-previous-image')
      .click(function () {
        if ($(this)
          .attr('id') === 'show-previous-image') {
          current_image--;
        } else {
          current_image++;
        }

        selector = $('[data-image-id="' + current_image + '"]');
        updateGallery(selector);
      });

    function updateGallery(selector) {
      let $sel = selector;
      current_image = $sel.data('image-id');
      $('#image-gallery-title')
        .text($sel.data('title'));
      $('#image-gallery-image')
        .attr('src', $sel.data('image'));
      disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
      $('[data-image-id]')
        .each(function () {
          counter++;
          $(this)
            .attr('data-image-id', counter);
        });
    }
    $(setClickAttr)
      .on('click', function () {
        updateGallery($(this));
      });

    // owl coresol in patient side dosctor profile
        var sync1 = $("#sync1");
            var sync2 = $("#sync2");
            var slidesPerPage = 4; //globaly define number of elements per page
            var syncedSecondary = true;
            
            sync1.owlCarousel({
              items : 1,
              slideSpeed : 1500,
              nav: true,
              autoplay: false,
              dots: false,
              loop: true,
              smartSpeed: 1500,
              navText: ['<i class="flaticon-arrow text-black"></i>','<i class="flaticon-arrow-1 text-black"></i>'],
            }).on('changed.owl.carousel', syncPosition);
            
            sync2
              .on('initialized.owl.carousel', function () {
                sync2.find(".owl-item").eq(0).addClass("current");
              })
              .owlCarousel({
              items : 6,
              dots: false,
              nav: false,
              autoplay: false,
              smartSpeed: 1500,
              slideSpeed : 1500,
              responsiveClass: true,
              responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:6
                    },
                    1024:{
                        items:6
                    }
                },
              slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            }).on('changed.owl.carousel', syncPosition2);
            
            function syncPosition(el) {
              //if you set loop to false, you have to restore this next line
              //var current = el.item.index;
              
              //if you disable loop you have to comment this block
              var count = el.item.count-1;
              var current = Math.round(el.item.index - (el.item.count/2) - .5);
              
              if(current < 0) {
                current = count;
              }
              if(current > count) {
                current = 0;
              }
              
              //end block
            
              sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
              var onscreen = sync2.find('.owl-item.active').length - 1;
              var start = sync2.find('.owl-item.active').first().index();
              var end = sync2.find('.owl-item.active').last().index();
              
              if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
              }
              if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
              }
            }
            
            function syncPosition2(el) {
              if(syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
              }
            }
            
            sync2.on("click", ".owl-item", function(e){
              e.preventDefault();
              var number = $(this).index();
              sync1.data('owl.carousel').to(number, 300, true);
            });
            var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton()
}

