$(function(){
alert("here1");
	$("tr td[onclick]:nth-child(2)", $("table.data")).each(function(i){
console.log("here2");
		var id = $.trim($(this).text());
		//console.log(id);
		var a = $("<a href='form.cfm?id="+id+"'>"+id+"</a>");
		//console.log(a.outerHtml());
		$(this).html(a);
		$(this).removeAttr('onclick');
	});
});