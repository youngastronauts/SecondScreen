var App = {};

App.Init = function(){

    App.Cache();
    App.Bind();
    App.Size();

    App.Connect();

};


App.Cache = function(){

    App.dom = {};
    App.win = {};

    App.passcodeLabel = $("#passcodeLabel span");


};

App.Bind = function(){

    $(window).resize(function(){
        App.Size();
    });


};

App.Size = function(){

    App.win.window = $(window);
    App.win.width = App.win.window.width();
    App.win.height = App.win.window.height();

};

App.Connect = function(){

    App.sender = 'desktop';
    App.Socket = io.connect(Settings.socketServer);

    App.Socket.on('handshake', function(response){
        App.passcode = response.passcode;
        App.passcodeLabel.html(App.passcode);
    });

    App.Socket.on('begin', function(response){
        console.log("Time To Fight");
    });

   

    App.Run();
        
    

};


var Util = {};


$(document).ready(function(){

    App.Init();

});