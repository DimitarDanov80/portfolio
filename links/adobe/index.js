(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ctaBlack = function() {
	this.initialize(img.ctaBlack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,47);


(lib.ctaWhite = function() {
	this.initialize(img.ctaWhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,47);


(lib.decoyOp1 = function() {
	this.initialize(img.decoyOp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,181);


(lib.HeroOp1 = function() {
	this.initialize(img.HeroOp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,733,403);


(lib.HeroOp2 = function() {
	this.initialize(img.HeroOp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,733,403);


(lib.HeroOp3 = function() {
	this.initialize(img.HeroOp3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,733,403);


(lib.logoAdobeRed = function() {
	this.initialize(img.logoAdobeRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,98);


(lib.logoLrBlack = function() {
	this.initialize(img.logoLrBlack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,32);


(lib.logoLrWhite = function() {
	this.initialize(img.logoLrWhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,32);


(lib.middlesOp1_1_5x = function() {
	this.initialize(img.middlesOp1_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1095,121);


(lib.txtOp1_1_5x = function() {
	this.initialize(img.txtOp1_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,116);


(lib.txtOp2_1_5x = function() {
	this.initialize(img.txtOp2_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,165);


(lib.txtOp3_1_5x = function() {
	this.initialize(img.txtOp3_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,535);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiteUnder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheEAKDIAA0GMC8JAAAIAAUGg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiteUnder, new cjs.Rectangle(-602.1,-64.3,1204.3000000000002,128.7), null);


(lib.txtOp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txtOp1_1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-203.6,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtOp1, new cjs.Rectangle(-203.6,-58,408,116), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C5141E","#A80D2C"],[0,1],269,-169.4,325.3,204.4).s().p("EhiOA4xMAAAhxhMDEdAAAMAAABxhg");
	this.shape.setTransform(628.725,363.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1257.5,726.7);


(lib.logoLrWhite_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logoLrWhite();
	this.instance.parent = this;
	this.instance.setTransform(-142,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoLrWhite_1, new cjs.Rectangle(-142,-16,284,32), null);


(lib.logoLrBlack_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logoLrBlack();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoLrBlack_1, new cjs.Rectangle(-142.5,-16,285,32), null);


(lib.logoAdobeRed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logoAdobeRed();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoAdobeRed_1, new cjs.Rectangle(-35.5,-49,71,98), null);


(lib.lineWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgE9pMAAJA7T");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lineWhite, new cjs.Rectangle(-1.4,-190.7,2.9,381.5), null);


(lib.heroOp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HeroOp3();
	this.instance.parent = this;
	this.instance.setTransform(-366.5,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heroOp3, new cjs.Rectangle(-366.5,-201.5,733,403), null);


(lib.heroOp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HeroOp2();
	this.instance.parent = this;
	this.instance.setTransform(-366.5,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heroOp2, new cjs.Rectangle(-366.5,-201.5,733,403), null);


(lib.heroOp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HeroOp1();
	this.instance.parent = this;
	this.instance.setTransform(-366.5,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heroOp1, new cjs.Rectangle(-366.5,-201.5,733,403), null);


(lib.handIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkGPIAAg1IEdAAIAAA1gAhtE2QhLhcgcguQgUgjgEgfQgGgiARgIQAQgKAWAMQAUAJAMATQANASAJAJQANAKAPAAQARgBABgDQACgDAAgoIgBksQAAggAIgNQAJgNAUAAQAUAAAIALQAHAJACAWIALDMIBPAQQBUAQAXAJQAhAMAGAGQANANAAAoQAAA6ABA5QAAAfgMAWQgNAXgZAjgAi0imQgaglAAguQAAg9ArgsQAsgsA9AAQA9AAArAsQArAsAAA9QAAAlgSAiQgRAggeAUIgKhtQAAgagSgUQgTgSgbgBQgbABgSASQgTAUAAAaIAAB7QgpgQgZgmg");
	this.shape.setTransform(0.0063,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handIn, new cjs.Rectangle(-23.8,-39.8,47.7,79.69999999999999), null);


(lib.Symbol10copy14 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHIBIAqIBKArQANAHAAAJQAAAKgQAKIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAgAgTgFQgGAAgEgFQgFgEAAgGQAAgFAFgEQAEgEAGAAQAGAAAEAEQACACACAFIAAACQAAAGgEAEQgEAEgFABIgBAAg");
	this.shape.setTransform(11.6007,15.6868);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.776)").s().p("AhSBpQgHgBgDgGQgCgGAAgHIAAgLIAAhTIAAhLQABgMAIgGQAJgFANAHIBHApIBKArQANAHAAAJQAAAKgQAJIiRBTQgHADgGAAIgDAAg");
	this.shape_1.setTransform(11.7007,15.6774);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy14, new cjs.Rectangle(2,5.1,19.2,21.200000000000003), null);


(lib.Symbol10copy10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAjAtQgFABgDgDIgbgcIgaAaQgDADgFAAQgDABgDgDQgDgDgBgFQABgEADgDIAagaIgbgbQgDgDAAgFQgBgDADgDQADgDAFgBQAEABADADIAbAbIAcgdQADgDAEAAQAFAAADADQADADgBAEQABAFgDADIgdAcIAcAbQADADAAAEQAAAFgDADQgDADgCAAIgCgBg");
	this.shape.setTransform(11.7339,15.7125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_1.setTransform(11.5,15.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_2.setTransform(11.525,15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy10, new cjs.Rectangle(1.2,5.3,20.7,20.7), null);


(lib.Symbol10copy9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAjAtQgFABgDgDIgbgcIgaAaQgDADgFAAQgDABgDgDQgDgDgBgFQABgEADgDIAagaIgbgbQgDgDAAgFQgBgDADgDQADgDAFgBQAEABADADIAbAbIAcgdQADgDAEAAQAFAAADADQADADgBAEQABAFgDADIgdAcIAcAbQADADAAAEQAAAFgDADQgDADgCAAIgCgBg");
	this.shape.setTransform(11.7339,15.7125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AAkAvQgFAAgDgDIgcgcIgbAbQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFADgDIAcgbIgdgcQgDgDAAgFQAAgDADgEQADgDAFAAQAEAAADADIAcAdIAdgeQADgDAEAAQAFAAADADQAEADgBAEQAAAFgDADIgdAdIAcAcQADADAAAEQAAAGgDADQgCACgDAAIgCAAg");
	this.shape_1.setTransform(11.6836,15.715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAlAwQgFABgDgDIgdgeIgcAcQgDADgFAAQgEABgDgDQgDgEgBgEQABgFADgDIAcgcIgdgcQgDgEAAgFQgBgEADgDQAEgDAEgBQAFABAEADIAcAdIAegfQADgDAEABQAGgBADAEQADADgBAEQABAFgEADIgeAeIAeAdQADADgBAFQABAFgEADQgCACgDAAIgCAAg");
	this.shape_2.setTransform(11.6333,15.7171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAmAyQgFAAgDgDIgegeIgcAcQgEAEgFAAQgEAAgDgDQgEgDAAgFQAAgFADgEIAegcIgegdQgEgEAAgFQAAgEADgDQADgEAFAAQAFAAAEAEIAdAeIAfggQADgDAFAAQAFAAADADQADAEgBAEQABAFgDADIgfAfIAeAeQADADAAAFQAAAFgDADQgDADgDAAIgCAAg");
	this.shape_3.setTransform(11.583,15.7188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAnAzQgFABgDgEIgfgfIgdAeQgEADgFAAQgEABgEgEQgDgDgBgFQABgFADgEIAegdIgfgeQgDgDAAgGQgBgEAEgEQADgDAFAAQAFAAAEADIAeAfIAgggQADgEAFABQAFAAADADQAEAEgBAEQABAFgEADIggAgIAfAfQAEADgBAFQABAFgEAEQgDACgDAAIgCAAg");
	this.shape_4.setTransform(11.5328,15.7203);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B3B3").s().p("AAoA0QgFABgDgDIggggIgeAeQgEAEgFAAQgFAAgDgDQgEgEAAgFQAAgGADgDIAggfIgggeQgEgDAAgGQAAgEADgEQAEgEAFAAQAFAAAEAEIAfAfIAhghQADgDAFAAQAFAAAEAEQADADgBAFQABAFgDADIghAgIAgAhQADADAAAFQAAAFgEAEQgCADgEAAIgCgBg");
	this.shape_5.setTransform(11.4825,15.7215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AApA2QgFABgDgEIghghIgfAgQgEADgGAAQgEABgEgEQgDgEAAgFQAAgGADgDIAgggIghgfQgDgDAAgGQAAgFADgDQAEgEAFAAQAGAAADADIAgAhIAhgiQAEgEAFABQAFAAAEADQAEAEgBAFQABAFgEAEIghAgIAgAiQAEADgBAFQABAFgEAEQgDADgEAAIgCAAg");
	this.shape_6.setTransform(11.4323,15.7225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AArA3QgGABgDgEIgighIggAgQgEAEgGAAQgEAAgEgEQgEgDAAgFQAAgHAEgDIAhghIgiggQgDgDAAgHQgBgEAEgEQADgEAGAAQAGAAADAEIAhAhIAigjQAEgDAFABQAFgBAEAEQAEAEgBAFQABAFgEAEIgiAhIAiAiQAEAEgCAFQABAGgEADQgDAEgEAAIgBgBg");
	this.shape_7.setTransform(11.3821,15.7233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsA5QgGABgDgEIgjgjIghAhQgEAEgGAAQgEABgEgEQgEgEAAgFQAAgHADgDIAigiIgighQgEgDAAgHQAAgEADgEQAEgEAGAAQAGAAAEADIAhAjIAjgkQAEgEAFABQAGAAAEAEQAEAEgBAFQABAFgEAEIgjAiIAiAjQAEAEgBAFQABAGgFAEQgDADgDAAIgCAAg");
	this.shape_8.setTransform(11.3319,15.7239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_9.setTransform(11.5,15.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AhKBKQgegfAAgrQAAgrAegeQAfgfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgfgfgAg6g7QgZAaAAAhQAAAjAZAZQAZAYAiAAQAiAAAYgYQAZgZAAgjQAAghgZgaQgYgYgiAAQgiAAgZAYg");
	this.shape_10.setTransform(11.4563,15.6344);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAggeArAAQAsAAAfAeQAgAfAAAsQAAAsggAfQgfAfgsAAQgrAAgggfgAg7g8QgZAbAAAhQAAAkAZAYQAZAaAiAAQAkAAAYgaQAagYAAgkQAAghgagbQgYgYgkAAQgiAAgZAYg");
	this.shape_11.setTransform(11.4125,15.6438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AhMBMQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAgggggAg8g9QgZAbAAAiQAAAkAZAZQAaAaAiAAQAkAAAZgaQAagZAAgkQAAgigagbQgZgZgkAAQgiAAgaAZg");
	this.shape_12.setTransform(11.3688,15.6531);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhNBNQggggAAgtQAAgtAgggQAgggAtAAQAtAAAgAgQAhAgAAAtQAAAtghAgQggAhgtAAQgtAAggghgAg9g+QgaAcAAAiQAAAlAaAZQAaAaAkAAQAkAAAZgaQAagZAAglQAAgigagcQgZgZgkAAQgkAAgaAZg");
	this.shape_13.setTransform(11.325,15.6625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B3B3").s().p("AhOBPQghghAAguQAAguAhggQAhggAtAAQAuAAAhAgQAhAgAAAuQAAAughAhQghAgguAAQgtAAghgggAg+g/QgaAcAAAjQAAAlAaAaQAbAaAjAAQAlAAAagaQAbgaAAglQAAgjgbgcQgagZglAAQgjAAgbAZg");
	this.shape_14.setTransform(11.2813,15.6719);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghgAg/hAQgaAdAAAjQAAAmAaAaQAbAbAlAAQAlAAAagbQAbgaAAgmQAAgjgbgdQgagaglAAQglAAgbAag");
	this.shape_15.setTransform(11.2375,15.6813);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AhQBRQgigiAAgvQAAgvAighQAhghAvAAQAvAAAiAhQAiAhAAAvQAAAvgiAiQgiAhgvAAQgvAAghghgAhAhBQgbAdAAAkQAAAmAbAbQAcAbAkAAQAmAAAbgbQAbgbAAgmQAAgkgbgdQgbgagmAAQgkAAgcAag");
	this.shape_16.setTransform(11.1938,15.6906);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSBSQghgigBgwQABgwAhghQAigiAwAAQAwAAAiAiQAjAhgBAwQABAwgjAiQgiAigwAAQgwAAgigigAhBhBQgbAdAAAkQAAAmAbAbQAcAcAlAAQAnAAAbgcQAcgbAAgmQAAgkgcgdQgbgbgnAAQglAAgcAbg");
	this.shape_17.setTransform(11.15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_18.setTransform(11.525,15.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2DFDF").s().p("AhFBFQgdgbAAgqQAAgnAdgfQAdgcAoAAQAqAAAcAcQAdAfAAAnQAAAqgdAbQgcAegqAAQgoAAgdgeg");
	this.shape_19.setTransform(11.4813,15.6594);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6BFBF").s().p("AhGBGQgdgcAAgqQAAgnAdggQAegcAoAAQArAAAcAcQAdAgAAAnQAAAqgdAcQgcAegrAAQgoAAgegeg");
	this.shape_20.setTransform(11.4375,15.6688);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D99F9F").s().p("AhHBHQgegcAAgrQAAgoAeggQAegdApAAQArAAAdAdQAeAgAAAoQAAArgeAcQgdAfgrAAQgpAAgegfg");
	this.shape_21.setTransform(11.3938,15.6781);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC8080").s().p("AhIBIQgegdAAgrQAAgpAeggQAegdAqAAQAsAAAeAdQAdAgAAApQAAArgdAdQgeAfgsAAQgqAAgegfg");
	this.shape_22.setTransform(11.35,15.6875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BF6060").s().p("AhJBJQgfgdAAgsQAAgpAfghQAfgeAqAAQAtAAAeAeQAeAhAAApQAAAsgeAdQgeAggtAAQgqAAgfggg");
	this.shape_23.setTransform(11.3063,15.6969);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B34040").s().p("AhKBKQgfgdAAgtQAAgqAfghQAfgeArAAQAtAAAfAeQAeAhAAAqQAAAtgeAdQgfAggtAAQgrAAgfggg");
	this.shape_24.setTransform(11.2625,15.7063);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A62020").s().p("AhLBLQgggeAAgtQAAgrAggiQAfgeAsAAQAuAAAfAeQAfAiAAArQAAAtgfAeQgfAhguAAQgsAAgfghg");
	this.shape_25.setTransform(11.2188,15.7156);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AhMBMQgggeAAguQAAgrAggjQAggeAsAAQAvAAAfAeQAfAjAAArQAAAugfAeQgfAhgvAAQgsAAggghg");
	this.shape_26.setTransform(11.175,15.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,4.1,23.3,23.200000000000003);


(lib.Symbol10copy8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHIBIAqIBKArQANAHAAAJQAAAKgQAKIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAgAgTgFQgGAAgEgFQgFgEAAgGQAAgFAFgEQAEgEAGAAQAGAAAEAEQACACACAFIAAACQAAAGgEAEQgEAEgFABIgBAAg");
	this.shape.setTransform(11.6007,15.6868);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.776)").s().p("AhSBpQgHgBgDgGQgCgGAAgHIAAgLIAAhTIAAhLQABgMAIgGQAJgFANAHIBHApIBKArQANAHAAAJQAAAKgQAJIiRBTQgHADgGAAIgDAAg");
	this.shape_1.setTransform(11.7007,15.6774);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy8, new cjs.Rectangle(2,5.1,19.2,21.200000000000003), null);


(lib.Symbol4copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy3, new cjs.Rectangle(0,0,100,100), null);


(lib.Symbol3copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAVQgEgCgCgDQgDgDgBgEIgCgJQABgEABgFIAFgHIAGgEIAGgBQAIAAAFAFQAEAGAAAKIAAABIAAABIgbAAQAAAHADADQAEAEAGAAIAGgBIAFgBIABAGIgFABIgIABQgFAAgEgBgAgCgOIgEADIgDAEIAAAEIATAAQABgFgDgDQgDgEgEAAIgDABg");
	this.shape.setTransform(25.25,33.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgJAcIgGgBIACgHIAFACIAHABQAGAAADgDQADgDAAgGIAAgBIgEABIgHABIgGgBQgDgBgDgDQgCgCgCgEQgBgDAAgFQAAgFABgEQACgEACgCQADgDAEgCQAEgBADAAIAKAAIAGACIAAAkQAAAKgFAFQgFAEgJAAIgIgBgAgGgSQgDAEAAAHIABAGIACADQABABAAAAQAAABABAAQAAAAABAAQAAABABAAIADABIAGgBIAEgCIAAgYIgDAAIgFgBQgGAAgDAEg");
	this.shape_1.setTransform(20.525,34.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgDAeIAAgpIAHAAIAAApgAgCgUQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_2.setTransform(17.275,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAVQgFgCgCgDQgDgDgBgEIgCgJQABgEACgFIADgHIAHgEIAGgBQAIAAAFAFQAFAGAAAKIAAABIAAABIgdAAQABAHAEADQADAEAGAAIAHgBIADgBIABAGIgEABIgIABQgEAAgEgBgAgDgOIgDADIgDAEIgBAEIAVAAQAAgFgDgDQgDgEgEAAIgEABg");
	this.shape_3.setTransform(13.95,33.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgPAVIAAgFIAEgIIAGgIIAGgHIAFgHIgUAAIAAgGIAdAAIAAAGIgEAFIgGAHIgGAIIgFAJIAWAAIAAAGg");
	this.shape_4.setTransform(9.775,33.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAJAVIAAgVIAAgGIgCgFIgDgDIgEAAIgCAAIgDAAIgCAAIgCABIAAAiIgHAAIAAgoIAHgBIAJgBIAIABIAGAFQACACAAAEIABAHIAAAXg");
	this.shape_5.setTransform(5.55,33.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASAcIgDgHIgDgHIgYAAIgFAOIgJAAIAHgQIAFgOIAFgNIAHgMIAFAAIAGAMIAGANIAFAOIAGAQgAgFgFIgEAMIATAAIgFgMIgFgNIgFANg");
	this.shape_6.setTransform(0.5,33.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy11, new cjs.Rectangle(-3,27.6,31.5,10.899999999999999), null);


(lib.Symbol3copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAWIgGgFQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQADgEADgBQAEgCAEAAQAFAAAEACQAEABACAEQADADACAEQABAFAAAEQAAAFgBAFQgCAEgDADQgCADgEACQgEACgFAAQgEAAgEgCgAgIgLQgEAEAAAHQAAAIAEAEQADAFAFAAQAGAAADgFQAEgEAAgIQAAgHgEgEQgDgFgGAAQgFAAgDAFg");
	this.shape.setTransform(24.575,1.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgNAiIAAgwQAAgKAFgEQAEgFAIAAIAGABIAEABIgCAGIgDgBIgEAAQgFAAgCADQgDADAAAGIAAADIARAAIAAAIIgRAAIAAAlg");
	this.shape_1.setTransform(20.675,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAKAXIAAgXIAAgHIgCgFIgEgCIgEgBIgDAAIgDAAIgCABIgBAAIAAAlIgIAAIAAgrIAHgBIAKgBQAFAAAEABQADACADADQACACABAEIABAJIAAAYg");
	this.shape_2.setTransform(16.15,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgDgBg");
	this.shape_3.setTransform(12.525,0.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgQAXIAAgGIAFgIIAGgJIAGgIIAGgHIgWAAIAAgHIAgAAIAAAGIgFAGIgHAIIgFAJIgGAJIAYAAIAAAHg");
	this.shape_4.setTransform(9.3,1.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFAdQgDgBgBgDQgCgCgBgDIgBgIIAAgoIAIgBIAAAOIARAAIAAAHIgRAAIAAAUIABAFIABAEIADABIADABIAGgBIADgBIABAHIgDABIgIABIgHgBg");
	this.shape_5.setTransform(5.7,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgHAWQgEgCgDgDQgCgCAAgEIgBgJIAAgYIAIAAIAAAXQAAAIACADQADAEAFAAIADAAIADAAIACgBIABAAIAAglIAJAAIAAArIgIABIgLABQgEAAgDgBg");
	this.shape_6.setTransform(1.2,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAKAiIAAgYIAAgHIgCgEIgEgCIgEgBIgDAAIgDABIgCAAIgBAAIAAAlIgIAAIAAhBIAIgCIAAAXIAEgBIAFAAQAFgBAEACQADABACAEQADACABADIABAIIAAAag");
	this.shape_7.setTransform(-3.75,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAFAYQgFAAgEgCIgHgFIgEgHQgBgFAAgFQAAgEABgFQACgEADgDQACgDAEgCQAEgCAFAAIAGABIAGABIgCAHIgFgBIgFgBQgGAAgDAFQgEAEAAAHIABAHQABADACACQABACADABQACACAEAAIAGgBIAEgBIABAHIgCAAIgDABIgDABIgEAAg");
	this.shape_8.setTransform(-8.175,1.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgKAXIgFgCIABgHIAFACIAIABIAGgBQADgCAAgDQAAgDgDgBIgGgEIgGgCIgDgCIgDgEQgBgCgBgDQABgGAEgDQAEgEAHAAIAEAAIAEABIACAAIACABIgBAHIgEgBIgHgBQgCAAgDABQAAABgBAAQAAABAAAAQgBAAAAABQAAABAAAAIAAADIACACIADACIADACIAGACIAEACIADAEIABAFQAAAGgFAEQgEADgIAAIgJgBg");
	this.shape_9.setTransform(-12.3,1.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAKAXIAAgXIgBgHIgCgFIgDgCIgFgBIgCAAIgCAAIgDABIgCAAIAAAlIgIAAIAAgrIAIgBIAKgBQAFAAADABQAFACABADQACACABAEIABAJIAAAYg");
	this.shape_10.setTransform(-16.75,1.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgGAWIgHgFQgDgDgBgEQgCgFAAgFQAAgFACgEQACgFADgDQADgDADgBIAHgCQAJAAAFAGQAFAGAAALIAAABIAAABIgeAAQAAAHAEAEQADAEAHAAIAHgBIAFgCIABAHIgFACIgJABQgFAAgEgCgAgDgPIgEADIgCAEIgBAFIAVAAQABgGgDgDQgDgEgFAAIgEABg");
	this.shape_11.setTransform(-21.725,1.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgFAdQgDgBgBgDQgCgCgBgDIgBgIIAAgoIAIgBIAAAOIARAAIAAAHIgRAAIAAAUIABAFIACAEIACABIADABIAGgBIADgBIABAHIgEABIgHABIgHgBg");
	this.shape_12.setTransform(-25.7,1.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgGAXQgEgBgCgCQgCgBgCgDIgBgHQAAgEACgCIAEgEIAGgCIAGgBIADAAIACABIACAAIACAAIAAgCIgBgEIgCgEIgDgCIgEgBIgHABIgEABIgBgHIAFgBIAHgBIAIABIAGAEIADAFIABAIIAAAbIgDAAIgFABIgFAAIgFABIgGgBgAgFADIgDACIgBAEQAAAEADACQADACAEAAIAFAAIAEgBIAAgNIgDgBIgFAAIgDAAIgEABg");
	this.shape_13.setTransform(-30.075,1.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgQAfIgIgCIAAg5IAIgBIAIgBQAHAAAGACQAGACAFAEQAEADACAHQADAFAAAHQAAAIgDAGQgCAFgEAFQgFAEgGABQgGACgHAAIgIAAgAgQgWIAAAuIADAAIAGAAQALAAAGgHQAGgGAAgLQAAgKgGgGQgGgHgLABIgGAAIgDAAg");
	this.shape_14.setTransform(-35.25,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy6, new cjs.Rectangle(-39.4,-4.9,67.6,11.600000000000001), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAWIgGgFQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQADgEADgBQAEgCAEAAQAFAAAEACQAEABACAEQADADACAEQABAFAAAEQAAAFgBAFQgCAEgDADQgCADgEACQgEACgFAAQgEAAgEgCgAgIgLQgEAEAAAHQAAAIAEAEQADAFAFAAQAGAAADgFQAEgEAAgIQAAgHgEgEQgDgFgGAAQgFAAgDAFg");
	this.shape.setTransform(24.575,1.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgNAiIAAgwQAAgKAFgEQAEgFAIAAIAGABIAEABIgCAGIgDgBIgEAAQgFAAgCADQgDADAAAGIAAADIARAAIAAAIIgRAAIAAAlg");
	this.shape_1.setTransform(20.675,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAKAXIAAgXIAAgHIgCgFIgEgCIgEgBIgDAAIgDAAIgCABIgBAAIAAAlIgIAAIAAgrIAHgBIAKgBQAFAAAEABQADACADADQACACABAEIABAJIAAAYg");
	this.shape_2.setTransform(16.15,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgDgBg");
	this.shape_3.setTransform(12.525,0.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgQAXIAAgGIAFgIIAGgJIAGgIIAGgHIgWAAIAAgHIAgAAIAAAGIgFAGIgHAIIgFAJIgGAJIAYAAIAAAHg");
	this.shape_4.setTransform(9.3,1.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFAdQgDgBgBgDQgCgCgBgDIgBgIIAAgoIAIgBIAAAOIARAAIAAAHIgRAAIAAAUIABAFIABAEIADABIADABIAGgBIADgBIABAHIgDABIgIABIgHgBg");
	this.shape_5.setTransform(5.7,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgHAWQgEgCgDgDQgCgCAAgEIgBgJIAAgYIAIAAIAAAXQAAAIACADQADAEAFAAIADAAIADAAIACgBIABAAIAAglIAJAAIAAArIgIABIgLABQgEAAgDgBg");
	this.shape_6.setTransform(1.2,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAKAiIAAgYIAAgHIgCgEIgEgCIgEgBIgDAAIgDABIgCAAIgBAAIAAAlIgIAAIAAhBIAIgCIAAAXIAEgBIAFAAQAFgBAEACQADABACAEQADACABADIABAIIAAAag");
	this.shape_7.setTransform(-3.75,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAFAYQgFAAgEgCIgHgFIgEgHQgBgFAAgFQAAgEABgFQACgEADgDQACgDAEgCQAEgCAFAAIAGABIAGABIgCAHIgFgBIgFgBQgGAAgDAFQgEAEAAAHIABAHQABADACACQABACADABQACACAEAAIAGgBIAEgBIABAHIgCAAIgDABIgDABIgEAAg");
	this.shape_8.setTransform(-8.175,1.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgKAXIgFgCIABgHIAFACIAIABIAGgBQADgCAAgDQAAgDgDgBIgGgEIgGgCIgDgCIgDgEQgBgCgBgDQABgGAEgDQAEgEAHAAIAEAAIAEABIACAAIACABIgBAHIgEgBIgHgBQgCAAgDABQAAABgBAAQAAABAAAAQgBAAAAABQAAABAAAAIAAADIACACIADACIADACIAGACIAEACIADAEIABAFQAAAGgFAEQgEADgIAAIgJgBg");
	this.shape_9.setTransform(-12.3,1.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAKAXIAAgXIgBgHIgCgFIgDgCIgFgBIgCAAIgCAAIgDABIgCAAIAAAlIgIAAIAAgrIAIgBIAKgBQAFAAADABQAFACABADQACACABAEIABAJIAAAYg");
	this.shape_10.setTransform(-16.75,1.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgGAWIgHgFQgDgDgBgEQgCgFAAgFQAAgFACgEQACgFADgDQADgDADgBIAHgCQAJAAAFAGQAFAGAAALIAAABIAAABIgeAAQAAAHAEAEQADAEAHAAIAHgBIAFgCIABAHIgFACIgJABQgFAAgEgCgAgDgPIgEADIgCAEIgBAFIAVAAQABgGgDgDQgDgEgFAAIgEABg");
	this.shape_11.setTransform(-21.725,1.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgFAdQgDgBgBgDQgCgCgBgDIgBgIIAAgoIAIgBIAAAOIARAAIAAAHIgRAAIAAAUIABAFIACAEIACABIADABIAGgBIADgBIABAHIgEABIgHABIgHgBg");
	this.shape_12.setTransform(-25.7,1.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgGAXQgEgBgCgCQgCgBgCgDIgBgHQAAgEACgCIAEgEIAGgCIAGgBIADAAIACABIACAAIACAAIAAgCIgBgEIgCgEIgDgCIgEgBIgHABIgEABIgBgHIAFgBIAHgBIAIABIAGAEIADAFIABAIIAAAbIgDAAIgFABIgFAAIgFABIgGgBgAgFADIgDACIgBAEQAAAEADACQADACAEAAIAFAAIAEgBIAAgNIgDgBIgFAAIgDAAIgEABg");
	this.shape_13.setTransform(-30.075,1.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgQAfIgIgCIAAg5IAIgBIAIgBQAHAAAGACQAGACAFAEQAEADACAHQADAFAAAHQAAAIgDAGQgCAFgEAFQgFAEgGABQgGACgHAAIgIAAgAgQgWIAAAuIADAAIAGAAQALAAAGgHQAGgGAAgLQAAgKgGgGQgGgHgLABIgGAAIgDAAg");
	this.shape_14.setTransform(-35.25,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-39.4,-4.9,67.6,11.600000000000001), null);


(lib.Symbol2copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("Aj5BHQgKAAgGgEQgIgGgBgPIAAhaQAAgaAZAAIH6AAQAFAAAFADQAGACgCACQgWAcAAAkQAAASAGASQAHASAMAMQgFAEgMAAg");
	this.shape.setTransform(26.4,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy6, new cjs.Rectangle(-1,0,54.9,14.2), null);


(lib.Symbol2copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("Am0BHIgXAAQgKAAgGgEQgJgGAAgPIAAhaQAAgaAZAAIAXAAIOYAAQABBKgBBDg");
	this.shape.setTransform(21.7625,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy4, new cjs.Rectangle(-26.7,0,96.9,14.2), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("Am0BHIgXAAQgKAAgGgEQgJgGAAgPIAAhaQAAgaAZAAIAXAAIOYAAQABBKgBBDg");
	this.shape.setTransform(21.7625,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-26.7,0,96.9,14.2), null);


(lib.decoyOp1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.decoyOp1();
	this.instance.parent = this;
	this.instance.setTransform(-90,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.decoyOp1_1, new cjs.Rectangle(-90,-90.5,180,181), null);


(lib.ctaIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaWhite();
	this.instance.parent = this;
	this.instance.setTransform(-48,-15.65,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaIn, new cjs.Rectangle(-48,-15.6,96,31.299999999999997), null);


(lib.ctaBlackIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaBlack();
	this.instance.parent = this;
	this.instance.setTransform(-72,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaBlackIn, new cjs.Rectangle(-72,-23.5,144,47), null);


(lib.btnOutLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADWAAQAABZg/A+Qg+A/hZAAQhYAAg/g/Qg+g+AAhZQAAhYA+g/QA/g+BYAAQBZAAA+A+QA/A/AABYg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnOutLine, new cjs.Rectangle(-22.4,-22.4,44.9,44.9), null);


(lib.btnDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBNQgfgggBgtQABgsAfggQAggfAsAAQAtAAAgAfQAfAgABAsQgBAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnDot, new cjs.Rectangle(-10.8,-10.8,21.700000000000003,21.700000000000003), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function urlOpen() {
			function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(r,a,n){e[a]=n});return e}
				
			var urlVars = getUrlVars();
					
			if (urlVars.clickTag !== 'undefined') {
				window.open(decodeURIComponent(urlVars.clickTag));
			}
		}
		this.zCTA.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.zCTA = new lib.Symbol2();
	this.zCTA.name = "zCTA";
	this.zCTA.parent = this;
	this.zCTA.setTransform(602.75,362.8,1,1,0,0,0,628.7,363.3);
	new cjs.ButtonHelper(this.zCTA, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.zCTA).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-25.9,-0.5,1257.4,726.7), null);


(lib.remAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// middle
	this.instance = new lib.middlesOp1_1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-289.95,-45.7,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logoAdobeRed
	this.instance_1 = new lib.logoAdobeRed_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(536.95,-1.85,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// whiteUnder
	this.instance_2 = new lib.whiteUnder();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.remAnim, new cjs.Rectangle(-602.1,-64.3,1204.3000000000002,128.7), null);


(lib.rem = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{open:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// decoyOp1
	this.instance = new lib.decoyOp1_1();
	this.instance.parent = this;
	this.instance.setTransform(-510.95,-0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(59));

	// logoAdobeRed
	this.instance_1 = new lib.remAnim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,179.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({y:169.505},0).wait(1).to({y:159.4372},0).wait(1).to({y:149.6967},0).wait(1).to({y:140.2834},0).wait(1).to({y:131.1973},0).wait(1).to({y:122.4384},0).wait(1).to({y:114.0068},0).wait(1).to({y:105.9024},0).wait(1).to({y:98.1252},0).wait(1).to({y:90.6753},0).wait(1).to({y:83.5526},0).wait(1).to({y:76.7571},0).wait(1).to({y:70.2889},0).wait(1).to({y:64.1478},0).wait(1).to({y:58.3341},0).wait(1).to({y:52.8475},0).wait(1).to({y:47.6882},0).wait(1).to({y:42.8561},0).wait(1).to({y:38.3512},0).wait(1).to({y:34.1736},0).wait(1).to({y:30.3232},0).wait(1).to({y:26.8},0).wait(37));

	// buttonAll2
	this.zCTA = new lib.Symbol30();
	this.zCTA.name = "zCTA";
	this.zCTA.parent = this;
	this.zCTA.setTransform(9.95,2.65,1,0.2795,0,0,0,613.2,364.8);
	this.zCTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zCTA).wait(2).to({_off:false},0).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-602.1,-91.1,1204.3000000000002,335.4);


(lib.hand = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer_3
	this.instance = new lib.handIn();
	this.instance.parent = this;
	this.instance.setTransform(23.85,39.85);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:1},12,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.7,79.7);


(lib.Symbol10copy20 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAjAtQgFABgDgDIgbgcIgaAaQgDADgFAAQgDABgDgDQgDgDgBgFQABgEADgDIAagaIgbgbQgDgDAAgFQgBgDADgDQADgDAFgBQAEABADADIAbAbIAcgdQADgDAEAAQAFAAADADQADADgBAEQABAFgDADIgdAcIAcAbQADADAAAEQAAAFgDADQgDADgCAAIgCgBg");
	this.shape.setTransform(11.7339,15.7125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_1.setTransform(11.5,15.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_2.setTransform(11.525,15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3copy11();
	this.instance.parent = this;
	this.instance.setTransform(-8.1,-18.9,1.2327,1.2327,0,0,0,22.2,5.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.757)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol2copy6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.9,15.85,0.8358,0.8159,0,0,0,24.9,7.3);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy20, new cjs.Rectangle(-44.2,3,66.1,28), null);


(lib.Symbol10copy19 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAjAtQgFABgDgDIgbgcIgaAaQgDADgFAAQgDABgDgDQgDgDgBgFQABgEADgDIAagaIgbgbQgDgDAAgFQgBgDADgDQADgDAFgBQAEABADADIAbAbIAcgdQADgDAEAAQAFAAADADQADADgBAEQABAFgDADIgdAcIAcAbQADADAAAEQAAAFgDADQgDADgCAAIgCgBg");
	this.shape.setTransform(11.7339,15.7125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AAkAvQgFAAgDgDIgcgcIgbAbQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFADgDIAcgbIgdgcQgDgDAAgFQAAgDADgEQADgDAFAAQAEAAADADIAcAdIAdgeQADgDAEAAQAFAAADADQAEADgBAEQAAAFgDADIgdAdIAcAcQADADAAAEQAAAGgDADQgCACgDAAIgCAAg");
	this.shape_1.setTransform(11.6836,15.715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAlAwQgFABgDgDIgdgeIgcAcQgDADgFAAQgEABgDgDQgDgEgBgEQABgFADgDIAcgcIgdgcQgDgEAAgFQgBgEADgDQAEgDAEgBQAFABAEADIAcAdIAegfQADgDAEABQAGgBADAEQADADgBAEQABAFgEADIgeAeIAeAdQADADgBAFQABAFgEADQgCACgDAAIgCAAg");
	this.shape_2.setTransform(11.6333,15.7171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAmAyQgFAAgDgDIgegeIgcAcQgEAEgFAAQgEAAgDgDQgEgDAAgFQAAgFADgEIAegcIgegdQgEgEAAgFQAAgEADgDQADgEAFAAQAFAAAEAEIAdAeIAfggQADgDAFAAQAFAAADADQADAEgBAEQABAFgDADIgfAfIAeAeQADADAAAFQAAAFgDADQgDADgDAAIgCAAg");
	this.shape_3.setTransform(11.583,15.7188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAnAzQgFABgDgEIgfgfIgdAeQgEADgFAAQgEABgEgEQgDgDgBgFQABgFADgEIAegdIgfgeQgDgDAAgGQgBgEAEgEQADgDAFAAQAFAAAEADIAeAfIAgggQADgEAFABQAFAAADADQAEAEgBAEQABAFgEADIggAgIAfAfQAEADgBAFQABAFgEAEQgDACgDAAIgCAAg");
	this.shape_4.setTransform(11.5328,15.7203);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B3B3").s().p("AAoA0QgFABgDgDIggggIgeAeQgEAEgFAAQgFAAgDgDQgEgEAAgFQAAgGADgDIAggfIgggeQgEgDAAgGQAAgEADgEQAEgEAFAAQAFAAAEAEIAfAfIAhghQADgDAFAAQAFAAAEAEQADADgBAFQABAFgDADIghAgIAgAhQADADAAAFQAAAFgEAEQgCADgEAAIgCgBg");
	this.shape_5.setTransform(11.4825,15.7215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AApA2QgFABgDgEIghghIgfAgQgEADgGAAQgEABgEgEQgDgEAAgFQAAgGADgDIAgggIghgfQgDgDAAgGQAAgFADgDQAEgEAFAAQAGAAADADIAgAhIAhgiQAEgEAFABQAFAAAEADQAEAEgBAFQABAFgEAEIghAgIAgAiQAEADgBAFQABAFgEAEQgDADgEAAIgCAAg");
	this.shape_6.setTransform(11.4323,15.7225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AArA3QgGABgDgEIgighIggAgQgEAEgGAAQgEAAgEgEQgEgDAAgFQAAgHAEgDIAhghIgiggQgDgDAAgHQgBgEAEgEQADgEAGAAQAGAAADAEIAhAhIAigjQAEgDAFABQAFgBAEAEQAEAEgBAFQABAFgEAEIgiAhIAiAiQAEAEgCAFQABAGgEADQgDAEgEAAIgBgBg");
	this.shape_7.setTransform(11.3821,15.7233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsA5QgGABgDgEIgjgjIghAhQgEAEgGAAQgEABgEgEQgEgEAAgFQAAgHADgDIAigiIgighQgEgDAAgHQAAgEADgEQAEgEAGAAQAGAAAEADIAhAjIAjgkQAEgEAFABQAGAAAEAEQAEAEgBAFQABAFgEAEIgjAiIAiAjQAEAEgBAFQABAGgFAEQgDADgDAAIgCAAg");
	this.shape_8.setTransform(11.3319,15.7239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_9.setTransform(11.5,15.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AhKBKQgegfAAgrQAAgrAegeQAfgfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgfgfgAg6g7QgZAaAAAhQAAAjAZAZQAZAYAiAAQAiAAAYgYQAZgZAAgjQAAghgZgaQgYgYgiAAQgiAAgZAYg");
	this.shape_10.setTransform(11.4563,15.6344);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAggeArAAQAsAAAfAeQAgAfAAAsQAAAsggAfQgfAfgsAAQgrAAgggfgAg7g8QgZAbAAAhQAAAkAZAYQAZAaAiAAQAkAAAYgaQAagYAAgkQAAghgagbQgYgYgkAAQgiAAgZAYg");
	this.shape_11.setTransform(11.4125,15.6438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AhMBMQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAgggggAg8g9QgZAbAAAiQAAAkAZAZQAaAaAiAAQAkAAAZgaQAagZAAgkQAAgigagbQgZgZgkAAQgiAAgaAZg");
	this.shape_12.setTransform(11.3688,15.6531);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhNBNQggggAAgtQAAgtAgggQAgggAtAAQAtAAAgAgQAhAgAAAtQAAAtghAgQggAhgtAAQgtAAggghgAg9g+QgaAcAAAiQAAAlAaAZQAaAaAkAAQAkAAAZgaQAagZAAglQAAgigagcQgZgZgkAAQgkAAgaAZg");
	this.shape_13.setTransform(11.325,15.6625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B3B3").s().p("AhOBPQghghAAguQAAguAhggQAhggAtAAQAuAAAhAgQAhAgAAAuQAAAughAhQghAgguAAQgtAAghgggAg+g/QgaAcAAAjQAAAlAaAaQAbAaAjAAQAlAAAagaQAbgaAAglQAAgjgbgcQgagZglAAQgjAAgbAZg");
	this.shape_14.setTransform(11.2813,15.6719);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghgAg/hAQgaAdAAAjQAAAmAaAaQAbAbAlAAQAlAAAagbQAbgaAAgmQAAgjgbgdQgagaglAAQglAAgbAag");
	this.shape_15.setTransform(11.2375,15.6813);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AhQBRQgigiAAgvQAAgvAighQAhghAvAAQAvAAAiAhQAiAhAAAvQAAAvgiAiQgiAhgvAAQgvAAghghgAhAhBQgbAdAAAkQAAAmAbAbQAcAbAkAAQAmAAAbgbQAbgbAAgmQAAgkgbgdQgbgagmAAQgkAAgcAag");
	this.shape_16.setTransform(11.1938,15.6906);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSBSQghgigBgwQABgwAhghQAigiAwAAQAwAAAiAiQAjAhgBAwQABAwgjAiQgiAigwAAQgwAAgigigAhBhBQgbAdAAAkQAAAmAbAbQAcAcAlAAQAnAAAbgcQAcgbAAgmQAAgkgcgdQgbgbgnAAQglAAgcAbg");
	this.shape_17.setTransform(11.15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_18.setTransform(11.525,15.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2DFDF").s().p("AhFBFQgdgbAAgqQAAgnAdgfQAdgcAoAAQAqAAAcAcQAdAfAAAnQAAAqgdAbQgcAegqAAQgoAAgdgeg");
	this.shape_19.setTransform(11.4813,15.6594);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6BFBF").s().p("AhGBGQgdgcAAgqQAAgnAdggQAegcAoAAQArAAAcAcQAdAgAAAnQAAAqgdAcQgcAegrAAQgoAAgegeg");
	this.shape_20.setTransform(11.4375,15.6688);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D99F9F").s().p("AhHBHQgegcAAgrQAAgoAeggQAegdApAAQArAAAdAdQAeAgAAAoQAAArgeAcQgdAfgrAAQgpAAgegfg");
	this.shape_21.setTransform(11.3938,15.6781);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC8080").s().p("AhIBIQgegdAAgrQAAgpAeggQAegdAqAAQAsAAAeAdQAdAgAAApQAAArgdAdQgeAfgsAAQgqAAgegfg");
	this.shape_22.setTransform(11.35,15.6875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BF6060").s().p("AhJBJQgfgdAAgsQAAgpAfghQAfgeAqAAQAtAAAeAeQAeAhAAApQAAAsgeAdQgeAggtAAQgqAAgfggg");
	this.shape_23.setTransform(11.3063,15.6969);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B34040").s().p("AhKBKQgfgdAAgtQAAgqAfghQAfgeArAAQAtAAAfAeQAeAhAAAqQAAAtgeAdQgfAggtAAQgrAAgfggg");
	this.shape_24.setTransform(11.2625,15.7063);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A62020").s().p("AhLBLQgggeAAgtQAAgrAggiQAfgeAsAAQAuAAAfAeQAfAiAAArQAAAtgfAeQgfAhguAAQgsAAgfghg");
	this.shape_25.setTransform(11.2188,15.7156);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AhMBMQgggeAAguQAAgrAggjQAggeAsAAQAvAAAfAeQAfAjAAArQAAAugfAeQgfAhgvAAQgsAAggghg");
	this.shape_26.setTransform(11.175,15.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

	// Layer 7
	this.instance = new lib.Symbol3copy11();
	this.instance.parent = this;
	this.instance.setTransform(-8.1,-18.9,1.2327,1.2327,0,0,0,22.2,5.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.757)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));

	// Layer 3
	this.instance_1 = new lib.Symbol2copy6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.9,15.85,0.8358,0.8159,0,0,0,24.9,7.3);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-2,72,42);


(lib.Symbol10copy13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAKQgFgEAAgGQAAgEAFgEQADgFAFAAQAFAAAFAFQADAEAAAEQAAAGgDAEQgFAEgFgBQgFABgDgEg");
	this.shape.setTransform(9.55,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(9.5222,13.6722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606060").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(9.4944,13.6444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777777").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(9.4667,13.6167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgJALQgEgFAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(9.4389,13.5889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4A4A4").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(9.4111,13.5611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBBBBB").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_6.setTransform(9.3833,13.5333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(9.3556,13.5056);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8E8").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_8.setTransform(9.3278,13.4778);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(9.3,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(3));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHICSBVQAcAQgfAUIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAg");
	this.shape_10.setTransform(11.6144,15.6868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A4A").s().p("AhUBrQgHAAgDgHQgDgFAAgIIAAgLIABhWIAAhNQAAgMAJgGQAJgFAOAHICUBWQAdARggAUIgsAaQglAXgGACQgMAFgHgEQgGgDAAgLIAAgsQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAVQAAAJAIgEIA7ghQAGgDgCgEQgCgFgHgEQhfg0gQgKQgFgDgFACQgFACgBAHIAAB8QAAAIAFAEQAEADAHgEIAMgHQAAAHAEAFQADAFAJABIgVAMIgSAKQgIADgFAAIgEgBg");
	this.shape_11.setTransform(11.6193,15.6913);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606060").s().p("AhVBtQgHAAgEgHQgCgGAAgIIAAgLIAAhXIAAhOQABgNAJgFQAJgFAOAGICXBYQAcARggAUIgsAbQgmAXgGACQgMAGgHgFQgHgDAAgLIAAgsQAAgJADgDQADgDAGAAQAFAAADACQAFAEAAAJIAAAUQAAAKAIgFIA8ghQAGgDgCgEQgCgGgHgDQhgg1gQgKQgGgDgFACQgFACgBAHIAAB+QAAAIAFAEQAEAEAIgFIALgHQAAAHAFAGQADAEAJACIgWAMIgSAJQgIADgGABIgDgBg");
	this.shape_12.setTransform(11.6242,15.6958);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777777").s().p("AhXBvQgGgBgEgHQgDgFAAgIIAAgMIABhYIAAhQQAAgMAJgGQAKgFAOAHICZBZQAdARggAVIguAbQgmAXgGACQgMAGgHgEQgHgEAAgLIAAgtQAAgJADgDQADgDAFgBQAGABADACQAFAEAAAJIAAAVQAAAKAIgFIA9giQAGgDgCgFQgCgFgHgDQhig2gQgKQgGgDgFACQgGACAAAHIAAB/QAAAKAFADQAEAEAIgFIAMgHQgBAIAFAFQADAEAKACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_13.setTransform(11.6291,15.7003);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("AhYBxQgHgBgEgHQgCgGAAgIIAAgLIAAhaIAAhRQABgNAJgGQAJgFAPAHICbBbQAeARghAVIguAcQgnAXgHACQgMAGgHgEQgHgEAAgLIAAguQAAgIAEgEQADgDAFgBQAFAAAEADQAEAFAAAIIAAAVQAAALAJgFIA+giQAGgEgCgFQgCgFgIgDQhjg3gQgKQgGgDgFACQgGACAAAHIAACBQAAAKAEADQAFAEAIgFIAMgHQgBAIAFAFQADAFAKACIgWAMIgUAKQgHADgGAAIgEAAg");
	this.shape_14.setTransform(11.634,15.7048);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A4A4").s().p("AhZByQgHAAgEgHQgDgGAAgIIAAgMIABhbIAAhSQAAgNAJgGQAKgGAPAHICeBcQAeASgiAVIgvAcQgnAYgHACQgMAGgHgEQgHgEAAgLIAAgvQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAAKAJgFIA/giQAGgEgCgFQgCgFgIgDQhkg4gRgKQgGgDgFABQgGACAAAIIAACDQAAAKAEAEQAFADAIgEIAMgIQAAAIAFAFQADAFAKACIgXAMIgUALQgIADgFAAIgEgBg");
	this.shape_15.setTransform(11.6389,15.7093);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBBBBB").s().p("AhbB0QgHAAgEgIQgCgGAAgIIAAgMIAAhcIAAhUQABgNAJgGQAKgFAPAHICgBdQAfASgiAWIgwAcQgoAYgHACQgMAHgHgFQgIgEAAgLIAAgvQAAgJAEgEQADgDAFgBQAGAAAEADQAEAFAAAJIAAAWQAAAKAJgFIBAgjQAGgEgCgFQgCgFgIgDQhmg5gRgKQgGgEgFACQgGACgBAIIAACFQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQADAEAKACIgXANIgUAKQgIADgGAAIgEAAg");
	this.shape_16.setTransform(11.6438,15.7138);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D2D2").s().p("AhcB2QgHgBgEgHQgDgGAAgJIAAgMIABhdIAAhVQAAgOAKgGQAJgFAQAHICiBfQAfASgiAWIgwAdQgpAYgHACQgNAHgHgFQgHgEAAgLIAAgwQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAWQAAALAJgGIBBgjQAGgEgCgFQgCgFgIgDQhog6gRgKQgGgEgFACQgGACgBAIIAACHQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQAEAFAKACIgYAMIgUALQgIADgGAAIgEAAg");
	this.shape_17.setTransform(11.6487,15.7184);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8E8E8").s().p("AhdB3QgIAAgEgHQgDgHAAgIIAAgNIABhfIAAhVQAAgOAKgHQAKgFAPAHICmBgQAfATgjAWIgxAdQgpAagHACQgNAGgHgEQgIgEAAgMIAAgxQAAgJAEgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAXQAAAKAJgFIBBgkQAHgEgCgFQgCgFgIgEQhpg6gSgLQgGgDgFACQgGACgBAIIAACJQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFAKACIgXANIgVALQgIADgGAAIgEgBg");
	this.shape_18.setTransform(11.6536,15.7229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhfB5QgHAAgEgIQgDgGAAgJIAAgMIAAhhIAAhXQABgOAKgGQAKgGAPAIICoBhQAgATgkAXIgxAdQgqAagHACQgNAGgIgEQgHgEAAgMIAAgyQAAgJADgEQADgDAGgBQAGAAAEADQAFAFAAAJIAAAXQAAALAJgFIBCglQAHgEgCgFQgCgFgIgEQhrg7gSgLQgGgDgFACQgHACAAAIIAACLQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFALACIgYANIgVALQgJAEgGAAIgEgBg");
	this.shape_19.setTransform(11.6585,15.7274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(3));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.776)").s().p("AhRBpQgHgBgDgGQgDgGAAgHIAAgLIABhTIAAhLQABgNAIgEQAJgGANAIICPBUQANAHAAAIQAAAJgPAKIiQBTQgIADgFAAIgDAAg");
	this.shape_20.setTransform(11.65,15.6948);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E5E8").s().p("AhSBpQgHAAgDgHQgCgFAAgIIAAgLIAAhTIAAhMQABgNAIgEQAJgGANAIICRBUQANAIAAAIQAAAJgQAKIiMBSQgNAFgGAAIgCgBg");
	this.shape_21.setTransform(11.625,15.7549);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C6CAD1").s().p("AhTBqQgHAAgDgHQgCgFAAgIIAAgLIAAhVIAAhMQABgMAJgFQAIgGAOAIICSBVQANAHAAAJQAAAJgQALIiKBPQgRAHgGAAIgCAAg");
	this.shape_22.setTransform(11.6,15.8165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AAB0BB").s().p("AhUBrQgGAAgDgHQgDgGAAgHIAAgMIABhVIAAhMQABgNAIgFQAJgFANAHICUBWQANAHAAAJQAAAKgQAKIiHBOQgWAJgGAAIgCAAg");
	this.shape_23.setTransform(11.575,15.8787);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8E95A4").s().p("AhVBsQgGAAgDgHQgDgGAAgIIAAgLIABhWIAAhNQABgNAIgFQAJgFAOAIICUBWQAOAHAAAJQAAAKgRAKIiDBNQgbALgGAAIgCAAg");
	this.shape_24.setTransform(11.55,15.9412);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#717B8D").s().p("AhVBtQgHgBgDgHQgDgFAAgIIAAgLIABhXIAAhOQABgNAIgEQAJgGAOAIICWBXQAOAHAAAJQAAAKgRAKIiBBLQgeAOgHAAIgBAAg");
	this.shape_25.setTransform(11.525,16.0039);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#556076").s().p("AhWBuQgHgBgDgHQgDgFAAgIIAAgMIABhXIAAhOQABgNAIgFQAKgGAOAIICXBYQAOAHAAAJQAAAKgRAKIh+BKQgjAQgHAAIgBAAg");
	this.shape_26.setTransform(11.5,16.0667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#394660").s().p("AhXBuQgHAAgDgHQgDgGAAgHIAAgMIABhYIAAhPQABgNAJgFQAJgGAOAIICZBZQAOAHAAAJQAAAKgSALIh6BIQgoARgHAAIgBAAg");
	this.shape_27.setTransform(11.475,16.1295);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C2B49").s().p("AhXBvQgHAAgDgHQgDgGAAgIIAAgMIABhYIAAhPQABgOAIgFQAJgGAPAJICZBZQAOAHAAAJQAAAKgRALIh3BGQgtAUgHAAIAAAAg");
	this.shape_28.setTransform(11.45,16.1924);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#001132").s().p("AhYBwQgHAAgDgIQgDgFAAgIIAAgMIABhZIAAhQQABgOAIgFQAKgGAOAJICbBZQAOAIAAAJQAAAKgRALIh1BFQgxAWgHAAIAAAAg");
	this.shape_29.setTransform(11.425,16.2554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(3));

	// Layer 2
	this.instance = new lib.Symbol3copy6();
	this.instance.parent = this;
	this.instance.setTransform(-35.4,16.35,1.0862,0.8895,0,0,0,-5.7,1.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:-5.6,scaleX:1.2428,scaleY:1.2428,x:-41.6,y:16.15,alpha:1},6).wait(3));

	// Layer 3
	this.instance_1 = new lib.Symbol2copy4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.1,16,0.7854,0.7854,0,0,0,25.4,7.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8894,scaleY:0.8894,x:-38.9,y:15.95,alpha:1},9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,3.6,107.9,24.299999999999997);


(lib.Symbol10copy4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAKQgFgEAAgGQAAgEAFgEQADgFAFAAQAFAAAFAFQADAEAAAEQAAAGgDAEQgFAEgFgBQgFABgDgEg");
	this.shape.setTransform(9.55,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(9.5222,13.6722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606060").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(9.4944,13.6444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777777").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(9.4667,13.6167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgJALQgEgFAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(9.4389,13.5889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4A4A4").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(9.4111,13.5611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBBBBB").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_6.setTransform(9.3833,13.5333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(9.3556,13.5056);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8E8").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_8.setTransform(9.3278,13.4778);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(9.3,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(3));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHICSBVQAcAQgfAUIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAg");
	this.shape_10.setTransform(11.6144,15.6868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A4A").s().p("AhUBrQgHAAgDgHQgDgFAAgIIAAgLIABhWIAAhNQAAgMAJgGQAJgFAOAHICUBWQAdARggAUIgsAaQglAXgGACQgMAFgHgEQgGgDAAgLIAAgsQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAVQAAAJAIgEIA7ghQAGgDgCgEQgCgFgHgEQhfg0gQgKQgFgDgFACQgFACgBAHIAAB8QAAAIAFAEQAEADAHgEIAMgHQAAAHAEAFQADAFAJABIgVAMIgSAKQgIADgFAAIgEgBg");
	this.shape_11.setTransform(11.6193,15.6913);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606060").s().p("AhVBtQgHAAgEgHQgCgGAAgIIAAgLIAAhXIAAhOQABgNAJgFQAJgFAOAGICXBYQAcARggAUIgsAbQgmAXgGACQgMAGgHgFQgHgDAAgLIAAgsQAAgJADgDQADgDAGAAQAFAAADACQAFAEAAAJIAAAUQAAAKAIgFIA8ghQAGgDgCgEQgCgGgHgDQhgg1gQgKQgGgDgFACQgFACgBAHIAAB+QAAAIAFAEQAEAEAIgFIALgHQAAAHAFAGQADAEAJACIgWAMIgSAJQgIADgGABIgDgBg");
	this.shape_12.setTransform(11.6242,15.6958);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777777").s().p("AhXBvQgGgBgEgHQgDgFAAgIIAAgMIABhYIAAhQQAAgMAJgGQAKgFAOAHICZBZQAdARggAVIguAbQgmAXgGACQgMAGgHgEQgHgEAAgLIAAgtQAAgJADgDQADgDAFgBQAGABADACQAFAEAAAJIAAAVQAAAKAIgFIA9giQAGgDgCgFQgCgFgHgDQhig2gQgKQgGgDgFACQgGACAAAHIAAB/QAAAKAFADQAEAEAIgFIAMgHQgBAIAFAFQADAEAKACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_13.setTransform(11.6291,15.7003);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("AhYBxQgHgBgEgHQgCgGAAgIIAAgLIAAhaIAAhRQABgNAJgGQAJgFAPAHICbBbQAeARghAVIguAcQgnAXgHACQgMAGgHgEQgHgEAAgLIAAguQAAgIAEgEQADgDAFgBQAFAAAEADQAEAFAAAIIAAAVQAAALAJgFIA+giQAGgEgCgFQgCgFgIgDQhjg3gQgKQgGgDgFACQgGACAAAHIAACBQAAAKAEADQAFAEAIgFIAMgHQgBAIAFAFQADAFAKACIgWAMIgUAKQgHADgGAAIgEAAg");
	this.shape_14.setTransform(11.634,15.7048);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A4A4").s().p("AhZByQgHAAgEgHQgDgGAAgIIAAgMIABhbIAAhSQAAgNAJgGQAKgGAPAHICeBcQAeASgiAVIgvAcQgnAYgHACQgMAGgHgEQgHgEAAgLIAAgvQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAAKAJgFIA/giQAGgEgCgFQgCgFgIgDQhkg4gRgKQgGgDgFABQgGACAAAIIAACDQAAAKAEAEQAFADAIgEIAMgIQAAAIAFAFQADAFAKACIgXAMIgUALQgIADgFAAIgEgBg");
	this.shape_15.setTransform(11.6389,15.7093);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBBBBB").s().p("AhbB0QgHAAgEgIQgCgGAAgIIAAgMIAAhcIAAhUQABgNAJgGQAKgFAPAHICgBdQAfASgiAWIgwAcQgoAYgHACQgMAHgHgFQgIgEAAgLIAAgvQAAgJAEgEQADgDAFgBQAGAAAEADQAEAFAAAJIAAAWQAAAKAJgFIBAgjQAGgEgCgFQgCgFgIgDQhmg5gRgKQgGgEgFACQgGACgBAIIAACFQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQADAEAKACIgXANIgUAKQgIADgGAAIgEAAg");
	this.shape_16.setTransform(11.6438,15.7138);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D2D2").s().p("AhcB2QgHgBgEgHQgDgGAAgJIAAgMIABhdIAAhVQAAgOAKgGQAJgFAQAHICiBfQAfASgiAWIgwAdQgpAYgHACQgNAHgHgFQgHgEAAgLIAAgwQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAWQAAALAJgGIBBgjQAGgEgCgFQgCgFgIgDQhog6gRgKQgGgEgFACQgGACgBAIIAACHQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQAEAFAKACIgYAMIgUALQgIADgGAAIgEAAg");
	this.shape_17.setTransform(11.6487,15.7184);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8E8E8").s().p("AhdB3QgIAAgEgHQgDgHAAgIIAAgNIABhfIAAhVQAAgOAKgHQAKgFAPAHICmBgQAfATgjAWIgxAdQgpAagHACQgNAGgHgEQgIgEAAgMIAAgxQAAgJAEgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAXQAAAKAJgFIBBgkQAHgEgCgFQgCgFgIgEQhpg6gSgLQgGgDgFACQgGACgBAIIAACJQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFAKACIgXANIgVALQgIADgGAAIgEgBg");
	this.shape_18.setTransform(11.6536,15.7229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhfB5QgHAAgEgIQgDgGAAgJIAAgMIAAhhIAAhXQABgOAKgGQAKgGAPAIICoBhQAgATgkAXIgxAdQgqAagHACQgNAGgIgEQgHgEAAgMIAAgyQAAgJADgEQADgDAGgBQAGAAAEADQAFAFAAAJIAAAXQAAALAJgFIBCglQAHgEgCgFQgCgFgIgEQhrg7gSgLQgGgDgFACQgHACAAAIIAACLQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFALACIgYANIgVALQgJAEgGAAIgEgBg");
	this.shape_19.setTransform(11.6585,15.7274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(3));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.776)").s().p("AhRBpQgHgBgDgGQgDgGAAgHIAAgLIABhTIAAhLQABgNAIgEQAJgGANAIICPBUQANAHAAAIQAAAJgPAKIiQBTQgIADgFAAIgDAAg");
	this.shape_20.setTransform(11.65,15.6948);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E5E8").s().p("AhSBpQgHAAgDgHQgCgFAAgIIAAgLIAAhTIAAhMQABgNAIgEQAJgGANAIICRBUQANAIAAAIQAAAJgQAKIiMBSQgNAFgGAAIgCgBg");
	this.shape_21.setTransform(11.625,15.7549);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C6CAD1").s().p("AhTBqQgHAAgDgHQgCgFAAgIIAAgLIAAhVIAAhMQABgMAJgFQAIgGAOAIICSBVQANAHAAAJQAAAJgQALIiKBPQgRAHgGAAIgCAAg");
	this.shape_22.setTransform(11.6,15.8165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AAB0BB").s().p("AhUBrQgGAAgDgHQgDgGAAgHIAAgMIABhVIAAhMQABgNAIgFQAJgFANAHICUBWQANAHAAAJQAAAKgQAKIiHBOQgWAJgGAAIgCAAg");
	this.shape_23.setTransform(11.575,15.8787);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8E95A4").s().p("AhVBsQgGAAgDgHQgDgGAAgIIAAgLIABhWIAAhNQABgNAIgFQAJgFAOAIICUBWQAOAHAAAJQAAAKgRAKIiDBNQgbALgGAAIgCAAg");
	this.shape_24.setTransform(11.55,15.9412);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#717B8D").s().p("AhVBtQgHgBgDgHQgDgFAAgIIAAgLIABhXIAAhOQABgNAIgEQAJgGAOAIICWBXQAOAHAAAJQAAAKgRAKIiBBLQgeAOgHAAIgBAAg");
	this.shape_25.setTransform(11.525,16.0039);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#556076").s().p("AhWBuQgHgBgDgHQgDgFAAgIIAAgMIABhXIAAhOQABgNAIgFQAKgGAOAIICXBYQAOAHAAAJQAAAKgRAKIh+BKQgjAQgHAAIgBAAg");
	this.shape_26.setTransform(11.5,16.0667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#394660").s().p("AhXBuQgHAAgDgHQgDgGAAgHIAAgMIABhYIAAhPQABgNAJgFQAJgGAOAIICZBZQAOAHAAAJQAAAKgSALIh6BIQgoARgHAAIgBAAg");
	this.shape_27.setTransform(11.475,16.1295);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C2B49").s().p("AhXBvQgHAAgDgHQgDgGAAgIIAAgMIABhYIAAhPQABgOAIgFQAJgGAPAJICZBZQAOAHAAAJQAAAKgRALIh3BGQgtAUgHAAIAAAAg");
	this.shape_28.setTransform(11.45,16.1924);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#001132").s().p("AhYBwQgHAAgDgIQgDgFAAgIIAAgMIABhZIAAhQQABgOAIgFQAKgGAOAJICbBZQAOAIAAAJQAAAKgRALIh1BFQgxAWgHAAIAAAAg");
	this.shape_29.setTransform(11.425,16.2554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(3));

	// Layer 2
	this.instance = new lib.Symbol3copy3();
	this.instance.parent = this;
	this.instance.setTransform(-35.4,16.35,1.0862,0.8895,0,0,0,-5.7,1.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:-5.6,scaleX:1.2428,scaleY:1.2428,x:-41.6,y:16.15,alpha:1},6).wait(3));

	// Layer 3
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.1,16,0.7854,0.7854,0,0,0,25.4,7.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8894,scaleY:0.8894,x:-38.9,y:15.95,alpha:1},9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,3.6,107.9,24.299999999999997);


(lib.NEWBUTTONcopy10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10copy20();
	this.instance.parent = this;
	this.instance.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.instance_1 = new lib.Symbol10copy19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlVCNQgbAAAAgdIAAjfQAAgdAbAAIKrAAQAbAAAAAdIAADfQAAAdgbAAg");
	this.shape.setTransform(48.725,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,6.8,73.69999999999999,28.3);


(lib.NEWBUTTONcopy7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10copy14();
	this.instance.parent = this;
	this.instance.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.instance_1 = new lib.Symbol10copy13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXB2QgMAAAAgZIAAi5QAAgZAMAAIEuAAQAMAAAAAZIAAC5QAAAZgMAAg");
	this.shape.setTransform(68.65,21.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,9.5,100.4,23.6);


(lib.NEWBUTTONcopy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10copy10();
	this.instance.parent = this;
	this.instance.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.instance_1 = new lib.Symbol10copy9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmRCNQggAAABgdIAAjfQgBgdAgAAIMjAAQAfAAAAAdIAADfQAAAdgfAAg");
	this.shape.setTransform(42.25,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,6.8,86.69999999999999,28.3);


(lib.NEWBUTTONcopy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10copy8();
	this.instance.parent = this;
	this.instance.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.instance_1 = new lib.Symbol10copy4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.85,17.45,1,1,0,0,0,12.3,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXB2QgMAAAAgZIAAi5QAAgZAMAAIEuAAQAMAAAAAZIAAC5QAAAZgMAAg");
	this.shape.setTransform(68.65,21.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,9.5,100.4,23.6);


(lib.ctaWhite_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer_1
	this.instance = new lib.ctaIn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({x:15.3},5,cjs.Ease.get(1)).to({x:0},6,cjs.Ease.get(1)).to({x:15.3},5,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-15.6,111.3,31.299999999999997);


(lib.ctaBlack_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer_1
	this.instance = new lib.ctaBlackIn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({x:24.4},5).to({x:0},6).to({x:24.4},6).to({x:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-23.5,168.4,47);


(lib.btnUp = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{nonActive:10});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.instance = new lib.btnDot();
	this.instance.parent = this;
	this.instance.setTransform(4.7,-1.35,1.957,1.957,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0,scaleX:0.3365,scaleY:0.3365,x:4,y:-1},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-22.3,42.5,42.400000000000006);


(lib.btnOver = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer_1
	this.instance = new lib.btnDot();
	this.instance.parent = this;
	this.instance.setTransform(4.3,-1.2,0.9532,0.9532,0,0,0,0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:-0.1,scaleX:1.957,scaleY:1.957,x:4.7,y:-1.35},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-22.3,42.5,42.400000000000006);


(lib.btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btnUp();
	this.instance.parent = this;
	this.instance.setTransform(-0.85,-0.55,1,1,0,0,0,3.1,-3.6);

	this.instance_1 = new lib.btnOver();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.85,-0.55,1,1,0,0,0,3.1,-3.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AiaCbQhAhAAAhbQAAhaBAhBQBAhABaABQBbgBBABAQBABBAABaQAABbhABAQhABBhbAAQhaAAhAhBg");
	this.shape.setTransform(0.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-20.3,43.9,43.900000000000006);


(lib.heroOpAnim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{op1:28,op2:38,op3:48});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		op1Activ = true;
		op2Activ = false;
		op3Activ = false;
	}
	this.frame_37 = function() {
		this.stop();
		op1Activ = true;
		op2Activ = false;
		op3Activ = false;
	}
	this.frame_47 = function() {
		this.stop();
		op2Activ = true;
		op1Activ = false;
		op3Activ = false;
	}
	this.frame_57 = function() {
		this.stop();
		op1Activ = false;
		op2Activ = false;
		op3Activ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(22).call(this.frame_37).wait(10).call(this.frame_47).wait(10).call(this.frame_57).wait(66));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSBUQgkgjAAgxQAAgwAkgjQAigiAwgBQAxABAjAiQAjAjgBAwQABAxgjAjQgjAigxAAQgwAAgigig");
	this.shape.setTransform(240.1,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBTQgkgiAAgxQAAgwAkgjQAigiAwgBQAxABAjAiQAjAjgBAwQABAxgjAiQgjAjgxAAQgwAAgigjg");
	this.shape_1.setTransform(240.1,130.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:16}}]}).to({state:[]},16).to({state:[{t:this.shape,p:{y:16}}]},12).to({state:[{t:this.shape,p:{y:72.7}}]},10).to({state:[{t:this.shape_1}]},10).to({state:[]},10).wait(65));

	// Layer_3
	this.instance = new lib.btnOutLine();
	this.instance.parent = this;
	this.instance.setTransform(240.45,15.85,0.6212,0.6212,0,0,0,0.5,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({regX:0.3,regY:0.1,scaleX:0.9998,scaleY:0.9998,x:240.4,y:15.9},7).wait(3).to({regX:0.4,regY:0.2,scaleX:0.6208,scaleY:0.6208,x:240.3,y:72.65},0).to({scaleX:1,scaleY:1,x:240.5,y:72.8},7).wait(3).to({scaleX:0.6208,scaleY:0.6208,x:240.35,y:130.2},0).to({regY:0.1,scaleX:1,scaleY:1,x:240.5,y:130.25},7).to({_off:true},3).wait(65));

	// btnOutLine
	this.instance_1 = new lib.btnOutLine();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.7,130.25,0.6207,0.6207,0,0,0,0.3,0.1);

	this.instance_2 = new lib.btnOutLine();
	this.instance_2.parent = this;
	this.instance_2.setTransform(239.9,72.75,0.6207,0.6207,0,0,0,0.3,0.1);

	this.instance_3 = new lib.btnOutLine();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.35,15.9,0.9998,0.9998,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:239.9,regY:0.1,scaleX:0.6207,scaleY:0.6207,y:72.75}},{t:this.instance_1,p:{x:239.7,regX:0.3,regY:0.1,scaleX:0.6207,scaleY:0.6207,y:130.25}}]}).to({state:[]},16).to({state:[{t:this.instance_2,p:{x:240.3,regY:0.1,scaleX:0.6207,scaleY:0.6207,y:72.75}},{t:this.instance_1,p:{x:240.3,regX:0.3,regY:0.1,scaleX:0.6207,scaleY:0.6207,y:130.25}}]},12).to({state:[{t:this.instance_2,p:{x:240.3,regY:0.2,scaleX:0.62,scaleY:0.62,y:15.9}},{t:this.instance_1,p:{x:240.3,regX:0.3,regY:0.1,scaleX:0.6207,scaleY:0.6207,y:130.25}}]},10).to({state:[{t:this.instance_2,p:{x:240.3,regY:0.2,scaleX:0.62,scaleY:0.62,y:15.9}},{t:this.instance_1,p:{x:240.35,regX:0.4,regY:0.2,scaleX:0.62,scaleY:0.62,y:72.75}}]},10).to({state:[]},10).wait(65));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1GAcuMAAAg5bMBqNAAAMAAAA5bg");
	mask.setTransform(-24.9,11.85);

	// cta
	this.instance_4 = new lib.ctaBlack_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-302.8,138.35,0.678,0.678,0,0,0,-0.2,0.1);

	this.instance_5 = new lib.ctaWhite_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-303.2,120.1);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[]},16).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},10).to({state:[]},10).wait(65));

	// txt
	this.instance_6 = new lib.txtOp1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-212.25,64.35,0.6666,0.6666,0,0,0,-0.1,0);

	this.instance_7 = new lib.txtOp2_1_5x();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-352.05,-23.85,0.6666,0.6666);

	this.instance_8 = new lib.txtOp3_1_5x();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-506.3,-176.75,0.6666,0.6666);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[]},16).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).to({state:[]},10).wait(65));

	// logoLr
	this.instance_9 = new lib.logoLrBlack_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-254.25,-143.25,0.6666,0.6666,0,0,0,0,-0.1);

	this.instance_10 = new lib.logoLrWhite_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-254.7,-142.25,0.6666,0.6666,0,0,0,-0.1,-0.1);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[]},16).to({state:[{t:this.instance_9}]},12).to({state:[{t:this.instance_10}]},10).to({state:[]},20).wait(65));

	// line
	this.instance_11 = new lib.lineWhite();
	this.instance_11.parent = this;
	this.instance_11.setTransform(239.7,-374.65);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:13.85},15,cjs.Ease.get(1)).to({_off:true},97).wait(11));

	// heroOp
	this.instance_12 = new lib.heroOp1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-24.95,13.75,0.932,0.932);

	this.instance_13 = new lib.heroOp2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1.7,-3.4);
	this.instance_13._off = true;

	this.instance_14 = new lib.heroOp3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0.45,0.85);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},16).wait(12).to({_off:false,scaleX:1,scaleY:1,x:0,y:0},0).to({scaleX:0.932,scaleY:0.932,x:-24.95,y:13.75},9,cjs.Ease.get(1)).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(38).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.9341,scaleY:0.9341,x:-24.25,y:11.65},9).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({scaleX:0.9394,scaleY:0.9394,x:-21.8,y:13.1},9).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.7,-176.4,679.7,380.5);


(lib.Symbol32423copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function isMobile() {
				var a = navigator.userAgent || navigator.vendor || window.opera;
				return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
			};
		
		
		if (isMobile()) {
			// Mobile
			this.gotoAndPlay(13)
			
		}
	}
	this.frame_8 = function() {
		this.stop()
	}
	this.frame_16 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(1));

	// Layer 2
	this.iBtn2 = new lib.NEWBUTTONcopy7();
	this.iBtn2.name = "iBtn2";
	this.iBtn2.parent = this;
	this.iBtn2.setTransform(-9.3,23.9,0.4732,0.4732,0,0,0,67.8,20.1);
	this.iBtn2.alpha = 0;
	this.iBtn2._off = true;
	new cjs.ButtonHelper(this.iBtn2, 0, 1, 2, false, new lib.NEWBUTTONcopy7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.iBtn2).wait(1).to({_off:false},0).to({scaleX:0.6033,scaleY:0.6033,x:-9.4,alpha:1},5).wait(3).to({regX:68,regY:20.4,scaleX:0.535,scaleY:0.535,x:-23.75,y:22.25,alpha:0},0).to({regY:20.3,scaleX:0.7259,scaleY:0.7259,x:-23.85,y:22.2,alpha:1},5).wait(3));

	// Layer 1
	this.CloseBtn2 = new lib.NEWBUTTONcopy10();
	this.CloseBtn2.name = "CloseBtn2";
	this.CloseBtn2.parent = this;
	this.CloseBtn2.setTransform(18.9,24.65,0.4381,0.4381,0,0,0,47.7,21.8);
	this.CloseBtn2.alpha = 0;
	this.CloseBtn2._off = true;
	new cjs.ButtonHelper(this.CloseBtn2, 0, 1, 2, false, new lib.NEWBUTTONcopy10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.CloseBtn2).wait(3).to({_off:false},0).to({regX:47.8,scaleX:0.5929,scaleY:0.5929,y:24.7,alpha:1},5).to({_off:true},1).wait(3).to({_off:false,regX:47.9,scaleX:0.6118,scaleY:0.6118,x:13.5,y:22.85,alpha:0},0).to({regX:48,regY:21.7,scaleX:0.7647,scaleY:0.7647,x:13.55,y:22.8,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,0,121.9,36.7);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":7,close:24});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop()
	}
	this.frame_37 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(12).call(this.frame_18).wait(19).call(this.frame_37).wait(1));

	// Layer 1
	this.Btns2 = new lib.Symbol32423copy2();
	this.Btns2.name = "Btns2";
	this.Btns2.parent = this;
	this.Btns2.setTransform(599.85,186.3,2.5577,2.5577,0,0,0,49.5,27.5);
	this.Btns2.alpha = 0;
	this.Btns2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Btns2).wait(7).to({_off:false},0).to({alpha:1},11).wait(6).to({alpha:0},12).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,569.3,193.4);


(lib.Symbol28copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function isMobile() {
			var a = navigator.userAgent || navigator.vendor || window.opera;
			return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
		};
		
		
		if (isMobile()) {
			// Mobile
			this.gotoAndPlay(13)
		
		}
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_23 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(1));

	// Layer 4
	this.iBtn = new lib.NEWBUTTONcopy3();
	this.iBtn.name = "iBtn";
	this.iBtn.parent = this;
	this.iBtn.setTransform(29,9.55,0.4281,0.4281,0,0,0,67.8,20.1);
	this.iBtn.alpha = 0;
	this.iBtn._off = true;
	new cjs.ButtonHelper(this.iBtn, 0, 1, 2, false, new lib.NEWBUTTONcopy3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.iBtn).wait(1).to({_off:false},0).to({regX:67.7,regY:19.9,scaleX:0.5508,scaleY:0.5508,alpha:1},6).wait(5).to({regX:68,regY:20.3,scaleX:0.6902,scaleY:0.6902,x:12.35,y:13,alpha:0},0).to({regX:68.1,regY:20.2,scaleX:0.9364,scaleY:0.9364,x:12.3,y:12.9,alpha:1},7).wait(5));

	// Layer 1
	this.CloseBtn = new lib.NEWBUTTONcopy5();
	this.CloseBtn.name = "CloseBtn";
	this.CloseBtn.parent = this;
	this.CloseBtn.setTransform(46.05,9.85,0.5151,0.5151,0,0,0,69.1,20.7);
	this.CloseBtn.alpha = 0;
	this.CloseBtn._off = true;
	new cjs.ButtonHelper(this.CloseBtn, 0, 1, 2, false, new lib.NEWBUTTONcopy5(), 3);

	this.closeBtn = new lib.NEWBUTTONcopy5();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(46.15,9.9,0.5748,0.5748,0,0,0,69.2,20.6);
	this.closeBtn.alpha = 0.8789;
	this.closeBtn._off = true;
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.NEWBUTTONcopy5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.CloseBtn).wait(3).to({_off:false},0).to({_off:true,regX:69.2,regY:20.6,scaleX:0.5748,scaleY:0.5748,x:46.15,y:9.9,alpha:0.8789},7).to({_off:false,regX:69.1,regY:20.8,scaleX:0.5834,scaleY:0.5834,x:46.05,alpha:1},1).to({_off:true},1).wait(3).to({_off:false,regX:68.9,scaleX:0.7893,scaleY:0.7893,x:42.25,y:13.65,alpha:0},0).to({regX:69,scaleX:0.949,scaleY:0.949,y:13.6,alpha:1},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(3).to({_off:false},7).to({_off:true,regX:69.1,regY:20.8,scaleX:0.5834,scaleY:0.5834,x:46.05,alpha:1},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,0,118,25);


(lib.wrapAnim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"close":112});

	// timeline functions:
	this.frame_0 = function() {
		_this = this
		
		this.btn1.addEventListener('mouseover', op1);
		this.btn2.addEventListener('mouseover', op2);
		this.btn3.addEventListener('mouseover', op3);
		var tHandle = setTimeout(remAnim,7000)
		
		function op1(){
			if(!op1Activ){
			clearTimeout(tHandle);
			_this.heroOpAnim.gotoAndPlay('op1')
			tHandle = setTimeout(remAnim,5000)
			}
		
				
			
		};
		function op2(){
			if(!op2Activ){
			clearTimeout(tHandle);
			_this.heroOpAnim.gotoAndPlay('op2')
			tHandle = setTimeout(remAnim,5000)
			}
		}
		function op3(){
			if(!op3Activ){
			clearTimeout(tHandle);
			_this.heroOpAnim.gotoAndPlay('op3')
			tHandle = setTimeout(remAnim,5000)
			}
		}
		
		
		function remAnim(){
			_this.gotoAndPlay('close');
			_this.parent.rem.gotoAndPlay('open');
			_this.parent.mainBtns.gotoAndPlay('close');
			_this.parent.mainBtns2.gotoAndPlay('open');
			console.log('play rem');
		}
	}
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(111).call(this.frame_111).wait(12));

	// hand
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(889.95,371.25,0.4629,0.4629,0,0,0,23.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},112).wait(11));

	// btns
	this.btn3 = new lib.btn();
	this.btn3.name = "btn3";
	this.btn3.parent = this;
	this.btn3.setTransform(863.3,464.9);
	this.btn3.alpha = 0;
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.btn(), 3);

	this.btn2 = new lib.btn();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(863.3,407.3);
	this.btn2.alpha = 0;
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn(), 3);

	this.btn1 = new lib.btn();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(863.3,350.5);
	this.btn1.alpha = 0;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1,p:{alpha:0}},{t:this.btn2,p:{alpha:0}},{t:this.btn3,p:{alpha:0}}]}).to({state:[{t:this.btn1,p:{alpha:1}},{t:this.btn2,p:{alpha:1}},{t:this.btn3,p:{alpha:1}}]},11).to({state:[]},101).wait(11));

	// heroOpAnim
	this.heroOpAnim = new lib.heroOpAnim();
	this.heroOpAnim.name = "heroOpAnim";
	this.heroOpAnim.parent = this;
	this.heroOpAnim.setTransform(623.6,336.6);

	this.timeline.addTween(cjs.Tween.get(this.heroOpAnim).to({_off:true},112).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-228.3,940.3,766.5);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"close":270});

	// timeline functions:
	this.frame_269 = function() {
		this.stop();
	}
	this.frame_284 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(269).call(this.frame_269).wait(15).call(this.frame_284).wait(1));

	// Layer 1
	this.Btns = new lib.Symbol28copy2();
	this.Btns.name = "Btns";
	this.Btns.parent = this;
	this.Btns.setTransform(597.1,-114,1.834,1.834,0,0,0,59.8,-0.4);
	this.Btns.alpha = 0;
	this.Btns._off = true;

	this.btns = new lib.Symbol28copy2();
	this.btns.name = "btns";
	this.btns.parent = this;
	this.btns.setTransform(597.1,-114,1.834,1.834,0,0,0,59.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Btns}]},9).to({state:[{t:this.btns}]},8).to({state:[{t:this.Btns}]},253).to({state:[{t:this.Btns}]},12).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.Btns).wait(9).to({_off:false},0).to({_off:true,alpha:1},8).wait(253).to({_off:false},0).to({alpha:0},12).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-106.6,583,106.6);


// stage content:
(lib.index_new = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mainBtns.btns.CloseBtn.addEventListener("click", fl_closeAd.bind(this));
				
				function fl_closeAd() {
				
					function closeAd() {
						var msg = {
							eventType: "closeAd"
						};
				
						top.postMessage(msg, "*");
					}
				
					closeAd();
				}
				
				
			
		this.mainBtns2.Btns2.CloseBtn2.addEventListener("click", fl_closeAd.bind(this));
				
				function fl_closeAd() {
				
					function closeAd() {
						var msg = {
							eventType: "closeAd"
						};
				
						top.postMessage(msg, "*");
					}
				
					closeAd();
				}
				
				
				
				
				
				
		this.mainBtns.btns.iBtn.addEventListener("click", fl_ClickToGoToWebPage);
				
				function fl_ClickToGoToWebPage() {
					window.open("http://recognified.com/privacy.html", "_blank");
				}
				
		this.mainBtns2.Btns2.iBtn2.addEventListener("click", fl_ClickToGoToWebPage);
				
				function fl_ClickToGoToWebPage() {
					window.open("http://recognified.com/privacy.html", "_blank");
				}
	}
	this.frame_153 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(153).call(this.frame_153).wait(2));

	// cls_btn
	this.mainBtns2 = new lib.Symbol54();
	this.mainBtns2.name = "mainBtns2";
	this.mainBtns2.parent = this;
	this.mainBtns2.setTransform(655.75,330.8,0.9308,0.9308);

	this.timeline.addTween(cjs.Tween.get(this.mainBtns2).wait(155));

	// cut line
	this.rec = new lib.Symbol4copy3();
	this.rec.name = "rec";
	this.rec.parent = this;
	this.rec.setTransform(1258.05,576.85,0.6635,2.4736,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(155));

	// rem
	this.rem = new lib.rem();
	this.rem.name = "rem";
	this.rem.parent = this;
	this.rem.setTransform(600.15,610.9);

	this.timeline.addTween(cjs.Tween.get(this.rem).wait(155));

	// wrapAnim
	this.instance = new lib.wrapAnim();
	this.instance.parent = this;
	this.instance.setTransform(-0.25,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// Close_btn
	this.mainBtns = new lib.Symbol46();
	this.mainBtns.name = "mainBtns";
	this.mainBtns.parent = this;
	this.mainBtns.setTransform(1148.4,24.7,1,1,0,0,0,544.5,-97.2);

	this.timeline.addTween(cjs.Tween.get(this.mainBtns).wait(155));

	// button
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(601.95,353.15,1,1,0,0,0,613.2,364.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(598.1,121.8,693.1,580.3000000000001);
// library properties:
lib.properties = {
	id: '168476A1D4FC144EA000EC7EDD1802DC',
	width: 1200,
	height: 700,
	fps: 24,
	color: "#006666",
	opacity: 0.00,
	manifest: [
		{src:"images/ctaBlack.png", id:"ctaBlack"},
		{src:"images/ctaWhite.png", id:"ctaWhite"},
		{src:"images/decoyOp1.jpg", id:"decoyOp1"},
		{src:"images/HeroOp1.jpg", id:"HeroOp1"},
		{src:"images/HeroOp2.jpg", id:"HeroOp2"},
		{src:"images/HeroOp3.jpg", id:"HeroOp3"},
		{src:"images/logoAdobeRed.png", id:"logoAdobeRed"},
		{src:"images/logoLrBlack.png", id:"logoLrBlack"},
		{src:"images/logoLrWhite.png", id:"logoLrWhite"},
		{src:"images/middlesOp1_1_5x.png", id:"middlesOp1_1_5x"},
		{src:"images/txtOp1_1_5x.png", id:"txtOp1_1_5x"},
		{src:"images/txtOp2_1_5x.png", id:"txtOp2_1_5x"},
		{src:"images/txtOp3_1_5x.png", id:"txtOp3_1_5x"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['168476A1D4FC144EA000EC7EDD1802DC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;