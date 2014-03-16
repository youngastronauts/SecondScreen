App.Run = function(){


	App.canvas = $("#display-canvas")[0];
	App.ctx = App.canvas.getContext('2d');

	App.ctx.fillStyle = "solid";       
    App.ctx.strokeStyle = "#4e9ac6";   
    App.ctx.lineWidth = 5;               
    App.ctx.lineCap = "round";


    App.Socket.on('draw', function(data){
    	if(data.color){
    		App.ctx.strokeStyle = data.color;
    	}
    	App.Draw(data.x,data.y,data.type);
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