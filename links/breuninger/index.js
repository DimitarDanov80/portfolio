(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.A1Back = function() {
	this.initialize(img.A1Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,694);


(lib.A1front = function() {
	this.initialize(img.A1front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,849,806);


(lib.A1middle = function() {
	this.initialize(img.A1middle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,849,1013);


(lib.A2backGr = function() {
	this.initialize(img.A2backGr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,973,649);


(lib.A2Woman = function() {
	this.initialize(img.A2Woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,575);


(lib.A3BackGr = function() {
	this.initialize(img.A3BackGr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1006,671);


(lib.A3woman1 = function() {
	this.initialize(img.A3woman1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,704);


(lib.A3woman2 = function() {
	this.initialize(img.A3woman2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,659);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,136);// helper functions:

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


(lib.Symbol219 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3,1,1).p("AhChxIB/BxABDAEIh8Bu");
	this.shape.setTransform(2.825,18.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol219, new cjs.Rectangle(-4.8,5.7,15.3,24.8), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-161.95,-45.3,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-161.9,-45.3,323.9,90.69999999999999), null);


(lib.hlNewDesktop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ALvJIQgRgGgMgMIAUgcQAKALAKACIAXAEQAIAAAKgDQAEgEAAgHQAAgHgEgFIgegJQgVgFgOgOQgMgKAAgWQAAgNAGgMQAHgKAOgIQANgGAWAAQAiAAAaASIgRAeIgVgLIgWgDIgQADIgEAJQgBAKAFABIASAJIALACQAZAFAOANQAMAMAAAWQAAAMgIAMQgJANgOAFQgNAHgWAAgAGAJDQgVgMgLgSQgNgUAAgXQABgXAKgVQAKgRAVgOQAUgLAZAAQAbAAARALQAWAOAHARQALAQAAAZIAAARIiBAAQADAMAIAIQAMAJAGACQAJAEALAAQAOAAALgGIATgNIAaAYQgPAPgPAGQgPAIgbAAQgXAAgVgKgAGMHOQgKAHgFATIBXAAQgEgQgLgKQgLgKgSABQgOgBgOAKgADQJGQgMgEgKgMIAAAUIgnAAIAAj/IAqAAIAABrQARgSAeAAQAZAAARALQAUAKALAVQALAQAAAbQAAAYgLAUQgOAWgPAHQgUALgXAAQgRAAgMgHgADSHQQgLAFgFALQgGALAAAOQAAANAGALQAFALALAEQAKAHAMAAQAOAAAIgHQAKgEAFgLQAGgLAAgNQAAgOgGgLQgFgLgKgFQgIgFgOAAQgMAAgKAFgAgJJDQgWgMgKgSQgNgRAAgaQAAgcAMgQQAIgRAWgOQATgLAZAAQAbAAARALQAWAOAHARQAKAQAAAZIgBARIh+AAQADANAHAHQAJAJAJACQAJAEALAAQAOAAAKgGQALgEAIgJIAbAYQgPAPgQAGQgOAIgbAAQgaAAgRgKgAADHOQgNAKgCAQIBVAAQgCgOgMgMQgKgKgTABQgPgBgMAKgAm+JIQgSgIgLgKIAUgcQAKALALACIAXAEQALAAAGgDQAGgEAAgHQAAgHgGgFIgdgJQgWgFgOgOQgMgMAAgUQABgPAHgKQAIgLAMgHQAOgGAVAAQAgAAAcASIgSAeIgVgLIgVgDIgPADQgGAFAAAEQAAAKAGABIASAJIAJACQAcAHALALQAMAMAAAWQAAAMgIAMQgFANgRAFQgNAHgXAAQgSAAgRgFgApsJDQgTgMgMgSQgLgRAAgaQAAgcALgQQAKgVAUgKQARgLAbAAQAZAAAUALQASAMALATQALAQAAAZIgCARIh/AAQADANAIAHQAJAJAHACIAWAEQAOAAAKgGIATg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");
	this.shape.setTransform(-1,-28.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hlNewDesktop, new cjs.Rectangle(-143.5,-87.1,285.1,117.8), null);


(lib.hl = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// new
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(2.25,1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hl, new cjs.Rectangle(-234.1,-39,472.79999999999995,80.4), null);


(lib.ctaOverAnim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// textShape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2997").s().p("AM7B2IAAiqIAXAAIAAAPQAGgIAKgGQAJgEAOAAQAQAAAOAIQANAIAIAOQAHANAAAQQAAATgHANQgIAOgNAHQgNAJgQgBQgNAAgKgEQgJgGgHgJIAABIgANkgcQgHAEgFAJQgFAJAAAKQAAAMAFAKQAFAIAIAFQAJAEAJABQAKgBAIgEQAIgFAFgIQAFgKAAgMQAAgKgFgJQgFgJgIgEQgIgFgKAAQgKAAgJAFgAKrB2IAAiqIAWAAIAAAPQAHgIAKgGQAJgEANAAQAQAAAOAIQAOAIAHAOQAIANAAAQQAAATgIANQgHAOgNAHQgNAJgQgBQgLABgKgEIgCgBQgKgGgGgJIAABIgALUgcIgDACQgGAEgEAHQgFAJAAAKQABAMAFAKQAFAIAHAFIABAAQAJAFAIAAQAKgBAIgEQAIgFAGgIQAEgKAAgMQAAgKgEgJQgGgJgIgEQgIgFgKAAQgKAAgIAFgAy3A2IANgSQALAHANABQAIgBAGgDQAHgDADgIQADgGABgJIAAh1IAZAAIAAB0QgBAQgFAMQgHAMgLAHQgNAGgQAAQgXAAgOgMgAPgA6QgPgIgHgNQgIgOAAgRQgBgSAIgNQAIgOANgIQANgIARAAQATAAANAIQANAIAHAOQAEAHACAIQABAHAAAGIAAABIAAAJIheAAQACALAFAHQAHAHAIAEQAHADAKAAQAKAAAJgFQAIgEAHgHIAPANQgJAKgMAHQgNAGgRAAQgRAAgNgHgAPsggQgHAEgFAHQgEAFgBAGIgCAFIBGAAIgBgFQgDgKgHgGQgKgJgPAAQgIAAgHADgAI2A6QgPgIgIgNQgJgOAAgTQAAgQAJgOQAIgOAPgHQAOgIAQAAQARAAAOAIQAOAHAJAOQAIAOAAAQQAAATgIAOQgJANgOAIQgOAHgRAAQgQAAgOgHgAJCgcQgJAEgFAJQgFAJAAAKQAAAMAFAKQAFAIAJAFQAIAEAKABQALgBAIgEQAIgFAGgIQAEgKAAgMQAAgKgEgJQgGgJgIgEQgIgFgLAAQgKAAgIAFgAE7A9QgMgEgIgKIAMgOQAHAGAIADQAIADAIAAQALAAAEgDQAFgEABgHQgBgHgFgDQgEgEgNgDIgEgBQgRgEgIgJQgJgHAAgOQAAgKAFgHQAFgIAJgFQAKgEANAAQAXAAARANIgLARQgNgKgQAAQgJAAgFADQgFAEABAFQgBAHAFADQAEAFAMACIAEABQATAFAJAIQAJAIAAAOQAAALgGAHQgFAJgLAEQgKAFgNgBQgMABgLgFgAgVA6QgOgIgIgNQgJgOAAgTQAAgQAJgOQAIgOAOgHQAOgIAQAAQARAAANAIQAPAHAIAOQAJAOAAAQQAAATgJAOQgIANgPAIQgNAHgRAAQgQAAgOgHgAgJgcQgIAEgGAJQgEAJAAAKQAAAMAEAKQAGAIAIAFQAJAEAJABQAKgBAJgEQAIgFAFgIQAFgKAAgMQAAgKgFgJQgFgJgIgEQgJgFgKAAQgJAAgJAFgAlJA9QgLgEgJgKIAMgOQAGAGAJADQAIADAIAAQALAAAEgDQAGgEgBgHQABgHgGgDQgFgEgLgDIgGgBQgPgEgKgJQgIgHAAgOQAAgKAFgHQAFgIAJgFQAKgEANAAQAXAAARANIgLARQgNgKgQAAQgJAAgFADQgEAEAAAFQAAAHAEADQAEAFAMACIAFABQASAFAJAIQAJAIAAAOQAAALgGAHQgFAJgLAEQgKAFgMgBQgNABgLgFgAnUA5QgNgHgIgOQgIgNABgTQAAgQAHgNQAIgOAOgIQANgIAQAAQANAAALAFQAJAFAGAJIAAgQIAXAAIAABzIgXAAIAAgTQgGALgKAFQgLAGgNgBQgQABgNgJgAnGgcQgIAEgFAJQgFAJAAAKQAAAMAFAKQAFAIAIAFQAJAEAJABQAKgBAIgEQAIgFAFgIQAFgKAAgMQAAgKgEgJQgGgJgIgEQgHgFgLAAQgJAAgJAFgAwpA6QgNgIgJgNQgIgOAAgRQABgSAHgNQAIgOANgIQANgIASAAQARAAANAIQAOAIAHAOQAHANAAAPIgBAKIhdAAQABALAHAHQAGAHAHAEQAIADAJAAQALAAAJgFQAIgEAHgHIAQANQgJAKgNAHQgNAGgQAAQgSAAgOgHgAwcggQgHAEgFAHQgFAHgBAJIBFAAQgCgOgKgHQgIgJgPAAQgJAAgHADgASgA/IAAhEIAAgFQgBgLgGgFQgIgIgMAAQgIAAgHAFQgGADgEAIQgDAEgBAEIgBAJIAABAIgYAAIAAhzIAXAAIAAANQAFgIAKgEQAJgEAMAAQAMAAALAFQAKAGAHAKQAFAKABAOIAAACIAABHgAHoA/IAAhEQAAgPgHgGQgIgIgMAAQgHAAgIAFQgGADgEAIQgFAIABAKIAAA/IgZAAIAAi0IAZAAIAABMQAGgHAIgDQAJgEAMAAQAMAAALAFQALAGAFAKQAHAKAAAQIAABHgACwA/IAAhEQAAgPgHgGQgIgIgMAAQgIAAgHAFQgGADgEAIQgFAHAAAKIAABAIgYAAIAAhzIAXAAIAAANQAFgIAKgEQAJgEAMAAQAMAAALAFQAKAGAHAKQAGAKAAAQIAABHgAhkA/IAAhzIAYAAIAABzgAidA/IAAhEQABgPgIgGQgIgIgMAAQgHAAgHAFQgHADgEAIQgEAIgBAKIAAA/IgYAAIAAi0IAYAAIAABMQAGgHAKgDQAJgEALAAQAMAAALAFQALAGAFAKQAHAKgBAQIAABHgApoA/IAAimIBoAAIAAAXIhPAAIAAAzIBHAAIAAAVIhHAAIAABHgAr5A/IAAhfIgTAAIAAgUIAUAAIAAgmIAYAAIAAAmIAZAAIAAAUIgZAAIAABfgAt5A/IAAgPIA/hQIg9AAIAAgUIBfAAIAAAPIg/BPIBDAAIAAAVgAu3A/IAAhfIgTAAIAAgUIAUAAIAAgmIAYAAIAAAmIAZAAIAAAUIgZAAIAABfgAhhhTQgDgCgCgEQgCgDAAgFQAAgDACgEQACgDADgDQAFgCAEAAQAEAAAEACIAFAGQADAEAAADQAAAFgDADQgCAEgDACQgEACgEAAQgEAAgFgCg");
	this.shape.setTransform(-8.25,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// underhape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFB05").s().p("A4MFJIAAqRMAwZAAAIAAKRg");
	this.shape_1.setTransform(-7.525,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaOverAnim, new cjs.Rectangle(-162.4,-30.6,309.8,65.80000000000001), null);


(lib.buttonAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,102,0.498)").s().p("EhdvA2sMAAAhtXMC7fAAAMAAABtXg");
	this.shape.setTransform(606.3,350.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1206.3,700.1);


(lib.backGr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E42998").s().p("EhfhBV+MAAAir7MC/DAAAMAAACr7g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backGr, new cjs.Rectangle(-611.3,-550.1,1222.6999999999998,1100.3000000000002), null);


(lib.A3Woman2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3woman2();
	this.instance.parent = this;
	this.instance.setTransform(-179,-329.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A3Woman2, new cjs.Rectangle(-179,-329.5,358,659), null);


(lib.A3woaman1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3woman1();
	this.instance.parent = this;
	this.instance.setTransform(-117,-352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A3woaman1, new cjs.Rectangle(-117,-352,234,704), null);


(lib.A3backGr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3BackGr();
	this.instance.parent = this;
	this.instance.setTransform(-540,-360.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A3backGr, new cjs.Rectangle(-540,-360.5,1006,671), null);


(lib.A2Woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A2Woman();
	this.instance.parent = this;
	this.instance.setTransform(-186.5,-287.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A2Woman_1, new cjs.Rectangle(-186.5,-287.5,373,575), null);


(lib.A2Backgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A2backGr();
	this.instance.parent = this;
	this.instance.setTransform(-486.5,-324.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A2Backgr, new cjs.Rectangle(-486.5,-324.5,973,649), null);


(lib.A1Middle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1middle();
	this.instance.parent = this;
	this.instance.setTransform(-424.5,-506.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1Middle, new cjs.Rectangle(-424.5,-506.5,849,1013), null);


(lib.A1front_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1front();
	this.instance.parent = this;
	this.instance.setTransform(-424.5,-403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1front_1, new cjs.Rectangle(-424.5,-403,849,806), null);


(lib.A1Back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1Back();
	this.instance.parent = this;
	this.instance.setTransform(-256,-347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1Back_1, new cjs.Rectangle(-256,-347,512,694), null);


(lib.Symbol218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol219();
	this.instance.parent = this;
	this.instance.setTransform(12.7,14,1,1,0,0,0,12.7,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol218, new cjs.Rectangle(-4.4,6.1,14.5,24), null);


(lib.Symbol29copy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_5_copy_3
	this.instance = new lib.Symbol218();
	this.instance.parent = this;
	this.instance.setTransform(204.8,4.6,1.6887,1.6887,0,0,0,13.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29copy5, new cjs.Rectangle(174.4,-9.2,24.5,40.4), null);


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
p.nominalBounds = new cjs.Rectangle(174.4,-9.2,29.299999999999983,40.599999999999994);


(lib.BTN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29copy5();
	this.instance.parent = this;
	this.instance.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.instance_1 = new lib.Symbol29copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("Aj6EFIAAoIIH1AAIAAIIg");
	this.shape.setTransform(185,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,-15.4,50.099999999999994,52.1);


(lib.B = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.BTN = new lib.BTN();
	this.BTN.name = "BTN";
	this.BTN.parent = this;
	this.BTN.setTransform(-123.45,13.25,0.6787,0.6787);
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.BTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(1));

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(-5.4,6.7,17.3,28.099999999999998), null);


(lib.ctaBtnUp = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// overAnim
	this.instance = new lib.ctaOverAnim();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.0833,1.0833);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,-33.7,335.8,72.30000000000001);


(lib.ctaBtnOver = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// overAnim
	this.instance = new lib.ctaOverAnim();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0833,scaleY:1.0833},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,-33.7,335.8,72.30000000000001);


(lib.ctaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaBtnUp();
	this.instance.parent = this;

	this.instance_1 = new lib.ctaBtnOver();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("A1eHAIAAuAMAq9AAAIAAOAg");
	this.shape.setTransform(3.025,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.7,-43.3,352.6,89.69999999999999);


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
		this.ctaBtn.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.parent = this;
	new cjs.ButtonHelper(this.ctaBtn, 0, 1, 2, false, new lib.ctaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-184.7,-35.3,352.7,75.9), null);


(lib.ButtonMC = function(mode,startPosition,loop) {
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
		this.ButtonAll.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ButtonAll = new lib.buttonAll();
	this.ButtonAll.name = "ButtonAll";
	this.ButtonAll.parent = this;
	this.ButtonAll.setTransform(-0.3,6.8,1.0609,1.7427,0,0,0,606,353.9);
	new cjs.ButtonHelper(this.ButtonAll, 0, 1, 2, false, new lib.buttonAll(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ButtonAll).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonMC, new cjs.Rectangle(-636.5,-609.9,1273,1219.9), null);


(lib.A3in = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// A3Woman2
	this.instance = new lib.A3Woman2();
	this.instance.parent = this;
	this.instance.setTransform(167.4,646.3,0.8188,0.8188,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:0.8195,scaleY:0.8195,x:167.7238,y:646.3688},0).wait(1).to({scaleX:0.8202,scaleY:0.8202,x:168.1976,y:646.5377},0).wait(1).to({scaleX:0.8209,scaleY:0.8209,x:168.6712,y:646.7064},0).wait(1).to({scaleX:0.8215,scaleY:0.8215,x:169.1448,y:646.8752},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:169.6182,y:647.0439},0).wait(1).to({scaleX:0.8229,scaleY:0.8229,x:170.0916,y:647.2126},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,x:170.5649,y:647.3812},0).wait(1).to({scaleX:0.8242,scaleY:0.8242,x:171.038,y:647.5498},0).wait(1).to({scaleX:0.8249,scaleY:0.8249,x:171.5111,y:647.7184},0).wait(1).to({scaleX:0.8256,scaleY:0.8256,x:171.9841,y:647.887},0).wait(1).to({scaleX:0.8263,scaleY:0.8263,x:172.457,y:648.0555},0).wait(1).to({scaleX:0.8269,scaleY:0.8269,x:172.9299,y:648.224},0).wait(1).to({scaleX:0.8276,scaleY:0.8276,x:173.4026,y:648.3924},0).wait(1).to({scaleX:0.8283,scaleY:0.8283,x:173.8752,y:648.5609},0).wait(1).to({scaleX:0.829,scaleY:0.829,x:174.3477,y:648.7292},0).wait(1).to({scaleX:0.8297,scaleY:0.8297,x:174.8202,y:648.8976},0).wait(1).to({scaleX:0.8303,scaleY:0.8303,x:175.2926,y:649.0659},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:175.7648,y:649.2342},0).wait(1).to({scaleX:0.8317,scaleY:0.8317,x:176.237,y:649.4025},0).wait(1).to({scaleX:0.8324,scaleY:0.8324,x:176.7091,y:649.5707},0).wait(1).to({scaleX:0.833,scaleY:0.833,x:177.1811,y:649.7389},0).wait(1).to({scaleX:0.8337,scaleY:0.8337,x:177.653,y:649.907},0).wait(1).to({scaleX:0.8344,scaleY:0.8344,x:178.1248,y:650.0752},0).wait(1).to({scaleX:0.8351,scaleY:0.8351,x:178.5965,y:650.2433},0).wait(1).to({scaleX:0.8357,scaleY:0.8357,x:179.0681,y:650.4113},0).wait(1).to({scaleX:0.8364,scaleY:0.8364,x:179.5396,y:650.5793},0).wait(1).to({scaleX:0.8371,scaleY:0.8371,x:180.0111,y:650.7473},0).wait(1).to({scaleX:0.8378,scaleY:0.8378,x:180.4824,y:650.9153},0).wait(1).to({scaleX:0.8384,scaleY:0.8384,x:180.9537,y:651.0832},0).wait(1).to({scaleX:0.8391,scaleY:0.8391,x:181.4248,y:651.2511},0).wait(1).to({scaleX:0.8398,scaleY:0.8398,x:181.8959,y:651.419},0).wait(1).to({scaleX:0.8405,scaleY:0.8405,x:182.3669,y:651.5868},0).wait(1).to({scaleX:0.8411,scaleY:0.8411,x:182.8378,y:651.7546},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,x:183.3085,y:651.9224},0).wait(1).to({scaleX:0.8425,scaleY:0.8425,x:183.7793,y:652.0901},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:184.2499,y:652.2578},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,x:184.7204,y:652.4255},0).wait(1).to({scaleX:0.8445,scaleY:0.8445,x:185.1908,y:652.5931},0).wait(1).to({scaleX:0.8452,scaleY:0.8452,x:185.6611,y:652.7607},0).wait(1).to({scaleX:0.8458,scaleY:0.8458,x:186.1314,y:652.9283},0).wait(1).to({scaleX:0.8465,scaleY:0.8465,x:186.6015,y:653.0958},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:187.0716,y:653.2633},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:187.5416,y:653.4308},0).wait(1).to({scaleX:0.8485,scaleY:0.8485,x:188.0114,y:653.5982},0).wait(1).to({scaleX:0.8492,scaleY:0.8492,x:188.4812,y:653.7656},0).wait(1).to({scaleX:0.8499,scaleY:0.8499,x:188.9509,y:653.933},0).wait(1).to({scaleX:0.8506,scaleY:0.8506,x:189.4205,y:654.1003},0).wait(1).to({scaleX:0.8512,scaleY:0.8512,x:189.89,y:654.2677},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:190.3594,y:654.4349},0).wait(1).to({scaleX:0.8526,scaleY:0.8526,x:190.8288,y:654.6022},0).wait(1).to({scaleX:0.8532,scaleY:0.8532,x:191.298,y:654.7694},0).wait(1).to({scaleX:0.8539,scaleY:0.8539,x:191.7671,y:654.9366},0).wait(1).to({scaleX:0.8546,scaleY:0.8546,x:192.2362,y:655.1037},0).wait(1).to({scaleX:0.8553,scaleY:0.8553,x:192.7051,y:655.2708},0).wait(1).to({scaleX:0.8559,scaleY:0.8559,x:193.174,y:655.4379},0).wait(1).to({scaleX:0.8566,scaleY:0.8566,x:193.6428,y:655.6049},0).wait(1).to({scaleX:0.8573,scaleY:0.8573,x:194.1115,y:655.7719},0).wait(1).to({scaleX:0.8579,scaleY:0.8579,x:194.58,y:655.9389},0).wait(1).to({scaleX:0.8586,scaleY:0.8586,x:195.0485,y:656.1059},0).wait(1).to({scaleX:0.8593,scaleY:0.8593,x:195.5169,y:656.2728},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:195.9853,y:656.4397},0).wait(1).to({scaleX:0.8606,scaleY:0.8606,x:196.4535,y:656.6065},0).wait(1).to({scaleX:0.8613,scaleY:0.8613,x:196.9216,y:656.7733},0).wait(1).to({scaleX:0.862,scaleY:0.862,x:197.3896,y:656.9401},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,x:197.8576,y:657.1069},0).wait(1).to({scaleX:0.8633,scaleY:0.8633,x:198.3254,y:657.2736},0).wait(1).to({scaleX:0.864,scaleY:0.864,x:198.7932,y:657.4403},0).wait(1).to({scaleX:0.8646,scaleY:0.8646,x:199.2609,y:657.6069},0).wait(1).to({scaleX:0.8653,scaleY:0.8653,x:199.7285,y:657.7735},0).wait(1).to({scaleX:0.866,scaleY:0.866,x:200.1959,y:657.9401},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.8667,scaleY:0.8667,x:200.85,y:658.25},0).wait(1));

	// A3woaman1
	this.instance_1 = new lib.A3woaman1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.7,637.25,0.857,0.857,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,scaleX:0.8581,scaleY:0.8581,x:346.2031,y:637.3667},0).wait(1).to({scaleX:0.8593,scaleY:0.8593,x:346.9561,y:637.7334},0).wait(1).to({scaleX:0.8604,scaleY:0.8604,x:347.709,y:638.1},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,x:348.4616,y:638.4666},0).wait(1).to({scaleX:0.8627,scaleY:0.8627,x:349.2142,y:638.833},0).wait(1).to({scaleX:0.8639,scaleY:0.8639,x:349.9666,y:639.1994},0).wait(1).to({scaleX:0.865,scaleY:0.865,x:350.7188,y:639.5657},0).wait(1).to({scaleX:0.8662,scaleY:0.8662,x:351.4709,y:639.932},0).wait(1).to({scaleX:0.8673,scaleY:0.8673,x:352.2229,y:640.2982},0).wait(1).to({scaleX:0.8685,scaleY:0.8685,x:352.9747,y:640.6643},0).wait(1).to({scaleX:0.8696,scaleY:0.8696,x:353.7264,y:641.0303},0).wait(1).to({scaleX:0.8708,scaleY:0.8708,x:354.4779,y:641.3963},0).wait(1).to({scaleX:0.8719,scaleY:0.8719,x:355.2293,y:641.7622},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:355.9805,y:642.128},0).wait(1).to({scaleX:0.8742,scaleY:0.8742,x:356.7316,y:642.4938},0).wait(1).to({scaleX:0.8754,scaleY:0.8754,x:357.4825,y:642.8594},0).wait(1).to({scaleX:0.8765,scaleY:0.8765,x:358.2333,y:643.225},0).wait(1).to({scaleX:0.8777,scaleY:0.8777,x:358.984,y:643.5906},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:359.7345,y:643.956},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:360.4848,y:644.3214},0).wait(1).to({scaleX:0.8811,scaleY:0.8811,x:361.2351,y:644.6868},0).wait(1).to({scaleX:0.8823,scaleY:0.8823,x:361.9851,y:645.052},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:362.735,y:645.4172},0).wait(1).to({scaleX:0.8846,scaleY:0.8846,x:363.4848,y:645.7823},0).wait(1).to({scaleX:0.8857,scaleY:0.8857,x:364.2344,y:646.1474},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,x:364.9839,y:646.5123},0).wait(1).to({scaleX:0.888,scaleY:0.888,x:365.7332,y:646.8772},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:366.4824,y:647.2421},0).wait(1).to({scaleX:0.8903,scaleY:0.8903,x:367.2315,y:647.6068},0).wait(1).to({scaleX:0.8914,scaleY:0.8914,x:367.9804,y:647.9715},0).wait(1).to({scaleX:0.8926,scaleY:0.8926,x:368.7291,y:648.3361},0).wait(1).to({scaleX:0.8937,scaleY:0.8937,x:369.4777,y:648.7007},0).wait(1).to({scaleX:0.8949,scaleY:0.8949,x:370.2262,y:649.0651},0).wait(1).to({scaleX:0.896,scaleY:0.896,x:370.9745,y:649.4295},0).wait(1).to({scaleX:0.8972,scaleY:0.8972,x:371.7226,y:649.7939},0).wait(1).to({scaleX:0.8983,scaleY:0.8983,x:372.4707,y:650.1581},0).wait(1).to({scaleX:0.8994,scaleY:0.8994,x:373.2185,y:650.5223},0).wait(1).to({scaleX:0.9006,scaleY:0.9006,x:373.9663,y:650.8864},0).wait(1).to({scaleX:0.9017,scaleY:0.9017,x:374.7138,y:651.2505},0).wait(1).to({scaleX:0.9029,scaleY:0.9029,x:375.4613,y:651.6144},0).wait(1).to({scaleX:0.904,scaleY:0.904,x:376.2086,y:651.9783},0).wait(1).to({scaleX:0.9052,scaleY:0.9052,x:376.9557,y:652.3422},0).wait(1).to({scaleX:0.9063,scaleY:0.9063,x:377.7027,y:652.7059},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,x:378.4495,y:653.0696},0).wait(1).to({scaleX:0.9086,scaleY:0.9086,x:379.1962,y:653.4332},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,x:379.9428,y:653.7968},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:380.6892,y:654.1603},0).wait(1).to({scaleX:0.912,scaleY:0.912,x:381.4355,y:654.5237},0).wait(1).to({scaleX:0.9131,scaleY:0.9131,x:382.1816,y:654.887},0).wait(1).to({scaleX:0.9143,scaleY:0.9143,x:382.9276,y:655.2503},0).wait(1).to({scaleX:0.9154,scaleY:0.9154,x:383.6734,y:655.6135},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:384.4191,y:655.9766},0).wait(1).to({scaleX:0.9177,scaleY:0.9177,x:385.1646,y:656.3396},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:385.91,y:656.7026},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:386.6552,y:657.0655},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:387.4003,y:657.4284},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:388.1453,y:657.7911},0).wait(1).to({scaleX:0.9234,scaleY:0.9234,x:388.8901,y:658.1538},0).wait(1).to({scaleX:0.9245,scaleY:0.9245,x:389.6348,y:658.5164},0).wait(1).to({scaleX:0.9257,scaleY:0.9257,x:390.3793,y:658.879},0).wait(1).to({scaleX:0.9268,scaleY:0.9268,x:391.1236,y:659.2415},0).wait(1).to({scaleX:0.9279,scaleY:0.9279,x:391.8679,y:659.6039},0).wait(1).to({scaleX:0.9291,scaleY:0.9291,x:392.6119,y:659.9662},0).wait(1).to({scaleX:0.9302,scaleY:0.9302,x:393.3559,y:660.3285},0).wait(1).to({scaleX:0.9314,scaleY:0.9314,x:394.0996,y:660.6907},0).wait(1).to({scaleX:0.9325,scaleY:0.9325,x:394.8433,y:661.0528},0).wait(1).to({scaleX:0.9336,scaleY:0.9336,x:395.5868,y:661.4149},0).wait(1).to({scaleX:0.9348,scaleY:0.9348,x:396.3301,y:661.7768},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,x:397.0733,y:662.1388},0).wait(1).to({scaleX:0.937,scaleY:0.937,x:397.8164,y:662.5006},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9382,scaleY:0.9382,x:398.8,y:663.15},0).wait(1));

	// A3BackGr.jpg
	this.instance_2 = new lib.A3backGr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(288.4,646.05,0.9184,0.9184,0,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-37,regY:-25,scaleX:0.9185,scaleY:0.9185,x:254.3,y:622.75},0).wait(1).to({scaleX:0.9187,scaleY:0.9187,x:254.75,y:622.85},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:255.25,y:622.95},0).wait(1).to({scaleX:0.919,scaleY:0.919,x:255.7,y:623.05},0).wait(1).to({scaleX:0.9191,scaleY:0.9191,x:256.15,y:623.15},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,x:256.6,y:623.25},0).wait(1).to({scaleX:0.9194,scaleY:0.9194,x:257.1,y:623.35},0).wait(1).to({scaleX:0.9196,scaleY:0.9196,x:257.55,y:623.45},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,x:257.95,y:623.6},0).wait(1).to({scaleX:0.9199,scaleY:0.9199,x:258.4,y:623.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:258.85,y:623.8},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:259.3,y:623.9},0).wait(1).to({scaleX:0.9203,scaleY:0.9203,x:259.8,y:624},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:260.25,y:624.15},0).wait(1).to({scaleX:0.9206,scaleY:0.9206,x:260.7,y:624.25},0).wait(1).to({scaleX:0.9208,scaleY:0.9208,x:261.15,y:624.35},0).wait(1).to({scaleX:0.9209,scaleY:0.9209,x:261.6,y:624.45},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:262,y:624.5},0).wait(1).to({scaleX:0.9212,scaleY:0.9212,x:262.45,y:624.6},0).wait(1).to({scaleX:0.9214,scaleY:0.9214,x:262.9,y:624.75},0).wait(1).to({scaleX:0.9215,scaleY:0.9215,x:263.35,y:624.85},0).wait(1).to({scaleX:0.9217,scaleY:0.9217,x:263.8,y:624.95},0).wait(1).to({scaleX:0.9218,scaleY:0.9218,x:264.25,y:625.05},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:264.7,y:625.15},0).wait(1).to({scaleX:0.9221,scaleY:0.9221,x:265.1,y:625.25},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:265.55,y:625.35},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,x:265.95,y:625.5},0).wait(1).to({scaleX:0.9225,scaleY:0.9225,x:266.4,y:625.6},0).wait(1).to({scaleX:0.9227,scaleY:0.9227,x:266.85,y:625.7},0).wait(1).to({scaleX:0.9228,scaleY:0.9228,x:267.25,y:625.8},0).wait(1).to({scaleX:0.923,scaleY:0.923,x:267.7,y:625.9},0).wait(1).to({scaleX:0.9231,scaleY:0.9231,x:268.15,y:625.95},0).wait(1).to({scaleX:0.9233,scaleY:0.9233,x:268.6,y:626.05},0).wait(1).to({scaleX:0.9234,scaleY:0.9234,x:269,y:626.15},0).wait(1).to({scaleX:0.9236,scaleY:0.9236,x:269.45,y:626.25},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:269.85,y:626.35},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,x:270.25,y:626.45},0).wait(1).to({scaleX:0.924,scaleY:0.924,x:270.7,y:626.6},0).wait(1).to({scaleX:0.9241,scaleY:0.9241,x:271.1,y:626.7},0).wait(1).to({scaleX:0.9243,scaleY:0.9243,x:271.55,y:626.8},0).wait(1).to({scaleX:0.9244,scaleY:0.9244,x:271.95,y:626.9},0).wait(1).to({scaleX:0.9245,scaleY:0.9245,x:272.4,y:627},0).wait(1).to({scaleX:0.9247,scaleY:0.9247,x:272.8,y:627.1},0).wait(1).to({scaleX:0.9248,scaleY:0.9248,x:273.25,y:627.2},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:273.65,y:627.3},0).wait(1).to({scaleX:0.9251,scaleY:0.9251,x:274.05,y:627.35},0).wait(1).to({scaleX:0.9252,scaleY:0.9252,x:274.45,y:627.45},0).wait(1).to({scaleX:0.9254,scaleY:0.9254,x:274.9,y:627.55},0).wait(1).to({scaleX:0.9255,scaleY:0.9255,x:275.3,y:627.65},0).wait(1).to({scaleX:0.9256,scaleY:0.9256,x:275.7,y:627.75},0).wait(1).to({scaleX:0.9258,scaleY:0.9258,x:276.15,y:627.85},0).wait(1).to({scaleX:0.9259,scaleY:0.9259,x:276.55,y:627.95},0).wait(1).to({scaleX:0.9261,scaleY:0.9261,x:276.95,y:628.05},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,x:277.4,y:628.15},0).wait(1).to({scaleX:0.9263,scaleY:0.9263,x:277.8,y:628.25},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,x:278.15,y:628.35},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:278.55,y:628.45},0).wait(1).to({scaleX:0.9267,scaleY:0.9267,x:278.95,y:628.55},0).wait(1).to({scaleX:0.9269,scaleY:0.9269,x:279.4,y:628.65},0).wait(1).to({scaleX:0.927,scaleY:0.927,x:279.8,y:628.75},0).wait(1).to({scaleX:0.9271,scaleY:0.9271,x:280.2,y:628.8},0).wait(1).to({scaleX:0.9273,scaleY:0.9273,x:280.6,y:628.9},0).wait(1).to({scaleX:0.9274,scaleY:0.9274,x:281,y:629},0).wait(1).to({scaleX:0.9275,scaleY:0.9275,x:281.4,y:629.1},0).wait(1).to({scaleX:0.9277,scaleY:0.9277,x:281.8,y:629.2},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:282.15,y:629.25},0).wait(1).to({scaleX:0.9279,scaleY:0.9279,x:282.55,y:629.35},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:282.95,y:629.45},0).wait(1).to({scaleX:0.9282,scaleY:0.9282,x:283.35,y:629.55},0).wait(1).to({scaleX:0.9283,scaleY:0.9283,x:283.75,y:629.65},0).wait(1).to({regX:0.3,regY:0.1,scaleX:0.9285,scaleY:0.9285,x:319.15,y:653.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,314.6,959.5,678.6999999999999);


(lib.A2in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// A2Woman
	this.instance = new lib.A2Woman_1();
	this.instance.parent = this;
	this.instance.setTransform(234.35,604.9,0.9014,0.9014,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:0.9041,scaleY:0.9041,x:234.0766,y:605.0112},0).wait(1).to({scaleX:0.9068,scaleY:0.9068,x:233.9056,y:605.2194},0).wait(1).to({scaleX:0.9095,scaleY:0.9095,x:233.7371,y:605.4245},0).wait(1).to({scaleX:0.9122,scaleY:0.9122,x:233.5711,y:605.6267},0).wait(1).to({scaleX:0.9148,scaleY:0.9148,x:233.4075,y:605.8259},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:233.2464,y:606.0221},0).wait(1).to({scaleX:0.9198,scaleY:0.9198,x:233.0877,y:606.2153},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:232.9315,y:606.4056},0).wait(1).to({scaleX:0.9248,scaleY:0.9248,x:232.7778,y:606.5928},0).wait(1).to({scaleX:0.9272,scaleY:0.9272,x:232.6265,y:606.777},0).wait(1).to({scaleX:0.9296,scaleY:0.9296,x:232.4777,y:606.9582},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,x:232.3313,y:607.1364},0).wait(1).to({scaleX:0.9342,scaleY:0.9342,x:232.1874,y:607.3117},0).wait(1).to({scaleX:0.9364,scaleY:0.9364,x:232.046,y:607.4839},0).wait(1).to({scaleX:0.9386,scaleY:0.9386,x:231.907,y:607.6532},0).wait(1).to({scaleX:0.9408,scaleY:0.9408,x:231.7705,y:607.8194},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,x:231.6364,y:607.9827},0).wait(1).to({scaleX:0.945,scaleY:0.945,x:231.5048,y:608.1429},0).wait(1).to({scaleX:0.9471,scaleY:0.9471,x:231.3757,y:608.3002},0).wait(1).to({scaleX:0.9491,scaleY:0.9491,x:231.249,y:608.4544},0).wait(1).to({scaleX:0.9511,scaleY:0.9511,x:231.1248,y:608.6057},0).wait(1).to({scaleX:0.953,scaleY:0.953,x:231.003,y:608.754},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:230.8837,y:608.8993},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,x:230.7669,y:609.0415},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:230.6525,y:609.1808},0).wait(1).to({scaleX:0.9604,scaleY:0.9604,x:230.5406,y:609.3171},0).wait(1).to({scaleX:0.9621,scaleY:0.9621,x:230.4311,y:609.4504},0).wait(1).to({scaleX:0.9638,scaleY:0.9638,x:230.3241,y:609.5807},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,x:230.2196,y:609.708},0).wait(1).to({scaleX:0.9671,scaleY:0.9671,x:230.1175,y:609.8323},0).wait(1).to({scaleX:0.9687,scaleY:0.9687,x:230.0179,y:609.9537},0).wait(1).to({scaleX:0.9702,scaleY:0.9702,x:229.9207,y:610.072},0).wait(1).to({scaleX:0.9717,scaleY:0.9717,x:229.826,y:610.1873},0).wait(1).to({scaleX:0.9732,scaleY:0.9732,x:229.7338,y:610.2996},0).wait(1).to({scaleX:0.9746,scaleY:0.9746,x:229.644,y:610.409},0).wait(1).to({scaleX:0.976,scaleY:0.976,x:229.5566,y:610.5153},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:229.4718,y:610.6186},0).wait(1).to({scaleX:0.9787,scaleY:0.9787,x:229.3894,y:610.719},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:229.3094,y:610.8163},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:229.2319,y:610.9107},0).wait(1).to({scaleX:0.9824,scaleY:0.9824,x:229.1569,y:611.0021},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,x:229.0844,y:611.0904},0).wait(1).to({scaleX:0.9847,scaleY:0.9847,x:229.0143,y:611.1758},0).wait(1).to({scaleX:0.9857,scaleY:0.9857,x:228.9466,y:611.2582},0).wait(1).to({scaleX:0.9868,scaleY:0.9868,x:228.8814,y:611.3375},0).wait(1).to({scaleX:0.9878,scaleY:0.9878,x:228.8187,y:611.4139},0).wait(1).to({scaleX:0.9887,scaleY:0.9887,x:228.7584,y:611.4873},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:228.7006,y:611.5577},0).wait(1).to({scaleX:0.9905,scaleY:0.9905,x:228.6453,y:611.6251},0).wait(1).to({scaleX:0.9914,scaleY:0.9914,x:228.5924,y:611.6895},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,x:228.542,y:611.7509},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,x:228.494,y:611.8093},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:228.4485,y:611.8647},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,x:228.4054,y:611.9172},0).wait(1).to({scaleX:0.995,scaleY:0.995,x:228.3649,y:611.9666},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,x:228.3267,y:612.013},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:228.2911,y:612.0564},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,x:228.2579,y:612.0969},0).wait(1).to({scaleX:0.9972,scaleY:0.9972,x:228.2271,y:612.1343},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,x:228.1988,y:612.1688},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:228.173,y:612.2002},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,x:228.1496,y:612.2287},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,x:228.1287,y:612.2541},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:228.1103,y:612.2766},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:228.0943,y:612.2961},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:228.0807,y:612.3126},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:228.0697,y:612.326},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:228.0611,y:612.3365},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:228.0549,y:612.344},0).wait(1).to({scaleX:1,scaleY:1,x:228.0512,y:612.3485},0).wait(1).to({x:228.2,y:612.4},0).wait(1));

	// A2Backgr
	this.instance_1 = new lib.A2Backgr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(290.4,570.2,0.7977,0.7977,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0,scaleX:0.7984,scaleY:0.7984,y:570.2042},0).wait(1).to({scaleX:0.799,scaleY:0.799,y:570.307},0).wait(1).to({scaleX:0.7997,scaleY:0.7997,y:570.4083},0).wait(1).to({scaleX:0.8003,scaleY:0.8003,y:570.5081},0).wait(1).to({scaleX:0.8009,scaleY:0.8009,y:570.6064},0).wait(1).to({scaleX:0.8015,scaleY:0.8015,y:570.7033},0).wait(1).to({scaleX:0.8021,scaleY:0.8021,y:570.7986},0).wait(1).to({scaleX:0.8027,scaleY:0.8027,y:570.8925},0).wait(1).to({scaleX:0.8033,scaleY:0.8033,y:570.9849},0).wait(1).to({scaleX:0.8039,scaleY:0.8039,y:571.0759},0).wait(1).to({scaleX:0.8045,scaleY:0.8045,y:571.1653},0).wait(1).to({scaleX:0.805,scaleY:0.805,y:571.2533},0).wait(1).to({scaleX:0.8056,scaleY:0.8056,y:571.3398},0).wait(1).to({scaleX:0.8061,scaleY:0.8061,y:571.4248},0).wait(1).to({scaleX:0.8066,scaleY:0.8066,y:571.5084},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,y:571.5904},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,y:571.671},0).wait(1).to({scaleX:0.8082,scaleY:0.8082,y:571.7501},0).wait(1).to({scaleX:0.8087,scaleY:0.8087,y:571.8277},0).wait(1).to({scaleX:0.8092,scaleY:0.8092,y:571.9039},0).wait(1).to({scaleX:0.8096,scaleY:0.8096,y:571.9786},0).wait(1).to({scaleX:0.8101,scaleY:0.8101,y:572.0517},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,y:572.1235},0).wait(1).to({scaleX:0.811,scaleY:0.811,y:572.1937},0).wait(1).to({scaleX:0.8114,scaleY:0.8114,y:572.2624},0).wait(1).to({scaleX:0.8119,scaleY:0.8119,y:572.3297},0).wait(1).to({scaleX:0.8123,scaleY:0.8123,y:572.3955},0).wait(1).to({scaleX:0.8127,scaleY:0.8127,y:572.4598},0).wait(1).to({scaleX:0.8131,scaleY:0.8131,y:572.5227},0).wait(1).to({scaleX:0.8135,scaleY:0.8135,y:572.584},0).wait(1).to({scaleX:0.8139,scaleY:0.8139,y:572.6439},0).wait(1).to({scaleX:0.8142,scaleY:0.8142,y:572.7023},0).wait(1).to({scaleX:0.8146,scaleY:0.8146,y:572.7592},0).wait(1).to({scaleX:0.8149,scaleY:0.8149,y:572.8147},0).wait(1).to({scaleX:0.8153,scaleY:0.8153,y:572.8687},0).wait(1).to({scaleX:0.8156,scaleY:0.8156,y:572.9212},0).wait(1).to({scaleX:0.8159,scaleY:0.8159,y:572.9722},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,y:573.0217},0).wait(1).to({scaleX:0.8166,scaleY:0.8166,y:573.0698},0).wait(1).to({scaleX:0.8169,scaleY:0.8169,y:573.1163},0).wait(1).to({scaleX:0.8172,scaleY:0.8172,y:573.1614},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,y:573.205},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,y:573.2472},0).wait(1).to({scaleX:0.818,scaleY:0.818,y:573.2878},0).wait(1).to({scaleX:0.8182,scaleY:0.8182,y:573.327},0).wait(1).to({scaleX:0.8184,scaleY:0.8184,y:573.3647},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,y:573.401},0).wait(1).to({scaleX:0.8189,scaleY:0.8189,y:573.4357},0).wait(1).to({scaleX:0.8191,scaleY:0.8191,y:573.469},0).wait(1).to({scaleX:0.8193,scaleY:0.8193,y:573.5008},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,y:573.5311},0).wait(1).to({scaleX:0.8197,scaleY:0.8197,y:573.5599},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,y:573.5873},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:573.6131},0).wait(1).to({scaleX:0.8202,scaleY:0.8202,y:573.6375},0).wait(1).to({scaleX:0.8203,scaleY:0.8203,y:573.6605},0).wait(1).to({scaleX:0.8205,scaleY:0.8205,y:573.6819},0).wait(1).to({scaleX:0.8206,scaleY:0.8206,y:573.7019},0).wait(1).to({scaleX:0.8207,scaleY:0.8207,y:573.7203},0).wait(1).to({scaleX:0.8208,scaleY:0.8208,y:573.7373},0).wait(1).to({scaleX:0.8209,scaleY:0.8209,y:573.7529},0).wait(1).to({scaleX:0.821,scaleY:0.821,y:573.7669},0).wait(1).to({scaleX:0.8211,scaleY:0.8211,y:573.7795},0).wait(1).to({scaleX:0.8212,scaleY:0.8212,y:573.7906},0).wait(1).to({y:573.8002},0).wait(1).to({scaleX:0.8213,scaleY:0.8213,y:573.8083},0).wait(1).to({y:573.815},0).wait(1).to({y:573.8201},0).wait(1).to({scaleX:0.8214,scaleY:0.8214,y:573.8238},0).wait(1).to({y:573.8261},0).wait(1).to({y:573.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.2,307.3,799.3000000000001,592.5999999999999);


(lib.А1in = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// A1front
	this.instance = new lib.A1front_1();
	this.instance.parent = this;
	this.instance.setTransform(388.85,632.55,1.0157,1.0157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02,x:388.9633,y:633.3919},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,x:389.075,y:634.2219},0).wait(1).to({scaleX:1.0283,scaleY:1.0283,x:389.185,y:635.0399},0).wait(1).to({scaleX:1.0323,scaleY:1.0323,x:389.2935,y:635.846},0).wait(1).to({scaleX:1.0363,scaleY:1.0363,x:389.4003,y:636.6402},0).wait(1).to({scaleX:1.0402,scaleY:1.0402,x:389.5056,y:637.4224},0).wait(1).to({scaleX:1.0441,scaleY:1.0441,x:389.6092,y:638.1926},0).wait(1).to({scaleX:1.0479,scaleY:1.0479,x:389.7113,y:638.951},0).wait(1).to({scaleX:1.0517,scaleY:1.0517,x:389.8117,y:639.6973},0).wait(1).to({scaleX:1.0554,scaleY:1.0554,x:389.9105,y:640.4318},0).wait(1).to({scaleX:1.059,scaleY:1.059,x:390.0077,y:641.1543},0).wait(1).to({scaleX:1.0626,scaleY:1.0626,x:390.1033,y:641.8648},0).wait(1).to({scaleX:1.0661,scaleY:1.0661,x:390.1973,y:642.5634},0).wait(1).to({scaleX:1.0696,scaleY:1.0696,x:390.2897,y:643.2501},0).wait(1).to({scaleX:1.0729,scaleY:1.0729,x:390.3805,y:643.9248},0).wait(1).to({scaleX:1.0763,scaleY:1.0763,x:390.4697,y:644.5876},0).wait(1).to({scaleX:1.0796,scaleY:1.0796,x:390.5573,y:645.2384},0).wait(1).to({scaleX:1.0828,scaleY:1.0828,x:390.6432,y:645.8774},0).wait(1).to({scaleX:1.0859,scaleY:1.0859,x:390.7276,y:646.5043},0).wait(1).to({scaleX:1.089,scaleY:1.089,x:390.8103,y:647.1193},0).wait(1).to({scaleX:1.092,scaleY:1.092,x:390.8915,y:647.7224},0).wait(1).to({scaleX:1.095,scaleY:1.095,x:390.971,y:648.3135},0).wait(1).to({scaleX:1.0979,scaleY:1.0979,x:391.0489,y:648.8927},0).wait(1).to({scaleX:1.1008,scaleY:1.1008,x:391.1253,y:649.46},0).wait(1).to({scaleX:1.1036,scaleY:1.1036,x:391.2,y:650.0153},0).wait(1).to({scaleX:1.1063,scaleY:1.1063,x:391.2731,y:650.5586},0).wait(1).to({scaleX:1.109,scaleY:1.109,x:391.3446,y:651.0901},0).wait(1).to({scaleX:1.1116,scaleY:1.1116,x:391.4145,y:651.6096},0).wait(1).to({scaleX:1.1141,scaleY:1.1141,x:391.4828,y:652.1171},0).wait(1).to({scaleX:1.1166,scaleY:1.1166,x:391.5495,y:652.6127},0).wait(1).to({scaleX:1.1191,scaleY:1.1191,x:391.6145,y:653.0963},0).wait(1).to({scaleX:1.1214,scaleY:1.1214,x:391.678,y:653.5681},0).wait(1).to({scaleX:1.1238,scaleY:1.1238,x:391.7399,y:654.0278},0).wait(1).to({scaleX:1.126,scaleY:1.126,x:391.8001,y:654.4757},0).wait(1).to({scaleX:1.1282,scaleY:1.1282,x:391.8588,y:654.9115},0).wait(1).to({scaleX:1.1303,scaleY:1.1303,x:391.9158,y:655.3355},0).wait(1).to({scaleX:1.1324,scaleY:1.1324,x:391.9713,y:655.7475},0).wait(1).to({scaleX:1.1344,scaleY:1.1344,x:392.0251,y:656.1475},0).wait(1).to({scaleX:1.1364,scaleY:1.1364,x:392.0773,y:656.5357},0).wait(1).to({scaleX:1.1383,scaleY:1.1383,x:392.1279,y:656.9118},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,x:392.1769,y:657.2761},0).wait(1).to({scaleX:1.1419,scaleY:1.1419,x:392.2243,y:657.6284},0).wait(1).to({scaleX:1.1436,scaleY:1.1436,x:392.2701,y:657.9687},0).wait(1).to({scaleX:1.1452,scaleY:1.1452,x:392.3143,y:658.2971},0).wait(1).to({scaleX:1.1468,scaleY:1.1468,x:392.3569,y:658.6136},0).wait(1).to({scaleX:1.1483,scaleY:1.1483,x:392.3979,y:658.9181},0).wait(1).to({scaleX:1.1498,scaleY:1.1498,x:392.4372,y:659.2107},0).wait(1).to({scaleX:1.1512,scaleY:1.1512,x:392.475,y:659.4913},0).wait(1).to({scaleX:1.1526,scaleY:1.1526,x:392.5112,y:659.76},0).wait(1).to({scaleX:1.1539,scaleY:1.1539,x:392.5457,y:660.0168},0).wait(1).to({scaleX:1.1551,scaleY:1.1551,x:392.5786,y:660.2616},0).wait(1).to({scaleX:1.1563,scaleY:1.1563,x:392.61,y:660.4945},0).wait(1).to({scaleX:1.1574,scaleY:1.1574,x:392.6397,y:660.7154},0).wait(1).to({scaleX:1.1584,scaleY:1.1584,x:392.6678,y:660.9244},0).wait(1).to({scaleX:1.1594,scaleY:1.1594,x:392.6943,y:661.1214},0).wait(1).to({scaleX:1.1604,scaleY:1.1604,x:392.7192,y:661.3065},0).wait(1).to({scaleX:1.1612,scaleY:1.1612,x:392.7425,y:661.4797},0).wait(1).to({scaleX:1.162,scaleY:1.162,x:392.7642,y:661.6409},0).wait(1).to({scaleX:1.1628,scaleY:1.1628,x:392.7843,y:661.7902},0).wait(1).to({scaleX:1.1635,scaleY:1.1635,x:392.8028,y:661.9275},0).wait(1).to({scaleX:1.1641,scaleY:1.1641,x:392.8197,y:662.0529},0).wait(1).to({scaleX:1.1647,scaleY:1.1647,x:392.8349,y:662.1664},0).wait(1).to({scaleX:1.1652,scaleY:1.1652,x:392.8486,y:662.2678},0).wait(1).to({scaleX:1.1656,scaleY:1.1656,x:392.8606,y:662.3574},0).wait(1).to({scaleX:1.166,scaleY:1.166,x:392.8711,y:662.435},0).wait(1).to({scaleX:1.1664,scaleY:1.1664,x:392.8799,y:662.5007},0).wait(1).to({scaleX:1.1666,scaleY:1.1666,x:392.8872,y:662.5545},0).wait(1).to({scaleX:1.1668,scaleY:1.1668,x:392.8928,y:662.5963},0).wait(1).to({scaleX:1.167,scaleY:1.167,x:392.8968,y:662.6261},0).wait(1).to({scaleX:1.1671,scaleY:1.1671,x:392.8992,y:662.644},0).wait(1).to({x:392.9,y:662.65},0).wait(1));

	// A1Middle
	this.instance_1 = new lib.A1Middle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383.9,538.25,0.9188,0.9188);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.921,scaleY:0.921,x:384.0007,y:538.8612},0).wait(1).to({scaleX:0.9233,scaleY:0.9233,x:384.1,y:539.4637},0).wait(1).to({scaleX:0.9255,scaleY:0.9255,x:384.1978,y:540.0575},0).wait(1).to({scaleX:0.9277,scaleY:0.9277,x:384.2942,y:540.6426},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,x:384.3892,y:541.2191},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,x:384.4827,y:541.7869},0).wait(1).to({scaleX:0.934,scaleY:0.934,x:384.5749,y:542.3461},0).wait(1).to({scaleX:0.936,scaleY:0.936,x:384.6656,y:542.8965},0).wait(1).to({scaleX:0.9381,scaleY:0.9381,x:384.7548,y:543.4384},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:384.8427,y:543.9715},0).wait(1).to({scaleX:0.942,scaleY:0.942,x:384.9291,y:544.496},0).wait(1).to({scaleX:0.9439,scaleY:0.9439,x:385.0141,y:545.0118},0).wait(1).to({scaleX:0.9458,scaleY:0.9458,x:385.0976,y:545.5189},0).wait(1).to({scaleX:0.9477,scaleY:0.9477,x:385.1798,y:546.0174},0).wait(1).to({scaleX:0.9495,scaleY:0.9495,x:385.2604,y:546.5071},0).wait(1).to({scaleX:0.9513,scaleY:0.9513,x:385.3397,y:546.9883},0).wait(1).to({scaleX:0.953,scaleY:0.953,x:385.4176,y:547.4607},0).wait(1).to({scaleX:0.9547,scaleY:0.9547,x:385.494,y:547.9245},0).wait(1).to({scaleX:0.9564,scaleY:0.9564,x:385.5689,y:548.3796},0).wait(1).to({scaleX:0.9581,scaleY:0.9581,x:385.6425,y:548.8261},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,x:385.7146,y:549.2639},0).wait(1).to({scaleX:0.9613,scaleY:0.9613,x:385.7853,y:549.693},0).wait(1).to({scaleX:0.9629,scaleY:0.9629,x:385.8546,y:550.1134},0).wait(1).to({scaleX:0.9644,scaleY:0.9644,x:385.9225,y:550.5252},0).wait(1).to({scaleX:0.9659,scaleY:0.9659,x:385.9889,y:550.9283},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,x:386.0539,y:551.3227},0).wait(1).to({scaleX:0.9688,scaleY:0.9688,x:386.1174,y:551.7085},0).wait(1).to({scaleX:0.9702,scaleY:0.9702,x:386.1796,y:552.0856},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:386.2403,y:552.454},0).wait(1).to({scaleX:0.9729,scaleY:0.9729,x:386.2995,y:552.8138},0).wait(1).to({scaleX:0.9742,scaleY:0.9742,x:386.3574,y:553.1649},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:386.4138,y:553.5073},0).wait(1).to({scaleX:0.9767,scaleY:0.9767,x:386.4688,y:553.841},0).wait(1).to({scaleX:0.9779,scaleY:0.9779,x:386.5223,y:554.1661},0).wait(1).to({scaleX:0.9791,scaleY:0.9791,x:386.5745,y:554.4825},0).wait(1).to({scaleX:0.9803,scaleY:0.9803,x:386.6252,y:554.7903},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,x:386.6745,y:555.0894},0).wait(1).to({scaleX:0.9825,scaleY:0.9825,x:386.7223,y:555.3798},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,x:386.7687,y:555.6615},0).wait(1).to({scaleX:0.9845,scaleY:0.9845,x:386.8137,y:555.9346},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,x:386.8573,y:556.199},0).wait(1).to({scaleX:0.9864,scaleY:0.9864,x:386.8994,y:556.4547},0).wait(1).to({scaleX:0.9874,scaleY:0.9874,x:386.9401,y:556.7018},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:386.9794,y:556.9402},0).wait(1).to({scaleX:0.9891,scaleY:0.9891,x:387.0172,y:557.1699},0).wait(1).to({scaleX:0.9899,scaleY:0.9899,x:387.0537,y:557.391},0).wait(1).to({scaleX:0.9907,scaleY:0.9907,x:387.0886,y:557.6034},0).wait(1).to({scaleX:0.9915,scaleY:0.9915,x:387.1222,y:557.8071},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,x:387.1544,y:558.0021},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,x:387.1851,y:558.1885},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,x:387.2143,y:558.3662},0).wait(1).to({scaleX:0.9942,scaleY:0.9942,x:387.2422,y:558.5353},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:387.2686,y:558.6956},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:387.2936,y:558.8473},0).wait(1).to({scaleX:0.9959,scaleY:0.9959,x:387.3172,y:558.9904},0).wait(1).to({scaleX:0.9964,scaleY:0.9964,x:387.3393,y:559.1247},0).wait(1).to({scaleX:0.9968,scaleY:0.9968,x:387.36,y:559.2505},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,x:387.3793,y:559.3675},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,x:387.3972,y:559.4758},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:387.4136,y:559.5755},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,x:387.4286,y:559.6666},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,x:387.4422,y:559.7489},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:387.4543,y:559.8226},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:387.465,y:559.8876},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:387.4743,y:559.944},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,x:387.4822,y:559.9916},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:387.4886,y:560.0307},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:387.4936,y:560.061},0).wait(1).to({x:387.4971,y:560.0827},0).wait(1).to({scaleX:1,scaleY:1,x:387.4993,y:560.0957},0).wait(1).to({x:387.55,y:560.15},0).wait(1));

	// A1Back
	this.instance_2 = new lib.A1Back_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(426.85,402.1,0.9964,0.9964,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:0.9969,scaleY:0.9969,x:426.9751,y:401.9461},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,x:427.197,y:401.9915},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:427.4158,y:402.0362},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,x:427.6313,y:402.0803},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:427.8436,y:402.1237},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:428.0528,y:402.1665},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:428.2587,y:402.2087},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,x:428.4615,y:402.2501},0).wait(1).to({scaleX:1.0014,scaleY:1.0014,x:428.6611,y:402.291},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:428.8575,y:402.3311},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,x:429.0506,y:402.3707},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:429.2406,y:402.4095},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,x:429.4274,y:402.4477},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,x:429.611,y:402.4853},0).wait(1).to({scaleX:1.0044,scaleY:1.0044,x:429.7914,y:402.5222},0).wait(1).to({scaleX:1.0048,scaleY:1.0048,x:429.9687,y:402.5585},0).wait(1).to({scaleX:1.0053,scaleY:1.0053,x:430.1427,y:402.5941},0).wait(1).to({scaleX:1.0058,scaleY:1.0058,x:430.3135,y:402.629},0).wait(1).to({scaleX:1.0062,scaleY:1.0062,x:430.4812,y:402.6633},0).wait(1).to({scaleX:1.0066,scaleY:1.0066,x:430.6456,y:402.6969},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,x:430.8069,y:402.7299},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,x:430.9649,y:402.7623},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,x:431.1198,y:402.794},0).wait(1).to({scaleX:1.0083,scaleY:1.0083,x:431.2714,y:402.825},0).wait(1).to({scaleX:1.0087,scaleY:1.0087,x:431.4199,y:402.8554},0).wait(1).to({scaleX:1.0091,scaleY:1.0091,x:431.5652,y:402.8851},0).wait(1).to({scaleX:1.0094,scaleY:1.0094,x:431.7073,y:402.9142},0).wait(1).to({scaleX:1.0098,scaleY:1.0098,x:431.8462,y:402.9426},0).wait(1).to({scaleX:1.0102,scaleY:1.0102,x:431.9819,y:402.9703},0).wait(1).to({scaleX:1.0105,scaleY:1.0105,x:432.1144,y:402.9974},0).wait(1).to({scaleX:1.0108,scaleY:1.0108,x:432.2438,y:403.0239},0).wait(1).to({scaleX:1.0112,scaleY:1.0112,x:432.3699,y:403.0497},0).wait(1).to({scaleX:1.0115,scaleY:1.0115,x:432.4928,y:403.0748},0).wait(1).to({scaleX:1.0118,scaleY:1.0118,x:432.6126,y:403.0993},0).wait(1).to({scaleX:1.0121,scaleY:1.0121,x:432.7291,y:403.1232},0).wait(1).to({scaleX:1.0124,scaleY:1.0124,x:432.8425,y:403.1464},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,x:432.9526,y:403.1689},0).wait(1).to({scaleX:1.013,scaleY:1.013,x:433.0596,y:403.1908},0).wait(1).to({scaleX:1.0133,scaleY:1.0133,x:433.1634,y:403.212},0).wait(1).to({scaleX:1.0135,scaleY:1.0135,x:433.264,y:403.2326},0).wait(1).to({scaleX:1.0138,scaleY:1.0138,x:433.3613,y:403.2525},0).wait(1).to({scaleX:1.014,scaleY:1.014,x:433.4555,y:403.2718},0).wait(1).to({scaleX:1.0143,scaleY:1.0143,x:433.5465,y:403.2904},0).wait(1).to({scaleX:1.0145,scaleY:1.0145,x:433.6344,y:403.3084},0).wait(1).to({scaleX:1.0147,scaleY:1.0147,x:433.719,y:403.3257},0).wait(1).to({scaleX:1.0149,scaleY:1.0149,x:433.8004,y:403.3423},0).wait(1).to({scaleX:1.0152,scaleY:1.0152,x:433.8786,y:403.3584},0).wait(1).to({scaleX:1.0154,scaleY:1.0154,x:433.9537,y:403.3737},0).wait(1).to({scaleX:1.0155,scaleY:1.0155,x:434.0255,y:403.3884},0).wait(1).to({scaleX:1.0157,scaleY:1.0157,x:434.0942,y:403.4024},0).wait(1).to({scaleX:1.0159,scaleY:1.0159,x:434.1596,y:403.4158},0).wait(1).to({scaleX:1.0161,scaleY:1.0161,x:434.2219,y:403.4286},0).wait(1).to({scaleX:1.0162,scaleY:1.0162,x:434.281,y:403.4407},0).wait(1).to({scaleX:1.0164,scaleY:1.0164,x:434.3368,y:403.4521},0).wait(1).to({scaleX:1.0165,scaleY:1.0165,x:434.3895,y:403.4629},0).wait(1).to({scaleX:1.0166,scaleY:1.0166,x:434.439,y:403.473},0).wait(1).to({scaleX:1.0168,scaleY:1.0168,x:434.4853,y:403.4825},0).wait(1).to({scaleX:1.0169,scaleY:1.0169,x:434.5284,y:403.4913},0).wait(1).to({scaleX:1.017,scaleY:1.017,x:434.5683,y:403.4995},0).wait(1).to({scaleX:1.0171,scaleY:1.0171,x:434.6051,y:403.507},0).wait(1).to({scaleX:1.0172,scaleY:1.0172,x:434.6386,y:403.5138},0).wait(1).to({x:434.6689,y:403.52},0).wait(1).to({scaleX:1.0173,scaleY:1.0173,x:434.6961,y:403.5256},0).wait(1).to({scaleX:1.0174,scaleY:1.0174,x:434.72,y:403.5305},0).wait(1).to({x:434.7408,y:403.5347},0).wait(1).to({scaleX:1.0175,scaleY:1.0175,x:434.7583,y:403.5383},0).wait(1).to({x:434.7727,y:403.5413},0).wait(1).to({x:434.7839,y:403.5435},0).wait(1).to({scaleX:1.0176,scaleY:1.0176,x:434.7919,y:403.5452},0).wait(1).to({x:434.7966,y:403.5462},0).wait(1).to({x:434.9,y:403.75},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,50.5,990.9,1082.5);


