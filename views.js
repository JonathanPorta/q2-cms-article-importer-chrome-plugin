var templates = {};
templates.listview = " \
	<ul> \
		{{#items}} \
			<li> \
				<a target='_blank' title='{{viewDate}} - {{title}}' href='{{link}}'>{{title}}</a> \
			</li> \
		{{/items}} \
	</ul>";
