$(function(){
//alert("here1");
//console.log("here1");
	setTimeout(function(){
		/*
		 * Hide Some Fields
		*/
		$("th").each(function(i){
			var title = $.trim($(this).text());
			if(title == "Display Page:")
				$(this).parent().hide();
			if(title == "Source:")
				$(this).parent().hide();
		});

		/*
		 * Auto Check ktvq site
		*/
		$("label[title='www1.ktvq.com'] > input").attr("checked", true);
		$(".multipleSelect[title='Please select at least one Site.']").height("20px");

		/*
		 * Make categories better sized
		*/
		$("input[name='category_id']").each(function(i){
			$(this).parent().css("display", "inline-block");
			$(this).parent().css("min-width", "185px");
		});
		$(".multipleSelect[title='Please select at least one Category.']").width("790px");
		$(".multipleSelect[title='Please select at least one Category.']").height("160px");

		/*
		 * Hide Some Categories
		*/

		var hiddenCats = ["521", "43", "264", "204", "263", "242", "228", "446", "505", "203", "515", "201", "191", "245", "192", "193", "218", "246", "247", "477", "196", "212", "211", "249", "498", "239", "220", "226", "261", "221", "198", "222", "189", "526", "224", "294", "499", "511", "188", "187", "232", "262", "502", "456", "234", "202", "301", "457", "459", "448", "252", "237", "235", "292", "230", "194"];
		$("input[name='category_id']").each(function(i){
//console.log($(this).val());
			if(hiddenCats.indexOf($(this).val()) != -1)
			{
				$(this).parent().hide();
			}
		});

		//Resize Teaser Field
		$("#teaser").height("20px");

		//Resize Default Categories Field
		$(".multipleSelect[title='Please select at least one Default Category.']").height("80px");
		
	}, 100);
});
/*
		//Helper for selecting...
		var list = [];
		$("input[name='category_id']").each(function(i){
			if($(this).attr("checked"))
			{
				list.push($(this).val());
			}
		});
		console.log(list);
*/