(lib.btnR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B2 = new lib.B();
	this.B2.name = "B2";
	this.B2.parent = this;
	this.B2.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B2.alpha = 0;
	this.B2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B2).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,135.3,28);


(lib.btnL = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B1 = new lib.B();
	this.B1.name = "B1";
	this.B1.parent = this;
	this.B1.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B1.alpha = 0;
	this.B1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B1).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,135.3,28);


(lib.А3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{open:6,close:44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// pict2
	this.instance = new lib.A3in();
	this.instance.parent = this;
	this.instance.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1038.4,0,1038.4,814.5);


(lib.А2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":6,"close":44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// pict2
	this.instance = new lib.A2in();
	this.instance.parent = this;
	this.instance.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-928,0,928,739.8);


(lib.А1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":55,"close":94});

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}
	this.frame_87 = function() {
		this.stop()
	}
	this.frame_125 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(38).call(this.frame_87).wait(38).call(this.frame_125).wait(1));

	// pict1
	this.instance = new lib.А1in();
	this.instance.parent = this;
	this.instance.setTransform(-602.5,481.45,1,1,0,0,0,282.2,547.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({_off:true},40).wait(7).to({_off:false,alpha:0},0).to({alpha:1},10).wait(27).to({alpha:0},10).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-927,-9.6,862.4,985.8000000000001);


