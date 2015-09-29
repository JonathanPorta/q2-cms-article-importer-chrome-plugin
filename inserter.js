(function($){
	var self = this;
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		alert("Received a message from BG");
		console.log(sender.tab ?
		"from a content script:" + sender.tab.url :
		"from the extension");

		if(request._type == "insert")
		{
			var post = request.content;
			autofill(post);
		}

		sendResponse({"selected" : ""+window.getSelection()});
	});
	
	var autofill = function(values) {
		$("input[name='title']").val(values.title);

		var actualCode = '(' + function(text) {
			alert("hi");
			window.tinyMCE.activeEditor.setContent(text);
		} + ')('+JSON.stringify(values.story)+');';

		console.log(actualCode);

		var script = document.createElement('script');
		script.textContent = actualCode;
		(document.head||document.documentElement).appendChild(script);
		script.parentNode.removeChild(script);
	};
})(jQuery)