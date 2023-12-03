(function() {

    var guis = [];
  
    var sliderMin = 0;
    var sliderMax = 100;
    var sliderStep = 1;
  
    var guiProvider = 'QuickSettings';
  
    const defaultLabel = 'p5.gui';

    p5.prototype.createGui = function(sketch, label, provider) {
  
      if ((typeof sketch) === 'string') {
        return this.createGui(label, sketch, provider);
      }

      let parent = document.body;
  
      if(sketch === undefined) {
        sketch = window;
        label = label || document.title || defaultLabel;
      } else {
        parent = sketch.canvas.parentElement;
        label = label || parent.id || defaultLabel;
      }
  
      if(!('color' in sketch)) {
        console.error(`${parent.id}: You need to pass the p5 sketch to createGui in instance mode!`);
      }
  
      provider = provider || guiProvider;
  
      var gui;
  
      if(provider === 'QuickSettings') {
        if(QuickSettings) {
          console.log('Creating p5.gui powered by QuickSettings.');
          gui = new QSGui(label, parent, sketch);
        } else {
          console.log('QuickSettings not found. Is the script included in your HTML?');
          gui = new DummyGui(label, parent, sketch);
        }
      } else {
        console.log('Unknown GUI provider ' + provider);
        gui = new DummyGui(label, parent, sketch);
      }
  
      guis.push(gui);
  
      return gui;
  
    };
  
  
    p5.prototype.removeGui = function(gui) {
    };
  
    p5.prototype.sliderRange = function(vmin, vmax, vstep) {
      sliderMin = vmin;
      sliderMax = vmax;
      sliderStep = vstep;
    };
  
    p5.prototype.noLoop = function() {
      this._loop = false;
      for(var i = 0; i < guis.length; i++) {
        guis[i].noLoop();
      }
    };
  
    p5.prototype.loop = function() {
      for(var i = 0; i < guis.length; i++) {
        guis[i].loop();
      }
      this._loop = true;
      this._draw();
    };
  
    function QSGui(label, parent, sketch) {
  
      let x = 20;
      let y = 20;
  
      var qs = QuickSettings.create(x, y, label, parent);
  
      this.prototype = qs;
  
      this.addGlobals = function() {
        qs.bindGlobals(arguments);
      };
  
      this.addObject = function() {
        object = arguments[0];
        var params = [];
        if(arguments.length > 1) {
          params = Array.prototype.slice.call(arguments)
          params = params.slice(1);
        }
        if(params.length === 0) {
          params = Object.keys(object);
        }
        qs.bindParams(object, params);
      };
  
      this.noLoop = function() {
        qs.setGlobalChangeHandler(sketch._draw);
      };
  
      this.loop = function() {
        qs.setGlobalChangeHandler(null);
      };

      this.show = function() { qs.show(); };
      this.hide = function() { qs.hide(); };
      this.toggleVisibility = function() { qs.toggleVisibility(); };
      this.setPosition  = function(x, y) {
        qs.setPosition(x, y);
        return this;
      };
  
      qs.bindParams = function(object, params) {
  
        for(var i = 0; i < params.length; i++) {
  
          var arg = params[i];
          var val = object[arg];
          var typ = typeof val;
  
          var sliderConfigRegEx = /^(.*min|.*max|.*step)$/i;
          if( sliderConfigRegEx.test(arg)){
            continue;
          }
          switch(typ) {
  
            case 'object':
  
              if(val instanceof Array && val.length === 3 && typeof val[0] === 'number') {
                var c = sketch.color(val[0], val[1], val[2]);
                var c2 = c.levels.slice(0,3);
                var vcolor = '#' + c2.map(function(value) {
                  return ('0' + value.toString(16)).slice(-2);
                }).join('');
                this.bindColor(arg, vcolor, object);
              } else {
                this.bindDropDown(arg, val, object);
                object[arg] = val[0];
              }
              break;
  
            case 'number':
  
              var vmin = object[arg + 'Min'] || object[arg + 'min'] || sliderMin;
              var vmax = object[arg + 'Max'] || object[arg + 'max'] || sliderMax;
              var vstep = object[arg + 'Step'] || object[arg + 'step'] || sliderStep;
              var vmin = Math.min(val, vmin);
              var vmax = Math.max(val, vmax);
              this.bindRange(arg, vmin, vmax, val, vstep, object);
  
              break;
  
            case 'string':
  
              var HEX6 = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i;
              if(HEX6.test(val)) {
                this.bindColor(arg, val, object);
              } else {
                this.bindText(arg, val, object);
              }
              break;
  
            case 'boolean':
  
              this.bindBoolean(arg, object[arg], object);
              break;
  
          }
        }
      };

      qs.bindGlobals = function(params) {
        this.bindParams(window, params);
      };
  
    }
    function DummyGui() {
      var f = function() {};
      this.addGlobals = f;
      this.noLoop = f;
      this.addObject = f;
      this.show = f;
    }
  
  
  })();
  