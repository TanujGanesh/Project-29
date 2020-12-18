
const {Engine,Bodies,World,Constraint}=Matter;
var engine,world;

var grd,std1,std2,ply;
var blk1=[];
var blk2=[];
var z,q,a;
var shot;

function setup(){
    createCanvas(1200,500);

    engine = Engine.create();
    world = engine.world;

    grd = new Grd(width/2,height-10,width,20,255,255,255);
    std1 = new Grd(600,330,210,10,255,0,0);
    std2 = new Grd(900,200,180,10,255,0,0);

    ply = new Poly(225,265,30);

    q=319;
    z=7;
    a=-1;
    for(var i=0;i<7;i++){
        var r=random(100,255);
        var g=random(100,255);
        var b=random(100,255);
        for(var j=i;j<z;j++){
            a+=1;
            blk1[a]=new Box(535+j*20,q,20,30,r,g,b);
        }
        q-=30;
        z-=1;
    }

    q=189;
    z=5;
    a=-1;
    for(var i=0;i<5;i++){
        var r=random(100,255);
        var g=random(100,255);
        var b=random(100,255);
        for(var j=i;j<z;j++){
            a+=1;
            blk2[a]=new Box(850+j*20,q,20,30,r,g,b);
        }
        q-=30;
        z-=1;
    }   
    shot = new Sling(ply.body,225,265);
}

function draw(){
    Engine.update(engine);
    background(0);
    //text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY);
    //fill(255)
    grd.show();
    //fill("red");
    std1.show();
    std2.show();
    
    ply.show();
    shot.display();
    
    for (var b of blk1){
        b.show();
    }
    for (var b of blk2){
        b.show();
    }
}

function mouseDragged(){
    Matter.Body.setPosition(ply.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    setTimeout(()=>{
  shot.fly();
    },100);
}

