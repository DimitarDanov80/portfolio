(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.backGrNew = function() {
	this.initialize(img.backGrNew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1896,1237);


(lib.blackwhite = function() {
	this.initialize(img.blackwhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,255);


(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,113);


(lib.color = function() {
	this.initialize(img.color);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,111);


(lib.cta_1_5x = function() {
	this.initialize(img.cta_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,95);


(lib.hl = function() {
	this.initialize(img.hl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,170);


(lib.lensflair = function() {
	this.initialize(img.lensflair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,126);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,14);


(lib.p2Down = function() {
	this.initialize(img.p2Down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,19);


(lib.p2Up = function() {
	this.initialize(img.p2Up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,19);


(lib.p3Down = function() {
	this.initialize(img.p3Down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,37);


(lib.p3Up = function() {
	this.initialize(img.p3Up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,37);


(lib.p4Down = function() {
	this.initialize(img.p4Down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,63);


(lib.p4Up = function() {
	this.initialize(img.p4Up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,63);


(lib.shineeffect = function() {
	this.initialize(img.shineeffect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,429,429);


(lib.text1_1_5x = function() {
	this.initialize(img.text1_1_5x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,79);


(lib.VB_Logo_RGB = function() {
	this.initialize(img.VB_Logo_RGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,162);// helper functions:

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


(lib.sl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1_1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-178.95,-26.3,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sl, new cjs.Rectangle(-178.9,-26.3,357.9,52.7), null);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shineeffect();
	this.instance.parent = this;
	this.instance.setTransform(-295.85,-295.85,1.3793,1.3793);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(-295.8,-295.8,591.7,591.7), null);


(lib.p4Up_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p4Up();
	this.instance.parent = this;
	this.instance.setTransform(-102,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4Up_1, new cjs.Rectangle(-102,-31.5,204,63), null);


(lib.p4Down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p4Down();
	this.instance.parent = this;
	this.instance.setTransform(-102,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4Down_1, new cjs.Rectangle(-102,-31.5,204,63), null);


(lib.p3Up_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p3Up();
	this.instance.parent = this;
	this.instance.setTransform(-113,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3Up_1, new cjs.Rectangle(-113,-18.5,226,37), null);


(lib.p3Down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p3Down();
	this.instance.parent = this;
	this.instance.setTransform(-113,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3Down_1, new cjs.Rectangle(-113,-18.5,226,37), null);


(lib.p2Up_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p2Up();
	this.instance.parent = this;
	this.instance.setTransform(-113.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2Up_1, new cjs.Rectangle(-113.5,-9.5,227,19), null);


(lib.p2Down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p2Down();
	this.instance.parent = this;
	this.instance.setTransform(-113,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2Down_1, new cjs.Rectangle(-113,-9.5,226,19), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-114,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-114,-7,228,14), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.VB_Logo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(-82.6,-46,0.5679,0.5679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-82.6,-46,165.3,92), null);


(lib.lensFalir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lensflair();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lensFalir, new cjs.Rectangle(-63.5,-63,127,126), null);


(lib.hl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl();
	this.instance.parent = this;
	this.instance.setTransform(-153.5,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hl_1, new cjs.Rectangle(-153.5,-85,307,170), null);


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


(lib.ctaIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta_1_5x();
	this.instance.parent = this;
	this.instance.setTransform(-129.95,-31.65,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaIn, new cjs.Rectangle(-129.9,-31.6,259.9,63.3), null);


(lib.ballColor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.color();
	this.instance.parent = this;
	this.instance.setTransform(-56,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ballColor, new cjs.Rectangle(-56,-55.5,112,111), null);


(lib.ballBlackAndWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blackwhite();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ballBlackAndWhite, new cjs.Rectangle(-124.5,-127.5,249,255), null);


(lib.ballBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(-56,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ballBlack, new cjs.Rectangle(-56,-56.5,112,113), null);


(lib.backGr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.backGrNew();
	this.instance.parent = this;
	this.instance.setTransform(-948,-618.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backGr, new cjs.Rectangle(-948,-618.5,1896,1237), null);


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


(lib.ctaUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.instance = new lib.ctaIn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.125,1.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-35.6,292.5,71.30000000000001);


(lib.ctaOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.instance = new lib.ctaIn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.125,scaleY:1.125},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-35.6,292.5,71.30000000000001);


(lib.ctaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaUp();
	this.instance.parent = this;
	this.instance.setTransform(-65.15,-25.05);

	this.instance_1 = new lib.ctaOver();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65.15,-25.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF66").s().p("A0JFMIAAqXMAoTAAAIAAKXg");
	this.shape.setTransform(-66.35,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.3,-60.6,292.4,71.9);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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

	// Layer_1
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.parent = this;
	this.ctaBtn.setTransform(65.15,25.05);
	new cjs.ButtonHelper(this.ctaBtn, 0, 1, 2, false, new lib.ctaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-146.2,-35.6,292.5,71.30000000000001), null);


(lib.ballWhiteAnim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(2));

	// p4Up
	this.instance = new lib.p4Up_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-81.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({y:-217},35,cjs.Ease.get(1)).wait(2));

	// p4Down
	this.instance_1 = new lib.p4Down_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({y:217},35,cjs.Ease.get(1)).wait(2));

	// p3Up
	this.instance_2 = new lib.p3Up_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-32.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({y:-126.05},35,cjs.Ease.get(1)).wait(2));

	// p3Down
	this.instance_3 = new lib.p3Down_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,37.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({y:126},35,cjs.Ease.get(1)).wait(2));

	// p2Up
	this.instance_4 = new lib.p2Up_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-7.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({y:-58.25},35,cjs.Ease.get(1)).wait(2));

	// p2Down
	this.instance_5 = new lib.p2Down_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({y:63},35,cjs.Ease.get(1)).wait(2));

	// p1
	this.instance_6 = new lib.p1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0.2,0.9759,0.9759);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({scaleX:1,scaleY:1,y:2.5},35,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-248.5,228.1,497);


(lib.ballWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42));

	// p4Up
	this.instance = new lib.p4Up_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-81.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({y:-217},0).wait(1));

	// p4Down
	this.instance_1 = new lib.p4Down_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({y:217},0).wait(1));

	// p3Up
	this.instance_2 = new lib.p3Up_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-32.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({y:-126.05},0).wait(1));

	// p3Down
	this.instance_3 = new lib.p3Down_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,37.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({y:126},0).wait(1));

	// p2Up
	this.instance_4 = new lib.p2Up_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-7.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({y:-58.25},0).wait(1));

	// p2Down
	this.instance_5 = new lib.p2Down_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({y:63},0).wait(1));

	// p1
	this.instance_6 = new lib.p1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0.2,0.9759,0.9759);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({scaleX:1,scaleY:1,y:2.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-248.5,228,497);


(lib.backGrAnim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_288 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(288).call(this.frame_288).wait(1));

	// space
	this.instance = new lib.backGr();
	this.instance.parent = this;
	this.instance.setTransform(-28.15,-78.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:42.6471,x:-28.05},288,cjs.Ease.cubicOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1158.2,-1176.1,2260.4,2194.3999999999996);


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
	this.initialize(mode,startPosition,loop,{close:24});

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(302));

	// ctaBtn
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(185.4,627.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(3));

	// ballColor
	this.instance_1 = new lib.ballColor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(846.85,631.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(273).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(16));

	// ballBlack
	this.instance_2 = new lib.ballBlack();
	this.instance_2.parent = this;
	this.instance_2.setTransform(717.85,630.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(30));

	// ballBlackAndWhite
	this.instance_3 = new lib.ballBlackAndWhite();
	this.instance_3.parent = this;
	this.instance_3.setTransform(586.05,630.55,0.4503,0.4503,0,0,0,0.1,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(243).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(44));

	// whiteBall
	this.instance_4 = new lib.ballWhite();
	this.instance_4.parent = this;
	this.instance_4.setTransform(458.15,630.25,0.4887,0.4887,0,0,0,0.1,2.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(1)).wait(57));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_203 = new cjs.Graphics().p("EBCfAyuIAAu6IYhAAIAAO6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(203).to({graphics:mask_graphics_203,x:582.4127,y:324.5615}).wait(99));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1086.05,511.1,0.8484,0.8484);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(210).to({_off:false},0).to({y:592.95},19,cjs.Ease.get(1)).wait(73));

	// hl
	this.instance_6 = new lib.hl_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(158.45,631.15,0.645,0.645);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(210).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(44).to({alpha:0},17,cjs.Ease.get(1)).wait(12));

	// shineRem
	this.instance_7 = new lib.shine();
	this.instance_7.parent = this;
	this.instance_7.setTransform(602.5,635.05,0.0869,0.0869);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(176).to({_off:false},0).to({scaleX:1,scaleY:1,x:600.5},7,cjs.Ease.get(1)).to({scaleX:0.1663,scaleY:0.1663,x:602.5,y:633.05,alpha:0},6,cjs.Ease.get(1)).wait(113));

	// maskIt (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_182 = new cjs.Graphics().p("EAucAxYIAAhDIAvAAIAABDg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EAucAykIAAlxIAvAAIAAFxg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EAucAzmIAAp6IAvAAIAAJ6g");
	var mask_1_graphics_185 = new cjs.Graphics().p("EAucA0fIAAtfIAvAAIAANfg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EAucA1QIAAwiIAvAAIAAQig");
	var mask_1_graphics_187 = new cjs.Graphics().p("EAucA14IAAzBIAvAAIAATBg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EAucA2XIAA09IAvAAIAAU9g");
	var mask_1_graphics_189 = new cjs.Graphics().p("EAucA2tIAA2VIAvAAIAAWVg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EAucA26IAA3KIAvAAIAAXKg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EAucA2+IAA3cIAvAAIAAXcg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EAdaA2+IAA3cIXcAAIAAXcg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EANeA2+IAA3cMAssAAAIAAXcg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EgBXA2+IAA3cMBAeAAAIAAXcg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgPGA2+IAA3cMBSyAAAIAAXcg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgbvA2+IAA3cMBjoAAAIAAXcg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgnRA2+IAA3cMBzAAAAIAAXcg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgxtA2+IAA3cMCA7AAAIAAXcg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Eg7DA2+IAA3cMCNYAAAIAAXcg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EhDTA2+IAA3cMCYYAAAIAAXcg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EhKcA2+IAA3cMCh5AAAIAAXcg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EhQfA2+IAA3cMCp9AAAIAAXcg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EhVbA2+IAA3cMCwjAAAIAAXcg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EhZRA2+IAA3cMC1rAAAIAAXcg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EhcBA2+IAA3cMC5VAAAIAAXcg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EhdrA2+IAA3cMC7iAAAIAAXcg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EheIA2+IAA3cMC8RAAAIAAXcg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_1_graphics_182,x:301.8978,y:316.0496}).wait(1).to({graphics:mask_1_graphics_183,x:301.8978,y:323.5641}).wait(1).to({graphics:mask_1_graphics_184,x:301.8978,y:330.1945}).wait(1).to({graphics:mask_1_graphics_185,x:301.8978,y:335.9408}).wait(1).to({graphics:mask_1_graphics_186,x:301.8978,y:340.8031}).wait(1).to({graphics:mask_1_graphics_187,x:301.8978,y:344.7814}).wait(1).to({graphics:mask_1_graphics_188,x:301.8978,y:347.8756}).wait(1).to({graphics:mask_1_graphics_189,x:301.8978,y:350.0857}).wait(1).to({graphics:mask_1_graphics_190,x:301.8978,y:351.4118}).wait(1).to({graphics:mask_1_graphics_191,x:301.8978,y:351.8282}).wait(1).to({graphics:mask_1_graphics_192,x:338.2281,y:351.8282}).wait(1).to({graphics:mask_1_graphics_193,x:372.2146,y:351.8282}).wait(1).to({graphics:mask_1_graphics_194,x:403.8571,y:351.8282}).wait(1).to({graphics:mask_1_graphics_195,x:433.1558,y:351.8282}).wait(1).to({graphics:mask_1_graphics_196,x:460.1106,y:351.8282}).wait(1).to({graphics:mask_1_graphics_197,x:484.7215,y:351.8282}).wait(1).to({graphics:mask_1_graphics_198,x:506.9885,y:351.8282}).wait(1).to({graphics:mask_1_graphics_199,x:526.9116,y:351.8282}).wait(1).to({graphics:mask_1_graphics_200,x:544.4908,y:351.8282}).wait(1).to({graphics:mask_1_graphics_201,x:559.7261,y:351.8282}).wait(1).to({graphics:mask_1_graphics_202,x:572.6175,y:351.8282}).wait(1).to({graphics:mask_1_graphics_203,x:583.165,y:351.8282}).wait(1).to({graphics:mask_1_graphics_204,x:591.3686,y:351.8282}).wait(1).to({graphics:mask_1_graphics_205,x:597.2284,y:351.8282}).wait(1).to({graphics:mask_1_graphics_206,x:600.7442,y:351.8282}).wait(1).to({graphics:mask_1_graphics_207,x:601.05,y:351.8282}).wait(95));

	// backGrRem
	this.instance_8 = new lib.backGrAnim();
	this.instance_8.parent = this;
	this.instance_8.setTransform(835.3,623.55,1.7062,1.7062);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(182).to({_off:false},0).wait(120));

	// cls_btn
	this.mainBtns2 = new lib.Symbol54();
	this.mainBtns2.name = "mainBtns2";
	this.mainBtns2.parent = this;
	this.mainBtns2.setTransform(655.75,330.8,0.9308,0.9308);
	this.mainBtns2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mainBtns2).wait(176).to({_off:false},0).wait(126));

	// button2
	this.zCTA = new lib.Symbol30();
	this.zCTA.name = "zCTA";
	this.zCTA.parent = this;
	this.zCTA.setTransform(602.05,587.6,1,0.3521,0,0,0,613.3,364.8);
	this.zCTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zCTA).wait(176).to({_off:false},0).wait(126));

	// cut line
	this.rec = new lib.Symbol4copy3();
	this.rec.name = "rec";
	this.rec.parent = this;
	this.rec.setTransform(1258.05,576.85,0.6635,2.4736,0,0,0,50.1,50);
	this.rec._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(176).to({_off:false},0).wait(126));

	// hl
	this.instance_9 = new lib.hl_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(524.25,449.55,0.6441,0.6441,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(81).to({_off:false},0).to({alpha:1},9).wait(77).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// sl
	this.instance_10 = new lib.sl();
	this.instance_10.parent = this;
	this.instance_10.setTransform(600.85,565.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(71).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// ballBlackAndWhite
	this.instance_11 = new lib.ballBlackAndWhite();
	this.instance_11.parent = this;
	this.instance_11.setTransform(601.3,213.35);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({alpha:1},25,cjs.Ease.get(1)).wait(54).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// ballWhiteAnim
	this.instance_12 = new lib.ballWhiteAnim();
	this.instance_12.parent = this;
	this.instance_12.setTransform(601.35,342.3,1,1,-90);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadIn).to({rotation:0},35,cjs.Ease.get(1)).wait(13).to({alpha:0},16,cjs.Ease.get(1)).wait(78).to({_off:true},1).wait(127));

	// lensFalir
	this.instance_13 = new lib.lensFalir();
	this.instance_13.parent = this;
	this.instance_13.setTransform(679.75,112.9,0.5841,0.5841,0,0,0,0,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:112.85,alpha:1},19,cjs.Ease.get(1)).wait(47).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// glow
	this.instance_14 = new lib.shine();
	this.instance_14.parent = this;
	this.instance_14.setTransform(591.8,354.6,0.0963,0.0963);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({scaleX:0.6767,scaleY:0.6767,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(291));

	// maskIt (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("EAoWAb+IAAglIIrAAIAAAlg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EAgqAb+IAAgmIS6AAIAAAmg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AZub/IAAgoIcKAAIAAAog");
	var mask_2_graphics_12 = new cjs.Graphics().p("ATgb/IAAgpMAkdAAAIAAApg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AOBb/IAAgqMArxAAAIAAAqg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AJRcAIAAgsMAyGAAAIAAAsg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AFPcAIAAgsMA3eAAAIAAAsg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AB9cAIAAgtMA72AAAIAAAtg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AgmcAIAAgtMA/QAAAIAAAtg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AibcAIAAgtMBBsAAAIAAAtg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AjhcAIAAguMBDJAAAIAAAug");
	var mask_2_graphics_20 = new cjs.Graphics().p("Aj5cAIAAguMBDpAAAIAAAug");
	var mask_2_graphics_21 = new cjs.Graphics().p("Aj5f7IAAwZMBDpAAAIAAQZg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgD5AjjIAA+6MBDpAAAIAAe6g");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgD5Am5MAAAgsPMBDpAAAMAAAAsPg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgD5Ap8MAAAg4cMBDpAAAMAAAA4cg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgD5AssMAAAhDdMBDpAAAMAAABDdg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgD5AvKMAAAhNVMBDpAAAMAAABNVg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgD5AxWMAAAhWCMBDpAAAMAAABWCg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgD5AzOMAAAhdlMBDpAAAMAAABdlg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgD5A01MAAAhj+MBDpAAAMAAABj+g");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgD5A2IMAAAhpMMBDpAAAMAAABpMg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgD5A3JMAAAhtQMBDpAAAMAAABtQg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgD5A4FMAAAhwJMBDpAAAMAAABwJg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgD5A49MAAAhx5MBDpAAAMAAABx5g");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgD5A5QMAAAhyfMBDpAAAMAAAByfg");
	var mask_2_graphics_167 = new cjs.Graphics().p("EgD5A5QMAAAhyfMBDpAAAMAAAByfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:313.6498,y:178.9975}).wait(1).to({graphics:mask_2_graphics_10,x:330.029,y:179.0368}).wait(1).to({graphics:mask_2_graphics_11,x:344.8482,y:179.0723}).wait(1).to({graphics:mask_2_graphics_12,x:358.1075,y:179.1041}).wait(1).to({graphics:mask_2_graphics_13,x:369.807,y:179.1322}).wait(1).to({graphics:mask_2_graphics_14,x:379.9464,y:179.1565}).wait(1).to({graphics:mask_2_graphics_15,x:388.526,y:179.1771}).wait(1).to({graphics:mask_2_graphics_16,x:395.5456,y:179.194}).wait(1).to({graphics:mask_2_graphics_17,x:401.0054,y:179.2071}).wait(1).to({graphics:mask_2_graphics_18,x:404.9052,y:179.2164}).wait(1).to({graphics:mask_2_graphics_19,x:407.245,y:179.222}).wait(1).to({graphics:mask_2_graphics_20,x:408.025,y:179.2239}).wait(1).to({graphics:mask_2_graphics_21,x:408.025,y:204.3024}).wait(1).to({graphics:mask_2_graphics_22,x:408.025,y:227.5232}).wait(1).to({graphics:mask_2_graphics_23,x:408.025,y:248.8863}).wait(1).to({graphics:mask_2_graphics_24,x:408.025,y:268.3918}).wait(1).to({graphics:mask_2_graphics_25,x:408.025,y:286.0396}).wait(1).to({graphics:mask_2_graphics_26,x:408.025,y:301.8297}).wait(1).to({graphics:mask_2_graphics_27,x:408.025,y:315.7622}).wait(1).to({graphics:mask_2_graphics_28,x:408.025,y:327.837}).wait(1).to({graphics:mask_2_graphics_29,x:408.025,y:338.0542}).wait(1).to({graphics:mask_2_graphics_30,x:408.025,y:346.4137}).wait(1).to({graphics:mask_2_graphics_31,x:408.025,y:352.9155}).wait(1).to({graphics:mask_2_graphics_32,x:408.025,y:356.1745}).wait(1).to({graphics:mask_2_graphics_33,x:408.025,y:356.1749}).wait(1).to({graphics:mask_2_graphics_34,x:408.025,y:356.175}).wait(133).to({graphics:mask_2_graphics_167,x:408.025,y:356.175}).wait(135));

	// backGr
	this.instance_15 = new lib.backGr();
	this.instance_15.parent = this;
	this.instance_15.setTransform(634.2,400.15);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({rotation:129.0528,x:634.15},158).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// logo
	this.instance_16 = new lib.logo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(981.85,45.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(167).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// Close_btn
	this.mainBtns = new lib.Symbol46();
	this.mainBtns.name = "mainBtns";
	this.mainBtns.parent = this;
	this.mainBtns.setTransform(1148.4,24.6,1,1,0,0,0,544.5,-97.3);

	this.timeline.addTween(cjs.Tween.get(this.mainBtns).to({_off:true},175).wait(127));

	// button
	this.instance_17 = new lib.Symbol30();
	this.instance_17.parent = this;
	this.instance_17.setTransform(602.05,353.15,1,1,0,0,0,613.3,364.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},175).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1291.2,930.9);
// library properties:
lib.properties = {
	id: '168476A1D4FC144EA000EC7EDD1802DC',
	width: 1200,
	height: 700,
	fps: 24,
	color: "#006666",
	opacity: 0.00,
	manifest: [
		{src:"images/backGrNew.jpg", id:"backGrNew"},
		{src:"images/blackwhite.png", id:"blackwhite"},
		{src:"images/black.png", id:"black"},
		{src:"images/color.png", id:"color"},
		{src:"images/cta_1_5x.png", id:"cta_1_5x"},
		{src:"images/hl.png", id:"hl"},
		{src:"images/lensflair.png", id:"lensflair"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2Down.png", id:"p2Down"},
		{src:"images/p2Up.png", id:"p2Up"},
		{src:"images/p3Down.png", id:"p3Down"},
		{src:"images/p3Up.png", id:"p3Up"},
		{src:"images/p4Down.png", id:"p4Down"},
		{src:"images/p4Up.png", id:"p4Up"},
		{src:"images/shineeffect.png", id:"shineeffect"},
		{src:"images/text1_1_5x.png", id:"text1_1_5x"},
		{src:"images/VB_Logo_RGB.jpg", id:"VB_Logo_RGB"}
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