(lib.carousellPort = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		
		if(!this.started2)
		{
			_this.food = 1;
			_this.food2 = 1;
			_this.btnLPort.B1.BTN.addEventListener("click", fl_MouseClickHandlerL.bind(_this));
			_this.btnRPort.B2.BTN.addEventListener("click", fl_MouseClickHandlerR.bind(_this));
			
			this.started2 = true ;
		}
			
			var auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
		
		function fl_MouseClickHandlerL() {
		
			clearTimeout(auto);
			console.log(_this.food)
			
			/*
			if (_this.food == "5") {
				_this.A5.gotoAndPlay("close")
				_this.A4.gotoAndPlay("open")
			
				console.log("Pict5 to Pict4")
				
				_this.food2 = "4";
			}
			
			
			if (_this.food == "4") {
				_this.A4.gotoAndPlay("close")
				_this.A3.gotoAndPlay("open")
			
				console.log("Pict4 to Pict3")
				
					_this.food2 = "3";
			}
		*/
			
			if (_this.food == "3") {
				_this.A3.gotoAndPlay("close")
				_this.A2.gotoAndPlay("open")
			
				console.log("Pict3 to Pict2")
				
					_this.food2 = "2";
			}
			
			
			if (_this.food == "2") {
				_this.A2.gotoAndPlay("close")
				_this.A1.gotoAndPlay("open")
				
				console.log("Pict2 to Pict1")
				
				_this.food2 = "1";
			}
			
			
			if (_this.food == "1") {
				_this.A1.gotoAndPlay("close")
				_this.A3.gotoAndPlay("open")
				
				console.log("Pict1 to Pict3")
				9
				_this.food2 = "3";
			}
			
				console.log(_this.food2);
			
				_this.food = _this.food2
			
			auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
			
			
		}
			
			
			
			
		
			
		
			function fl_MouseClickHandlerR() {
				
				clearTimeout(auto);
				
				console.log(_this.food)
		
				if (_this.food == "1") {
		
					_this.A1.gotoAndPlay("close")
					_this.A2.gotoAndPlay("open")
					
					console.log("Pict1 to Pict2")
		
					
					_this.food2 = "2";
				}
				if (_this.food == "2") {
					_this.A2.gotoAndPlay("close")
					_this.A3.gotoAndPlay("open")
					
					console.log("Pict2 to Pict3")
					
					_this.food2 = "3";
				}
			/*
				if (_this.food == "3") {
					_this.A3.gotoAndPlay("close")
					_this.A4.gotoAndPlay("open")
				
					console.log("Pict3 to Pict4")
					
					_this.food2 = "4";
				}
				
				if (_this.food == "4") {
					_this.A4.gotoAndPlay("close")
					_this.A5.gotoAndPlay("open")
				
					console.log("Pict4 to Pict5")
					
					_this.food2 = "5";
				}
				*/
				if (_this.food == "3") {
					_this.A3.gotoAndPlay("close")
					_this.A1.gotoAndPlay("open")
				
					console.log("Pict3 to Pict1")
					
					_this.food2 = "1";
				}
				
		
				
				console.log(_this.food2)
		
				_this.food = _this.food2
				
				auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
				
			}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// butL
	this.btnLPort = new lib.btnL();
	this.btnLPort.name = "btnLPort";
	this.btnLPort.parent = this;
	this.btnLPort.setTransform(355.35,188.5,1.2856,1.2856,180,0,0,125.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.btnLPort).wait(2));

	// butR
	this.btnRPort = new lib.btnR();
	this.btnRPort.name = "btnRPort";
	this.btnRPort.parent = this;
	this.btnRPort.setTransform(812.35,192.1,1.2219,1.2219,0,0,0,125,9);

	this.timeline.addTween(cjs.Tween.get(this.btnRPort).wait(2));

	// maskPort (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoBAvJMAAAheRMBQDAAAMAAABeRg");
	mask.setTransform(583.725,207.5);

	// A1
	this.A1 = new lib.А1();
	this.A1.name = "A1";
	this.A1.parent = this;
	this.A1.setTransform(521.85,156.95,1,1,0,0,0,-605.6,370.7);

	var maskedShapeInstanceList = [this.A1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A1).wait(2));

	// A2
	this.A2 = new lib.А2();
	this.A2.name = "A2";
	this.A2.parent = this;
	this.A2.setTransform(501,192.2,1.2324,1.2324,0,0,0,-632.1,426.7);

	var maskedShapeInstanceList = [this.A2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A2).wait(2));

	// A3
	this.A3 = new lib.А3();
	this.A3.name = "A3";
	this.A3.parent = this;
	this.A3.setTransform(486.55,146.5,1.04,1.04,0,0,0,-632.1,426.8);

	var maskedShapeInstanceList = [this.A3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.5,-94.2,512.5,603.4);


