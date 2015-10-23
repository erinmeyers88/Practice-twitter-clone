$(document).ready(function () {
	
	//Hides tweet button and character count at first.
	$("#tweet-controls").hide();
	
	
	//Increases size of text field and shows character count and tweet button on click.
	$(".tweet-compose").on("click", function () {
		$(this).css("height", "5em");
		$("#tweet-controls").show("slow");
	});
	
	//Handles character count
	
	var characterMax = 14;
	
	$(document).on("keyup", function () {
		
		//Changes character count display
		var inputLength = $(".tweet-compose").val().length;
		var charactersLeft = characterMax - inputLength;
		$("#char-count").text(charactersLeft);
		
		if (charactersLeft <= 10) {
			$("#char-count").css("color", "red");
		}
		
		if (charactersLeft > 10) {
			$("#char-count").css("color", "#999");
		}
		
		//Disables button if type over characterMax
		
		if (charactersLeft < 0) {
			$(".button").prop("disabled", true);
		}
		
		if (charactersLeft >= 0) {
			$(".button").prop("disabled", false);
		}
		
	})
	
	//Adds new tweet to stream
	
	// $(".button").on("click", function () {
	// 	$("#stream").prepend(
		
		
		
	// })
	
		
		

	
	
	
	
	
});