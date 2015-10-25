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
	
	$(".button").on("click", function () {
		var newTweet = $(".tweet").first().clone();
			
			$(newTweet).find(".avatar").attr("src", "img/ProfilePic.jpg");
			
			$(newTweet).find(".fullname").text("Erin Vincent");
			
			$(newTweet).find(".username").text("ev2015")
			
			var tweetContent = $(".tweet-compose").val()
			$(newTweet).find(".tweet-text").text(tweetContent);
		
		$("#stream").prepend(newTweet);
	})
	
	
	//Hides and shows tweet actions
	
	$(".tweet-actions").hide();
		
	$(".tweet").hover(
		function () {
		$(".tweet-actions", this).show();
	}, function () {
		$(".tweet-actions", this).hide();
	}
	
	);
		

	//Hides retweets, time stamp, etc.
	
	$(".stats").hide();
	
	var clicks = 0;
	
	$(".tweet-text").on("click", function () {
		
		clicks ++;
		
		if (clicks % 2 !== 0) {
			
			$(".stats").hide();
			
			}
			
		else {
			$(".stats").show();
		}
		
		
	});
	
	
	
	
});