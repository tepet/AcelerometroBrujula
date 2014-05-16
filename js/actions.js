//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		//Acelerómetro
		var ace = $('#acelerometro');
		var watchID = null;
		ace.find('.individual li').tap(function(){
			if($(this).index()==0){
				watchID = navigator.accelerometer.watchAcceleration(function(a){
					ace.find('h2').text('Posición Actual:');
					ace.append('<ul class="plastic pos">'+
						'<li>X: '+a.x+'</li>'+
						'<li>Y: '+a.y+'</li>'+
						'<li>Z: '+a.z+'</li>'+
					'</ul>');
				}, function(err){
					alert(err.code);
				}, { frequency: 500 });
			}
			if($(this).index()==1){
				if(watchID){
					ace.find('h2').text('Detenido');
					ace.find('.pos').remove();
					navigator.accelerometer.clearWatch(watchID);
					watchID = null;
				}
			}
		});
		//Brújula
		var bru = $('#brujula');
		bru.find('.individual li').tap(function(){
			if($(this).index()==0){
				watchID = navigator.compass.watchHeading(function(h){
					bru.find('h2').text('Posición Actual:');
					bru.append('<ul class="plastic pos">'+
						'<li>'+h.magneticHeading+'</li>'+
					'</ul>');
				}, function(err){
					alert(err.code);
				}, { frequency: 500 });
			}
			if($(this).index()==1){
				if(watchID){
					bru.find('h2').text('Detenido');
					bru.find('.pos').remove();
					navigator.compass.clearWatch(watchID);
					watchID = null;
				}
			}
		});
	}, false);
});