(lib.carousellLand = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		
		if(!this.started2)
		{
			_this.food = 1;
			_this.food2 = 1;
			_this.btnL.B1.BTN.addEventListener("click", fl_MouseClickHandlerL.bind(_this));
			_this.btnR.B2.BTN.addEventListener("click", fl_MouseClickHandlerR.bind(_this));
			
			this.started2 = true ;
		}
			
			var auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
		
		function fl_MouseClickHandlerL() {
		
			clearTimeout(auto);
			console.log(_this.food)
			
			/*
			if (_this.food == "5") {
				_this.A5.gotoAndPlay("close")
				_this.A4.gotoAndPlay("open")
			
				console.log("Pict5 to Pict4")
				
				_this.food2 = "4";
			}
			
			
			if (_this.food == "4") {
				_this.A4.gotoAndPlay("close")
				_this.A3.gotoAndPlay("open")
			
				console.log("Pict4 to Pict3")
				
					_this.food2 = "3";
			}
		*/
			
			if (_this.food == "3") {
				_this.A3.gotoAndPlay("close")
				_this.A2.gotoAndPlay("open")
			
				console.log("Pict3 to Pict2")
				
					_this.food2 = "2";
			}
			
			
			if (_this.food == "2") {
				_this.A2.gotoAndPlay("close")
				_this.A1.gotoAndPlay("open")
				
				console.log("Pict2 to Pict1")
				
				_this.food2 = "1";
			}
			
			
			if (_this.food == "1") {
				_this.A1.gotoAndPlay("close")
				_this.A3.gotoAndPlay("open")
				
				console.log("Pict1 to Pict3")
				9
				_this.food2 = "3";
			}
			
				console.log(_this.food2);
			
				_this.food = _this.food2
			
			auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
			
			
		}
			
			
			
			
		
			
		
			function fl_MouseClickHandlerR() {
				
				clearTimeout(auto);
				
				console.log(_this.food)
		
				if (_this.food == "1") {
		
					_this.A1.gotoAndPlay("close")
					_this.A2.gotoAndPlay("open")
					
					console.log("Pict1 to Pict2")
		
					
					_this.food2 = "2";
				}
				if (_this.food == "2") {
					_this.A2.gotoAndPlay("close")
					_this.A3.gotoAndPlay("open")
					
					console.log("Pict2 to Pict3")
					
					_this.food2 = "3";
				}
			/*
				if (_this.food == "3") {
					_this.A3.gotoAndPlay("close")
					_this.A4.gotoAndPlay("open")
				
					console.log("Pict3 to Pict4")
					
					_this.food2 = "4";
				}
				
				if (_this.food == "4") {
					_this.A4.gotoAndPlay("close")
					_this.A5.gotoAndPlay("open")
				
					console.log("Pict4 to Pict5")
					
					_this.food2 = "5";
				}
				*/
				if (_this.food == "3") {
					_this.A3.gotoAndPlay("close")
					_this.A1.gotoAndPlay("open")
				
					console.log("Pict3 to Pict1")
					
					_this.food2 = "1";
				}
				
		
				
				console.log(_this.food2)
		
				_this.food = _this.food2
				
				auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 3000);
				
			}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// butL
	this.btnL = new lib.btnL();
	this.btnL.name = "btnL";
	this.btnL.parent = this;
	this.btnL.setTransform(331.1,158.6,1.2856,1.2856,180,0,0,125.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.btnL).wait(2));

	// butR
	this.btnR = new lib.btnR();
	this.btnR.name = "btnR";
	this.btnR.parent = this;
	this.btnR.setTransform(825,151.2,1.2219,1.2219);

	this.timeline.addTween(cjs.Tween.get(this.btnR).wait(2));

	// maskPhoto (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggDAkgMAAAhI+MBu9AAAMAAABI+g");
	mask.setTransform(505.0338,154.15);

	// A1
	this.A1 = new lib.А1();
	this.A1.name = "A1";
	this.A1.parent = this;
	this.A1.setTransform(533.15,156.95,1,1,0,0,0,-605.6,370.7);

	var maskedShapeInstanceList = [this.A1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A1).wait(2));

	// A2
	this.A2 = new lib.А2();
	this.A2.name = "A2";
	this.A2.parent = this;
	this.A2.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	var maskedShapeInstanceList = [this.A2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A2).wait(2));

	// A3
	this.A3 = new lib.А3();
	this.A3.name = "A3";
	this.A3.parent = this;
	this.A3.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	var maskedShapeInstanceList = [this.A3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.A3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.9,-79.4,710.2,467.1);


