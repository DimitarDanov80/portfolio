(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Fasha = function() {
	this.initialize(img.Fasha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,136);


(lib.HL2Rem = function() {
	this.initialize(img.HL2Rem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,29);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,34);


(lib.Layer1_1 = function() {
	this.initialize(img.Layer1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,34);


(lib.Layer1_2 = function() {
	this.initialize(img.Layer1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,34);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,34);


(lib.Layer2_1 = function() {
	this.initialize(img.Layer2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,34);


(lib.Layer2_2 = function() {
	this.initialize(img.Layer2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,34);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,34);


(lib.Layer3_1 = function() {
	this.initialize(img.Layer3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,34);


(lib.Layer3_2 = function() {
	this.initialize(img.Layer3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,34);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,34);


(lib.Layer4_1 = function() {
	this.initialize(img.Layer4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,34);


(lib.Person = function() {
	this.initialize(img.Person);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,704,678);


(lib.pict1 = function() {
	this.initialize(img.pict1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,393);


(lib.pict2 = function() {
	this.initialize(img.pict2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,392);// helper functions:

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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pict2();
	this.instance.parent = this;
	this.instance.setTransform(-201.5,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-201.5,-196,403,392), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pict1();
	this.instance.parent = this;
	this.instance.setTransform(-209.5,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-209.5,-196.5,419,393), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-193.3,-22.2,386.70000000000005,44.4), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Person();
	this.instance.parent = this;
	this.instance.setTransform(-200.6,-193.2,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(-200.6,-193.2,401.29999999999995,386.5), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(-86,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(-86,-17,172,34), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3();
	this.instance.parent = this;
	this.instance.setTransform(-123.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-123.5,-17,247,34), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(-104.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-104.5,-17,209,34), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2_1();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-108.5,-17,217,34), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3_1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-159,-17,318,34), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer4();
	this.instance.parent = this;
	this.instance.setTransform(-103,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-103,-17,206,34), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer1_1();
	this.instance.parent = this;
	this.instance.setTransform(-89.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-89.5,-17,179,34), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer1_2();
	this.instance.parent = this;
	this.instance.setTransform(-120.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-120.5,-17,241,34), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer4_1();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-95.5,-17,191,34), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3_2();
	this.instance.parent = this;
	this.instance.setTransform(-135.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-135.5,-17,271,34), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2_2();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-108.5,-17,217,34), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-7.7,-7.7,15.5,15.5), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-7.7,-7.7,15.5,15.5), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNBNIAAiZICbAAIAACZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-7.8,-7.7,15.6,15.5), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai6F/IAAgsQAtAAAVgEQAsgJALgqQAGgVAAgsIAAo0QhgADg1A8QgzA6gMB4IgogHIAHkPIJhAAIAHEPIgpAHQgLh4gzg6Qg2g8hggDIAAI0QAABKAWAWQASATAsAEIAsABIAAAsg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-31.2,-38.3,62.4,76.6), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-7.8,-7.7,15.6,15.5), null);


(lib.Symbol23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACAA8QgIgPAAgWQAAgUAIgNQAMgVAXAAQATAAALAPQALAPAAAZIhMAAQAAAKADAKQAIAcAaAAQAKAAAIgEQAIgEADgGIAIAAQgDAJgHAFQgLAIgQAAQgZAAgMgUgACLgNQgJAMgBASIBCAAQAAgIgDgJQgDgLgIgGQgHgHgMAAQgOAAgJALgAhLA8QgIgOAAgWQAAgVAIgOQAMgUAXAAQASAAAKANQAGAIACAKIgIAAQgCgKgHgHQgIgHgLAAQgSAAgJARQgHAMAAATQAAAUAHANQAJAPARAAQAMAAAIgHQAIgIACgOIAIAAQgBAMgHAKQgLAPgTAAQgWAAgMgUgAinBMQgIgEgEgHQgGgKAAgTIAAhAIAJAAIAAA/QAAARAFAJQADAFAGADQAFADAIAAQASAAAIgPQAEgGABgHQABgHAAgLIAAg2IAJAAIAABpIgJAAIAAgVQgKAYgYAAQgJAAgHgEgAkgBEQgNgMgDgWIAJAAQACAOAHAJQALAPAWAAQASAAAKgLQAJgKAAgNQAAgPgKgJQgIgGgVgGIgUgGQgHgDgGgFQgGgEgDgIQgDgIAAgIQAAgSAMgLQALgKATAAQATAAAMALQAMALADATIgJAAQgDgNgFgHQgFgGgIgEQgHgDgJAAQgJAAgHADQgIAEgFAHQgEAIAAAJQAAAOAJAIQAJAIAVAFQAPAEAJADQAHAEAFAGQAJALAAAOQAAAUgOAMQgMALgVAAQgVAAgNgMgAEoBNIAAhAQAAgQgDgHQgHgOgQAAQgMAAgJAIQgGAGgDAJQgDAIAAAPIAAA3IgJAAIAAhpIAJAAIAAAUQAKgXAYAAQAPAAAJAJQAGAGACAIQACAHAAANIAABBgABXBNIAAhAQAAgQgDgHQgGgOgRAAQgMAAgJAIQgHAGgCAJQgDAIAAAPIAAA3IgJAAIAAiZIAJAAIAABCQAKgVAYAAQAYAAAHATQADAIAAAQIAABBg");
	this.shape.setTransform(128.825,47.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnKivIOVAAQA1AAAAAyIAAD7QAAAyg1AAIuVAAQg1AAAAgyIAAj7QAAgyA1AAg");
	this.shape_1.setTransform(128.625,48.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20074").s().p("AnKCwQg1AAAAgyIAAj7QAAgyA1AAIOVAAQA1AAAAAyIAAD7QAAAyg1AAg");
	this.shape_2.setTransform(128.625,48.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23copy, new cjs.Rectangle(76.5,30.3,104.30000000000001,37.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACAA8QgIgPAAgWQAAgUAIgNQAMgVAXAAQATAAALAPQALAPAAAZIhMAAQAAAKADAKQAIAcAaAAQAKAAAIgEQAIgEADgGIAIAAQgDAJgHAFQgLAIgQAAQgZAAgMgUgACLgNQgJAMgBASIBCAAQAAgIgDgJQgDgLgIgGQgHgHgMAAQgOAAgJALgAhLA8QgIgOAAgWQAAgVAIgOQAMgUAXAAQASAAAKANQAGAIACAKIgIAAQgCgKgHgHQgIgHgLAAQgSAAgJARQgHAMAAATQAAAUAHANQAJAPARAAQAMAAAIgHQAIgIACgOIAIAAQgBAMgHAKQgLAPgTAAQgWAAgMgUgAinBMQgIgEgEgHQgGgKAAgTIAAhAIAJAAIAAA/QAAARAFAJQADAFAGADQAFADAIAAQASAAAIgPQAEgGABgHQABgHAAgLIAAg2IAJAAIAABpIgJAAIAAgVQgKAYgYAAQgJAAgHgEgAkgBEQgNgMgDgWIAJAAQACAOAHAJQALAPAWAAQASAAAKgLQAJgKAAgNQAAgPgKgJQgIgGgVgGIgUgGQgHgDgGgFQgGgEgDgIQgDgIAAgIQAAgSAMgLQALgKATAAQATAAAMALQAMALADATIgJAAQgDgNgFgHQgFgGgIgEQgHgDgJAAQgJAAgHADQgIAEgFAHQgEAIAAAJQAAAOAJAIQAJAIAVAFQAPAEAJADQAHAEAFAGQAJALAAAOQAAAUgOAMQgMALgVAAQgVAAgNgMgAEoBNIAAhAQAAgQgDgHQgHgOgQAAQgMAAgJAIQgGAGgDAJQgDAIAAAPIAAA3IgJAAIAAhpIAJAAIAAAUQAKgXAYAAQAPAAAJAJQAGAGACAIQACAHAAANIAABBgABXBNIAAhAQAAgQgDgHQgGgOgRAAQgMAAgJAIQgHAGgCAJQgDAIAAAPIAAA3IgJAAIAAiZIAJAAIAABCQAKgVAYAAQAYAAAHATQADAIAAAQIAABBg");
	this.shape.setTransform(128.825,47.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnKivIOVAAQA1AAAAAyIAAD7QAAAyg1AAIuVAAQg1AAAAgyIAAj7QAAgyA1AAg");
	this.shape_1.setTransform(128.625,48.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20074").s().p("AnKCwQg1AAAAgyIAAj7QAAgyA1AAIOVAAQA1AAAAAyIAAD7QAAAyg1AAg");
	this.shape_2.setTransform(128.625,48.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(76.5,30.3,104.30000000000001,37.3), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Fasha();
	this.instance.parent = this;
	this.instance.setTransform(-600,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-600,-68,1200,136), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HL2Rem();
	this.instance.parent = this;
	this.instance.setTransform(-93,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-93,-14.5,186,29), null);


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
	this.shape_1.graphics.f("#4D4D4D").s().p("AAkAvQgFAAgDgDIgcgcIgbAbQgDADgFAAQgDAAgEgDQgDgDAAgFQAAgEADgDIAcgbIgdgcQgDgDAAgFQAAgDADgEQADgDAFAAQAEAAADADIAcAdIAdgeQADgDAEAAQAFAAAEADQADADgBAEQAAAFgDADIgdAdIAcAcQADADAAAEQAAAFgDAEQgCACgDAAIgCAAg");
	this.shape_1.setTransform(11.6839,15.7125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAlAwQgFABgDgDIgdgeIgbAcQgEADgFAAQgEABgDgDQgDgEgBgEQABgFADgDIAcgcIgdgcQgDgEAAgFQgBgEAEgDQADgDAFgBQAEABAEADIAcAdIAegfQADgDAFABQAFgBADAEQADADgBAEQABAFgDADIgfAeIAeAdQADADAAAFQAAAFgEADQgCACgDAAIgCAAg");
	this.shape_2.setTransform(11.633,15.7325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAmAyQgFAAgDgDIgegeIgcAcQgEAEgFAAQgEAAgDgDQgEgDAAgFQAAgFADgEIAegcIgegdQgEgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEADIAdAfIAfggQADgDAFAAQAFAAADADQAEAEgBAEQAAAFgDADIgfAfIAeAeQADADAAAFQAAAFgDADQgDADgDAAIgCAAg");
	this.shape_3.setTransform(11.583,15.7325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAnAzQgFABgDgEIgfgfIgeAeQgDADgGAAQgEABgDgEQgEgDAAgFQAAgFAEgEIAegdIgfgeQgDgDAAgGQgBgEADgEQAEgDAFAAQAFAAAEADIAeAfIAfggQAEgEAEABQAGAAADADQAEAEgBAEQAAAFgDADIggAgIAfAfQAEADgBAFQAAAFgDAEQgDACgDAAIgCAAg");
	this.shape_4.setTransform(11.5575,15.733);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B3B3").s().p("AAoA0QgFABgDgDIggggIgeAeQgEAEgFAAQgEAAgEgDQgEgEAAgFQAAgGAEgDIAfgfIgggeQgDgDAAgGQgBgEADgEQAEgEAFAAQAGAAADAEIAfAfIAhghQADgDAFAAQAFAAAEAEQADADgBAFQABAFgDADIghAgIAgAhQAEADgBAFQAAAFgEAEQgCADgEAAIgCgBg");
	this.shape_5.setTransform(11.4825,15.708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAqA2QgGABgDgEIghghIgfAgQgEADgFAAQgFABgDgEQgEgEAAgFQAAgGADgDIAgggIgggfQgEgDAAgGQAAgFADgDQAEgEAFAAQAGAAADADIAgAhIAigiQADgEAFABQAFAAAEADQAEAEgBAFQABAFgEAEIghAgIAgAiQAEADgBAFQABAFgEAEQgDADgDAAIgCAAg");
	this.shape_6.setTransform(11.433,15.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AArA3QgGABgDgEIgighIggAgQgEAEgGAAQgEAAgEgEQgEgDAAgFQAAgHAEgDIAhghIgiggQgDgDAAgHQgBgEAEgEQAEgEAFAAQAGAAAEAEIAgAhIAigjQAEgDAFABQAGgBADAEQAEAEgBAFQABAFgEAEIgiAhIAiAiQAEAEgCAFQABAGgEADQgDADgDAAIgCAAg");
	this.shape_7.setTransform(11.3819,15.7239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsA5QgGABgDgEIgjgjIghAhQgEAEgGAAQgEABgEgEQgEgEAAgFQAAgHADgDIAigiIgighQgEgDAAgHQAAgEADgEQAEgEAGAAQAGAAAEADIAhAjIAjgkQAEgEAFABQAGAAAEAEQAEAEgBAFQABAFgEAEIgjAiIAiAjQAEAEgBAFQABAGgFAEQgDADgDAAIgCAAg");
	this.shape_8.setTransform(11.3319,15.7239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_9.setTransform(11.5,15.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AhKBKQgegeAAgsQAAgrAegeQAggfAqAAQArAAAfAfQAfAeAAArQAAAsgfAeQgfAfgrAAQgqAAgggfgAg7g7QgYAaAAAhQAAAjAYAZQAaAZAiAAQAiAAAYgZQAZgZAAgjQAAghgZgaQgYgYgiAAQgiAAgaAYg");
	this.shape_10.setTransform(11.45,15.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhLBLQgfgfAAgsQAAgrAfggQAggeArAAQAsAAAfAeQAgAgAAArQAAAsggAfQgfAggsgBQgrABgggggAg7g7QgZAZAAAiQAAAkAZAYQAZAaAiAAQAkAAAYgaQAagYAAgkQAAgigagZQgYgZgkAAQgiAAgZAZg");
	this.shape_11.setTransform(11.425,15.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AhMBNQgfggAAgtQAAgsAfgfQAgggAsAAQAtAAAfAgQAgAfAAAsQAAAtggAgQgfAfgtAAQgsAAgggfgAg8g8QgZAaAAAiQAAAkAZAZQAaAaAiAAQAkAAAZgaQAagZAAgkQAAgigagaQgZgZgkAAQgiAAgaAZg");
	this.shape_12.setTransform(11.375,15.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhNBNQggggAAgtQAAgtAgggQAgggAtAAQAtAAAgAgQAhAgAAAtQAAAtghAgQggAhgtAAQgtAAggghgAg9g+QgaAcAAAiQAAAlAaAZQAaAaAkAAQAjAAAagaQAagZAAglQAAgigagcQgagZgjAAQgkAAgaAZg");
	this.shape_13.setTransform(11.35,15.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B3B3").s().p("AhOBPQghghAAguQAAguAhggQAhggAtAAQAuAAAhAgQAhAgAAAuQAAAughAhQghAgguAAQgtAAghgggAg+g/QgaAcAAAjQAAAlAaAaQAbAaAkAAQAkAAAagaQAbgaAAglQAAgjgbgcQgagZgkAAQgkAAgbAZg");
	this.shape_14.setTransform(11.275,15.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghgAg/g/QgaAcAAAjQAAAmAaAaQAbAbAlAAQAlAAAagbQAbgaAAgmQAAgjgbgcQgagbglAAQglAAgbAbg");
	this.shape_15.setTransform(11.225,15.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AhQBRQgighAAgwQAAgvAighQAhgiAvAAQAwAAAhAiQAiAhAAAvQAAAwgiAhQghAigwAAQgvAAghgigAhAhAQgbAcABAkQgBAmAbAaQAbAbAmAAQAmAAAZgbQAcgaAAgmQAAgkgcgcQgZgbgmAAQgmAAgbAbg");
	this.shape_16.setTransform(11.2,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSBSQghgigBgwQABgwAhghQAigiAwAAQAwAAAiAiQAjAhgBAwQABAwgjAiQgiAigwAAQgwAAgigigAhBhBQgbAdAAAkQAAAmAbAbQAcAcAlAAQAnAAAbgcQAcgbAAgmQAAgkgcgdQgbgbgnAAQglAAgcAbg");
	this.shape_17.setTransform(11.15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_18.setTransform(11.525,15.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(242,223,223,0.824)").s().p("AhFBFQgdgbAAgqQAAgnAdgeQAdgdAoAAQAqAAAcAdQAdAeAAAnQAAAqgdAbQgcAdgqAAQgoAAgdgdg");
	this.shape_19.setTransform(11.475,15.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(230,191,191,0.851)").s().p("AhGBGQgdgcAAgqQAAgnAdggQAegcAoAAQArAAAdAcQAcAgAAAnQAAAqgcAcQgdAegrAAQgoAAgegeg");
	this.shape_20.setTransform(11.425,15.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(217,159,159,0.875)").s().p("AhHBHQgegcAAgrQAAgoAeggQAegdApAAQAsAAAdAdQAdAgAAAoQAAArgdAcQgdAfgsAAQgpAAgegfg");
	this.shape_21.setTransform(11.375,15.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(204,128,128,0.902)").s().p("AhIBIQgegcAAgsQAAgoAeghQAegdAqAAQAsAAAdAdQAeAhAAAoQAAAsgeAcQgdAfgsAAQgqAAgegfg");
	this.shape_22.setTransform(11.375,15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(191,96,96,0.925)").s().p("AhJBJQgfgdAAgsQAAgqAfggQAegeArAAQAtAAAdAeQAfAgAAAqQAAAsgfAdQgdAggtAAQgrAAgeggg");
	this.shape_23.setTransform(11.325,15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(179,64,64,0.949)").s().p("AhKBKQgfgeAAgsQAAgqAfgiQAfgdArAAQAtAAAfAdQAeAiAAAqQAAAsgeAeQgfAggtAAQgrAAgfggg");
	this.shape_24.setTransform(11.275,15.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(166,32,32,0.976)").s().p("AhLBLQgggeAAgtQAAgrAggiQAfgeAsAAQAuAAAfAeQAfAiAAArQAAAtgfAeQgfAhguAAQgsAAgfghg");
	this.shape_25.setTransform(11.225,15.725);

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
	this.shape.graphics.f("#333333").s().p("AgNARQgFgHgBgKQABgJAFgHQAGgFAHAAQAIAAAGAFQAGAHgBAJIAAABIgeAAQABAIADADQAEAEADAAQAFAAACgCQADgCACgEIAHABQgBAGgFADQgFAEgIAAQgHAAgGgFgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFgBQgDABgEADg");
	this.shape.setTransform(24.9,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgMAbQgEgEAAgGIAHABQAAADACABQADACAEAAQAEAAADgCQADgCABgDIAAgJQgEAFgHAAQgIAAgFgGQgFgGAAgIQAAgHADgEQACgGAEgCQAEgDAFAAQAHAAAFAGIAAgFIAHAAIAAAkQAAAJgCAEQgCAFgFACQgEACgGAAQgHAAgFgDgAgHgTQgDAEAAAHQAAAIADADQADAEAEAAQAFAAAEgEQADgDAAgHQAAgJgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(20.275,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgCAdIAAgpIAGAAIAAApgAgCgUIAAgIIAGAAIAAAIg");
	this.shape_2.setTransform(17.25,32.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNARQgGgHAAgKQAAgJAGgHQAFgFAIAAQAIAAAGAFQAFAHABAJIAAABIgfAAQABAIADADQADAEAFAAQADAAADgCQADgCACgEIAHABQgCAGgEADQgFAEgHAAQgJAAgFgFgAgHgMQgEAEAAAFIAXAAQgBgFgCgDQgDgEgFgBQgFABgDADg");
	this.shape_3.setTransform(14.05,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgSAVIAAgGIAageIgIAAIgQAAIAAgFIAhAAIAAAEIgVAaIgFAFIAJAAIATAAIAAAGg");
	this.shape_4.setTransform(9.775,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAKAWIAAgZIgBgHQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgCgBgDAAQgDAAgEACQgDAEAAAHIAAAXIgHAAIAAgqIAHAAIAAAHQAEgIAHABIAIAAQADACACADIACAEIAAAIIAAAZg");
	this.shape_5.setTransform(5.45,33.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASAdIgGgRIgYAAIgGARIgIAAIAWg5IAHAAIAYA5gAgDgLIgHAQIATAAIgGgPIgDgMIgDALg");
	this.shape_6.setTransform(0.525,32.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy11, new cjs.Rectangle(-3,27.6,31.1,10.799999999999997), null);


(lib.Symbol3copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgOASQgGgGAAgMQAAgMAHgGQAGgFAHAAQAJAAAGAGQAGAHAAAKQAAAIgCAFQgDAFgFADQgFADgGAAQgJAAgFgGgAgJgMQgDAEAAAIQAAAJADAEQAEAEAFAAQAGAAADgEQAEgEAAgJQAAgIgEgEQgDgEgGAAQgFAAgEAEg");
	this.shape.setTransform(21.825,1.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAgIAAgmIgGAAIAAgHIAGAAIAAgEIABgHQABgDADgCQACgCAFAAIAHABIgBAGIgFAAQgDABgCABIgBAGIAAADIAJAAIAAAHIgJAAIAAAmg");
	this.shape_1.setTransform(18.375,0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AALAXIAAgaIgBgHIgDgEQgDgCgDAAQgEAAgDAEQgEADAAAIIAAAYIgHAAIAAgsIAGAAIAAAGQAFgHAJAAQAEAAADABQAEACACACIACAGIAAAHIAAAbg");
	this.shape_2.setTransform(14.525,1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgDAfIAAgsIAHAAIAAAsgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_3.setTransform(11.125,0.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAXIAAgGIAcghIgJABIgRAAIAAgHIAkAAIAAAFIgYAcIgFAGIAKgBIAUAAIAAAHg");
	this.shape_4.setTransform(7.925,1.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAAAeIgEgEIgBgJIAAgZIgFAAIAAgGIAFAAIAAgLIAIgFIAAAQIAHAAIAAAGIgHAAIAAAZIAAAFIABABIACABIAEgBIABAIIgGAAIgFgBg");
	this.shape_5.setTransform(4.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgJAWQgEgCgCgCIgCgGIAAgHIAAgbIAIAAIAAAYIAAAIQAAADADACQACACAEAAQACAAADgCQADgCABgDIABgJIAAgXIAJAAIAAAsIgIAAIAAgGQgFAHgIAAQgEAAgDgBg");
	this.shape_6.setTransform(0.85,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AALAfIAAgdQgBgEgCgDQgCgDgFAAQgDAAgDACQgCACgBADQgCACAAAFIAAAZIgHAAIAAg9IAHAAIAAAWQAFgGAIAAQAFAAAEACQADACABADQADAEAAAFIAAAdg");
	this.shape_7.setTransform(-3.95,0.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgNASQgGgGAAgMQAAgGADgGQACgFAFgDQAFgDAFAAQAHAAAFAEQAFAEABAHIgHABQgCgFgCgCQgDgCgEAAQgFAAgDAEQgEAEAAAIQAAAJAEAEQADAEAFAAQAEAAADgCQADgDABgGIAIABQgCAIgFAEQgFAFgHAAQgIAAgGgGg");
	this.shape_8.setTransform(-8.425,1.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgMAUQgEgEgCgHIAIgBQAAAFADACQADACAEAAQAGAAACgCQADgCAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBIgHgCIgLgEIgFgDQgBgDgBgEQABgDABgCIAEgFIAEgCIAHgBQAFAAADACQAFABACADQABADABAEIgIABQAAgDgCgCQgDgCgEAAQgFAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIABADIADACIAFACIAMAEIAFADQACACAAAEQAAAEgCAEQgCADgFACQgEACgGAAQgHAAgFgEg");
	this.shape_9.setTransform(-13,1.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AALAXIAAgaIgBgHIgDgEQgDgCgDAAQgEAAgDAEQgEADAAAIIAAAYIgHAAIAAgsIAGAAIAAAGQAFgHAJAAQAEAAADABQAEACACACIACAGIAAAHIAAAbg");
	this.shape_10.setTransform(-17.575,1.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgOASQgGgGAAgMQAAgKAGgGQAGgHAJAAQAIAAAGAHQAGAGAAAKIAAACIghAAQAAAHAFAEQADAEAFAAQAEAAADgCQADgCACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgGgGgAgHgNQgEAEgBAGIAZAAQgBgGgCgDQgDgEgGAAQgFAAgDADg");
	this.shape_11.setTransform(-22.5,1.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAAAeIgDgEIgCgJIAAgZIgFAAIAAgGIAFAAIAAgLIAHgFIAAAQIAIAAIAAAGIgIAAIAAAZIABAFIABABIADABIADgBIABAIIgFAAIgGgBg");
	this.shape_12.setTransform(-26.05,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgQAUQgEgEAAgFQAAgEABgCQACgDADgCIAFgBIAHgBIANgDIAAgCQAAgFgDgCQgDgCgFAAQgFAAgCACQgCABgCAFIgIgBQABgFADgCQACgDAEgCQAFgCAFAAQAGAAAEACIAFADIACAFIAAAHIAAAKIABANIACAGIgIAAQgBgDAAgDIgJAFQgDACgEAAQgIAAgEgEgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAAEgCQADgCABgEQACgCAAgFIAAgDQgFACgHABg");
	this.shape_13.setTransform(-29.8,1.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgZAfIAAg9IAWAAIAKAAQAFACAEADQAFAEACAHQADAGAAAIQAAAHgCAFIgEAJIgGAGIgHADIgJABgAgRAYIAOAAIAIgBQAEgBACgDIAFgHQABgFAAgHQAAgJgDgGQgDgFgFgCQgDgBgHAAIgNAAg");
	this.shape_14.setTransform(-35.225,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy6, new cjs.Rectangle(-39.4,-4.9,64.7,11.600000000000001), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgOASQgGgGAAgMQAAgMAHgGQAGgFAHAAQAJAAAGAGQAGAHAAAKQAAAIgCAFQgDAFgFADQgFADgGAAQgJAAgFgGgAgJgMQgDAEAAAIQAAAJADAEQAEAEAFAAQAGAAADgEQAEgEAAgJQAAgIgEgEQgDgEgGAAQgFAAgEAEg");
	this.shape.setTransform(21.825,1.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAgIAAgmIgGAAIAAgHIAGAAIAAgEIABgHQABgDADgCQACgCAFAAIAHABIgBAGIgFAAQgDABgCABIgBAGIAAADIAJAAIAAAHIgJAAIAAAmg");
	this.shape_1.setTransform(18.375,0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AALAXIAAgaIgBgHIgDgEQgDgCgDAAQgEAAgDAEQgEADAAAIIAAAYIgHAAIAAgsIAGAAIAAAGQAFgHAJAAQAEAAADABQAEACACACIACAGIAAAHIAAAbg");
	this.shape_2.setTransform(14.525,1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgDAfIAAgsIAHAAIAAAsgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_3.setTransform(11.125,0.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAXIAAgGIAcghIgJABIgRAAIAAgHIAkAAIAAAFIgYAcIgFAGIAKgBIAUAAIAAAHg");
	this.shape_4.setTransform(7.925,1.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAAAeIgEgEIgBgJIAAgZIgFAAIAAgGIAFAAIAAgLIAIgFIAAAQIAHAAIAAAGIgHAAIAAAZIAAAFIABABIACABIAEgBIABAIIgGAAIgFgBg");
	this.shape_5.setTransform(4.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgJAWQgEgCgCgCIgCgGIAAgHIAAgbIAIAAIAAAYIAAAIQAAADADACQACACAEAAQACAAADgCQADgCABgDIABgJIAAgXIAJAAIAAAsIgIAAIAAgGQgFAHgIAAQgEAAgDgBg");
	this.shape_6.setTransform(0.85,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AALAfIAAgdQgBgEgCgDQgCgDgFAAQgDAAgDACQgCACgBADQgCACAAAFIAAAZIgHAAIAAg9IAHAAIAAAWQAFgGAIAAQAFAAAEACQADACABADQADAEAAAFIAAAdg");
	this.shape_7.setTransform(-3.95,0.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgNASQgGgGAAgMQAAgGADgGQACgFAFgDQAFgDAFAAQAHAAAFAEQAFAEABAHIgHABQgCgFgCgCQgDgCgEAAQgFAAgDAEQgEAEAAAIQAAAJAEAEQADAEAFAAQAEAAADgCQADgDABgGIAIABQgCAIgFAEQgFAFgHAAQgIAAgGgGg");
	this.shape_8.setTransform(-8.425,1.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgMAUQgEgEgCgHIAIgBQAAAFADACQADACAEAAQAGAAACgCQADgCAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBIgHgCIgLgEIgFgDQgBgDgBgEQABgDABgCIAEgFIAEgCIAHgBQAFAAADACQAFABACADQABADABAEIgIABQAAgDgCgCQgDgCgEAAQgFAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIABADIADACIAFACIAMAEIAFADQACACAAAEQAAAEgCAEQgCADgFACQgEACgGAAQgHAAgFgEg");
	this.shape_9.setTransform(-13,1.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AALAXIAAgaIgBgHIgDgEQgDgCgDAAQgEAAgDAEQgEADAAAIIAAAYIgHAAIAAgsIAGAAIAAAGQAFgHAJAAQAEAAADABQAEACACACIACAGIAAAHIAAAbg");
	this.shape_10.setTransform(-17.575,1.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgOASQgGgGAAgMQAAgKAGgGQAGgHAJAAQAIAAAGAHQAGAGAAAKIAAACIghAAQAAAHAFAEQADAEAFAAQAEAAADgCQADgCACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgGgGgAgHgNQgEAEgBAGIAZAAQgBgGgCgDQgDgEgGAAQgFAAgDADg");
	this.shape_11.setTransform(-22.5,1.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAAAeIgDgEIgCgJIAAgZIgFAAIAAgGIAFAAIAAgLIAHgFIAAAQIAIAAIAAAGIgIAAIAAAZIABAFIABABIADABIADgBIABAIIgFAAIgGgBg");
	this.shape_12.setTransform(-26.05,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgQAUQgEgEAAgFQAAgEABgCQACgDADgCIAFgBIAHgBIANgDIAAgCQAAgFgDgCQgDgCgFAAQgFAAgCACQgCABgCAFIgIgBQABgFADgCQACgDAEgCQAFgCAFAAQAGAAAEACIAFADIACAFIAAAHIAAAKIABANIACAGIgIAAQgBgDAAgDIgJAFQgDACgEAAQgIAAgEgEgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAAEgCQADgCABgEQACgCAAgFIAAgDQgFACgHABg");
	this.shape_13.setTransform(-29.8,1.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgZAfIAAg9IAWAAIAKAAQAFACAEADQAFAEACAHQADAGAAAIQAAAHgCAFIgEAJIgGAGIgHADIgJABgAgRAYIAOAAIAIgBQAEgBACgDIAFgHQABgFAAgHQAAgJgDgGQgDgFgFgCQgDgBgHAAIgNAAg");
	this.shape_14.setTransform(-35.225,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-39.4,-4.9,64.7,11.600000000000001), null);


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


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(-108.5,-17,217,34), null);


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


(lib.Symbol24 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(-15.75,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-209.1,-21.1,386.7,44.400000000000006), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol23copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.2,50.1,1.05,1.05,0,0,0,129.2,50.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AnxC2IAAlrIPjAAIAAFrg");
	this.shape.setTransform(129.425,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.4,29.9,108.5,38.50000000000001);


(lib.Symbol19 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.butS.addEventListener("click", Searching);
		
		
		
		
		document.getElementById('kword').onfocus = function(){
			document.getElementById('kword').value = "";
			
		};
		
		
		
		
				function Searching(e) {
		
							   
					var keyword = document.getElementById('kword').value;
				
					var searchQuery = " https://www.telekom.com/de/karriere/jobsuche?keyword="+keyword+"&country=407396";
					e.stopImmediatePropagation();
					window.open(searchQuery, "_blank");
					}
		
		
		window.addEventListener("keydown", keyPressed);
		function keyPressed(evt) {
			var theKey = evt.key.toLowerCase();
			if (theKey == "enter") {
				Searching(evt);
			}
		}
		
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_7
	this.butS = new lib.Symbol22();
	this.butS.name = "butS";
	this.butS.parent = this;
	this.butS.setTransform(134.95,-50.05);
	new cjs.ButtonHelper(this.butS, 0, 1, 2, false, new lib.Symbol22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.butS).wait(2));

	// text_field
	this.kword = new lib.an_TextInput({'id': 'kword', 'value':'Suche nach Stichwort/Stellen-ID', 'disabled':false, 'visible':true, 'class':'cTextInput'});

	this.kword.setTransform(19.8,-0.55,3.4625,1.6353,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.kword).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.7,-20.7,473,39.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer_5
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(-87.05,3.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-70.55,alpha:1},6).wait(35));

	// Layer_6
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.7,-1.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:-47.2,alpha:1},7).wait(28));

	// Layer_4
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40.15,3.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:-23.65,alpha:1},8).wait(19));

	// Layer_8
	this.instance_3 = new lib.Symbol28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.45,3.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({x:22.95,alpha:1},8).wait(11));

	// Layer_7
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.1,3.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({x:69.6,alpha:1},10).wait(1));

	// magenta
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0273").s().p("At0HNIAAuZIbpAAIAAOZg");
	this.shape.setTransform(-0.875,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-46,182.60000000000002,92.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Symbol 39
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(-30.35,-37.65);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).wait(15));

	// Symbol 40
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.15,-0.05);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({alpha:1},7).wait(8));

	// Symbol 41
	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.55,37);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-54.6,281.2,108.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Symbol 38
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(-72.1,-55.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(20));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.15,-18.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},6).wait(14));

	// Symbol 36
	this.instance_2 = new lib.Symbol36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-70.8,19.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},7).wait(7));

	// Symbol 35
	this.instance_3 = new lib.Symbol35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29.6,57);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-72.8,356.79999999999995,146.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 2.png
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,-58.1);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.8,-58.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({_off:true},18).wait(1));

	// Layer 3.png
	this.instance_2 = new lib.Symbol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.55,-19.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({alpha:1},6).wait(13));

	// Layer 4.png
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-61.55,19.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:1},6).wait(7));

	// Layer 1.png
	this.instance_4 = new lib.Symbol34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.4,57);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-75.1,313.1,149.1);


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
	this.shape_1.graphics.f("#4D4D4D").s().p("AAkAvQgFAAgDgDIgcgcIgbAbQgDADgFAAQgDAAgEgDQgDgDAAgFQAAgEADgDIAcgbIgdgcQgDgDAAgFQAAgDADgEQADgDAFAAQAEAAADADIAcAdIAdgeQADgDAEAAQAFAAAEADQADADgBAEQAAAFgDADIgdAdIAcAcQADADAAAEQAAAFgDAEQgCACgDAAIgCAAg");
	this.shape_1.setTransform(11.6839,15.7125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAlAwQgFABgDgDIgdgeIgbAcQgEADgFAAQgEABgDgDQgDgEgBgEQABgFADgDIAcgcIgdgcQgDgEAAgFQgBgEAEgDQADgDAFgBQAEABAEADIAcAdIAegfQADgDAFABQAFgBADAEQADADgBAEQABAFgDADIgfAeIAeAdQADADAAAFQAAAFgEADQgCACgDAAIgCAAg");
	this.shape_2.setTransform(11.633,15.7325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAmAyQgFAAgDgDIgegeIgcAcQgEAEgFAAQgEAAgDgDQgEgDAAgFQAAgFADgEIAegcIgegdQgEgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEADIAdAfIAfggQADgDAFAAQAFAAADADQAEAEgBAEQAAAFgDADIgfAfIAeAeQADADAAAFQAAAFgDADQgDADgDAAIgCAAg");
	this.shape_3.setTransform(11.583,15.7325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAnAzQgFABgDgEIgfgfIgeAeQgDADgGAAQgEABgDgEQgEgDAAgFQAAgFAEgEIAegdIgfgeQgDgDAAgGQgBgEADgEQAEgDAFAAQAFAAAEADIAeAfIAfggQAEgEAEABQAGAAADADQAEAEgBAEQAAAFgDADIggAgIAfAfQAEADgBAFQAAAFgDAEQgDACgDAAIgCAAg");
	this.shape_4.setTransform(11.5575,15.733);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B3B3").s().p("AAoA0QgFABgDgDIggggIgeAeQgEAEgFAAQgEAAgEgDQgEgEAAgFQAAgGAEgDIAfgfIgggeQgDgDAAgGQgBgEADgEQAEgEAFAAQAGAAADAEIAfAfIAhghQADgDAFAAQAFAAAEAEQADADgBAFQABAFgDADIghAgIAgAhQAEADgBAFQAAAFgEAEQgCADgEAAIgCgBg");
	this.shape_5.setTransform(11.4825,15.708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAqA2QgGABgDgEIghghIgfAgQgEADgFAAQgFABgDgEQgEgEAAgFQAAgGADgDIAgggIgggfQgEgDAAgGQAAgFADgDQAEgEAFAAQAGAAADADIAgAhIAigiQADgEAFABQAFAAAEADQAEAEgBAFQABAFgEAEIghAgIAgAiQAEADgBAFQABAFgEAEQgDADgDAAIgCAAg");
	this.shape_6.setTransform(11.433,15.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AArA3QgGABgDgEIgighIggAgQgEAEgGAAQgEAAgEgEQgEgDAAgFQAAgHAEgDIAhghIgiggQgDgDAAgHQgBgEAEgEQAEgEAFAAQAGAAAEAEIAgAhIAigjQAEgDAFABQAGgBADAEQAEAEgBAFQABAFgEAEIgiAhIAiAiQAEAEgCAFQABAGgEADQgDADgDAAIgCAAg");
	this.shape_7.setTransform(11.3819,15.7239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsA5QgGABgDgEIgjgjIghAhQgEAEgGAAQgEABgEgEQgEgEAAgFQAAgHADgDIAigiIgighQgEgDAAgHQAAgEADgEQAEgEAGAAQAGAAAEADIAhAjIAjgkQAEgEAFABQAGAAAEAEQAEAEgBAFQABAFgEAEIgjAiIAiAjQAEAEgBAFQABAGgFAEQgDADgDAAIgCAAg");
	this.shape_8.setTransform(11.3319,15.7239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgfgegAg5g6QgZAaAAAgQAAAjAZAYQAZAYAgAAQAjAAAYgYQAYgYAAgjQAAgggYgaQgYgYgjAAQggAAgZAYg");
	this.shape_9.setTransform(11.5,15.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AhKBKQgegeAAgsQAAgrAegeQAggfAqAAQArAAAfAfQAfAeAAArQAAAsgfAeQgfAfgrAAQgqAAgggfgAg7g7QgYAaAAAhQAAAjAYAZQAaAZAiAAQAiAAAYgZQAZgZAAgjQAAghgZgaQgYgYgiAAQgiAAgaAYg");
	this.shape_10.setTransform(11.45,15.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhLBLQgfgfAAgsQAAgrAfggQAggeArAAQAsAAAfAeQAgAgAAArQAAAsggAfQgfAggsgBQgrABgggggAg7g7QgZAZAAAiQAAAkAZAYQAZAaAiAAQAkAAAYgaQAagYAAgkQAAgigagZQgYgZgkAAQgiAAgZAZg");
	this.shape_11.setTransform(11.425,15.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AhMBNQgfggAAgtQAAgsAfgfQAgggAsAAQAtAAAfAgQAgAfAAAsQAAAtggAgQgfAfgtAAQgsAAgggfgAg8g8QgZAaAAAiQAAAkAZAZQAaAaAiAAQAkAAAZgaQAagZAAgkQAAgigagaQgZgZgkAAQgiAAgaAZg");
	this.shape_12.setTransform(11.375,15.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhNBNQggggAAgtQAAgtAgggQAgggAtAAQAtAAAgAgQAhAgAAAtQAAAtghAgQggAhgtAAQgtAAggghgAg9g+QgaAcAAAiQAAAlAaAZQAaAaAkAAQAjAAAagaQAagZAAglQAAgigagcQgagZgjAAQgkAAgaAZg");
	this.shape_13.setTransform(11.35,15.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B3B3").s().p("AhOBPQghghAAguQAAguAhggQAhggAtAAQAuAAAhAgQAhAgAAAuQAAAughAhQghAgguAAQgtAAghgggAg+g/QgaAcAAAjQAAAlAaAaQAbAaAkAAQAkAAAagaQAbgaAAglQAAgjgbgcQgagZgkAAQgkAAgbAZg");
	this.shape_14.setTransform(11.275,15.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghgAg/g/QgaAcAAAjQAAAmAaAaQAbAbAlAAQAlAAAagbQAbgaAAgmQAAgjgbgcQgagbglAAQglAAgbAbg");
	this.shape_15.setTransform(11.225,15.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AhQBRQgighAAgwQAAgvAighQAhgiAvAAQAwAAAhAiQAiAhAAAvQAAAwgiAhQghAigwAAQgvAAghgigAhAhAQgbAcABAkQgBAmAbAaQAbAbAmAAQAmAAAZgbQAcgaAAgmQAAgkgcgcQgZgbgmAAQgmAAgbAbg");
	this.shape_16.setTransform(11.2,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSBSQghgigBgwQABgwAhghQAigiAwAAQAwAAAiAiQAjAhgBAwQABAwgjAiQgiAigwAAQgwAAgigigAhBhBQgbAdAAAkQAAAmAbAbQAcAcAlAAQAnAAAbgcQAcgbAAgmQAAgkgcgdQgbgbgnAAQglAAgcAbg");
	this.shape_17.setTransform(11.15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AhEBEQgcgbAAgpQAAgmAcgeQAdgcAnAAQApAAAcAcQAcAeAAAmQAAApgcAbQgcAdgpAAQgnAAgdgdg");
	this.shape_18.setTransform(11.525,15.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(242,223,223,0.824)").s().p("AhFBFQgdgbAAgqQAAgnAdgeQAdgdAoAAQAqAAAcAdQAdAeAAAnQAAAqgdAbQgcAdgqAAQgoAAgdgdg");
	this.shape_19.setTransform(11.475,15.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(230,191,191,0.851)").s().p("AhGBGQgdgcAAgqQAAgnAdggQAegcAoAAQArAAAdAcQAcAgAAAnQAAAqgcAcQgdAegrAAQgoAAgegeg");
	this.shape_20.setTransform(11.425,15.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(217,159,159,0.875)").s().p("AhHBHQgegcAAgrQAAgoAeggQAegdApAAQAsAAAdAdQAdAgAAAoQAAArgdAcQgdAfgsAAQgpAAgegfg");
	this.shape_21.setTransform(11.375,15.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(204,128,128,0.902)").s().p("AhIBIQgegcAAgsQAAgoAeghQAegdAqAAQAsAAAdAdQAeAhAAAoQAAAsgeAcQgdAfgsAAQgqAAgegfg");
	this.shape_22.setTransform(11.375,15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(191,96,96,0.925)").s().p("AhJBJQgfgdAAgsQAAgqAfggQAegeArAAQAtAAAdAeQAfAgAAAqQAAAsgfAdQgdAggtAAQgrAAgeggg");
	this.shape_23.setTransform(11.325,15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(179,64,64,0.949)").s().p("AhKBKQgfgeAAgsQAAgqAfgiQAfgdArAAQAtAAAfAdQAeAiAAAqQAAAsgeAeQgfAggtAAQgrAAgfggg");
	this.shape_24.setTransform(11.275,15.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(166,32,32,0.976)").s().p("AhLBLQgggeAAgtQAAgrAggiQAfgeAsAAQAuAAAfAeQAfAiAAArQAAAtgfAeQgfAhguAAQgsAAgfghg");
	this.shape_25.setTransform(11.225,15.725);

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
	this.shape_1.setTransform(9.525,13.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606060").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(9.5,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777777").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(9.475,13.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgKALQgDgFAAgGQAAgFADgFQAFgDAFgBQAGABAEADQAEAFAAAFQAAAGgEAFQgEADgGAAQgFAAgFgDg");
	this.shape_4.setTransform(9.45,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4A4A4").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAEAEABAFQgBAGgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(9.4,13.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBBBBB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_6.setTransform(9.375,13.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(9.35,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8E8").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_8.setTransform(9.325,13.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(9.3,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(3));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHICSBVQAcAQgfAUIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAg");
	this.shape_10.setTransform(11.6144,15.6868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A4A").s().p("AhUBrQgHAAgDgHQgDgGAAgHIAAgLIABhWIAAhNQAAgMAJgGQAJgFAOAHICUBWQAdARggAUIgsAaQglAWgGACQgMAGgHgEQgGgEAAgKIAAgsQAAgIADgEQADgCAFgBQAFAAAEADQAEAEAAAIIAAAUQAAAKAIgFIA7ggQAGgEgCgEQgCgFgHgDIhvg+QgFgDgFACQgFACgBAHIAAB7QAAAJAFADQAEAEAHgFIAMgHQAAAIAEAFQADAFAJABIgVAMIgSAJQgIAEgGAAIgDgBg");
	this.shape_11.setTransform(11.6269,15.7101);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606060").s().p("AhVBtQgHAAgEgHQgCgGAAgHIAAgMIAAhWIAAhPQABgMAJgGQAJgFAOAHICXBXQAcARggAVIgsAaQgmAXgGACQgMAGgHgEQgHgEAAgLIAAgsQAAgIADgEQADgDAGAAQAFAAADACQAFAFAAAIIAAAUQAAAKAIgEIA8ghQAGgEgCgEQgCgFgHgDIhwg/QgGgEgFACQgFACgBAHIAAB+QAAAJAFADQAEAEAIgFIALgHQAAAIAFAFQADAEAJACIgWAMIgSAKQgIACgFAAIgEAAg");
	this.shape_12.setTransform(11.6213,15.6913);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777777").s().p("AhXBvQgGgBgEgHQgDgGAAgHIAAgMIABhYIAAhQQAAgMAJgGQAKgFAOAGICZBaQAdARggAUIguAcQgmAXgGACQgMAGgHgFQgHgDAAgLIAAgtQAAgJADgDQADgDAFgBQAGAAADADQAFAEAAAJIAAAVQAAAKAIgFIA9giQAGgDgCgFQgCgFgHgDQhig2gQgKQgGgDgFABQgGACAAAIIAAB/QAAAJAFAEQAEAEAIgFIAMgIQgBAIAFAGQADAEAKACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_13.setTransform(11.6268,15.7101);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("AhYBxQgHgBgEgHQgCgGAAgHIAAgMIAAhaIAAhRQABgMAJgGQAJgGAPAHICbBbQAeARghAVIguAcQgnAXgGACQgNAGgHgEQgHgEAAgLIAAguQAAgIAEgEQADgDAFAAQAFAAAEACQAFAFAAAIIAAAWQAAAKAIgFQA7ggADgCQAGgEgCgEQgCgFgHgEIh0hBQgGgDgFACQgGACAAAHIAACCQAAAJAFAEQAEADAIgEIAMgIQAAAIAEAFQAEAFAJACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_14.setTransform(11.6393,15.6995);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A4A4").s().p("AhZByQgHAAgEgHQgDgGAAgJIAAgLIABhbIAAhSQAAgOAKgGQAJgFAPAHICeBcQAeASgiAVIguAcQgoAYgHACQgMAGgHgEQgHgEAAgLIAAgvQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAAKAKgFIA+giQAGgEgCgFQgCgFgIgDQhkg4gRgKQgGgEgFACQgGACAAAIIAACDQAAAKAEADQAGAEAHgFIAMgHQAAAIAFAFQADAFAKACIgXAMIgUAKQgIAEgGAAIgDgBg");
	this.shape_15.setTransform(11.6337,15.7146);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBBBBB").s().p("AhaB0QgIgBgDgHQgDgGAAgIIAAgMIAAhcIAAhUQABgNAJgGQAKgGAPAIICgBdQAfASgiAWIgwAcQgoAYgHACQgMAGgHgEQgHgEAAgLIAAgwQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAALAKgFIA/gjQAGgEgCgFQgCgFgIgDQhmg5gRgKQgGgEgFACQgGACAAAIIAACFQAAAKAEAEQAGADAHgEIANgIQgBAIAFAFQADAFAKACIgXANIgUAKQgIADgGAAIgDAAg");
	this.shape_16.setTransform(11.6461,15.7041);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D2D2").s().p("AhcB2QgHgBgEgHQgDgGAAgJIAAgMIAAheIAAhUQABgOAJgGQAKgFAPAHICjBfQAfASgiAWIgxAdQgoAYgHACQgNAHgHgFQgHgEAAgLIAAgwQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAWQAAALAJgGIBAgjQAHgEgCgFQgCgFgIgEQhog5gRgLQgGgDgFACQgHACAAAIIAACHQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQADAFALABIgYANIgUALQgIADgGAAIgEAAg");
	this.shape_17.setTransform(11.6517,15.7228);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8E8E8").s().p("AhdB3QgHAAgEgHQgDgHAAgIIAAgNIAAhfIAAhVQABgOAKgHQAJgFAQAHIClBgQAfATgjAWQgNAJgjAUQgqAagHACQgNAGgHgEQgHgEAAgMIAAgxQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAXQAAAKAKgFIBBgkQAHgEgDgFQgCgFgIgEQhpg6gRgLQgHgDgFACQgGACgBAIIAACJQAAAKAFAEQAGAEAIgFIAMgIQAAAJAFAFQADAFALACIgYANIgVALQgIADgGAAIgEgBg");
	this.shape_18.setTransform(11.6461,15.7041);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhfB5QgHAAgEgIQgDgGAAgJIAAgMIAAhhIAAhXQABgOAKgGQAKgGAPAIICoBhQAgATgkAXIgxAdQgqAagHACQgNAGgIgEQgHgEAAgMIAAgyQAAgJADgEQADgDAGgBQAGAAAEADQAFAFAAAJIAAAXQAAALAJgFIBCglQAHgEgCgFQgCgFgIgEQhrg7gSgLQgGgDgFACQgHACAAAIIAACLQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFALACIgYANIgVALQgJAEgGAAIgEgBg");
	this.shape_19.setTransform(11.6585,15.7274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.776)").s().p("AhRBpQgHgBgDgGQgDgGAAgHIAAgLIABhTIAAhLQABgNAIgEQAJgGANAIICPBUQANAHAAAIQAAAJgPAKIiQBTQgIADgFAAIgDAAg");
	this.shape_20.setTransform(11.65,15.6948);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(227,229,232,0.8)").s().p("AhSBpQgHAAgDgHQgCgFAAgIIAAgLIAAhUIAAhLQABgNAIgEQAJgGANAIICRBUQANAHAAAJQAAAJgQAKIiMBSQgNAEgGAAIgCAAg");
	this.shape_21.setTransform(11.625,15.7663);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(198,202,209,0.827)").s().p("AhTBqQgHAAgDgHQgCgFAAgIIAAgLIABhVIAAhMQAAgMAJgFQAIgGAOAIICSBVQANAHAAAJQAAAJgQAKIiJBQQgSAHgGAAIgCAAg");
	this.shape_22.setTransform(11.6,15.8185);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(170,176,187,0.851)").s().p("AhUBrQgGAAgDgHQgDgGAAgHIAAgMIABhVIAAhMQABgNAIgFQAJgFANAHICUBWQANAHAAAJQAAAKgQAKIiHBOQgWAJgHAAIgBAAg");
	this.shape_23.setTransform(11.575,15.8882);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(142,149,164,0.875)").s().p("AhVBsQgGgBgDgHQgDgFAAgIIAAgLIABhWIAAhNQABgNAIgFQAJgFAOAHICUBXQAOAHAAAJQAAAKgQAKIiEBMQgbAMgHAAIgBAAg");
	this.shape_24.setTransform(11.55,15.9501);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(113,123,141,0.902)").s().p("AhVBtQgHAAgDgHQgDgGAAgIIAAgLIABhWIAAhOQABgNAIgFQAJgGAOAIICWBXQAOAIAAAIQAAAKgRAKIiBBMQgeANgHAAIgBAAg");
	this.shape_25.setTransform(11.525,15.995);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(85,96,118,0.925)").s().p("AhWBtQgHAAgDgHQgCgFgBgIIAAgMIABhXIAAhOQABgNAIgFQAJgGAPAIICXBYQANAHAAAJQABAKgSAKIh9BKQgjAQgHAAIgBgBg");
	this.shape_26.setTransform(11.5,16.0569);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(57,70,96,0.949)").s().p("AhXBuQgHAAgDgHQgDgGAAgHIAAgMIABhYIAAhPQABgNAJgFQAJgGAOAIICZBZQAOAHAAAJQAAAKgSALIh6BIQgoARgHAAIgBAAg");
	this.shape_27.setTransform(11.475,16.1269);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(28,43,73,0.976)").s().p("AhXBvQgIAAgCgHQgDgGgBgIIAAgLIAChZIAAhPQAAgOAJgFQAKgGAOAJICZBZQAOAHABAJQAAAKgSALIh3BGQgtAUgHAAIAAAAg");
	this.shape_28.setTransform(11.45,16.1808);

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
	this.shape_1.setTransform(9.525,13.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606060").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(9.5,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777777").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(9.475,13.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgKALQgDgFAAgGQAAgFADgFQAFgDAFgBQAGABAEADQAEAFAAAFQAAAGgEAFQgEADgGAAQgFAAgFgDg");
	this.shape_4.setTransform(9.45,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4A4A4").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAEAEABAFQgBAGgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(9.4,13.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBBBBB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_6.setTransform(9.375,13.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(9.35,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8E8").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_8.setTransform(9.325,13.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(9.3,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(3));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhTBqQgGgBgEgGQgCgGAAgHIAAgLIAAhUIAAhMQABgMAIgGQAJgFAOAHICSBVQAcAQgfAUIgsAaQgkAWgGACQgMAFgGgEQgHgDAAgLIAAgrQAAgIADgDQADgDAFAAQAFAAAEACQAEAEAAAIIAAAUQAAAKAIgFIA6ggQAGgDgCgEQgCgFgHgDQhdg0gQgJQgFgDgFABQgFACgBAHIAAB6QAAAIAFAEQAEADAHgEIAMgHQgBAHAFAFQADAFAJABIgVAMIgSAJQgHADgGAAIgEAAg");
	this.shape_10.setTransform(11.6144,15.6868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A4A").s().p("AhUBrQgHAAgDgHQgDgGAAgHIAAgLIABhWIAAhNQAAgMAJgGQAJgFAOAHICUBWQAdARggAUIgsAaQglAWgGACQgMAGgHgEQgGgEAAgKIAAgsQAAgIADgEQADgCAFgBQAFAAAEADQAEAEAAAIIAAAUQAAAKAIgFIA7ggQAGgEgCgEQgCgFgHgDIhvg+QgFgDgFACQgFACgBAHIAAB7QAAAJAFADQAEAEAHgFIAMgHQAAAIAEAFQADAFAJABIgVAMIgSAJQgIAEgGAAIgDgBg");
	this.shape_11.setTransform(11.6269,15.7101);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606060").s().p("AhVBtQgHAAgEgHQgCgGAAgHIAAgMIAAhWIAAhPQABgMAJgGQAJgFAOAHICXBXQAcARggAVIgsAaQgmAXgGACQgMAGgHgEQgHgEAAgLIAAgsQAAgIADgEQADgDAGAAQAFAAADACQAFAFAAAIIAAAUQAAAKAIgEIA8ghQAGgEgCgEQgCgFgHgDIhwg/QgGgEgFACQgFACgBAHIAAB+QAAAJAFADQAEAEAIgFIALgHQAAAIAFAFQADAEAJACIgWAMIgSAKQgIACgFAAIgEAAg");
	this.shape_12.setTransform(11.6213,15.6913);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777777").s().p("AhXBvQgGgBgEgHQgDgGAAgHIAAgMIABhYIAAhQQAAgMAJgGQAKgFAOAGICZBaQAdARggAUIguAcQgmAXgGACQgMAGgHgFQgHgDAAgLIAAgtQAAgJADgDQADgDAFgBQAGAAADADQAFAEAAAJIAAAVQAAAKAIgFIA9giQAGgDgCgFQgCgFgHgDQhig2gQgKQgGgDgFABQgGACAAAIIAAB/QAAAJAFAEQAEAEAIgFIAMgIQgBAIAFAGQADAEAKACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_13.setTransform(11.6268,15.7101);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("AhYBxQgHgBgEgHQgCgGAAgHIAAgMIAAhaIAAhRQABgMAJgGQAJgGAPAHICbBbQAeARghAVIguAcQgnAXgGACQgNAGgHgEQgHgEAAgLIAAguQAAgIAEgEQADgDAFAAQAFAAAEACQAFAFAAAIIAAAWQAAAKAIgFQA7ggADgCQAGgEgCgEQgCgFgHgEIh0hBQgGgDgFACQgGACAAAHIAACCQAAAJAFAEQAEADAIgEIAMgIQAAAIAEAFQAEAFAJACIgWAMIgTAKQgIADgGAAIgEAAg");
	this.shape_14.setTransform(11.6393,15.6995);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A4A4").s().p("AhZByQgHAAgEgHQgDgGAAgJIAAgLIABhbIAAhSQAAgOAKgGQAJgFAPAHICeBcQAeASgiAVIguAcQgoAYgHACQgMAGgHgEQgHgEAAgLIAAgvQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAAKAKgFIA+giQAGgEgCgFQgCgFgIgDQhkg4gRgKQgGgEgFACQgGACAAAIIAACDQAAAKAEADQAGAEAHgFIAMgHQAAAIAFAFQADAFAKACIgXAMIgUAKQgIAEgGAAIgDgBg");
	this.shape_15.setTransform(11.6337,15.7146);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBBBBB").s().p("AhaB0QgIgBgDgHQgDgGAAgIIAAgMIAAhcIAAhUQABgNAJgGQAKgGAPAIICgBdQAfASgiAWIgwAcQgoAYgHACQgMAGgHgEQgHgEAAgLIAAgwQAAgIADgEQADgDAGgBQAFAAAEADQAEAFAAAIIAAAWQAAALAKgFIA/gjQAGgEgCgFQgCgFgIgDQhmg5gRgKQgGgEgFACQgGACAAAIIAACFQAAAKAEAEQAGADAHgEIANgIQgBAIAFAFQADAFAKACIgXANIgUAKQgIADgGAAIgDAAg");
	this.shape_16.setTransform(11.6461,15.7041);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D2D2").s().p("AhcB2QgHgBgEgHQgDgGAAgJIAAgMIAAheIAAhUQABgOAJgGQAKgFAPAHICjBfQAfASgiAWIgxAdQgoAYgHACQgNAHgHgFQgHgEAAgLIAAgwQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAWQAAALAJgGIBAgjQAHgEgCgFQgCgFgIgEQhog5gRgLQgGgDgFACQgHACAAAIIAACHQAAAKAFAEQAFAEAIgFIANgIQgBAIAFAGQADAFALABIgYANIgUALQgIADgGAAIgEAAg");
	this.shape_17.setTransform(11.6517,15.7228);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8E8E8").s().p("AhdB3QgHAAgEgHQgDgHAAgIIAAgNIAAhfIAAhVQABgOAKgHQAJgFAQAHIClBgQAfATgjAWQgNAJgjAUQgqAagHACQgNAGgHgEQgHgEAAgMIAAgxQAAgJADgEQADgDAGgBQAFAAAEADQAFAFAAAJIAAAXQAAAKAKgFIBBgkQAHgEgDgFQgCgFgIgEQhpg6gRgLQgHgDgFACQgGACgBAIIAACJQAAAKAFAEQAGAEAIgFIAMgIQAAAJAFAFQADAFALACIgYANIgVALQgIADgGAAIgEgBg");
	this.shape_18.setTransform(11.6461,15.7041);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhfB5QgHAAgEgIQgDgGAAgJIAAgMIAAhhIAAhXQABgOAKgGQAKgGAPAIICoBhQAgATgkAXIgxAdQgqAagHACQgNAGgIgEQgHgEAAgMIAAgyQAAgJADgEQADgDAGgBQAGAAAEADQAFAFAAAJIAAAXQAAALAJgFIBCglQAHgEgCgFQgCgFgIgEQhrg7gSgLQgGgDgFACQgHACAAAIIAACLQAAAKAFAEQAFAEAIgFIANgIQAAAJAFAFQADAFALACIgYANIgVALQgJAEgGAAIgEgBg");
	this.shape_19.setTransform(11.6585,15.7274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.776)").s().p("AhRBpQgHgBgDgGQgDgGAAgHIAAgLIABhTIAAhLQABgNAIgEQAJgGANAIICPBUQANAHAAAIQAAAJgPAKIiQBTQgIADgFAAIgDAAg");
	this.shape_20.setTransform(11.65,15.6948);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(227,229,232,0.8)").s().p("AhSBpQgHAAgDgHQgCgFAAgIIAAgLIAAhUIAAhLQABgNAIgEQAJgGANAIICRBUQANAHAAAJQAAAJgQAKIiMBSQgNAEgGAAIgCAAg");
	this.shape_21.setTransform(11.625,15.7663);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(198,202,209,0.827)").s().p("AhTBqQgHAAgDgHQgCgFAAgIIAAgLIABhVIAAhMQAAgMAJgFQAIgGAOAIICSBVQANAHAAAJQAAAJgQAKIiJBQQgSAHgGAAIgCAAg");
	this.shape_22.setTransform(11.6,15.8185);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(170,176,187,0.851)").s().p("AhUBrQgGAAgDgHQgDgGAAgHIAAgMIABhVIAAhMQABgNAIgFQAJgFANAHICUBWQANAHAAAJQAAAKgQAKIiHBOQgWAJgHAAIgBAAg");
	this.shape_23.setTransform(11.575,15.8882);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(142,149,164,0.875)").s().p("AhVBsQgGgBgDgHQgDgFAAgIIAAgLIABhWIAAhNQABgNAIgFQAJgFAOAHICUBXQAOAHAAAJQAAAKgQAKIiEBMQgbAMgHAAIgBAAg");
	this.shape_24.setTransform(11.55,15.9501);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(113,123,141,0.902)").s().p("AhVBtQgHAAgDgHQgDgGAAgIIAAgLIABhWIAAhOQABgNAIgFQAJgGAOAIICWBXQAOAIAAAIQAAAKgRAKIiBBMQgeANgHAAIgBAAg");
	this.shape_25.setTransform(11.525,15.995);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(85,96,118,0.925)").s().p("AhWBtQgHAAgDgHQgCgFgBgIIAAgMIABhXIAAhOQABgNAIgFQAJgGAPAIICXBYQANAHAAAJQABAKgSAKIh9BKQgjAQgHAAIgBgBg");
	this.shape_26.setTransform(11.5,16.0569);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(57,70,96,0.949)").s().p("AhXBuQgHAAgDgHQgDgGAAgHIAAgMIABhYIAAhPQABgNAJgFQAJgGAOAIICZBZQAOAHAAAJQAAAKgSALIh6BIQgoARgHAAIgBAAg");
	this.shape_27.setTransform(11.475,16.1269);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(28,43,73,0.976)").s().p("AhXBvQgIAAgCgHQgDgGgBgIIAAgLIAChZIAAhPQAAgOAJgFQAKgGAOAJICZBZQAOAHABAJQAAAKgSALIh3BGQgtAUgHAAIAAAAg");
	this.shape_28.setTransform(11.45,16.1808);

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


(lib.Symbol46_1 = function(mode,startPosition,loop) {
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
(lib.index = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(290));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_270 = new cjs.Graphics().p("AvNCyIAAljIebAAIAAFjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(270).to({graphics:mask_graphics_270,x:315.55,y:597.3}).wait(20));

	// HL2Rem.png
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(495.85,596.15);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).to({x:316.1},13).wait(7));

	// PersonRem.png
	this.instance_1 = new lib.Symbol42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(516.8,650.9,0.764,0.764);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).wait(54));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_270 = new cjs.Graphics().p("EghdAEiIAApDMBC7AAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(270).to({graphics:mask_1_graphics_270,x:889.1,y:609.675}).wait(20));

	// aboveSearchBar.png
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(901.45,663.9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({y:603.6},8).wait(12));

	// searchBar
	this.instance_3 = new lib.Symbol19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1397.4,653.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(258).to({_off:false},0).to({x:869.35},12).wait(20));

	// logo.png
	this.instance_4 = new lib.Symbol11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-158.9,630.45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({_off:false},0).to({x:120.1},12).wait(20));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_236 = new cjs.Graphics().p("EApkA3AIAA2hIAFAAIAAWhg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EAjGA3AIAA2hIItAAIAAWhg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EAcoA3AIAA2hIRVAAIAAWhg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EAWKA3AIAA2hIZ9AAIAAWhg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EAPsA3AIAA2hMAilAAAIAAWhg");
	var mask_2_graphics_241 = new cjs.Graphics().p("EAJNA3AIAA2hMArOAAAIAAWhg");
	var mask_2_graphics_242 = new cjs.Graphics().p("EACvA3AIAA2hMAz2AAAIAAWhg");
	var mask_2_graphics_243 = new cjs.Graphics().p("EgDuA3AIAA2hMA8dAAAIAAWhg");
	var mask_2_graphics_244 = new cjs.Graphics().p("EgKMA3AIAA2hMBFFAAAIAAWhg");
	var mask_2_graphics_245 = new cjs.Graphics().p("EgQqA3AIAA2hMBNtAAAIAAWhg");
	var mask_2_graphics_246 = new cjs.Graphics().p("EgXIA3AIAA2hMBWVAAAIAAWhg");
	var mask_2_graphics_247 = new cjs.Graphics().p("EgdmA3AIAA2hMBe+AAAIAAWhg");
	var mask_2_graphics_248 = new cjs.Graphics().p("EgkEA3AIAA2hMBnmAAAIAAWhg");
	var mask_2_graphics_249 = new cjs.Graphics().p("EgqiA3AIAA2hMBwOAAAIAAWhg");
	var mask_2_graphics_250 = new cjs.Graphics().p("EgxBA3AIAA2hMB43AAAIAAWhg");
	var mask_2_graphics_251 = new cjs.Graphics().p("Eg3fA3AIAA2hMCBfAAAIAAWhg");
	var mask_2_graphics_252 = new cjs.Graphics().p("Eg99A3AIAA2hMCKHAAAIAAWhg");
	var mask_2_graphics_253 = new cjs.Graphics().p("EhEbA3AIAA2hMCSvAAAIAAWhg");
	var mask_2_graphics_254 = new cjs.Graphics().p("EhK5A3AIAA2hMCbXAAAIAAWhg");
	var mask_2_graphics_255 = new cjs.Graphics().p("EhRXA3AIAA2hMCj/AAAIAAWhg");
	var mask_2_graphics_256 = new cjs.Graphics().p("EhWTA3AIAA2hMCsnAAAIAAWhg");
	var mask_2_graphics_257 = new cjs.Graphics().p("EhanA3AIAA2hMC1PAAAIAAWhg");
	var mask_2_graphics_258 = new cjs.Graphics().p("Ehe7A3AIAA2hMC93AAAIAAWhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(236).to({graphics:mask_2_graphics_236,x:266.5002,y:352}).wait(1).to({graphics:mask_2_graphics_237,x:280.3047,y:352}).wait(1).to({graphics:mask_2_graphics_238,x:294.1092,y:352}).wait(1).to({graphics:mask_2_graphics_239,x:307.9138,y:352}).wait(1).to({graphics:mask_2_graphics_240,x:321.7183,y:352}).wait(1).to({graphics:mask_2_graphics_241,x:335.5229,y:352}).wait(1).to({graphics:mask_2_graphics_242,x:349.3274,y:352}).wait(1).to({graphics:mask_2_graphics_243,x:363.1319,y:352}).wait(1).to({graphics:mask_2_graphics_244,x:376.9365,y:352}).wait(1).to({graphics:mask_2_graphics_245,x:390.741,y:352}).wait(1).to({graphics:mask_2_graphics_246,x:404.5456,y:352}).wait(1).to({graphics:mask_2_graphics_247,x:418.3501,y:352}).wait(1).to({graphics:mask_2_graphics_248,x:432.1546,y:352}).wait(1).to({graphics:mask_2_graphics_249,x:445.9592,y:352}).wait(1).to({graphics:mask_2_graphics_250,x:459.7637,y:352}).wait(1).to({graphics:mask_2_graphics_251,x:473.5682,y:352}).wait(1).to({graphics:mask_2_graphics_252,x:487.3728,y:352}).wait(1).to({graphics:mask_2_graphics_253,x:501.1773,y:352}).wait(1).to({graphics:mask_2_graphics_254,x:514.9819,y:352}).wait(1).to({graphics:mask_2_graphics_255,x:528.7864,y:352}).wait(1).to({graphics:mask_2_graphics_256,x:532.7727,y:352}).wait(1).to({graphics:mask_2_graphics_257,x:532.7739,y:352}).wait(1).to({graphics:mask_2_graphics_258,x:600.175,y:352}).wait(32));

	// underRem
	this.instance_5 = new lib.Symbol16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(590.7,631.75,1,1,0,0,0,-9.4,0);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(236).to({_off:false},0).wait(54));

	// cls_btn
	this.mainBtns2 = new lib.Symbol54();
	this.mainBtns2.name = "mainBtns2";
	this.mainBtns2.parent = this;
	this.mainBtns2.setTransform(655.75,330.8,0.9308,0.9308);
	this.mainBtns2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mainBtns2).wait(236).to({_off:false},0).wait(54));

	// button2
	this.zCTA = new lib.Symbol30();
	this.zCTA.name = "zCTA";
	this.zCTA.parent = this;
	this.zCTA.setTransform(602.05,587.6,1,0.3521,0,0,0,613.3,364.8);
	this.zCTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zCTA).wait(236).to({_off:false},0).wait(54));

	// cut line
	this.rec = new lib.Symbol4copy3();
	this.rec.name = "rec";
	this.rec.parent = this;
	this.rec.setTransform(1258.05,576.85,0.6635,2.4736,0,0,0,50.1,50);
	this.rec._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(236).to({_off:false},0).wait(54));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_12 = new cjs.Graphics().p("AuQH3IAAvtIchAAIAAPtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_3_graphics_12,x:431.825,y:250.425}).wait(278));

	// logo.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(254.8,249.35);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:433.85},10).wait(204).to({x:238.35},9,cjs.Ease.quadOut).to({_off:true},1).wait(54));

	// HL3.png
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(865.85,257.35);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadOut).wait(60).to({alpha:0},9,cjs.Ease.quadOut).to({_off:true},1).wait(54));

	// HL2.png
	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(902.85,275.85);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadOut).wait(61).to({alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(123));

	// HL1.png
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(880.85,276.85);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadOut).wait(56).to({alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(194));

	// pict3
	this.instance_10 = new lib.Symbol42();
	this.instance_10.parent = this;
	this.instance_10.setTransform(599.75,513.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(156).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadOut).wait(60).to({scaleX:0.764,scaleY:0.764,x:516.8,y:650.9},9,cjs.Ease.quadOut).to({_off:true},1).wait(54));

	// pict2
	this.instance_11 = new lib.Symbol45();
	this.instance_11.parent = this;
	this.instance_11.setTransform(599.55,503.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(84).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadOut).wait(62).to({alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(123));

	// pict1
	this.instance_12 = new lib.Symbol44();
	this.instance_12.parent = this;
	this.instance_12.setTransform(597.5,504.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},10,cjs.Ease.quadOut).wait(74).to({alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(195));

	// Close_btn
	this.mainBtns = new lib.Symbol46_1();
	this.mainBtns.name = "mainBtns";
	this.mainBtns.parent = this;
	this.mainBtns.setTransform(1148.4,24.6,1,1,0,0,0,544.5,-97.3);

	this.timeline.addTween(cjs.Tween.get(this.mainBtns).to({_off:true},236).wait(54));

	// button
	this.instance_13 = new lib.Symbol30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(602.05,353.15,1,1,0,0,0,613.3,364.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},236).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(346.3,365.2,1366.4,433.40000000000003);
// library properties:
lib.properties = {
	id: '168476A1D4FC144EA000EC7EDD1802DC',
	width: 1200,
	height: 700,
	fps: 24,
	color: "#006666",
	opacity: 0.00,
	manifest: [
		{src:"images/Fasha.png", id:"Fasha"},
		{src:"images/HL2Rem.png", id:"HL2Rem"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Layer1_1.png", id:"Layer1_1"},
		{src:"images/Layer1_2.png", id:"Layer1_2"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer2_1.png", id:"Layer2_1"},
		{src:"images/Layer2_2.png", id:"Layer2_2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/Layer3_1.png", id:"Layer3_1"},
		{src:"images/Layer3_2.png", id:"Layer3_2"},
		{src:"images/Layer4.png", id:"Layer4"},
		{src:"images/Layer4_1.png", id:"Layer4_1"},
		{src:"images/Person.png", id:"Person"},
		{src:"images/pict1.png", id:"pict1"},
		{src:"images/pict2.png", id:"pict2"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;