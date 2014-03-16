App.requireColor = true;

App.Run = function(){


	App.canvas = $("#draw-canvas")[0];
	App.ctx = App.canvas.getContext('2d');

	App.ctx.fillStyle = "solid";       
    App.ctx.strokeStyle = App.userColor || "#4e9ac6";   
    App.ctx.lineWidth = 5;               
    App.ctx.lineCap = "round";


   	$("#draw-canvas").bind('drag dragstart dragend', function(e){
    	var type = e.handleObj.type;
    	var offset = $(this).offset();

    	e.offsetX = e.clientX - offset.left;
	    e.offsetY = e.clientY - offset.top;

	    var x = e.offsetX;
	    var y = e.offsetY;

	    App.Draw(x, y, type);
	    
	    App.Socket.emit('draw', { x : x, y : y, type : type});

    });

	

};

App.Draw = function(x, y, type){

	if(type == 'dragstart'){
		App.ctx.beginPath();
		App.ctx.moveTo(x,y);
	} else if(type == 'drag'){
		App.ctx.lineTo(x,y);
		App.ctx.stroke();
	} else {
		App.ctx.closePath();
	}

}