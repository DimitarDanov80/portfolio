(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.A1 = function() {
	this.initialize(img.A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,174);


(lib.A1Sign_15_x = function() {
	this.initialize(img.A1Sign_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.A1Txt_15_x = function() {
	this.initialize(img.A1Txt_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,165);


(lib.A2 = function() {
	this.initialize(img.A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,174);


(lib.A2sign_15_x = function() {
	this.initialize(img.A2sign_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.A2Txt_15_x = function() {
	this.initialize(img.A2Txt_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,117);


(lib.A3 = function() {
	this.initialize(img.A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,174);


(lib.A3Sign_15_x = function() {
	this.initialize(img.A3Sign_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.A3Txt_15_x = function() {
	this.initialize(img.A3Txt_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,153);


(lib.doker = function() {
	this.initialize(img.doker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,415);


(lib.hl1_5x = function() {
	this.initialize(img.hl1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,578,121);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,176);


(lib.logo_rem = function() {
	this.initialize(img.logo_rem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,106);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,1731);


(lib.shadowDocker = function() {
	this.initialize(img.shadowDocker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,402);


(lib.txtCta_15_x = function() {
	this.initialize(img.txtCta_15_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,63);// helper functions:

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


(lib.wall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E2E2").s().p("EgdaA3mMAAAhvLMA61AAAMAAABvLg");
	this.shape.setTransform(0.025,-6.1246,1,1.0173);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wall, new cjs.Rectangle(-188.2,-368.1,376.5,724), null);


(lib.Symbol219 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ag3hgIBsBgAA4ADIhoBd");
	this.shape.setTransform(-33.5,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol219, new cjs.Rectangle(-40.1,10,13.3,21.3), null);


(lib.Symbol123copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.A3Txt_15_x();
	this.instance.parent = this;
	this.instance.setTransform(361.1,573.25,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pict
	this.instance_1 = new lib.A3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.55,492.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol123copy, new cjs.Rectangle(67.6,492.9,629.5,182.39999999999998), null);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.A2Txt_15_x();
	this.instance.parent = this;
	this.instance.setTransform(356.8,573.3,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pict
	this.instance_1 = new lib.A2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.95,492.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol123, new cjs.Rectangle(68,492.9,612.8,174), null);


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


(lib.sign3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.instance = new lib.A3Sign_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-38.65,-42.25,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign3, new cjs.Rectangle(-38.6,-42.2,81.30000000000001,81.30000000000001), null);


(lib.sign2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A2sign_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-40.65,-40.65,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign2, new cjs.Rectangle(-40.6,-40.6,81.30000000000001,81.30000000000001), null);


(lib.sign1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1Sign_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-40.25,-41.45,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign1, new cjs.Rectangle(-40.2,-41.4,81.30000000000001,81.3), null);


(lib.shadowDocker_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadowDocker();
	this.instance.parent = this;
	this.instance.setTransform(-54,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadowDocker_1, new cjs.Rectangle(-54,-201,108,402), null);


(lib.remUnder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242424").s().p("EheUAK/IAA19MC8pAAAIAAV9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.remUnder, new cjs.Rectangle(-603.7,-70.3,1207.4,140.6), null);


(lib.product_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.product();
	this.instance.parent = this;
	this.instance.setTransform(-284.5,-865.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(-284.5,-865.5,569,1731), null);


(lib.logoWrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-128.3,-58.65,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoWrap, new cjs.Rectangle(-128.3,-58.6,256.70000000000005,117.30000000000001), null);


(lib.logoRem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_rem();
	this.instance.parent = this;
	this.instance.setTransform(-61.85,-23,0.4341,0.4341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoRem, new cjs.Rectangle(-61.8,-23,123.69999999999999,46), null);


(lib.hlRem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hl
	this.instance = new lib.hl1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-247.65,-20.45,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hlRem, new cjs.Rectangle(-247.6,-20.4,385.29999999999995,80.6), null);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hl
	this.instance = new lib.hl1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-263.65,-20.45,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// blackUnder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242424").s().p("Eg5qAOGIAA8LMBzVAAAIAAcLg");
	this.shape.setTransform(-119.95,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hl, new cjs.Rectangle(-489,-68.7,738.2,180.4), null);


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


(lib.docker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.doker();
	this.instance.parent = this;
	this.instance.setTransform(-61,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.docker, new cjs.Rectangle(-61,-207.5,122,415), null);


(lib.darkGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65A01B").s().p("AqCKDQkLkKAAl5QAAl4ELkKQEKkLF4AAQF5AAEKELQELEKAAF4QAAF5kLEKQkKELl5AAQl4AAkKkLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.darkGreen, new cjs.Rectangle(-90.9,-90.9,181.9,181.9), null);


(lib.ctaBrnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txtCta_1,5_x.png
	this.instance = new lib.txtCta_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-57.95,-23.05,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B928").s().p("ArIGiIAAtDIWRAAIAANDg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaBrnUp, new cjs.Rectangle(-71.2,-41.8,142.5,83.69999999999999), null);


(lib.A1Txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1Txt_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-166,-55,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1Txt, new cjs.Rectangle(-166,-55,332,110), null);


(lib.Symbol218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol219();
	this.instance.parent = this;
	this.instance.setTransform(12.7,14,1,1,0,0,0,12.7,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol218, new cjs.Rectangle(-40.1,10,13.3,21.3), null);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.A1Txt();
	this.instance.parent = this;
	this.instance.setTransform(597.9,492.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pict
	this.instance_1 = new lib.A1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.05,364.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol120, new cjs.Rectangle(147.1,364.7,616.8,182.59999999999997), null);


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
		//this.zCTA.addEventListener("click", urlOpen.bind(this));
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


(lib.Symbol29copy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_5_copy_3
	this.instance = new lib.Symbol218();
	this.instance.parent = this;
	this.instance.setTransform(204.8,4.6,1.6887,1.6887,0,0,0,13.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29copy5, new cjs.Rectangle(114.1,-2.7,22.400000000000006,35.900000000000006), null);


(lib.Symbol29copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_5_copy_3
	this.instance = new lib.Symbol218();
	this.instance.parent = this;
	this.instance.setTransform(204.8,4.6,1.6887,1.6887,0,0,0,13.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:209.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114.1,-2.7,27.200000000000017,36.1);


(lib.Symbol26copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29copy5();
	this.instance.parent = this;
	this.instance.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.instance_1 = new lib.Symbol29copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("Aj5EEIAAoIIHzAAIAAIIg");
	this.shape.setTransform(126,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101,-13.6,50.099999999999994,52.1);


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
	this.instance.setTransform(-7.95,-18.9,1.2327,1.2327,0,0,0,22.3,5.8);
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
	this.instance.setTransform(-7.95,-18.9,1.2327,1.2327,0,0,0,22.3,5.8);
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
	this.instance_1.setTransform(-32.1,16.1,0.7854,0.7854,0,0,0,25.4,7.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8894,scaleY:0.8894,x:-38.9,y:16.05,alpha:1},9).wait(3));

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
	this.instance_1.setTransform(-32.1,16.1,0.7854,0.7854,0,0,0,25.4,7.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8894,scaleY:0.8894,x:-38.9,y:16.05,alpha:1},9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,3.6,107.9,24.299999999999997);


(lib.Symbol3copy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{open:8,close:95});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_77 = function() {
		this.stop()
	}
	this.frame_128 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(74).call(this.frame_77).wait(51).call(this.frame_128).wait(2));

	// sign
	this.instance = new lib.sign2();
	this.instance.parent = this;
	this.instance.setTransform(-722.1,411.7,0.0258,0.0258);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regX:-0.3,regY:0.3,scaleX:1.5271,scaleY:1.5271,x:-724,y:411},6,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-722.1,y:411.7},4,cjs.Ease.quadIn).wait(77).to({scaleX:0.0074,scaleY:0.0074},10).wait(25));

	// pict2
	this.instance_1 = new lib.Symbol123();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(77).to({alpha:0},10).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-785.6,0,785.6,542.7);


(lib.Symbol3copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":96,"close":187});

	// timeline functions:
	this.frame_83 = function() {
		this.stop()
	}
	this.frame_169 = function() {
		this.stop()
	}
	this.frame_220 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(83).call(this.frame_83).wait(86).call(this.frame_169).wait(51).call(this.frame_220).wait(1));

	// sign
	this.instance = new lib.sign1();
	this.instance.parent = this;
	this.instance.setTransform(-697.8,343.1,0.0123,0.0123);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:0.1,scaleX:1.524,scaleY:1.524,y:343.25},14,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,y:343.1},7,cjs.Ease.quadIn).to({_off:true},44).wait(12).to({_off:false,scaleX:0.0123,scaleY:0.0123},0).to({regY:0.1,scaleX:1.524,scaleY:1.524,y:343.25},6,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,y:343.1},4,cjs.Ease.quadIn).wait(81).to({scaleX:0,scaleY:0},10).wait(24));

	// pict1
	this.instance_1 = new lib.Symbol120();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-602.5,481.45,1,1,0,0,0,282.2,547.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({alpha:1},21).to({_off:true},44).wait(12).to({_off:false,alpha:0},0).to({alpha:1},10).wait(81).to({alpha:0},10).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-759.1,0,759.1,481.5);


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


(lib.A3New = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":8,"close":95});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_77 = function() {
		this.stop()
	}
	this.frame_128 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(74).call(this.frame_77).wait(51).call(this.frame_128).wait(2));

	// sign
	this.instance = new lib.sign3();
	this.instance.parent = this;
	this.instance.setTransform(-722.1,411.7,0.0258,0.0258);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regX:-0.3,regY:0.3,scaleX:1.5271,scaleY:1.5271,x:-724,y:411},6,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-722.1,y:411.7},4,cjs.Ease.quadIn).wait(77).to({x:-722.9,y:412.5},0).to({scaleX:0.0061,scaleY:0.0061,x:-722.1,y:411.7},10).wait(25));

	// pict2
	this.instance_1 = new lib.Symbol123copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(77).to({regX:205.5,x:-624.85,alpha:0},10).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-782.5,0,782.5,551.1);


(lib.ctaBrnOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(5));

	// txt
	this.instance = new lib.txtCta_15_x();
	this.instance.parent = this;
	this.instance.setTransform(-57.95,-23.05,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(4));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArIGiIAAtDIWRAAIAANDg");
	mask.setTransform(0,0.025);

	// darkGreen
	this.instance_1 = new lib.darkGreen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.05,2.35,0.0027,0.0027);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// lightGreen
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B928").s().p("ArIGiIAAtDIWRAAIAANDg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},14).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.2,-41.8,142.5,83.69999999999999);


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


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.BTN = new lib.Symbol26copy2();
	this.BTN.name = "BTN";
	this.BTN.parent = this;
	this.BTN.setTransform(1.3,21.8,0.6787,0.6787,0,0,0,183.8,12.6);
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.Symbol26copy2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol104, new cjs.Rectangle(-46,11.4,15.3,24.4), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"close":24});

	// timeline functions:
	this.frame_18 = function() {
		this.stop()
	}
	this.frame_37 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(19).call(this.frame_37).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.iBtn).wait(1).to({_off:false},0).to({regX:67.7,regY:19.9,scaleX:0.5508,scaleY:0.5508,alpha:1},6).wait(5).to({regX:68,regY:20.3,scaleX:0.6902,scaleY:0.6902,x:12.35,y:13,alpha:0},0).to({regX:68.1,scaleX:0.9364,scaleY:0.9364,x:12.3,alpha:1},7).wait(5));

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


(lib.Symbol27copy4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B1 = new lib.Symbol104();
	this.B1.name = "B1";
	this.B1.parent = this;
	this.B1.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B1.alpha = 0;
	this.B1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B1).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.8,92.7,24.400000000000002);


(lib.Symbol27copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B2 = new lib.Symbol104();
	this.B2.name = "B2";
	this.B2.parent = this;
	this.B2.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B2.alpha = 0;
	this.B2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B2).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.8,92.7,24.400000000000002);


(lib.ctaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaBrnUp();
	this.instance.parent = this;

	this.instance_1 = new lib.ctaBrnOver();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("ArcGwIAAtfIW6AAIAANfg");
	this.shape.setTransform(0.05,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-88.6,181.9,181.89999999999998);


(lib.cta = function(mode,startPosition,loop) {
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
		//this.ctaBtn.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ctaBtn
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.parent = this;
	new cjs.ButtonHelper(this.ctaBtn, 0, 1, 2, false, new lib.ctaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-71.2,-41.8,142.5,83.69999999999999), null);


(lib.carousell = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
			_this.food = 1;
			_this.food2 = 1;
		
			_this.butL.B1.BTN.addEventListener("click", fl_MouseClickHandler2.bind(_this));
			_this.butR.B2.BTN.addEventListener("click", fl_MouseClickHandler.bind(_this));
			
			
			var tHandle = setTimeout(fl_MouseClickHandler.bind(_this), 5000);  		// change object carousell after 3000 (3sec) if there is no interaction
		
		function fl_MouseClickHandler2() {
		
			
			
			clearTimeout(tHandle);										// prevent start automatic change
		
		
			if (_this.food == "3") {
				 _this.A3a.gotoAndPlay("close")
				 _this.A2a.gotoAndPlay("open")
				
				
				 _this.food2 = "2";
			 }
			
			if (_this.food == "2") {
				_this.A2a.gotoAndPlay("close")
				_this.A1a.gotoAndPlay("open")
				
				_this.food2 = "1";
			}
			
			if (_this.food == "1") {
				_this.A1a.gotoAndPlay("close")
				_this.A3a.gotoAndPlay("open")
				
				_this.food2 = "3";
			}
			
			_this.food = _this.food2;
			tHandle = setTimeout(fl_MouseClickHandler.bind(_this), 5000);  
		}
			
			
			
			
		
			
		
			function fl_MouseClickHandler() {
				
					clearTimeout(tHandle);										// prevent start automatic change
		
				if (_this.food == "1") {
		
					_this.A1a.gotoAndPlay("close")
					_this.A2a.gotoAndPlay("open")
					
					_this.food2 = "2";
				}
				if (_this.food == "2") {
					_this.A2a.gotoAndPlay("close")
					_this.A3a.gotoAndPlay("open")
					
					_this.food2 = "3";
				}
		
				 if (_this.food == "3") {
					 _this.A3a.gotoAndPlay("close")
					 _this.A1a.gotoAndPlay("open")
					
					 _this.food2 = "1";
				 }
		
				
				
		
		
				_this.food = _this.food2
				tHandle = setTimeout(fl_MouseClickHandler.bind(_this), 5000);    // invocke automatic change of carousell object
			}
			
			this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// butL
	this.butL = new lib.Symbol27copy4();
	this.butL.name = "butL";
	this.butL.parent = this;
	this.butL.setTransform(300.1,406.65,1.2856,1.2856,180,0,0,125.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.butL).wait(2));

	// butR
	this.butR = new lib.Symbol27copy2();
	this.butR.name = "butR";
	this.butR.parent = this;
	this.butR.setTransform(693,403,1.2219,1.2219,0,0,0,125,9);

	this.timeline.addTween(cjs.Tween.get(this.butR).wait(2));

	// A1
	this.A1a = new lib.Symbol3copy();
	this.A1a.name = "A1a";
	this.A1a.parent = this;
	this.A1a.setTransform(520.15,351.05,1,1,0,0,0,-605.6,363.8);

	this.timeline.addTween(cjs.Tween.get(this.A1a).wait(2));

	// A2
	this.A2a = new lib.Symbol3copy5();
	this.A2a.name = "A2a";
	this.A2a.parent = this;
	this.A2a.setTransform(518.3,344.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A2a).wait(2));

	// A3
	this.A3a = new lib.A3New();
	this.A3a.name = "A3a";
	this.A3a.parent = this;
	this.A3a.setTransform(518.3,344.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A3a).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(342,286.2,675.2,182.60000000000002);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"close":270});

	// timeline functions:
	this.frame_284 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(284).call(this.frame_284).wait(1));

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
(lib.index_preview = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(197));

	// carousell
	this.carousell = new lib.carousell();
	this.carousell.name = "carousell";
	this.carousell.parent = this;
	this.carousell.setTransform(517.35,396.95,1,1,0,0,0,524,182.8);
	this.carousell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carousell).wait(168).to({_off:false},0).wait(29));

	// ctaBtn
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(1099,628.8,0.0328,0.0328,0,0,0,-3.1,3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).to({regX:-3,regY:2.4,scaleX:1.1353,scaleY:1.1353,x:1099.1},7,cjs.Ease.get(1)).to({regX:-3.1,scaleX:1,scaleY:1,x:1099},5,cjs.Ease.quadIn).wait(7));

	// hlRem
	this.instance_1 = new lib.hlRem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.9,812.95,0.6503,0.6503,0,0,0,-120,21.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({y:657},10,cjs.Ease.get(1)).wait(19));

	// logoRem
	this.instance_2 = new lib.logoRem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.95,754.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(168).to({_off:false},0).to({y:598.5},10,cjs.Ease.get(1)).wait(19));

	// remUnder
	this.instance_3 = new lib.remUnder();
	this.instance_3.parent = this;
	this.instance_3.setTransform(600.55,788.65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(168).to({_off:false},0).to({y:632.7},10,cjs.Ease.get(1)).wait(19));

	// cls_btn
	this.mainBtns2 = new lib.Symbol54();
	this.mainBtns2.name = "mainBtns2";
	this.mainBtns2.parent = this;
	this.mainBtns2.setTransform(655.75,330.8,0.9308,0.9308);
	this.mainBtns2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mainBtns2).wait(168).to({_off:false},0).wait(29));

	// button2
	this.zCTA = new lib.Symbol30();
	this.zCTA.name = "zCTA";
	this.zCTA.parent = this;
	this.zCTA.setTransform(602.05,587.6,1,0.3521,0,0,0,613.3,364.8);
	this.zCTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zCTA).wait(168).to({_off:false},0).wait(29));

	// cut line
	this.rec = new lib.Symbol4copy3();
	this.rec.name = "rec";
	this.rec.parent = this;
	this.rec.setTransform(1258.05,576.85,0.6635,2.4736,0,0,0,50.1,50);
	this.rec._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(168).to({_off:false},0).wait(29));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_78 = new cjs.Graphics().p("EAH1AksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_79 = new cjs.Graphics().p("EAHsAksMAMegkEMBriAAAMAAAAkEg");
	var mask_graphics_80 = new cjs.Graphics().p("EAHTAksMAMegkEMBriAAAMAAAAkEg");
	var mask_graphics_81 = new cjs.Graphics().p("EAGpAksMAMegkEMBriAAAMAAAAkEg");
	var mask_graphics_82 = new cjs.Graphics().p("EAFvAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_83 = new cjs.Graphics().p("EAEjAksMAMegkEMBriAAAMAAAAkEg");
	var mask_graphics_84 = new cjs.Graphics().p("EADHAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_85 = new cjs.Graphics().p("EABaAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_86 = new cjs.Graphics().p("EgAjAksMAMdgkEMBriAAAMAAAAkEg");
	var mask_graphics_87 = new cjs.Graphics().p("EgCxAksMAMdgkEMBrhAAAMAAAAkEg");
	var mask_graphics_88 = new cjs.Graphics().p("EgFRAksMAMdgkEMBriAAAMAAAAkEg");
	var mask_graphics_89 = new cjs.Graphics().p("EgIBAksMAMdgkEMBriAAAMAAAAkEg");
	var mask_graphics_90 = new cjs.Graphics().p("EgLBAksMAMcgkEMBriAAAMAAAAkEg");
	var mask_graphics_91 = new cjs.Graphics().p("EgOCAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_92 = new cjs.Graphics().p("EgQyAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_93 = new cjs.Graphics().p("EgTSAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_94 = new cjs.Graphics().p("EgVgAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_95 = new cjs.Graphics().p("EgXeAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_96 = new cjs.Graphics().p("EgZLAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_97 = new cjs.Graphics().p("EganAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_98 = new cjs.Graphics().p("EgbzAksMAMegkEMBrhAAAMAAAAkEg");
	var mask_graphics_99 = new cjs.Graphics().p("EgctAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_100 = new cjs.Graphics().p("EgdXAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_101 = new cjs.Graphics().p("EgdwAksMAMegkEMBrgAAAMAAAAkEg");
	var mask_graphics_102 = new cjs.Graphics().p("Egd5AksMAMegkEMBrhAAAMAAAAkEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_graphics_78,x:818.025,y:234.8}).wait(1).to({graphics:mask_graphics_79,x:817.1866,y:234.8}).wait(1).to({graphics:mask_graphics_80,x:814.6715,y:234.8}).wait(1).to({graphics:mask_graphics_81,x:810.4797,y:234.8}).wait(1).to({graphics:mask_graphics_82,x:804.6111,y:234.8}).wait(1).to({graphics:mask_graphics_83,x:797.0658,y:234.8}).wait(1).to({graphics:mask_graphics_84,x:787.8438,y:234.8}).wait(1).to({graphics:mask_graphics_85,x:776.945,y:234.8}).wait(1).to({graphics:mask_graphics_86,x:764.3694,y:234.8}).wait(1).to({graphics:mask_graphics_87,x:750.1172,y:234.8}).wait(1).to({graphics:mask_graphics_88,x:734.1882,y:234.8}).wait(1).to({graphics:mask_graphics_89,x:716.5825,y:234.8}).wait(1).to({graphics:mask_graphics_90,x:697.3,y:234.8}).wait(1).to({graphics:mask_graphics_91,x:678.0175,y:234.8}).wait(1).to({graphics:mask_graphics_92,x:660.4118,y:234.8}).wait(1).to({graphics:mask_graphics_93,x:644.4828,y:234.8}).wait(1).to({graphics:mask_graphics_94,x:630.2306,y:234.8}).wait(1).to({graphics:mask_graphics_95,x:617.655,y:234.8}).wait(1).to({graphics:mask_graphics_96,x:606.7563,y:234.8}).wait(1).to({graphics:mask_graphics_97,x:597.5342,y:234.8}).wait(1).to({graphics:mask_graphics_98,x:589.9889,y:234.8}).wait(1).to({graphics:mask_graphics_99,x:584.1203,y:234.8}).wait(1).to({graphics:mask_graphics_100,x:579.9285,y:234.8}).wait(1).to({graphics:mask_graphics_101,x:577.4134,y:234.8}).wait(1).to({graphics:mask_graphics_102,x:576.575,y:234.8}).wait(95));

	// hl
	this.instance_4 = new lib.hl();
	this.instance_4.parent = this;
	this.instance_4.setTransform(568.9,327.15);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(78).to({_off:false},0).to({x:847.9},24,cjs.Ease.get(1)).wait(57).to({alpha:0},6).to({_off:true},1).wait(31));

	// maskProduct (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EAjXCI4MAAAkRvMBY6AAAMAAAERvgEBwrhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgPFEgFAkQgeDGDjhQQBygnB3hPIBQhuIAfAAQAlgIAegoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBnphMFIAxAhQAzAhAKgGQgGjAAGiWQAKjWAAgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_1 = new cjs.Graphics().p("EAfMCI4MAAAkRvMBY6AAAMAAAERvgEBsghf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBjehMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EAbYCI4MAAAkRvMBY6AAAMAAAERvgEBoshf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBfqhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_3 = new cjs.Graphics().p("EAX6CI4MAAAkRvMBY6AAAMAAAERvgEBlPhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBcMhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EAUxCI4MAAAkRvMBY6AAAMAAAERvgEBiGhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBZDhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAR9CI4MAAAkRvMBY6AAAMAAAERvgEBfRhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBWPhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAPbCI4MAAAkRvMBY6AAAMAAAERvgEBcwhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBTthMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EANLCI4MAAAkRvMBY6AAAMAAAERvgEBaghf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBRdhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_8 = new cjs.Graphics().p("EALNCI4MAAAkRvMBY6AAAMAAAERvgEBYhhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBPfhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAJeCI4MAAAkRvMBY6AAAMAAAERvgEBWyhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBNwhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAH9CI4MAAAkRvMBY6AAAMAAAERvgEBVShf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBMPhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAGrCI4MAAAkRvMBY6AAAMAAAERvgEBT/hf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBK9hMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAFlCI4MAAAkRvMBY6AAAMAAAERvgEBS6hf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBJ3hMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAErCI4MAAAkRvMBY6AAAMAAAERvgEBR/hf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBI9hMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAD7CI4MAAAkRvMBY6AAAMAAAERvgEBRQhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBINhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_15 = new cjs.Graphics().p("EADVCI4MAAAkRvMBY6AAAMAAAERvgEBQqhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBHnhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAC3CI4MAAAkRvMBY6AAAMAAAERvgEBQMhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBHJhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAChCI4MAAAkRvMBY6AAAMAAAERvgEBP1hf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBGzhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_18 = new cjs.Graphics().p("EACRCI4MAAAkRvMBY6AAAMAAAERvgEBPlhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBGjhMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_19 = new cjs.Graphics().p("EACGCI4MAAAkRvMBY6AAAMAAAERvgEBPbhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBGYhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_20 = new cjs.Graphics().p("EACACI4MAAAkRvMBY6AAAMAAAERvgEBPUhf5QgEC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgcA3gHADQgIAEgMAXIgKAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAfAAQAlgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBGShMFIAxAhQAzAhAKgGQgGjAAGiWQAJjWABgiQgJgjgjgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAB8CI4MAAAkRvMBY6AAAMAAAERvgEBPRhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBGOhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAB7CI4MAAAkRvMBY6AAAMAAAERvgEBPQhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAPFpg3BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgOFEgGAkQgeDGDjhQQBygnB3hPIBQhuIAgAAQAlgIAdgoQBdh9gVmDQgVmDgGltIgDkgIgKjSIlKiCgEBGNhMFIAxAhQAzAhAKgGQgFjAAGiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAB7CI4MAAAkRvMBY6AAAMAAAERvgEBPQhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAgAAQAkgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBGNhMFIAxAhQAzAhAKgGQgGjAAHiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EAB7CI4MAAAkRvMBY6AAAMAAAERvgEBPQhf5QgFC5gOA/QgLAzg4DCQgxDFAGCKQAOFpg2BtIg3BwQgbA3gIADQgIAEgLAXIgLAXQgPFEgFAkQgeDGDjhQQBxgnB4hPIBQhuIAgAAQAkgIAdgoQBeh9gVmDQgVmDgHltIgCkgIgKjSIlKiCgEBGNhMFIAxAhQAzAhAKgGQgGjAAHiWQAJjWAAgiQgIgjgkgRIg4gcQgBCtgTG1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:795.3,y:852.45}).wait(1).to({graphics:mask_1_graphics_1,x:768.583,y:852.45}).wait(1).to({graphics:mask_1_graphics_2,x:744.1876,y:852.45}).wait(1).to({graphics:mask_1_graphics_3,x:722.0085,y:852.45}).wait(1).to({graphics:mask_1_graphics_4,x:701.9399,y:852.45}).wait(1).to({graphics:mask_1_graphics_5,x:683.8765,y:852.45}).wait(1).to({graphics:mask_1_graphics_6,x:667.7126,y:852.45}).wait(1).to({graphics:mask_1_graphics_7,x:653.3427,y:852.45}).wait(1).to({graphics:mask_1_graphics_8,x:640.6614,y:852.45}).wait(1).to({graphics:mask_1_graphics_9,x:629.563,y:852.45}).wait(1).to({graphics:mask_1_graphics_10,x:619.9421,y:852.45}).wait(1).to({graphics:mask_1_graphics_11,x:611.693,y:852.45}).wait(1).to({graphics:mask_1_graphics_12,x:604.7104,y:852.45}).wait(1).to({graphics:mask_1_graphics_13,x:598.8886,y:852.45}).wait(1).to({graphics:mask_1_graphics_14,x:594.1221,y:852.45}).wait(1).to({graphics:mask_1_graphics_15,x:590.3053,y:852.45}).wait(1).to({graphics:mask_1_graphics_16,x:587.3329,y:852.45}).wait(1).to({graphics:mask_1_graphics_17,x:585.0991,y:852.45}).wait(1).to({graphics:mask_1_graphics_18,x:583.4986,y:852.45}).wait(1).to({graphics:mask_1_graphics_19,x:582.4257,y:852.45}).wait(1).to({graphics:mask_1_graphics_20,x:581.7749,y:852.45}).wait(1).to({graphics:mask_1_graphics_21,x:581.4407,y:852.45}).wait(1).to({graphics:mask_1_graphics_22,x:581.3176,y:852.45}).wait(1).to({graphics:mask_1_graphics_23,x:581.3,y:852.45}).wait(8).to({graphics:mask_1_graphics_31,x:581.3,y:852.45}).wait(3).to({graphics:null,x:0,y:0}).wait(163));

	// product
	this.instance_5 = new lib.product_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1307.2,864.2);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:879.2},23,cjs.Ease.cubicOut).wait(8).to({y:676},17,cjs.Ease.cubicOut).to({regX:0.3,regY:0.1,scaleX:0.4579,scaleY:0.4579,rotation:17.0269,x:868.35,y:356.05},25,cjs.Ease.cubicOut).wait(5).to({y:355.65},0).to({x:385.4},24,cjs.Ease.quadInOut).wait(57).to({alpha:0},6).to({_off:true},1).wait(31));

	// docker
	this.instance_6 = new lib.docker();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1492.05,432.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1064.05},23,cjs.Ease.cubicOut).wait(25).to({x:1480.55,alpha:0},11,cjs.Ease.quadIn).to({_off:true},107).wait(31));

	// shadowDocker
	this.instance_7 = new lib.shadowDocker_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1525.7,470.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:1097.7},23,cjs.Ease.cubicOut).wait(25).to({x:1514.2,alpha:0},11,cjs.Ease.quadIn).to({_off:true},107).wait(31));

	// wall
	this.instance_8 = new lib.wall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1442.8,358.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:1014.8},23,cjs.Ease.cubicOut).wait(25).to({x:1431.3,alpha:0},11,cjs.Ease.quadIn).to({_off:true},107).wait(31));

	// logo
	this.instance_9 = new lib.logoWrap();
	this.instance_9.parent = this;
	this.instance_9.setTransform(214.15,100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(159).to({alpha:0},6).to({_off:true},1).wait(31));

	// Close_btn
	this.mainBtns = new lib.Symbol46();
	this.mainBtns.name = "mainBtns";
	this.mainBtns.parent = this;
	this.mainBtns.setTransform(1148.4,24.6,1,1,0,0,0,544.5,-97.3);

	this.timeline.addTween(cjs.Tween.get(this.mainBtns).wait(159).to({_off:true},7).wait(31));

	// button
	this.instance_10 = new lib.Symbol30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(602.05,353.15,1,1,0,0,0,613.3,364.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},166).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1631.1,1728.5);
// library properties:
lib.properties = {
	id: '168476A1D4FC144EA000EC7EDD1802DC',
	width: 1200,
	height: 700,
	fps: 24,
	color: "#006666",
	opacity: 0.00,
	manifest: [
		{src:"images/A1.png", id:"A1"},
		{src:"images/A1Sign_15_x.png", id:"A1Sign_15_x"},
		{src:"images/A1Txt_15_x.png", id:"A1Txt_15_x"},
		{src:"images/A2.png", id:"A2"},
		{src:"images/A2sign_15_x.png", id:"A2sign_15_x"},
		{src:"images/A2Txt_15_x.png", id:"A2Txt_15_x"},
		{src:"images/A3.png", id:"A3"},
		{src:"images/A3Sign_15_x.png", id:"A3Sign_15_x"},
		{src:"images/A3Txt_15_x.png", id:"A3Txt_15_x"},
		{src:"images/doker.png", id:"doker"},
		{src:"images/hl1_5x.png", id:"hl1_5x"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo_rem.png", id:"logo_rem"},
		{src:"images/product.png", id:"product"},
		{src:"images/shadowDocker.png", id:"shadowDocker"},
		{src:"images/txtCta_15_x.png", id:"txtCta_15_x"}
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
