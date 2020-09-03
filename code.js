var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","d965ba09-89b7-4a5d-a282-576e34798ce3"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"249ufZq5ALqkAt6CxwZP2ZLKynr62Z5c","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"Bxt8ylHiXBYASEwaqHGl_lZ79jok1e1R","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"d965ba09-89b7-4a5d-a282-576e34798ce3":{"name":"Stone","sourceUrl":"assets/api/v1/animation-library/gamelab/.pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs/category_environment/rock.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":".pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs/category_environment/rock.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey = createSprite(50, 300, 10, 25);
monkey.setAnimation("monkey");
monkey.scale = 0.1999999999;
monkey.x = 50;
var ground = createSprite(200, 380, 400, 50);
ground.velocityX = -4;
var bananaGroup = createGroup();
var rockGroup = createGroup();
var survivalTime  = 0;

function draw() {
background("white");
ground.velocityX = -5;
food();
rocks();
if (ground.x < 200) {
ground.x = ground.width / 2; 
}
if(keyDown("space") && monkey.y > 285){
monkey.velocityY = -11  ;
}
monkey.velocityY = monkey.velocityY + 0.5;

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(World.frameCount/World.frameRate);
text("Survival Time: "+ survivalTime , 100,50);

createEdgeSprites();
monkey.collide(ground);
drawSprites();
}
function food() {
if (World.frameCount%240==0) {
var banana = createSprite(325, randomNumber(120,200),20);
banana.setAnimation("Banana");
banana.velocityX = -4;
banana.lifetime = 380;
banana.scale = 0.1;
bananaGroup.add(banana);
}
}
function rocks() {
if (World.frameCount%300==0) {
var rock = createSprite(325, 245, 20, 20);  
rock.setAnimation("Stone");
rock.velocityX = -4;
rock.lifetime = 380;
rock.scale = 1.7;
rockGroup.add(rock);
}   
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
