/*********************************/
/* BEGIN Pattern: form-banner    */
/*********************************/


	var names = [{
			"name": "Adam",
			"type": "m",
			"link": "#"
		}, {
			"name": "David",
			"type": "m",
			"link": "#"
		}, {
			"name": "Richard",
			"type": "m",
			"link": "#"
		}, {
			"name": "Abbie",
			"type": "f",
			"link": "#"
		}, {
			"name": "Sarah",
			"type": "f",
			"link": "#"
		}, {
			"name": "Katie",
			"type": "f",
			"link": "#"
		}
	];

	window.onload = function() {
		
		var timeout = null;

		$("#search, #search-names").keyup(function() {

			if ( $(this).val().length > 2 ) {
				search_cards($(this).val());
				$(".results").slideDown('slow');
			} else {
				$(".results").slideUp('slow');
				$(".results .col-md-6.left-column",".results .col-md-6.right-column").text("");
			}
		});
	};  

	function search_cards(inputVal){

		var testVal = inputVal.toLowerCase();
		var leftResults = [];
		var rightResults = [];

		// Search for stuff
		for (var i = 0; i < names.length; i++) {
			var link;

			if ( names[i].name.toLowerCase().indexOf(testVal) >= 0 ) {

				var url = names[i].link.match(/(\/)+(.)+(?=")/g);
				link = "<a href='" + url + "'>" + names[i].name + "</a>";

				if ( names[i].type == 'm' ) {
					leftResults.unshift(link);
				} else {
					rightResults.unshift(link);
				}
			}        
		}

		leftResults = leftResults.join("");
		rightResults = rightResults.join("");

		$(".results .col-md-6.left-column").html("");
		$(".results .col-md-6.right-column").html("");

		if (leftResults.length === 0 && rightResults.length === 0) {
			$(".results .col-md-6.left-column").html("No results found, please try again.");
		} else {
			if (leftResults.length > 0) {
			add_leftResults_list(leftResults);
			}
			if (rightResults.length > 0) {
			add_rightResults_list(rightResults);
			}
		}

	}

	function add_leftResults_list (list) {
		list = "<h2>Boy names</h2>" + list;
		$(".results .col-md-6.left-column").html(list);
	}

	function add_rightResults_list (list) {
		list = "<h2>Girl names</h2>" + list;
		$(".results .col-md-6.right-column").html(list);
	}

/*********************************/
/* END Pattern: form-banner      */
/*********************************/