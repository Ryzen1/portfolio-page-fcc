$(document).ready(function () {

    $("#contact-form-message").focus(function () {
        $("#contact-form-message").val("");
    });

    $("#contact-form-message").focusout(function () {
        $("#contact-form-message").val("Message");
    });

    $("input").focus(function () {
        this.value = "";
    });

    $("input").focusout(function () {
            if (this.id === "contact-form-name") 
                this.value = "Name"
            if (this.id === "contact-form-email")
                this.value = "Email Address";
            if (this.id === "contact-form-number")
                this.value = "Phone Number";
    });
    
    var headerHeight = $("nav").outerHeight();

    $(".slide-section").click(function (e) {

        var linkHref = $(this).attr('href');

        $("html, body").animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});