$(document).ready(function() {
   $("#volume").hide();
  
	
	var DisplayFaixaTotal = $("#total");
	var DisplayPlaylist = $("#list ul");
	var totalFaixa = playlist.length;
		DisplayFaixaTotal.html(totalFaixa);
		prencherListaReproducao(totalFaixa);
	 $("#grupoVolume").hover(
		function(){
			$("#volume").show();
		},function(){
			$("#volume").hide();
	});
	
	function prencherListaReproducao(nFaixas){
		var i = 0;
		while(i < nFaixas){
			DisplayPlaylist.append('<a href="'+playlist[i].src+'"><li> <h1>'+playlist[i].titulo+'</h1> <img src="imgs/mini.png"> </li></a>');
				i++;
			}
		};
		
	$("#list ul a").click(
		function(e){
			e.preventDefault();
			var src = $(this).attr('href');
			$("video>source").attr('src',src);
			$("video").load();
		
	});
	
	$("#toggleV").click(function(){
		if($(this).hasClass("esconder")){
			$("#playlist").animate({left:-313+"px"},{duration:1000});
			$(this).html(">");
			$(this).removeClass("esconder");
			$(this).addClass("expandir");
		}else{
			$("#playlist").animate({left:0},{duration:1000});
			$(this).html("<");
			$(this).removeClass("expandir");
			$(this).addClass("esconder");
		}
		
	})
	
	
	
});