(lib.Port = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		var _this = this;
		
		if(typeof window.initVer==="undefined"){
			var _this = this;
		
		
		
			//_this.A.xInit = this.A.x
		
			//_this.A.yInit = this.A.y
			
			
		
		
			window.initVer = _this;
		} else {
			var _this = window.initVer;
		}
		
		
		
		
		
		var ReCenter2 = (function () {
			var dpr = window.devicePixelRatio;
			var w1 = window.innerWidth;
			var w2 = (stage.canvas.width / dpr) ;
			var coef = 1200 / w2;
			var wscale = w1 / 1200 * coef ;
			
			
			
			var h1 = window.innerHeight;
			var h2 = (stage.canvas.height / dpr);
			var coef2 = 1080 / h2
			var hscale = h1 / 1080 * coef2;
			
			
			
			//_this.A.x = _this.A.xInit + ((w2 - w1) * coef) / 2;
			//_this.A.y = _this.A.yInit + ((h2 - h1) * coef2) / 2
			
			//_this.A.scaleX = hscale;
			//_this.A.scaleY = hscale;
			
			
			
			
		
			
		
			
		});
		ReCenter2();
		window.addEventListener('resize', ReCenter2);
		
		
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(1));

	// caroussel
	this.carousell = new lib.carousellPort();
	this.carousell.name = "carousell";
	this.carousell.parent = this;
	this.carousell.setTransform(-71.4,-73.75,1.1456,1.1456,0,0,0,520,183.5);
	this.carousell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carousell).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// anima
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(2.1,464,0.791,0.791,0,0,0,0.1,0.1);

	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.75,369.15,0.9041,0.9041,0,0,0,-8.2,2.6);

	this.instance_2 = new lib.hl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.15,-460.35,0.7924,0.7924,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},2).wait(2));

	// bkg
	this.instance_3 = new lib.backGr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.45,2.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// ButtonAll
	this.instance_4 = new lib.ButtonMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.8,2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-608.9,-547.7,1222.6999999999998,1137.2);


