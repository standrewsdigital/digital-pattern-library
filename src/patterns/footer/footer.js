// Feedback message on YES feedback choice
$('#feedback-footer__button--yes').click(function() {
    $('.feedback-footer').html('<div class="container"><b>Thank you for your feedback.</b></div>');
});

// Feedback message on NO feedback choice
$('#feedback-footer__button--no').click(function() {
    $('.feedback-footer').html('<div class="container"><b>Thank you for your feedback.</b><br>To report a problem about this page please visit <a href="https://www.st-andrews.ac.uk/help/">website help</a>.</div>');
});