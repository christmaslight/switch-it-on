
        var snd = new Audio("https://cdn.rawgit.com/christmaslight/switch-it-on/master/we-wish-you-a-merry-christmas2.mp3"),
                snowf=0;

                        $(function() {
                            $('.sound-on-click').click(snd_play); 
                        })
                        
                        function snd_play(){
                            document.getElementById("img").style.display = "inline-block";
                            document.getElementById("bokehimg").style.display = "inline-block";
                         snd.play();
                         if (snowf<= 0){
                             snowStorm.toggleSnow();
                         snowf++;
                         }else{snowf--}
                        }
                        
                        $(function() {
                            $('.stp-on-click').click(snd_stop);
                        })
                        
                        function snd_stop(){
                            document.getElementById("img").style.display = "none";
                            document.getElementById("bokehimg").style.display = "none";
                            snd.pause();
                            snowf=snowf-1;
                            snowStorm.stop();
                        }
    