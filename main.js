var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
block_image_object="";
player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });  
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        console.log("shiftKey&p pressed togeother");
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;
        }
    if (e.shiftKey==true && keypressed=='77'){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        console.log("shiftKey&m pressed togeother");
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;
        }
        if (keypressed=='37'){
            left();
            console.log("leftKey is pressed");
        }
        if (keypressed=='38'){
            up();
            console.log("upKey is pressed");
        }
        if (keypressed=='39'){
            right();
            console.log("rightKey is pressed");
        }
        if (keypressed=='40'){
            down();
            console.log("downKey is pressed");
        }
       if (keypressed=='90'){
       new_image("captain_america_left_hand.png");
       console.log("z is pressed");
       }
       if (keypressed=='65'){
        new_image("hulk_face.png");
        console.log("a is pressed");
        }
        if (keypressed=='66'){
            new_image("hulk_left_hand.png");
            console.log("b is pressed");
            }
        if (keypressed=='67'){
            new_image("hulk_legs.png");
            console.log("c is pressed");
            }
         if (keypressed=='68'){
            new_image("hulk_right_hand.png");
            console.log("d is pressed");
            }
            if (keypressed=='69'){
                new_image("hulkd_body.png");
                console.log("e is pressed");
                }
                if (keypressed=='70'){
                    new_image("ironman_body.png");
                    console.log("f is pressed");
                    }
                    if (keypressed=='71'){
                        new_image("ironman_face.png");
                        console.log("g is pressed");
                        }
                        if (keypressed=='72'){
                            new_image("ironman_left_hand.png");
                            console.log("h is pressed");
                            }
                            if (keypressed=='73'){
                                new_image("ironman_legs.png");
                                console.log("i is pressed");
                                }
                                if (keypressed=='74'){
                                    new_image("ironman_right_hand.png");
                                    console.log("j is pressed");
                                    }
                                    if (keypressed=='75'){
                                        new_image("spiderman_body.png");
                                        console.log("k is pressed");
                                        }
                                        if (keypressed=='76'){
                                            new_image("spiderman_face.png");
                                            console.log("l is pressed");
                                            }
                                            if (keypressed=='77'){
                                                new_image("spiderman_left_hand.png");
                                                console.log("m is pressed");
                                                }
                                                if (keypressed=='78'){
                                                    new_image("spiderman_legs.png");
                                                    console.log("n is pressed");
                                                    }
                                                    if (keypressed=='79'){
                                                        new_image("spiderman_right_hand.png");
                                                        console.log("o is pressed");
                                                        }
                                                        if (keypressed=='80'){
                                                            new_image("thor_face.png");
                                                            console.log("p is pressed");
                                                            }
                                                            if (keypressed=='81'){
                                                                new_image("thor_left_hand.png");
                                                                console.log("q is pressed");
                                                                }
                                                                if (keypressed=='82'){
                                                                    new_image("thor_right_hand.png");
                                                                    console.log("r is pressed");
                                                                    }
} 
function up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log(block_image_height);
        console.log("player_x="+player_x+"player_y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
    }
    function down(){
        if (player_y<=500){
            player_y=player_y+block_image_height;
            console.log(block_image_height);
            console.log("player_x="+player_x+"player_y="+player_y);
            canvas.remove(player_object);
            player_update();
        }  
    }
    function left(){
        if (player_x>=0){
            player_x=player_x-block_image_width;
            console.log(block_image_width);
            console.log("player_x="+player_x+"player_y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function right(){
        if (player_x<=700){
            player_x=player_x+block_image_width;
            console.log(block_image_width);
            console.log("player_x="+player_x+"player_y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }