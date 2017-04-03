var teams = [];
var teamScores = [];
var clickedPlanet;
$(document).on("click",".addTeam",function(ev){
	ev.preventDefault();
	var teamName = $("#teamname").val();
	if(teamName != "") 
	{
		teams.push(teamName);
		$(".message").html("Team added.");
	}
});

$(document).on("click",".startGame",function(ev){
	ev.preventDefault();
	$(".planetsHolder").css({'background':'url(images/giphy.gif)','background-size' : 'cover','background-position' : 'center center'});
	hideForm(function(){
		showGame();
		loadLeaderboard();
	});

});

$(document).on("click",".planet",function(){
	clickedPlanet = $(this).attr('id');
	for(var i = 0;i < teams.length;i++)
	{
		$("select").append('<option val="' + teams[i] + '">' + teams[i] + '</option>');
	}
	$("#myModal").modal('toggle');
});

$(document).on("click",".changeTeam",function(){
	var date = new Date();
	var currentTimestamp = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	var changedTeam = $("select").val();
	$("#" + clickedPlanet).find('.currentTeam').html(changedTeam);
	$("#" + clickedPlanet).find('.timestamp').html(currentTimestamp);
});

$(document).on("click",".update",function(){
	var $divs = $(".lc");
	var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("input").val() < $(b).find("input").val();
    });
    $(".l").html(numericallyOrderedDivs);
});

function hideForm(callback)
{
	$(".team-add-container").fadeOut(800,function(){
		callback();
	});
}
function showGame()
{
	$(".gameContainer").fadeIn();
	
}
function loadLeaderboard()
{
	for(var i = 0;i < teams.length;i++)
		$(".l").append('<div class="lc"><div class="col-md-9 teamName">' + teams[i] + '</div><input class="col-md-3" value="0"></div>');
}