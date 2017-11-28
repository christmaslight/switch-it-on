
        var snd = new Audio("https://cdn.rawgit.com/christmaslight/switch-it-on/master/we-wish-you-a-merry-christmas2.mp3");

                        $(function() {
                            $('.sound-on-click').click(snd_play); 
                        })
                        
                        function snd_play(){
                            document.getElementById("img").style.display = "inline-block";
                            document.getElementById("bokehimg").style.display = "inline-block";
                            document.getElementById("img_1").style.display = "inline-block";
                            document.getElementById("img_2").style.display = "inline-block";
                            document.getElementById("img_3").style.display = "inline-block";
                         snd.play();
                         snowStorm.start();
                         snowStorm.resume();
                        }
                        
                        $(function() {
                            $('.stp-on-click').click(snd_stop);
                        })
                        
                        function snd_stop(){
                            document.getElementById("img").style.display = "none";
                            document.getElementById("bokehimg").style.display = "none";
                            document.getElementById("img_1").style.display = "none";
                            document.getElementById("img_2").style.display = "none";
                            document.getElementById("img_3").style.display = "none";
                            snd.pause();
                            snowStorm.stop();
                        }
    