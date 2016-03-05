document.addEventListener('DOMContentLoaded',load,false);

dom = document;

function load(){
		btnPlayPause = dom.getElementById('play_pause');
		btnNext		 = dom.getElementById('proximo');
		btnPrev		 = dom.getElementById('anterior');
		iconVolume   = dom.getElementById('figuraVolume');
		rangeVolume  = dom.getElementById('volume');
		progressBar  = dom.getElementById('progress');
		video		 = dom.getElementById('video');
		screemSize	 = dom.getElementsByClassName('tamanho_tela');
				
	//Listeners 
	progressBar.addEventListener('click',buscar);
	btnPlayPause.addEventListener('click',playPause,false);
	video.addEventListener("click",playPause,false);
	rangeVolume.addEventListener('change',setVolume,false);
	video.addEventListener("timeupdate",barraProgresso,false);
	setVolume();
	//fim listeners
	
	function playPause()
	{
		if(video.paused){
			video.play();
			btnPlayPause.classList.remove("play");
			btnPlayPause.classList.add("pause");
			
		}else
		{
			video.pause();
			btnPlayPause.classList.remove("pause");
			btnPlayPause.classList.add("play");
		}
	}
	
	
}
function setVolume(){
		video.volume = rangeVolume.value;
		
		
		if(video.volume > 0 || video.volume <= 0.5)
		{
			if(iconVolume.classList.contains("volumeMax")){
				iconVolume.classList.remove("volumeMax");
			}if(iconVolume.classList.contains("volumeMudo")){
				iconVolume.classList.remove("volumeMudo");
			}
			iconVolume.classList.add("volumeMin");
		}
		if(video.volume > 0.5)
		{
			iconVolume.classList.remove();
			iconVolume.classList.add("volumeMax");
		}if(video.volume == 0)
		{
			if(iconVolume.classList.contains("volumeMax")){
				iconVolume.classList.remove("volumeMax");
			}if(iconVolume.classList.contains("volumeMin")){
				iconVolume.classList.remove("volumeMin");
			}
			iconVolume.classList.add("volumeMudo");
			
		}
}
function barraProgresso(){
	//pegar tempo decorrido em segundos
	var tempoDecorrido = Math.round(video.currentTime);
	//atualiza a barra de progresso
	if(progressBar.getContext){
		var ctx = progressBar.getContext("2d");
		// limpar canvas no final do audio
		ctx.clearRect(0,0, progressBar.clientWidth, progressBar.clientHeight);
		ctx.fillStyle="rgb(255,0,0)";
		var fWidth=(tempoDecorrido/video.duration)*(progressBar.clientWidth);
		if(fWidth>0){
				ctx.fillRect(0,0,fWidth,progressBar.clientHeight);
				
		}

	}

}
function buscar(e){
	if(!e){
		e=window.event;
	} //obter o mais recente evento do Windows se ele não está definido
	try {
		//calcular o tempo atual com base na posição do cursor do mouse na caixa de tela
		video.currentTime= video.duration * (e.offsetX / progressBar.clientWidth);
	}catch (err) {
	// Falha silenciosamente mas mostram em ferramentas de desenvolvimento F12 consola
		if (window.console && console.error("Error:" + err));
	}
}