(lib.Land = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		var _this = this;
		
		if(typeof window.initVer2==="undefined"){
			var _this = this;
			
		
			//_this.A1.xInit = this.A1.x
		
			//_this.A1.yInit = this.A1.y					 
		 
		
		
					
		
			window.initVer2 = _this;
		} else {
			var _this = window.initVer2;
		}
		
		
		
		
		
		var ReCenter2 = (function () {
			var dpr = window.devicePixelRatio;
			var w3 = window.innerWidth;
			var w4 = (stage.canvas.width / dpr);
			var coef3 = 1200 / w4
			var wscale2 = w3 / 1200 * coef3;
			
			var h3 = window.innerHeight;
			var h4 = (stage.canvas.height / dpr);
			var coef4 = 1080 / h4
			var hscale2 = h3 / 1080 * coef4;
		
			
		
			//_this.A1.x = _this.A1.xInit + ((w4 - w3) * coef3) / 2
			//_this.A1.y = _this.A1.yInit + ((h4 - h3) * coef4) / 2
			
			//_this.A1.scaleX = wscale2;
			//_this.A1.scaleY = wscale2;
			
			
			
		
			
			
		
			
		});
		ReCenter2();
		window.addEventListener('resize', ReCenter2);
		
		
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(1));

	// carousellLand
	this.carousellLand = new lib.carousellLand();
	this.carousellLand.name = "carousellLand";
	this.carousellLand.parent = this;
	this.carousellLand.setTransform(-862.35,-149.8,0.9737,0.9737,0,0,0,0,-0.3);
	this.carousellLand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carousellLand).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// anima
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(373,1.55);

	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(362.15,151.4,0.882,0.882);

	this.instance_2 = new lib.hlNewDesktop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364.65,-135.8,0.9059,0.9059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},2).wait(2));

	// backGr
	this.instance_3 = new lib.backGr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.45,2.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// ButtonAll
	this.instance_4 = new lib.ButtonMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.8,2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-740.5,-547.7,1354.3,1140.6);


