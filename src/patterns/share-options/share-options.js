// Select textarea button
$(".share-options__copy-button").click(function() {
	$(this).prev().select();
	document.execCommand('copy');
});