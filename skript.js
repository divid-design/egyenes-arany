/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {
    'use strict';
    
    var a, b, c, d;
    var x = 0;
    var avan = false;
    var bvan = false;
    var cvan = false;
    var dvan = false;


    $('#reset').click(function () {

        $("#a").prop('disabled', false).css("color", "black");
        $("#b").prop('disabled', false).css("color", "black");
        $("#c").prop('disabled', false).css("color", "black");
        $("#d").prop('disabled', false).css("color", "black");
        $("#szamolj").prop('disabled', true);
        x = 0;
        avan = false;
        bvan = false;
        cvan = false;
        dvan = false;
        $("label.error").css("display","none");

    });

    $('#a').focusout(function () {
        if ($.isNumeric($(this).val())) {
            a = $(this).val();
            if (!avan && x < 4) {
                avan = true;
                x = x + 1;
            }
            letilt();
            //szamolj();
            
        }/*else{
            alert('Szamot írj be!');
            $(this).val('1');
        }*/
    });

    $('#b').focusout(function () {
        if ($.isNumeric($(this).val())) {
            b = $(this).val();
            if (!bvan && x < 4) {
                bvan = true;
                x = x + 1;
            }
            letilt();
            //szamolj();
            
        }/*else{
            alert('Szamot írj be!');
            $(this).val('1');
        }*/
    });


    $('#c').focusout(function () {
        if ($.isNumeric($(this).val())) {
            c = $(this).val();
            if (!cvan && x < 4) {
                cvan = true;
                x = x + 1;
            }
            letilt();
            //szamolj();
            
        }/*else{
            alert('Szamot írj be!');
            $(this).val('1');
        }*/
    });

    $('#d').focusout(function () {
        if ($.isNumeric($(this).val())) {
            d = $(this).val();
            if (!dvan && x < 4) {
                dvan = true;
                x = x + 1;
            }
            letilt();
            //szamolj();
            
        }/*else{
            alert('Szamot írj be!');
            $(this).val('1');
        }*/
    });
    
    function letilt() {
            if (x === 3) {
            $("#a").prop('disabled', true);
            $("#b").prop('disabled', true);
            $("#c").prop('disabled', true);
            $("#d").prop('disabled', true);
            $("#szamolj").focus();
            $("#szamolj").prop('disabled', false);
            
            /*if (!avan) {
                if (d !== 0) {
                    a = (b * c) / d;
                    $('#a').val(a).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!bvan) {
                if (c !== 0) {
                    b = (a * d) / c;
                    $('#b').val(b).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!cvan) {
                if (b !== 0) {
                    c = (a * d) / b;
                    $('#c').val(c).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!dvan) {
                if (a !== 0) {
                    d = (b * c) / a;
                    $('#d').val(d).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            }*/
        }

    }
    
    $('#szamolj').click(function () {

    /*function szamolj() {*/
        if (x === 3) {
            if (!avan) {
                if (d !== 0) {
                    a = (b * c) / d;
                    $('#a').val(a).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!bvan) {
                if (c !== 0) {
                    b = (a * d) / c;
                    $('#b').val(b).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!cvan) {
                if (b !== 0) {
                    c = (a * d) / b;
                    $('#c').val(c).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            } else if (!dvan) {
                if (a !== 0) {
                    d = (b * c) / a;
                    $('#d').val(d).css("color", "green");
                } else {
                    alert('Nullával nem osztunk köcsög!');
                }
            }
            
            $("#szamolj").prop('disabled', true);

           /* $("#a").prop('disabled', true);
            $("#b").prop('disabled', true);
            $("#c").prop('disabled', true);
            $("#d").prop('disabled', true);
            $("#reset").focus();*/
        }
    });
    
    
    /*$.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $( "#urlap" ).validate({
        rules: {
            a: {
            number: true
            },
            b: {
            number: true
            },
            c: {
            number: true
            },
            d: {
            number: true
            }
        }
    });

    $.extend($.validator.messages, {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Kérjük, számot írjon be.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    });*/
    
});