// stage content:
(lib.scrollerDOB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var orientation = null;
		_this = this;
		window.addEventListener('resize', function () {
			FIX()
		}, true);
		
		
		var FIX = (function () {
			var winW = window.innerWidth * 0.9 ;
			var winH = window.innerHeight;
			//change now
			if (winW > winH ) {
				if (orientation !== "l") {
					orientation = "l";
					_this.Land.gotoAndPlay(2);
					_this.Port.gotoAndPlay(4);
					console.log("here L");
		
					
				}
			} else {
				if (orientation !== "p") {
					orientation = "p";
					_this.Port.gotoAndPlay(2);
					_this.Land.gotoAndPlay(4);
					console.log("here P");
				}
			}
		});
		
		FIX();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Port
	this.Port = new lib.Port();
	this.Port.name = "Port";
	this.Port.parent = this;
	this.Port.setTransform(599.25,541.7);

	this.timeline.addTween(cjs.Tween.get(this.Port).wait(2));

	// Land
	this.Land = new lib.Land();
	this.Land.name = "Land";
	this.Land.parent = this;
	this.Land.setTransform(593.05,527.35,1,1,0,0,0,-6.2,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.Land).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,472.1,1288.2,608.3000000000001);
// library properties:
lib.properties = {
	id: 'D146C12FF91949469EEB0AF3280EF132',
	width: 1200,
	height: 1080,
	fps: 24,
	color: "#08A7BA",
	opacity: 0.00,
	manifest: [
		{src:"images/A1Back.png", id:"A1Back"},
		{src:"images/A1front.png", id:"A1front"},
		{src:"images/A1middle.png", id:"A1middle"},
		{src:"images/A2backGr.jpg", id:"A2backGr"},
		{src:"images/A2Woman.png", id:"A2Woman"},
		{src:"images/A3BackGr.jpg", id:"A3BackGr"},
		{src:"images/A3woman1.png", id:"A3woman1"},
		{src:"images/A3woman2.png", id:"A3woman2"},
		{src:"images/logo.png", id:"logo"}
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
an.compositions['D146C12FF91949469EEB0AF3280EF132'] = {
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