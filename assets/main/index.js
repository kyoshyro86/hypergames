System.register("chunks:///_virtual/ActionHelper.ts", ['cc', './Utilities.ts'], function (exports) {
  var cclegacy, _decorator, tween, UIRenderer, UIOpacity, math, v3, setOpacity, roundAngle;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      UIRenderer = module.UIRenderer;
      UIOpacity = module.UIOpacity;
      math = module.math;
      v3 = module.v3;
    }, function (module) {
      setOpacity = module.setOpacity;
      roundAngle = module.roundAngle;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0987dVlvWNGKKXgyGXuy6Fb", "ActionHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fadeOut = exports('fadeOut', function fadeOut(time, easing) {
        return fadeTo(time, 0, easing);
      });
      var fadeIn = exports('fadeIn', function fadeIn(time, easing) {
        return fadeTo(time, 255, easing);
      });
      var fadeTo = exports('fadeTo', function fadeTo(time, opacity, easing) {
        if (opacity < 0 || opacity > 255) {
          opacity = 0;
        }
        var currentOpacity = 0;
        return tween().to(time, null, {
          easing: easing,
          onStart: function onStart(target) {
            var renderer = target.getComponent(UIRenderer);
            if (renderer) {
              currentOpacity = renderer.color.a;
            } else {
              var uiProps = target.getComponent(UIOpacity);
              if (!uiProps) {
                uiProps = target.addComponent(UIOpacity);
              }
              currentOpacity = uiProps.opacity;
            }
          },
          onUpdate: function onUpdate(target, ratio) {
            var newOpacity = math.lerp(currentOpacity, opacity, ratio);
            setOpacity(target, newOpacity);
          }
        });
      });
      var delay = exports('delay', function delay(time) {
        return tween().delay(time);
      });
      var scaleTo = exports('scaleTo', function scaleTo(time, x, y, easing) {
        if (y == undefined) {
          y = x;
        }
        return tween().to(time, {
          scale: v3(x, y, 1)
        }, {
          easing: easing
        });
      });
      var rotateTo = exports('rotateTo', function rotateTo(time, angle, easing) {
        var startAngle = null;
        var realAngle = null;
        return tween().to(time, null, {
          easing: easing,
          onStart: function onStart(target) {
            startAngle = roundAngle(target.angle);
            realAngle = roundAngle(angle - startAngle);
          },
          onUpdate: function onUpdate(target, ratio) {
            target.angle = startAngle + realAngle * ratio;
          }
        });
      });
      var rotateBy = exports('rotateBy', function rotateBy(time, a, easing) {
        return tween().by(time, {
          angle: a
        }, {
          easing: easing
        });
      });
      var call = exports('call', function call(callFunc) {
        return tween().call(callFunc);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionHelpper.ts", ['cc', './Utilities.ts'], function (exports) {
  var cclegacy, _decorator, tween, UIRenderer, UIOpacity, math, setOpacity;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      UIRenderer = module.UIRenderer;
      UIOpacity = module.UIOpacity;
      math = module.math;
    }, function (module) {
      setOpacity = module.setOpacity;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bc046oMKy9NOKOxtp7MCrL8", "ActionHelpper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fadeOut = exports('fadeOut', function fadeOut(time, easing) {
        return fadeTo(time, 0, easing);
      });
      var fadeIn = exports('fadeIn', function fadeIn(time, easing) {
        return fadeTo(time, 255, easing);
      });
      var fadeTo = exports('fadeTo', function fadeTo(time, opacity, easing) {
        if (opacity < 0 || opacity > 255) {
          opacity = 0;
        }
        var currentOpacity = 0;
        return tween().to(time, null, {
          easing: easing,
          onStart: function onStart(target) {
            var renderer = target.getComponent(UIRenderer);
            if (renderer) {
              currentOpacity = renderer.color.a;
            } else {
              var uiProps = target.getComponent(UIOpacity);
              if (!uiProps) {
                uiProps = target.addComponent(UIOpacity);
              }
              currentOpacity = uiProps.opacity;
            }
          },
          onUpdate: function onUpdate(target, ratio) {
            var newOpacity = math.lerp(currentOpacity, opacity, ratio);
            setOpacity(target, newOpacity);
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AudioClip, AudioSource, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "94e725n7hlJ/KVWcZFDE+yj", "AudioController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioController = exports('AudioController', (_dec = ccclass('AudioController'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([AudioClip]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioController, _Component);
        function AudioController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioBgmNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioList", _descriptor3, _assertThisInitialized(_this));
          _this._audioDict = {};
          _this._audioSource = null;
          _this._audioBgmSource = null;
          // Disable all sounds
          _this._isDisabled = false;
          return _this;
        }
        var _proto = AudioController.prototype;
        _proto.start = function start() {
          for (var index = 0; index < this.audioList.length; index++) {
            var element = this.audioList[index];
            this._audioDict[element.name] = element;
          }
          this._audioSource = this.audioNode.getComponent(AudioSource);
          this._audioBgmSource = this.audioBgmNode.getComponent(AudioSource);
          this._isDisabled = false;
        };
        _proto.onSound = function onSound() {
          this._isDisabled = false;
        };
        _proto.offSound = function offSound() {
          this._isDisabled = true;
        };
        _proto.playBgm = function playBgm() {
          if (this._isDisabled) return;
          this._audioBgmSource.play();
        };
        _proto.stopBgm = function stopBgm() {
          this._audioBgmSource.stop();
        };
        _proto.play = function play(name) {
          if (this._isDisabled) return;
          var audio = this._audioDict[name];
          if (audio) {
            this._audioSource.playOneShot(audio);
          }
        };
        return AudioController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioBgmNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AudioClip, AudioSource, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "424e8BsOOhB7oM3ViN/gAfS", "AudioManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioManager = exports('AudioManager', (_dec = ccclass('AudioManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([AudioClip]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);
        function AudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioBgmNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioList", _descriptor3, _assertThisInitialized(_this));
          _this._audioDict = {};
          _this._audioSource = null;
          _this._audioBgmSource = null;
          // Disable all sounds
          _this._isDisabled = false;
          return _this;
        }
        var _proto = AudioManager.prototype;
        _proto.start = function start() {
          for (var index = 0; index < this.audioList.length; index++) {
            var element = this.audioList[index];
            this._audioDict[element.name] = element;
          }
          this._audioSource = this.audioNode.getComponent(AudioSource);
          this._audioBgmSource = this.audioBgmNode.getComponent(AudioSource);
          this._isDisabled = false;
        };
        _proto.onSound = function onSound() {
          this._isDisabled = false;
        };
        _proto.offSound = function offSound() {
          this._isDisabled = true;
        };
        _proto.playBgm = function playBgm() {
          if (this._isDisabled) return;
          this._audioBgmSource.play();
        };
        _proto.stopBgm = function stopBgm() {
          this._audioBgmSource.stop();
        };
        _proto.play = function play(name) {
          if (this._isDisabled) return;
          var audio = this._audioDict[name];
          if (audio) {
            this._audioSource.playOneShot(audio);
          }
        };
        return AudioManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioBgmNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopupController.ts', './PopupAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Tween, Component, PopupController, POPUP_ANIMATION, PopupAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      PopupController = module.PopupController;
    }, function (module) {
      POPUP_ANIMATION = module.POPUP_ANIMATION;
      PopupAnimation = module.PopupAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "40b04SymkBKVKay3wLLrjd1", "BasePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BasePopup = exports('BasePopup', (_dec = ccclass('BasePopup'), _dec2 = property(Node), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePopup, _Component);
        function BasePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BasePopup.prototype;
        _proto.initEvents = function initEvents() {
          this.btnClose.node.on(Button.EventType.CLICK, this.onBtnCloseClicked, this);
        };
        _proto.removeEvents = function removeEvents() {
          this.btnClose.node.off(Button.EventType.CLICK);
        };
        _proto.show = function show(animType) {
          var _this2 = this;
          if (animType === void 0) {
            animType = POPUP_ANIMATION.FADE;
          }
          PopupController.instance.onPopupShow(this);
          Tween.stopAllByTarget(this.node);
          if (this.content) {
            Tween.stopAllByTarget(this.content);
          }
          this.node.active = true;
          this.getAnimPopup().showByEffect(function () {
            _this2.onShowed();
          }, animType);
        };
        _proto.onShowed = function onShowed() {
          this.initEvents();
        };
        _proto.hide = function hide(animType) {
          var _this3 = this;
          if (animType === void 0) {
            animType = POPUP_ANIMATION.FADE;
          }
          this.removeEvents();
          Tween.stopAllByTarget(this.node);
          if (this.content) {
            Tween.stopAllByTarget(this.content);
          }
          this.getAnimPopup().hideWithEffect(function () {
            _this3.onHid();
          }, animType);
        };
        _proto.onHid = function onHid() {
          this.node.active = false;
          PopupController.instance.onPopupHide(this);
        };
        _proto.getAnimPopup = function getAnimPopup() {
          var result = this.node.getComponent(PopupAnimation);
          if (!result) {
            result = this.node.addComponent(PopupAnimation);
            result.init(this.content, this.node.position.clone(), 1);
          }
          return result;
        };
        _proto.onBtnCloseClicked = function onBtnCloseClicked() {
          this.hide();
        };
        return BasePopup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6b662lIcmhAWqDCn7Iivgot", "BaseScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaseScene = exports('BaseScene', (_dec = ccclass('BaseScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseScene, _Component);
        function BaseScene() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BaseScene.prototype;
        _proto.onStart = function onStart() {};
        _proto.onClose = function onClose() {
          this.node.destroy();
        };
        return BaseScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Block.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, v3, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "86168YdmNdIjrMHnhtVI5qT", "Block", undefined);
      var ccclass = _decorator.ccclass;
      var Block = exports('Block', (_dec = ccclass('Block'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Block, _Component);
        function Block() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.blockType = 0;
          return _this;
        }
        var _proto = Block.prototype;
        _proto.setDataProp = function setDataProp(blockType) {
          if (blockType === void 0) {
            blockType = 0;
          }
          this.blockType = blockType;
        };
        _proto.removeNodeAction = function removeNodeAction() {
          var _this2 = this;
          if (this.blockType) {
            return;
          }
          tween(this.node).to(0.3, {
            scale: v3(0, 0, 0)
          }).call(function () {
            _this2.node.destroy();
          }).start();
        };
        return Block;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockData.ts", ['cc'], function (exports) {
  var cclegacy, randomRangeInt;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      randomRangeInt = module.randomRangeInt;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96f9ePb1XBKpb28AW8HOOXV", "BlockData", undefined);
      var BlockData = exports('BlockData', /*#__PURE__*/function () {
        function BlockData() {}
        /** Level Data */
        BlockData.getLevelData = function getLevelData(level) {
          var levelList = [{
            name: 'Mode Non Stop',
            desc: 'Non Stop Game',
            list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Mod Tutorial',
            desc: 'Huong Dan Game',
            list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }];
          var col = 8;
          var data = levelList[0];
          if (level <= levelList.length && level > 0) {
            data = levelList[level - 1];
          }
          return {
            col: col,
            list: data.list,
            data: data
          };
        }

        /** Block Type */;
        BlockData.getBlockStyle = function getBlockStyle() {
          var a1 = [[1]];
          var a2 = [[1, 1]];
          var a2_1 = [[1], [1]];
          var a3 = [[1, 1, 1]];
          var a3_1 = [[1], [1], [1]];
          var a4 = [[1, 1, 1, 1]];
          var a4_1 = [[1], [1], [1], [1]];
          var a5 = [[1, 1], [1, 1]];
          var a6 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
          var a7 = [[1, 1, 1], [1, 1, 1]];
          var a7_1 = [[1, 1], [1, 1], [1, 1]];
          var a8 = [[1, 1], [1, 0]];
          var a8_1 = [[1, 1], [0, 1]];
          var a8_2 = [[0, 1], [1, 1]];
          var a8_3 = [[1, 0], [1, 1]];
          var a9 = [[1, 0, 1], [1, 1, 1]];
          var a9_1 = [[1, 1], [1, 0], [1, 1]];
          var a9_2 = [[1, 1, 1], [1, 0, 1]];
          var a9_3 = [[1, 1], [0, 1], [1, 1]];
          var a = [a1, a2, a2_1, a3, a3_1, a4, a4_1, a5, a6, a7, a7_1, a8, a8_1, a8_2, a8_3, a9, a9_1, a9_2, a9_3];
          var i = randomRangeInt(0, a.length);
          return a[i];
        };
        return BlockData;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockDrag.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlockPuzzleScene.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Graphics, UITransform, Color, Vec3, Component, BlockPuzzleScene;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Color = module.Color;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BlockPuzzleScene = module.BlockPuzzleScene;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "04f10PUcu5ACJtFHuriN30X", "BlockDrag", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockDrag = exports('BlockDrag', (_dec = ccclass('BlockDrag'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlockDrag, _Component);
        function BlockDrag() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._styleList = [];
          _this._blockList = [];
          _this._blockPosList = [];
          _this._originPos = null;
          _this._isDragAbled = true;
          return _this;
        }
        var _proto = BlockDrag.prototype;
        _proto.init = function init(blockList, posList, styleList) {
          this._blockList = blockList;
          this._blockPosList = posList;
          this._styleList = styleList;
          this.printBlockShape();
        };
        _proto.onLoad = function onLoad() {
          // console.log('BlockDrag onLoad') 
          this._originPos = this.node.position.clone();
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.drawLine = function drawLine() {
          //console.log('this.node', this.node);
          var g = this.node.getChildByName('Graphics').getComponent(Graphics);
          var _this$node$getCompone = this.node.getComponent(UITransform),
            width = _this$node$getCompone.width,
            height = _this$node$getCompone.height;
          var x = -width / 2;
          var y = -height / 2;
          g.lineWidth = 2;
          g.fillColor = Color.BLUE;
          g.fillRect(x, y, width, height);
          g.fill();
        }

        // Hàm xoay block 90 độ theo chiều kim đồng hồ
        ;

        _proto.rotateBlock = function rotateBlock() {}

        // Hàm để in block ra console
        ;

        _proto.printBlockShape = function printBlockShape() {
          this._styleList.forEach(function (row) {
            console.info(row.map(function (cell) {
              return cell ? '■' : '□';
            }).join(' '));
          });
          console.info("============");
        };
        _proto.setStyleList = function setStyleList(list) {
          this._styleList = list;
        };
        _proto.getStyleList = function getStyleList() {
          return this._styleList;
        };
        _proto.setBlockList = function setBlockList(list) {
          this._blockList = list;
        };
        _proto.getBlockList = function getBlockList() {
          return this._blockList;
        };
        _proto.setBlockPosList = function setBlockPosList(list) {
          this._blockPosList = list;
        };
        _proto.getBlockPosList = function getBlockPosList() {
          //console.log("_blockPosList::"+this._blockPosList);
          return this._blockPosList;
        };
        _proto.setDragAbled = function setDragAbled(isDragAbled) {
          this._isDragAbled = isDragAbled;
        };
        _proto.resetOriginPosition = function resetOriginPosition() {
          this.node.setPosition(this._originPos);
        };
        _proto.setPosition = function setPosition(pos) {
          this.node.setPosition(pos);
        };
        _proto.getPosition = function getPosition() {
          return this.node.position;
        };
        _proto.setScale = function setScale(x, y) {
          this.node.setScale(x, y);
        };
        _proto.setParent = function setParent(parent) {
          console.log('parent', parent);
          this.node.parent = parent;
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          // console.log('onTouchStart', this._isDragAbled);
          if (!this._isDragAbled) return;
          BlockPuzzleScene.instance.board.handleTouchStart(event, this);
        };
        _proto.onTouchMove = function onTouchMove(event) {
          // console.log('onTouchMove', this._isDragAbled);
          if (!this._isDragAbled) return;
          BlockPuzzleScene.instance.board.handleTouchMove(event, this);
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          // console.log('onTouchEnd', this._isDragAbled);
          if (!this._isDragAbled) return;
          BlockPuzzleScene.instance.board.handleTouchEnd(event, this);
        };
        _proto.getNodeSpacePosition = function getNodeSpacePosition(pos) {
          var p = new Vec3(pos.x, pos.y, 0);
          return this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(p);
        };
        _proto.getRelativePosition = function getRelativePosition(pos) {
          var p = new Vec3(pos.x, pos.y, 0);
          var parentPos = this.node.parent.position;
          return new Vec3(parentPos.x + p.x, parentPos.y + p.y, 0);
        };
        return BlockDrag;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockDragControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlockData.ts', './BlockDrag.ts', './BlockPuzzleScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, CCInteger, Button, UITransform, Size, instantiate, v3, Vec2, v2, Vec3, Component, BlockData, BlockDrag, BlockPuzzleScene;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      CCInteger = module.CCInteger;
      Button = module.Button;
      UITransform = module.UITransform;
      Size = module.Size;
      instantiate = module.instantiate;
      v3 = module.v3;
      Vec2 = module.Vec2;
      v2 = module.v2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BlockData = module.BlockData;
    }, function (module) {
      BlockDrag = module.BlockDrag;
    }, function (module) {
      BlockPuzzleScene = module.BlockPuzzleScene;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "84200UMJkRNlbSphsJTrDvP", "BlockDragControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockDragControl = exports('BlockDragControl', (_dec = ccclass('BlockDragControl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property({
        type: CCInteger
      }), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlockDragControl, _Component);
        function BlockDragControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "dragNodePrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "target", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockCount", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRotate", _descriptor5, _assertThisInitialized(_this));
          _this._blockNum = 0;
          _this._targetRect = null;
          _this._rPos = null;
          _this._startPos = null;
          _this._dragBlockList = [];
          _this._dragReuslt = false;
          return _this;
        }
        var _proto = BlockDragControl.prototype;
        _proto.onLoad = function onLoad() {
          if (this.target) {
            this._targetRect = this.target.getComponent(UITransform).getBoundingBox();
          }

          // add event
          this.btnRotate.node.on(Node.EventType.TOUCH_END, this.onRotateClick, this);
        };
        _proto.onRotateClick = function onRotateClick() {
          console.log("Rotate Ne");
          var rotated = this.rotateBlock(this._dragBlockList[0].getStyleList(), 0); // Test Rotate Thu xem chay duoc khong
          this.createBlock(rotated, 0, true);
        };
        _proto.getDragBlockList = function getDragBlockList() {
          return this._dragBlockList;
        };
        _proto.init = function init() {
          this._blockNum = this.blockCount;
          this._dragReuslt = false;
          this.clearDragBlockList();
          this.generate3Blocks();
        };
        _proto.substractCount = function substractCount(drag) {
          if (!BlockPuzzleScene.instance.isPlaying()) return;
          this._blockNum--;
          if (this._blockNum <= 0) {
            this._blockNum = this.blockCount;
            this._dragBlockList = [];
            this.generate3Blocks();
          } else {
            var list = this._dragBlockList.filter(function (item) {
              return item !== drag;
            });
            this._dragBlockList = list;
            console.log('this._dragBlockList', this._dragBlockList);
          }
        };
        _proto.generate3Blocks = function generate3Blocks() {
          for (var k = 0; k < this._blockNum; k++) {
            var styleList = BlockData.getBlockStyle();
            this.createBlock(styleList, k);
          }
        };
        _proto.rotateBlock = function rotateBlock(styleList, index) {
          var rows = styleList.length; // Số hàng
          var cols = styleList[0].length; // Số cột

          // Tạo mảng mới với kích thước đảo ngược (số hàng mới = số cột cũ, số cột mới = số hàng cũ)
          var rotated = Array.from({
            length: cols
          }, function () {
            return Array(rows).fill(0);
          });

          // Xoay 90° theo chiều kim đồng hồ
          for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
              rotated[j][rows - 1 - i] = styleList[i][j];
            }
          }
          return rotated;
        };
        _proto.createBlock = function createBlock(styleList, index, isReplace) {
          if (isReplace === void 0) {
            isReplace = false;
          }
          var size = BlockPuzzleScene.instance.board.gridSize;
          var blockSize = new Size(size, size);
          var startX = -230;
          var dragNode = instantiate(this.dragNodePrefab);
          dragNode.setPosition(v3(startX + index * 230, 0, 0));
          dragNode.setParent(this.node);
          var posList = [];
          var blockList = [];
          var len = styleList.length;
          var xLen = len ? styleList[0].length : 0;
          var yStart = -len / 2 * size - size / 2;
          var xStart = -xLen / 2 * size + size / 2;
          for (var i = 0; i < len; i++) {
            for (var j = 0; j < xLen; j++) {
              var block = styleList[i][j];
              if (block) {
                var blockNode = instantiate(this.blockPrefab);
                blockNode.getComponent(UITransform).setContentSize(blockSize);
                var y = yStart + (len - i) * size;
                var x = xStart + j * size;
                var pos = v3(x, y, 0);
                blockNode.setPosition(pos);
                blockNode.setParent(dragNode);
                posList.push(pos);
                blockList.push(blockNode);
              }
            }
          }
          dragNode.getComponent(UITransform).setContentSize(new Size(xLen * size, len * size));
          var blockDrag = dragNode.getComponent(BlockDrag);
          blockDrag.init(blockList, posList, styleList);
          blockDrag.setScale(0.5, 0.5);
          if (!isReplace) this._dragBlockList.push(blockDrag);else
            // truong hop rotate thi thay block moi vao
            {
              var blockOld = this._dragBlockList[index];
              console.log("blockOld.node.parent:: " + blockOld.node.parent);
              blockOld.node.removeFromParent();
              this._dragBlockList[index] = blockDrag;
            }
        };
        _proto.handleTouchStart = function handleTouchStart(event, drag) {
          if (!BlockPuzzleScene.instance.isPlaying()) return;
          this._startPos = drag.getPosition();
        };
        _proto.handleTouchMove = function handleTouchMove(event, drag) {
          if (!BlockPuzzleScene.instance.isPlaying()) return;
          if (!this._targetRect) return;
          var touchPos = event.getUILocation(); //.getLocation();
          var nPos = drag.getNodeSpacePosition(touchPos);
          var rPos = drag.getRelativePosition(new Vec2(nPos.x, nPos.y));
          var _this$_targetRect = this._targetRect,
            x = _this$_targetRect.x,
            y = _this$_targetRect.y,
            width = _this$_targetRect.width,
            height = _this$_targetRect.height;
          var size = BlockPuzzleScene.instance.board.gridSize;

          // console.log('==========================');
          // console.log('rPos.x'+rPos.x);
          // console.log('rPos.y'+rPos.y);
          // console.log('width'+width);
          // console.log('size'+size);

          // if (rPos.x < x + size / 2 
          //     || rPos.x > x + width - size / 2 
          //     || rPos.y > y + height - size / 2
          //     || nPos.y < 0) {
          //     console.log('out of range');
          //     return;
          // }

          drag.setPosition(nPos);

          // console.log('targetRect', this._targetRect, rPos, nPos);
          if (this._targetRect.contains(v2(rPos.x, rPos.y))) {
            drag.setScale(1, 1);
            this._dragReuslt = BlockPuzzleScene.instance.board.checkDragPosition(drag.getBlockPosList(), v3(rPos.x, rPos.y));
            this._rPos = v3(rPos.x, rPos.y, 0);
          } else {
            drag.setScale(0.5, 0.5);
            this._dragReuslt = false;
            this._rPos = null;
            BlockPuzzleScene.instance.board.removeRectColor();
          }
        };
        _proto.handleTouchEnd = function handleTouchEnd(event, drag) {
          //if (Constant.gameManager.gameStatus !== Constant.GAME_STATE.GAME_PLAYING) return;

          if (this._dragReuslt) {
            var offset = this._dragReuslt[0];
            var rowColList = this._dragReuslt[1];
            var newPos = new Vec3(this._rPos.x + offset.x, this._rPos.y + offset.y, 0);
            drag.setPosition(newPos);
            BlockPuzzleScene.instance.board.setFillPositionByIndex(rowColList, drag.getBlockList());
            BlockPuzzleScene.instance.board.removeRectColor();
            var count = BlockPuzzleScene.instance.board.checkBoardFull(rowColList);
            BlockPuzzleScene.instance.updateScore(count);
            drag.setParent(this.target);
            drag.setDragAbled(false);
            this.substractCount(drag);
            this._dragReuslt = false;
            // effect
            BlockPuzzleScene.instance.audioController.play('water2');
          } else {
            console.log('reset');
            drag.resetOriginPosition();
            drag.setScale(0.5, 0.5);
            drag.setDragAbled(true);
            this._dragReuslt = false;
          }
          this.checkResult();
        };
        _proto.checkResult = function checkResult() {
          if (BlockPuzzleScene.instance.board.checkEndGame()) {
            console.log('end game');
            var prompt = BlockPuzzleScene.instance.popupController.showPopup("PromptPopup");
            prompt.showText('No more move', function () {
              BlockPuzzleScene.instance.gameOver();
            }, function () {
              BlockPuzzleScene.instance.gameOver();
            });
          }
        };
        _proto.clearDragBlockList = function clearDragBlockList() {
          this._dragBlockList.forEach(function (item) {
            if (item && item.node) {
              item.node.destroy();
            }
          });
          this._dragBlockList = [];
        };
        _proto.ForceCheckEnd = function ForceCheckEnd() {
          console.log("ForceCheckEnd");
          this.checkResult();
        };
        return BlockDragControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dragNodePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blockCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnRotate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockPuzzleScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts', './PageBlock.ts', './BlockDragControl.ts', './BlockData.ts', './User.ts', './PopupController.ts', './BoardController.ts', './AudioController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseScene, PageBlock, BlockDragControl, BlockData, User, PopupController, BoardController, AudioController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseScene = module.BaseScene;
    }, function (module) {
      PageBlock = module.PageBlock;
    }, function (module) {
      BlockDragControl = module.BlockDragControl;
    }, function (module) {
      BlockData = module.BlockData;
    }, function (module) {
      User = module.User;
    }, function (module) {
      PopupController = module.PopupController;
    }, function (module) {
      BoardController = module.BoardController;
    }, function (module) {
      AudioController = module.AudioController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "c494drd0F1BlJu7ateiHsEy", "BlockPuzzleScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GAME_STATE = exports('GAME_STATE', /*#__PURE__*/function (GAME_STATE) {
        GAME_STATE[GAME_STATE["GAME_READ"] = 0] = "GAME_READ";
        GAME_STATE[GAME_STATE["GAME_PLAYING"] = 1] = "GAME_PLAYING";
        GAME_STATE[GAME_STATE["GAME_PAUSE"] = 2] = "GAME_PAUSE";
        GAME_STATE[GAME_STATE["GAME_OVER"] = 3] = "GAME_OVER";
        return GAME_STATE;
      }({}));
      var BlockPuzzleScene = exports('BlockPuzzleScene', (_dec = ccclass('BlockPuzzleScene'), _dec2 = property(AudioController), _dec3 = property(PageBlock), _dec4 = property(BlockDragControl), _dec5 = property(PopupController), _dec6 = property(BoardController), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(BlockPuzzleScene, _BaseScene);
        function BlockPuzzleScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioController", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageBlock", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockDragControl", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupController", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "board", _descriptor5, _assertThisInitialized(_this));
          _this.state = GAME_STATE.GAME_READ;
          _this._curScore = 0;
          return _this;
        }
        var _proto = BlockPuzzleScene.prototype;
        _proto.onLoad = function onLoad() {
          BlockPuzzleScene.instance = this;
          this.init();
        };
        _proto.onEnable = function onEnable() {
          console.log('GameManager onEnable');
        };
        _proto.init = function init() {
          console.log("Init-=====");
          var user = User.instance();
          var _BlockData$getLevelDa = BlockData.getLevelData(0),
            col = _BlockData$getLevelDa.col,
            list = _BlockData$getLevelDa.list,
            data = _BlockData$getLevelDa.data;
          this._curScore = 0;
          this.state = GAME_STATE.GAME_READ;
          this.pageBlock.init();
          // Set block data
          this.board.init(list);
          this.blockDragControl.init();
          this.state = GAME_STATE.GAME_PLAYING;
        };
        _proto.updateScore = function updateScore(count) {
          if (count < 1) return;
          var newScore = this.getScoreByBlock(count);
          this._curScore += newScore;
          this.pageBlock.addScore(newScore);
          console.log('updateScore', this._curScore);
          this.pageBlock.ShowAnimBird();
        };
        _proto.gameOver = function gameOver() {
          this.state = GAME_STATE.GAME_OVER;
          var popup = this.popupController.showPopup("GameLosePopup");
          popup.setClosePopup(this._curScore);
        };
        _proto.isPlaying = function isPlaying() {
          return this.state == GAME_STATE.GAME_PLAYING;
        };
        _proto.getScoreByBlock = function getScoreByBlock(count) {
          var blockPerCount = 10;
          return blockPerCount * count;
        };
        return BlockPuzzleScene;
      }(BaseScene), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageBlock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blockDragControl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "popupController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "board", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './BlockDragControl.ts', './Block.ts', './BlockPuzzleScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, CCInteger, Graphics, UITransform, Size, instantiate, Vec3, Color, Vec2, Component, Utils, BlockDragControl, Block, BlockPuzzleScene;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      CCInteger = module.CCInteger;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Size = module.Size;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Color = module.Color;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BlockDragControl = module.BlockDragControl;
    }, function (module) {
      Block = module.Block;
    }, function (module) {
      BlockPuzzleScene = module.BlockPuzzleScene;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "927a4qeGiZB86yzZqXU70v7", "BoardController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BLOCK_DRAG_NODE_NAME = 'blockDragNode'; // Drag node name

      var BoardController = exports('BoardController', (_dec = ccclass('BoardController'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(BlockDragControl), _dec6 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoardController, _Component);
        function BoardController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boardNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockDragControl", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineCount", _descriptor5, _assertThisInitialized(_this));
          // num col and row
          _this.gridSize = 0;
          _this.startX = 0;
          // start pos X
          _this.startY = 0;
          // start pos Y
          _this._g = null;
          _this._gColor = null;
          _this._uiTransform = null;
          _this._blockPosList = [];
          _this._removeBlockCount = 0;
          return _this;
        }
        var _proto = BoardController.prototype;
        _proto.init = function init(list) {
          this._gColor = this.node.getChildByName('Color').getComponent(Graphics);
          this._g = this.boardNode.getComponent(Graphics);
          this._uiTransform = this.boardNode.getComponent(UITransform);
          this.gridSize = this._uiTransform.width / this.lineCount;
          this._removeBlockCount = 0;
          this.clearBlockPosList();
          this.drawChessBoard();
          this.setBlockPosList(list);
        };
        _proto.drawChessBoard = function drawChessBoard() {
          console.log("lineCount:::::" + this.lineCount);
          // this._g.strokeColor = new Color().fromHEX('#69DBFF');
          this._g.lineCap = Graphics.LineCap.ROUND;
          this._g.lineJoin = Graphics.LineJoin.ROUND;
          this.startX = -this.gridSize * this.lineCount / 2;
          this.startY = -this.gridSize * this.lineCount / 2;

          // draw horizontal
          for (var i = 0; i <= this.lineCount; i++) {
            var y = this.startY + i * this.gridSize;
            var x = this.startX + this.lineCount * this.gridSize;
            this._g.moveTo(this.startX, y);
            this._g.lineTo(x, y);
            this._g.stroke();
          }

          // draw Vertical
          for (var j = 0; j <= this.lineCount; j++) {
            var _x = this.startX + j * this.gridSize;
            var _y = this.startY + this.lineCount * this.gridSize;
            this._g.moveTo(_x, this.startY);
            this._g.lineTo(_x, _y);
            this._g.stroke();
          }
          for (var _i = 0; _i < this.lineCount; _i++) {
            for (var _j = 0; _j < this.lineCount; _j++) {
              var pos = Utils.convertRowColToPos(_i, _j, this.gridSize, this.startX, this.startY);
              this._blockPosList.push([pos, 0, null]);
              var size = new Size(this.gridSize, this.gridSize);
              var _x2 = this.startX + _j * this.gridSize + this.gridSize / 2;
              var _y2 = this.startY + _i * this.gridSize + this.gridSize / 2;
              var blockNode = instantiate(this.cellPrefab);
              blockNode.setPosition(new Vec3(_x2, _y2, 0));
              blockNode.getComponent(UITransform).setContentSize(size);
              blockNode.name = "row:" + _i + "_" + _j;
              blockNode.parent = this.boardNode;
            }
          }
          // console.log(this._blockPosList[0])
          // console.log(this._blockPosList[9])
          // console.log(this._blockPosList[90])
          // console.log(this._blockPosList[99])
          // const posArr = [this._blockPosList[0][0], this._blockPosList[9][0], this._blockPosList[90][0], this._blockPosList[99][0]]
          // this.drawRectColor(posArr);
          // this.removeRectColor();

          // const list = []
          // for(let i = 0; i < this._blockPosList.length; i++) {
          //     const pos = this._blockPosList[i][0];
          //     list.push(pos);
          // }
          // this.drawRectColor(list);
        }

        /** */;
        _proto.setBlockPosList = function setBlockPosList(list) {
          var size = new Size(this.gridSize, this.gridSize);
          for (var i = 0; i < this._blockPosList.length; i++) {
            var pos = this._blockPosList[i][0];
            if (list[i] > 0) {
              var blockNode = instantiate(this.blockPrefab);
              blockNode.getComponent(UITransform).setContentSize(size);
              blockNode.setPosition(pos);
              blockNode.parent = this.boardNode;
              this.setGridPosVal(i, 1, blockNode);
            }
          }
        };
        _proto.setGridPosVal = function setGridPosVal(index, fill, bNode) {
          if (!this._blockPosList.length || index < 0 || index >= this._blockPosList.length) {
            return;
          }
          this._blockPosList[index][1] = fill;
          this._blockPosList[index][2] = bNode;
        };
        _proto.getGridPosVal = function getGridPosVal(index) {
          if (!this._blockPosList.length || index < 0 || index >= this._blockPosList.length) {
            return null;
          }
          return this._blockPosList[index].slice();
        };
        _proto.isEmptyPos = function isEmptyPos(row, col, index) {
          //const k = index !== -1 ? index : this.getIndex(row, col);
          var k = this.getIndex(row, col);
          if (!this._blockPosList.length || k < 0 || k >= this._blockPosList.length) {
            return false;
          }
          var val = this.getGridPosVal(k);
          return val && val[1] === 0;
        };
        _proto.fillColor = function fillColor(pos, color) {
          var x = pos.x - this.gridSize / 2 + 3;
          var y = pos.y - this.gridSize / 2 + 3;
          this._gColor.fillColor = color;
          this._gColor.fillRect(x, y, this.gridSize - 6, this.gridSize - 6);
          this._gColor.fill();
        };
        _proto.fillColorList = function fillColorList(posList, color) {
          for (var i = 0; i < posList.length; i++) {
            this.fillColor(posList[i], color);
          }
        };
        _proto.drawRectColor = function drawRectColor(posList) {
          this.fillColorList(posList, new Color().fromHEX('#2debff'));
        };
        _proto.removeRectColor = function removeRectColor() {
          this._gColor.clear();
        };
        _proto.getIndex = function getIndex(row, col) {
          return row * this.lineCount + col;
        };
        _proto.checkEndGame = function checkEndGame() {
          var dragBlockList = this.blockDragControl.getDragBlockList();
          for (var k = 0; k < dragBlockList.length; k++) {
            var drag = dragBlockList[k];
            var posList = drag.getBlockPosList();
            var offset = new Vec3(0, 0, 0);
            var newPos = new Vec3(0, 0, 0);
            console.log("11KKKKKKK" + dragBlockList.length);
            for (var r = 0; r < this.lineCount; r++) {
              outerLoop: for (var c = 0; c < this.lineCount; c++) {
                for (var i = 0; i < posList.length; i++) {
                  var p = posList[i].clone();
                  newPos = new Vec3(0, 0, 0);
                  var d = Utils.convertRowColToPos(r, c, this.gridSize, this.startX, this.startY);
                  Vec2.add(newPos, p, d);
                  var _Utils$convertPosToRo = Utils.convertPosToRowCol(newPos, this.gridSize, this.startX, this.startY),
                    row = _Utils$convertPosToRo[0],
                    col = _Utils$convertPosToRo[1];
                  console.log("Row:: " + row + " :Col:: " + col);
                  var index = this.getIndex(row, col);
                  var gridPos = this.getGridPosVal(index);
                  if (row < 0 || row >= this.lineCount || col < 0 || col >= this.lineCount) {
                    console.log('Out of range');
                    continue outerLoop;
                  }
                  if (!gridPos) {
                    console.log('The location does not exist');
                    continue outerLoop;
                  }
                  if (gridPos[1] === 1) {
                    console.log('There is already a block at this location');
                    continue outerLoop;
                  }
                  var pos = gridPos[0].clone();
                  if (i === 0) {
                    Vec2.subtract(offset, pos, newPos);
                  }
                }
                console.log("22KKKKKKK");
                return false;
              }
            }
          }
          console.log("33KKKKKKK");
          return true;
        }
        /**  */;
        _proto.checkDragPosition = function checkDragPosition(posList, dragPos) {
          this.removeRectColor();
          var offset = new Vec3(0, 0, 0);
          var newPos = new Vec3(0, 0, 0);
          var rowColList = [];
          var newBlockPosList = [];
          var d = dragPos.clone();
          for (var i = 0; i < posList.length; i++) {
            var p = posList[i].clone();
            newPos = new Vec3(0, 0, 0);
            Vec2.add(newPos, p, d);
            var _Utils$convertPosToRo2 = Utils.convertPosToRowCol(newPos, this.gridSize, this.startX, this.startY),
              row = _Utils$convertPosToRo2[0],
              col = _Utils$convertPosToRo2[1];
            var index = this.getIndex(row, col);
            var gridPos = this.getGridPosVal(index);
            console.log('index', index);
            console.log('gridPos', gridPos);
            console.log('row', row, col);
            if (row < 0 || row >= this.lineCount || col < 0 || col >= this.lineCount) {
              console.log('Out of range');
              return false;
            }
            if (!gridPos) {
              console.log('The location does not exist');
              return false;
            }
            if (gridPos[1] === 1) {
              console.log('There is already a block at this location');
              return false;
            }
            var pos = gridPos[0].clone();
            newBlockPosList.push(pos);
            rowColList.push([row, col]);
            if (i === 0) {
              Vec2.subtract(offset, pos, newPos);
            }
          }
          // console.log(newBlockPosList);

          this.drawRectColor(newBlockPosList);
          // console.log('offset', offset)

          return [offset, rowColList];
        }

        /** Stuff into empty board */;
        _proto.setFillPositionByIndex = function setFillPositionByIndex(rowColList, blockList) {
          for (var i = 0; i < rowColList.length; i++) {
            var index = this.getIndex(rowColList[i][0], rowColList[i][1]);
            this.setGridPosVal(index, 1, blockList[i]);
          }
        }

        /** Check whether the horizontal and vertical directions are full and destroy them */;
        _proto.checkBoardFull = function checkBoardFull(rowColList) {
          this._removeBlockCount = 0;
          var rowList = [];
          var colList = [];

          // Lateral inspection
          for (var k = 0; k < rowColList.length; k++) {
            var row = rowColList[k][0];
            var indexList = [];
            var j = 0;
            for (j = 0; j < this.lineCount; j++) {
              var index = this.getIndex(row, j);
              var gridPos = this.getGridPosVal(index);
              if (!gridPos || gridPos[1] === 0) {
                break;
              }
              indexList.push(index);
            }
            if (j >= this.lineCount) {
              rowList.push(indexList);
            }
          }

          // Longitudinal inspection
          for (var _k = 0; _k < rowColList.length; _k++) {
            var col = rowColList[_k][1];
            var _indexList = [];
            var i = 0;
            for (i = 0; i < this.lineCount; i++) {
              var _index = this.getIndex(i, col);
              var _gridPos = this.getGridPosVal(_index);
              if (!_gridPos || _gridPos[1] === 0) {
                break;
              }
              _indexList.push(_index);
            }
            if (i >= this.lineCount) {
              colList.push(_indexList);
            }
          }

          // destroy horizontal
          this.removeBlock(rowList);

          // Destroy portrait
          this.removeBlock(colList);
          this.removeInvalidDragNode();

          // effect
          if (rowList.length || colList.length) {
            BlockPuzzleScene.instance.audioController.play('erase');
          }
          return this._removeBlockCount;
        };
        _proto.removeBlock = function removeBlock(list) {
          for (var i = 0; i < list.length; i++) {
            var indexList = list[i];
            for (var j = 0; j < indexList.length; j++) {
              var index = indexList[j];
              var gridPos = this.getGridPosVal(index);
              if (!gridPos) continue;
              var blockNode = gridPos[2];
              if (blockNode) {
                this._removeBlockCount++;
                blockNode.getComponent(Block).removeNodeAction();
              }
              this.setGridPosVal(index, 0, null);
            }
          }
        };
        _proto.removeInvalidDragNode = function removeInvalidDragNode() {
          // Clear useless nodes
          var children = this.boardNode.children;
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.name === BLOCK_DRAG_NODE_NAME && child.children.length === 0) {
              child.destroy();
            }
          }
        };
        _proto.clearBlockPosList = function clearBlockPosList() {
          this._blockPosList.forEach(function (item) {
            if (item && item.length > 2) {
              var posNode = item[2];
              if (posNode) {
                posNode.destroy();
              }
            }
          });
          this._blockPosList = [];
        };
        _proto.handleTouchStart = function handleTouchStart(event, drag) {
          this.blockDragControl && this.blockDragControl.handleTouchStart(event, drag);
        };
        _proto.handleTouchMove = function handleTouchMove(event, drag) {
          this.blockDragControl && this.blockDragControl.handleTouchMove(event, drag);
        };
        _proto.handleTouchEnd = function handleTouchEnd(event, drag) {
          this.blockDragControl && this.blockDragControl.handleTouchEnd(event, drag);
        };
        return BoardController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blockDragControl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CanvasHelpper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCBoolean, Canvas, CCInteger, Widget, sys, view, macro, director, screen, log, ResolutionPolicy, Camera, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      Canvas = module.Canvas;
      CCInteger = module.CCInteger;
      Widget = module.Widget;
      sys = module.sys;
      view = module.view;
      macro = module.macro;
      director = module.director;
      screen = module.screen;
      log = module.log;
      ResolutionPolicy = module.ResolutionPolicy;
      Camera = module.Camera;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "bd3e3+6tnlA2L/IldwozPPG", "CanvasHelpper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CanvasHelpper = exports('CanvasHelpper', (_dec = ccclass('CanvasHelpper'), _dec2 = property(CCBoolean), _dec3 = property(CCBoolean), _dec4 = property({
        type: Canvas
      }), _dec5 = property(CCBoolean), _dec6 = property(CCBoolean), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property({
        type: Widget
      }), _dec10 = property(CCBoolean), _dec11 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CanvasHelpper, _Component);
        function CanvasHelpper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "autoOrientation", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isPortrait", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fitByOrientation", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useCustomDesignResolution", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "customDSWidth", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "customDSHeight", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "widgetNodes", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isDebug", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minScreenRatio", _descriptor10, _assertThisInitialized(_this));
          _this._thisOnResized = void 0;
          _this.innerSize = void 0;
          return _this;
        }
        var _proto = CanvasHelpper.prototype;
        _proto.onLoad = function onLoad() {
          this.innerSize = {
            width: window.innerWidth,
            height: window.innerHeight
          };
          this._thisOnResized = this.onScreenResized.bind(this);
          if (sys.isBrowser) {
            window.addEventListener('resize', this._thisOnResized);
          } else {
            view.on('canvas-resize', this._thisOnResized);
          }
          if (!sys.isNative) {
            var divFullscreen = document.getElementById('div_full_screen');
            if (this.isPortrait) {
              if (divFullscreen) {
                divFullscreen.style.visibility = "hidden";
              }
            }
            if (this.autoOrientation) {
              view.setOrientation(macro.ORIENTATION_AUTO);
            } else if (this.isPortrait) {
              view.setOrientation(macro.ORIENTATION_PORTRAIT);
            } else {
              view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            }
          }
        };
        _proto.start = function start() {
          if (sys.isMobile) {
            var eventResize = new Event('gameShow');
            window.dispatchEvent(eventResize);
          }
          if (sys.isNative) {
            director.emit("INTEGRATION_SET_CANVAS_ORIENT", this.isPortrait ? 0 : 1);
          }
          this.scaleCanvasByOrientation();
        };
        _proto.scaleCanvasByOrientation = function scaleCanvasByOrientation() {
          var screenWidth = sys.isBrowser ? window.innerWidth : screen.windowSize.width;
          var screenHeight = sys.isBrowser ? window.innerHeight : screen.windowSize.height;
          if (this.autoOrientation) {
            if (screenWidth < screenHeight) {
              this.isPortrait = true;
            } else {
              this.isPortrait = false;
            }
          } else {
            if (this.isPortrait) {
              view.setOrientation(macro.ORIENTATION_PORTRAIT);
            } else {
              view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            }
          }
          if (this.canvas) {
            if (this.isDebug) {
              log("Canvas after update: ");
              log(this.canvas);
            }
            this.canvas.alignCanvasWithScreen = true;
            if (this.fitByOrientation) {
              var designRatio = this.useCustomDesignResolution ? this.customDSWidth / this.customDSHeight : view.getDesignResolutionSize().width / view.getDesignResolutionSize().height;
              var screenRatio = screenWidth / screenHeight;
              if (window && sys.isMobile && sys.isBrowser) {
                var isLandscapeOrien = this.isLandscapeScreen();
                if (this.isPortrait) {
                  screenRatio = isLandscapeOrien ? screenHeight / screenWidth : screenWidth / screenHeight;
                } else {
                  screenRatio = isLandscapeOrien ? window.innerWidth / window.innerHeight : window.innerHeight / window.innerWidth;
                }
              }
              if (this.isDebug) {
                log("[TestResize]View size width: " + screenWidth + ", height: " + screenHeight + "  Design Resolution: W: " + view.getDesignResolutionSize().width + ", H: " + view.getDesignResolutionSize().height + ",  Screen Ratio: " + screenRatio + ", Design Ratio: " + designRatio + ", minScreenRatio: " + this.minScreenRatio);
              }
              if (this.isPortrait) {
                if (screenRatio < designRatio) {
                  view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_WIDTH);
                  if (this.isDebug) {
                    log("CANVAS FIT WIDTH");
                  }
                } else {
                  view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_HEIGHT);
                  if (this.isDebug) {
                    log("CANVAS FIT HEIGHT");
                  }
                }
                this.rotateRootPortraitGame();
              } else {
                if (screenRatio < designRatio && screenRatio >= this.minScreenRatio) {
                  view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_WIDTH);
                  if (this.isDebug) {
                    log("[TestResize]CANVAS FIT WIDTH");
                  }
                } else {
                  view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_HEIGHT);
                  if (this.isDebug) {
                    log("[TestResize]CANVAS FIT HEIGHT");
                  }
                }
              }
            }
          } else {
            if (this.isDebug) {
              log("No canvas component");
            }
          }
          if (this.widgetNodes && this.widgetNodes.length > 0) {
            for (var i = 0; i < this.widgetNodes.length; i++) {
              var widget = this.widgetNodes[i];
              if (widget) {
                this.widgetNodes[i].updateAlignment();
              }
            }
          }
        };
        _proto.onScreenResized = function onScreenResized() {
          this.scaleCanvasByOrientation();
        };
        _proto.isLandscapeScreen = function isLandscapeScreen() {
          if (sys.isMobile && sys.isBrowser && typeof window.matchMedia === 'function') {
            if (window.matchMedia("(orientation: landscape)").matches) {
              return true;
            }
            if (window.matchMedia("(orientation: portrait)").matches) {
              return false;
            }
          }
          return true;
        };
        _proto.isShowKeyboard = function isShowKeyboard() {
          var currentViewSize = window.innerWidth * window.innerHeight;
          var rate = currentViewSize / (this.innerSize.width * this.innerSize.height);
          return rate < 0.8;
        };
        _proto.rotateRootPortraitGame = function rotateRootPortraitGame() {
          if (!this.isPortrait) return;
          if (sys.isMobile && sys.isBrowser) {
            var isLandScapeView = this.isLandscapeScreen() && !this.isShowKeyboard();
            this.node.children.forEach(function (child) {
              if (!child.getComponent(Camera)) {
                child.angle = isLandScapeView ? 180 : 0;
              }
            });
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (sys.isBrowser) {
            window.removeEventListener('resize', this._thisOnResized);
          } else {
            view.off('canvas-resize', this._thisOnResized);
          }
        };
        return CanvasHelpper;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "autoOrientation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isPortrait", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fitByOrientation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "useCustomDesignResolution", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "customDSWidth", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1280;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "customDSHeight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 720;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "widgetNodes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "isDebug", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "minScreenRatio", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0445eqMUddFs5KqWfDac4cM", "Config", undefined);
      var Config = exports('Config', {
        serverHost: "https://test-flappybird.cocosstudio.net"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Events.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca85cwJdRRJfJYKnZpYutCE", "Events", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameEvents = exports('GameEvents', {
        WALLET_SHOW: 'WALLET_SHOW',
        WALLET_HIDE: 'WALLET_HIDE'
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameClosePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, BasePopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c1f87lHsO1MLZQoKR6sjDxB", "GameClosePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameClosePopup = exports('GameClosePopup', (_dec = ccclass('GameClosePopup'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePopup) {
        _inheritsLoose(GameClosePopup, _BasePopup);
        function GameClosePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePopup.call.apply(_BasePopup, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblScore", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameClosePopup.prototype;
        _proto.setClosePopup = function setClosePopup(score) {
          this.lblScore.string = "score: " + score;
        };
        return GameClosePopup;
      }(BasePopup), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameWinPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BasePopup;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "49bb6EFUHtOOIHZoRPvKHq4", "GameWinPopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameWinPopup = exports('GameWinPopup', (_dec = ccclass('GameWinPopup'), _dec(_class = /*#__PURE__*/function (_BasePopup) {
        _inheritsLoose(GameWinPopup, _BasePopup);
        function GameWinPopup() {
          return _BasePopup.apply(this, arguments) || this;
        }
        return GameWinPopup;
      }(BasePopup)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalEvent.ts", ['cc', './LogManager.ts'], function (exports) {
  var cclegacy, LogManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogManager = module.LogManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54a1b+57SRJQ7ZzPtgFt8Yq", "GlobalEvent", undefined);
      //import { LogManager } from "../common/LogManager";
      var GlobalEvent = /*#__PURE__*/function () {
        function GlobalEvent() {
          this.handles_ = {};
        } //LogManager.log("=GlobalEvent==")
        var _proto = GlobalEvent.prototype;
        _proto.emit = function emit(eventName, data) {
          data = data || {};
          data.eventName = eventName;
          var event_list = this.handles_[eventName];
          if (event_list) {
            for (var i = 0; i < event_list.length; i++) {
              var item = event_list[i];
              if (item && item.callback) {
                item.callback(data);
              }
            }
          }
        };
        _proto.on = function on(eventName, callback, target) {
          var event_list = this.handles_[eventName];
          if (event_list) {
            for (var i = 0; i < event_list.length; i++) {
              var _item = event_list[i];
              if (_item.target == target) {
                LogManager.log("===alread exist target");
                return;
              }
            }
          }
          var item = {};
          item.target = target;
          item.callback = callback.bind(target);
          this.handles_[eventName] = this.handles_[eventName] || [];
          this.handles_[eventName].push(item);
        };
        _proto.off = function off(eventName, target) {
          var event_list = this.handles_[eventName];
          var length = event_list.length;
          for (var i = length - 1; i >= 0; i--) {
            var item = event_list[i];
            if (item) {
              if (item.target == target) {
                event_list.splice(i, 1);
              }
            }
          }
        };
        _proto.offAll = function offAll(eventName) {
          this.handles_[eventName] = null;
        };
        _proto.offAllByTarget = function offAllByTarget(target) {
          var self = this;
          Object.keys(this.handles_).forEach(function (key) {
            var event_list = self.handles_[key];
            for (var i = event_list.length - 1; i >= 0; i--) {
              var item = event_list[i];
              if (item) {
                if (item.target == target) {
                  //LogManager.log("this.handles_==!!!!=")
                  event_list.splice(i, 1);
                }
              }
            }
          });

          //LogManager.log("this.handles_===",this.handles_)
        };

        return GlobalEvent;
      }();
      var globalEvent = exports('default', new GlobalEvent());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Slider, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Slider = module.Slider;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "511e3/KLy5GfqGjSsDRtlJj", "LoadingGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingGameScene = exports('LoadingGameScene', (_dec = ccclass('LoadingGameScene'), _dec2 = property(ProgressBar), _dec3 = property(Slider), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingGameScene, _Component);
        function LoadingGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadProcess", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadSlider", _descriptor2, _assertThisInitialized(_this));
          _this.currentProcess = 0;
          _this.speed = 0;
          _this.targetPercent = 0;
          _this.isLoadDone = false;
          _this.mainScene = "MainGame";
          return _this;
        }
        var _proto = LoadingGameScene.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.updateLoadDisplay();
          director.preloadScene(this.mainScene, function (completedCount, totalCount, item) {
            _this2.updatePercent(completedCount / totalCount);
          }, function (error) {
            if (error) {
              console.error("exit Game");
              if (window && window.location) {
                window.location.reload();
              }
              return;
            }
            _this2.isLoadDone = true;
          });
        };
        _proto.updatePercent = function updatePercent(currentPercent) {
          var percent = currentPercent;
          if (percent <= this.currentProcess) {
            this.speed = 0;
            return;
          }
          this.targetPercent = percent;
          this.speed = (percent - this.currentProcess) / (1 - percent) * 3 + 0.1;
        };
        _proto.update = function update(deltaTime) {
          if (this.currentProcess < 1) {
            this.currentProcess += this.speed * deltaTime;
            this.updateLoadDisplay();
          } else if (this.isLoadDone == true) {
            director.loadScene(this.mainScene);
          }
        };
        _proto.updateLoadDisplay = function updateLoadDisplay() {
          var percent = Number(this.currentProcess.toFixed(3));
          percent > 1 && (percent = 1);
          this.loadSlider.progress = this.loadProcess.progress = percent;
        };
        return LoadingGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadProcess", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b325zMl7pNbLAHRP4dWQor", "LogManager", undefined);
      var LogManager = exports('LogManager', /*#__PURE__*/function () {
        function LogManager() {}
        LogManager.log = function log() {
          var _console;
          (_console = console).log.apply(_console, arguments);
        };
        return LogManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './telegram-web.ts', './AudioController.ts', './CanvasHelpper.ts', './ResizeWindowHelper.ts', './BasePopup.ts', './PopupAnimation.ts', './PopupController.ts', './PortalController.ts', './BaseScene.ts', './SceneController.ts', './LoadingGameScene.ts', './ActionHelper.ts', './ActionHelpper.ts', './Utilities.ts', './utils2.ts', './BlockPuzzleScene.ts', './GameClosePopup.ts', './GameWinPopup.ts', './PromptPopup.ts', './AudioManager.ts', './Block.ts', './BlockDrag.ts', './BlockDragControl.ts', './BoardController.ts', './BlockData.ts', './User.ts', './PageBlock.ts', './SpineController.ts', './Utils.ts', './Config.ts', './Events.ts', './GlobalEvent.ts', './LogManager.ts', './WalletController.ts', './WalletView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageBlock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpineController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, UITransform, tween, Component, SpineController, BIRD_STATE;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SpineController = module.SpineController;
      BIRD_STATE = module.BIRD_STATE;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "014627/BKtJhomY33UsH8Cm", "PageBlock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageBlock = exports('PageBlock', (_dec = ccclass('PageBlock'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PageBlock, _Component);
        function PageBlock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scoreLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnPlusRotate", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtRotate", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineBird", _descriptor5, _assertThisInitialized(_this));
          _this._score = 0;
          _this.rotateItemUser = 0;
          // so item rotate hien tai cua user
          _this.countMatch = 0;
          // so lan an 
          _this.COUNT_PLUS_ITEM_ROTATE = 2;
          return _this;
        }
        var _proto = PageBlock.prototype;
        // so lan dat duoc 1 item rotate 
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.init = function init() {
          // Set page data
          this._score = 0;
          this.showScoreLabel();
        };
        _proto.showScoreLabel = function showScoreLabel() {
          this.scoreLabel.getComponent(Label).string = "" + this._score;
        };
        _proto.addScore = function addScore(score) {
          this._score += score;
          this.showScoreLabel();
          this.countMatch++;
          if (this.countMatch == this.COUNT_PLUS_ITEM_ROTATE) {
            this.countMatch = 0;
            this.addRotateItemUser(this.rotateItemUser + 1);
          }
        };
        _proto.addRotateItemUser = function addRotateItemUser(val) {
          console.log("addRotateItemUser::" + val);
          this.rotateItemUser = val;
          this.txtRotate.getComponent(Label).string = "" + this.rotateItemUser;
          this.btnPlusRotate.active = this.rotateItemUser <= 0;
        };
        _proto.ShowAnimBird = function ShowAnimBird() {
          var bird = instantiate(this.spineBird);
          this.node.addChild(bird);
          bird.setPosition(0, 0, 0);
          bird.setScale(-1, 1);
          var spineController = bird.getComponent(SpineController);
          spineController.playAnimation(BIRD_STATE.run.toString());
          var tartgetWorldPos = this.rotateNode.getWorldPosition();
          this.moveToTarget(spineController.node, tartgetWorldPos, 1);
        };
        _proto.moveToTarget = function moveToTarget(curNode, targetPos, duration) {
          var _this$node$parent;
          if (duration === void 0) {
            duration = 1;
          }
          // Get position in world space
          var currentWorldPos = curNode.getWorldPosition();
          var targetWorldPos = targetPos;

          // Convert both to local space relative to this node’s parent
          var parentUITransform = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(UITransform);
          var localStart = parentUITransform ? parentUITransform.convertToNodeSpaceAR(currentWorldPos) : currentWorldPos;
          var localEnd = parentUITransform ? parentUITransform.convertToNodeSpaceAR(targetWorldPos) : targetWorldPos;
          curNode.setPosition(localStart);
          console.log("targetPos:: " + targetPos);
          tween(curNode).to(duration, {
            position: localEnd
          }, {
            easing: 'linear'
          }).call(function () {
            curNode.destroy();
          }).start();
        };
        return PageBlock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotateNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnPlusRotate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtRotate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spineBird", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ActionHelper.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, UIOpacity, Vec3, UITransform, Component, fadeIn, fadeOut;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      fadeIn = module.fadeIn;
      fadeOut = module.fadeOut;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4cc112+9iJGn7+oJpGNVG39", "PopupAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var POPUP_ANIMATION = exports('POPUP_ANIMATION', /*#__PURE__*/function (POPUP_ANIMATION) {
        POPUP_ANIMATION[POPUP_ANIMATION["PULSE"] = 0] = "PULSE";
        POPUP_ANIMATION[POPUP_ANIMATION["BOUNCE"] = 1] = "BOUNCE";
        POPUP_ANIMATION[POPUP_ANIMATION["EASE"] = 2] = "EASE";
        POPUP_ANIMATION[POPUP_ANIMATION["FADE"] = 3] = "FADE";
        POPUP_ANIMATION[POPUP_ANIMATION["DEFAULT"] = 4] = "DEFAULT";
        return POPUP_ANIMATION;
      }({}));
      var PopupAnimation = exports('PopupAnimation', (_dec = ccclass('PopupAnimation'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupAnimation, _Component);
        function PopupAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.content = null;
          _this.showPosition = null;
          _this.fullScale = 1;
          return _this;
        }
        var _proto = PopupAnimation.prototype;
        _proto.init = function init(content, showPosition, fullScale) {
          if (fullScale === void 0) {
            fullScale = 1;
          }
          this.content = content;
          this.showPosition = showPosition;
          this.fullScale = fullScale;
        };
        _proto.showByEffect = function showByEffect(completeCB, animType) {
          if (animType === void 0) {
            animType = POPUP_ANIMATION.DEFAULT;
          }
          var animation = tween(this.content);
          var compOpacityContent = this.content.getComponent(UIOpacity);
          if (!compOpacityContent) {
            compOpacityContent = this.content.addComponent(UIOpacity);
          }
          compOpacityContent.opacity = 0;
          var hidePosition = null;
          var runTween = true;
          switch (animType) {
            case POPUP_ANIMATION.PULSE:
              this.content.setScale(1, 1, 1);
              animation.then(tween().parallel(fadeIn(0.3), tween().to(0.15, {
                scale: new Vec3(this.fullScale + 0.1, this.fullScale + 0.1, 1)
              }, {
                easing: "sineOut"
              }).to(0.15, {
                scale: new Vec3(this.fullScale, this.fullScale, 1)
              }, {
                easing: "sineOut"
              })));
              break;
            case POPUP_ANIMATION.BOUNCE:
              this.content.setScale(new Vec3(this.fullScale, this.fullScale, 1));
              compOpacityContent.opacity = 255;
              hidePosition = new Vec3(this.content.position.x, this.content.position.y + this.content.getComponent(UITransform).height * 1.5, 1);
              this.content.setPosition(hidePosition);
              animation.then(tween().to(0.65, {
                position: this.showPosition
              }, {
                easing: "backOut"
              }));
              break;
            case POPUP_ANIMATION.EASE:
              this.content.setScale(new Vec3(this.fullScale, this.fullScale, 1));
              compOpacityContent.opacity = 255;
              hidePosition = new Vec3(this.content.position.x - this.content.getComponent(UITransform).width * 1.5, this.content.position.y, 1);
              this.content.setPosition(hidePosition);
              animation.then(tween().to(0.65, {
                position: this.showPosition
              }, {
                easing: "backOut"
              }));
              break;
            case POPUP_ANIMATION.FADE:
              this.content.setScale(new Vec3(this.fullScale, this.fullScale, 1));
              animation.then(fadeIn(0.3));
              break;
            default:
              runTween = false;
              this.content.setScale(new Vec3(this.fullScale, this.fullScale, 1));
              compOpacityContent.opacity = 255;
              break;
          }
          if (runTween && animation != null) {
            animation.call(function () {
              completeCB && completeCB();
            });
            animation.start();
          } else {
            completeCB && completeCB();
          }
        };
        _proto.hideWithEffect = function hideWithEffect(completeCB, animType) {
          if (animType === void 0) {
            animType = POPUP_ANIMATION.DEFAULT;
          }
          var animation = tween(this.content);
          var hidePosition = null;
          var runTween = true;
          switch (animType) {
            case POPUP_ANIMATION.PULSE:
              animation.then(tween().parallel(fadeOut(0.3), tween().to(0.15, {
                scale: new Vec3(this.fullScale + 0.1, this.fullScale + 0.1, 1)
              }, {
                easing: "sineIn"
              }).to(0.15, {
                scale: new Vec3(this.fullScale - 0.1, this.fullScale - 0.1, 1)
              }, {
                easing: "sineIn"
              })));
              break;
            case POPUP_ANIMATION.BOUNCE:
              hidePosition = new Vec3(this.content.position.x, this.content.position.y + this.content.getComponent(UITransform).height * 1.5, 1);
              animation.then(tween().to(0.65, {
                position: new Vec3(this.showPosition.x, hidePosition.y, 1)
              }, {
                easing: "backIn"
              }));
              break;
            case POPUP_ANIMATION.EASE:
              hidePosition = new Vec3(this.content.position.x - this.content.getComponent(UITransform).width * 1.5, this.content.position.y, 1);
              animation.then(tween().to(0.65, {
                position: new Vec3(hidePosition.x, this.showPosition.y, 1)
              }, {
                easing: "backIn"
              }));
              break;
            case POPUP_ANIMATION.FADE:
              animation.then(fadeOut(0.1));
              break;
            default:
              runTween = false;
              break;
          }
          if (runTween && animation) {
            if (this.content) {
              animation.call(function () {
                completeCB && completeCB();
              });
              animation.start();
            }
          } else {
            completeCB && completeCB();
          }
        };
        return PopupAnimation;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Prefab, Node, instantiate, Tween, UIOpacity, tween, Component, BasePopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "8531eX0TcxNMae+buhSmeWQ", "PopupController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupController = exports('PopupController', (_dec = ccclass('PopupController'), _dec2 = property(Sprite), _dec3 = property([Prefab]), _dec4 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupController, _Component);
        function PopupController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "overlay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lstPopupPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor3, _assertThisInitialized(_this));
          _this.popupQueue = [];
          _this.mapPopup = new Map();
          return _this;
        }
        var _proto = PopupController.prototype;
        // @property()
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.overlay.node.active = false;
          this.lstPopupPrefab.forEach(function (element) {
            _this2.mapPopup.set(element.name, element);
          });
          this.initEvents();
        };
        _proto.initEvents = function initEvents() {
          this.overlay.node.on(Node.EventType.TOUCH_END, this.closePopupByOverlay, this);
        };
        _proto.showPopup = function showPopup(popupName) {
          if (this.mapPopup.has(popupName)) {
            var pop = instantiate(this.mapPopup.get(popupName));
            pop.parent = this.popupContainer;
            return pop.getComponent(BasePopup);
          }
          console.warn("POPUP not found : " + popupName);
          return null;
        };
        _proto.onPopupShow = function onPopupShow(popup) {
          if (this.popupQueue.indexOf(popup) < 0) {
            if (this.popupQueue.length <= 0) {
              this.playFadeInOverlay();
            }
            this.popupQueue.push(popup);
          }
        };
        _proto.onPopupHide = function onPopupHide(popup) {
          if (this.popupQueue.indexOf(popup) >= 0) {
            this.popupQueue.splice(this.popupQueue.indexOf(popup), 1);
          }
          this.popupQueue.length <= 0 && this.playFadeOutOverlay();
        };
        _proto.closeAll = function closeAll() {
          if (this.popupQueue.length < 1) {
            return;
          }
          for (var i = 0; i < this.popupQueue.length; i++) {
            this.popupQueue[i].hide();
          }
          this.playFadeOutOverlay();
          this.popupQueue = [];
        };
        _proto.closePopupByOverlay = function closePopupByOverlay() {
          if (this.popupQueue && this.popupQueue.length > 0) {
            var currPopup = this.popupQueue[this.popupQueue.length - 1];
            currPopup.hide();
          }
        };
        _proto.playFadeOutOverlay = function playFadeOutOverlay() {
          var _this3 = this;
          Tween.stopAllByTarget(this.overlay.getComponent(UIOpacity));
          tween(this.overlay.getComponent(UIOpacity)).to(0.3, {
            opacity: 0
          }).call(function () {
            _this3.overlay.node.active = false;
          }).start();
        };
        _proto.playFadeInOverlay = function playFadeInOverlay() {
          this.overlay.node.active = true;
          this.overlay.getComponent(UIOpacity).opacity = 0;
          Tween.stopAllByTarget(this.overlay.getComponent(UIOpacity));
          tween(this.overlay.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).start();
        };
        _proto.onDestroy = function onDestroy() {
          this.overlay.node.off(Node.EventType.TOUCH_END);
        };
        return PopupController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "overlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lstPopupPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PortalController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component, SceneController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      SceneController = module.SceneController;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7afe5okiPNIIqZruU9/gYlv", "PortalController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PortalController = exports('PortalController', (_dec = ccclass('PortalController'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PortalController, _Component);
        function PortalController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnBlock", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PortalController.prototype;
        _proto.start = function start() {
          this.btnBlock.node.on(Button.EventType.CLICK, this.showBlockPuzzle, this);
        };
        _proto.showBlockPuzzle = function showBlockPuzzle() {
          SceneController.instance.createScene("BlockPuzzle");
        };
        return PortalController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnBlock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PromptPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, BasePopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5c07aVMvIhGb76+2SPr+vJh", "PromptPopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PromptPopup = exports('PromptPopup', (_dec = ccclass('PromptPopup'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePopup) {
        _inheritsLoose(PromptPopup, _BasePopup);
        function PromptPopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePopup.call.apply(_BasePopup, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblContent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnOk", _descriptor2, _assertThisInitialized(_this));
          _this.okCB = null;
          _this.closeCB = null;
          return _this;
        }
        var _proto = PromptPopup.prototype;
        _proto.initEvents = function initEvents() {
          _BasePopup.prototype.initEvents.call(this);
          this.btnOk.node.on(Button.EventType.CLICK, this.onOkClicked, this);
        };
        _proto.onOkClicked = function onOkClicked() {
          this.okCB && this.okCB();
          this.hide();
        };
        _proto.showText = function showText(str, okCB, closeCB) {
          this.lblContent.string = str;
          this.okCB = okCB;
          this.closeCB = closeCB;
          this.btnOk.node.active = !!okCB;
          this.btnClose.node.active = !!closeCB;
        };
        _proto.onBtnCloseClicked = function onBtnCloseClicked() {
          this.closeCB && this.closeCB();
          this.hide();
        };
        return PromptPopup;
      }(BasePopup), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnOk", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResizeWindowHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, macro, Size, screen, ResolutionPolicy, math, UITransform, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      macro = module.macro;
      Size = module.Size;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
      math = module.math;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5a086oFlJ5FGbrlGFR24pZv", "ResizeWindowHelper", undefined);
      var ccclass = _decorator.ccclass;
      var ResizeWindowHelper = exports('default', (_dec = ccclass('ResizeWindowHelper'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResizeWindowHelper, _Component);
        function ResizeWindowHelper() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ResizeWindowHelper.prototype;
        _proto.start = function start() {
          this.updateSceneSize();
          view.setResizeCallback(this.updateSceneSize.bind(this));
        };
        _proto.updateSceneSize = function updateSceneSize() {
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          var realSize = {
            Width: 1080,
            Height: 1920
          };
          var AppSize = {
            Width: 720,
            Height: 1280,
            MaxWidth: 960,
            MaxHeight: 1560
          };
          var designResolution = new Size(AppSize.Width, AppSize.Height);
          var designRatio = AppSize.Width / AppSize.Height;
          var frameSize = screen.windowSize;
          var screenRatio = frameSize.width / frameSize.height;
          var canvasSize = screen.windowSize;
          if (screenRatio < designRatio) {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_WIDTH);
            realSize.Width = designResolution.width;
          } else {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_HEIGHT);
            var heightScale = AppSize.Height / canvasSize.height;
            realSize.Width = math.clamp(canvasSize.width * heightScale, AppSize.Width, AppSize.MaxWidth);
          }
          this.node.getComponent(UITransform).width = realSize.Width;
          console.log(screenRatio, "  set widdddddddd", "  -  ", realSize);
          this.scheduleOnce(this._resizeFullScreenButton, 0.1);
        };
        _proto._resizeFullScreenButton = function _resizeFullScreenButton() {
          this.unscheduleAllCallbacks();
          var div_full_screen = document.getElementById('div_full_screen');
          var enterFullscreen = document.getElementById('enterFullscreen');
          var exitFullscreen = document.getElementById('exitFullscreen');
          if (div_full_screen) {
            if (enterFullscreen) {
              enterFullscreen.style.top = "0";
              enterFullscreen.style.left = "0";
              enterFullscreen.style.width = "100%";
              enterFullscreen.style.height = "100%";
              enterFullscreen.style.backgroundSize = "contain";
            }
            if (exitFullscreen) {
              exitFullscreen.style.top = "0";
              exitFullscreen.style.left = "0";
              exitFullscreen.style.width = "100%";
              exitFullscreen.style.height = "100%";
              exitFullscreen.style.backgroundSize = "contain";
            }
            div_full_screen.style.position = "absolute";
            div_full_screen.style.width = "30px";
            div_full_screen.style.height = "30px";
            if (window.innerWidth > window.innerHeight) {
              div_full_screen.style.top = "70%";
              div_full_screen.style.left = "10px";
            } else {
              div_full_screen.style.top = "10px";
              div_full_screen.style.left = "23%";
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          view.setResizeCallback(null);
          this.unscheduleAllCallbacks();
        };
        return ResizeWindowHelper;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, isValid, instantiate, Component, BaseScene;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      isValid = module.isValid;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      BaseScene = module.BaseScene;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "d3b3bptdypGwZrN2ic72Nkc", "SceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneController = exports('SceneController', (_dec = ccclass('SceneController'), _dec2 = property([Prefab]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneController, _Component);
        function SceneController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scenePrefabs", _descriptor, _assertThisInitialized(_this));
          _this.curScene = null;
          return _this;
        }
        var _proto = SceneController.prototype;
        _proto.onLoad = function onLoad() {
          SceneController.instance = this;
        };
        _proto.createScene = function createScene(sceneName) {
          if (this.curScene && isValid(this.curScene.node)) {
            this.curScene.onClose();
            this.curScene = null;
          }
          for (var i = 0; i < this.scenePrefabs.length; i++) {
            if (this.scenePrefabs[i].name == sceneName.toString()) {
              var sceneNode = instantiate(this.scenePrefabs[i]);
              sceneNode.parent = this.node;
              this.curScene = sceneNode.getComponent(BaseScene);
              this.curScene.onStart();
            }
          }
        };
        return SceneController;
      }(Component), _class3.instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scenePrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Enum, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Enum = module.Enum;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3a7e9FhimdAvIo2/CYxB1EC", "SpineController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpineController = exports('SpineController', (_dec = ccclass('SpineController'), _dec2 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineController, _Component);
        function SpineController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpineController.prototype;
        _proto.onLoad = function onLoad() {}
        // Switch animation (call this from elsewhere, e.g., a button)
        ;

        _proto.playAnimation = function playAnimation(animName) {
          console.log("animname: " + animName);
          if (this.spine && this.spine.skeletonData) {
            this.spine.setAnimation(0, animName, true);
            console.log('Animation set successfully');
          } else {
            console.error('Still null. Check Spine asset or component setup.');
          }
        };
        return SpineController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      var BIRD_STATE = exports('BIRD_STATE', /*#__PURE__*/function (BIRD_STATE) {
        BIRD_STATE["none"] = "";
        BIRD_STATE["run"] = "run";
        BIRD_STATE["die"] = "die";
        BIRD_STATE["gap_nguoi"] = "gap_nguoi";
        BIRD_STATE["tha_nguoi"] = "tha_nguoi";
        return BIRD_STATE;
      }({}));
      Enum(BIRD_STATE);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/telegram-web.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sys;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "cb8407D3zdPOIUY4npAWBMx", "telegram-web", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tgLoadPromise = new Promise(function (resolve, reject) {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          var script = document.createElement("script");
          script.src = "https://telegram.org/js/telegram-web-app.js";
          script.async = true;
          script.onload = function () {
            var intervalId = setInterval(function () {
              if (window.Telegram && window.Telegram.WebApp) {
                resolve(window.Telegram.WebApp);
                clearInterval(intervalId);
              }
            }, 100);
          };
          script.onerror = function () {
            return reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));
          };
          document.head.appendChild(script);
        }
      });
      var TelegramWebApp = exports('TelegramWebApp', (_dec = ccclass('TelegramWebApp'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TelegramWebApp() {
          this._tgWebAppJS = null;
        }
        var _proto = TelegramWebApp.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return tgLoadPromise;
                case 2:
                  this._tgWebAppJS = _context.sent;
                  if (!this._tgWebAppJS) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return", Promise.resolve({
                    success: true
                  }));
                case 7:
                  return _context.abrupt("return", Promise.resolve({
                    success: false
                  }));
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.openTelegramLink = function openTelegramLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openTelegramLink(url);
        };
        _proto.openLink = function openLink(url, options) {
          if (options === void 0) {
            options = {};
          }
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openLink(url, options);
        };
        _proto.share = function share(url, text) {
          var shareUrl = 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text || '');
          this.openTelegramLink(shareUrl);
        };
        _proto.shareToStory = function shareToStory(media_url, shareText, widget_link_url, widget_link_name) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          var widget_link = {
            text: shareText,
            widget_link: {
              url: widget_link_url,
              name: widget_link_name
            }
          };
          this._tgWebAppJS.shareToStory(media_url, widget_link);
        };
        _proto.getTelegramWebApp = function getTelegramWebApp() {
          return this._tgWebAppJS;
        };
        _proto.getTelegramWebAppInitData = function getTelegramWebAppInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe;
        };
        _proto.getTelegramUser = function getTelegramUser() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe.user;
        };
        _proto.getTelegramInitData = function getTelegramInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initData;
        };
        _proto.openInvoice = function openInvoice(url, callback) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          this._tgWebAppJS.openInvoice(url, callback);
        };
        _proto.alert = function alert(message) {
          this._tgWebAppJS.showAlert(message);
        };
        _createClass(TelegramWebApp, null, [{
          key: "Instance",
          get: function get() {
            if (!TelegramWebApp._instance) {
              TelegramWebApp._instance = new TelegramWebApp();
            }
            return TelegramWebApp._instance;
          }
        }]);
        return TelegramWebApp;
      }(), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/User.ts", ['cc', './Utils.ts'], function (exports) {
  var cclegacy, _decorator, Utils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "d9e2axCx31MbLRw0eDcYgFZ", "User", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var User = exports('User', (_dec = ccclass('User'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        User.instance = function instance() {
          if (!this._instance) {
            var user = Utils.getLocalStorage('blockUser');
            if (user) {
              this._instance = new User(user.token);
            } else {
              this._instance = new User();
            }
          }
          return this._instance;
        };
        function User(token) {
          if (token === void 0) {
            token = 100;
          }
          this.token = 0;
          this.token = token;
        }
        var _proto = User.prototype;
        _proto.getToken = function getToken() {
          return this.token;
        };
        _proto.setToken = function setToken(gold) {
          this.token = gold >= 0 ? gold : 0;
          Utils.setLocalStorage('blockUser', this);
        };
        return User;
      }(), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utilities.ts", ['cc'], function (exports) {
  var cclegacy, Vec3, UITransform, sys, UIRenderer, UIOpacity, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      sys = module.sys;
      UIRenderer = module.UIRenderer;
      UIOpacity = module.UIOpacity;
      Color = module.Color;
    }],
    execute: function () {
      cclegacy._RF.push({}, "053fd2suC5NS4HZT0HnU/m5", "Utilities", undefined);
      var isEmpty = exports('isEmpty', function isEmpty(data) {
        return data == undefined || data == null;
      });
      var getPointByDegrees = exports('getPointByDegrees', function getPointByDegrees(cx, cy, x, y, angle) {
        var radians = -(Math.PI / 180) * angle,
          cos = Math.cos(radians),
          sin = Math.sin(radians),
          nx = cos * (x - cx) + sin * (y - cy) + cx,
          ny = cos * (y - cy) - sin * (x - cx) + cy;
        return new Vec3(nx, ny, 0);
      });
      var SetZIndex = exports('SetZIndex', function SetZIndex(node, index) {
        var zIndex = 'zIndex';
        if (!node.parent) return;
        node[zIndex] = index;
        for (var i = 0; i < node.parent.children.length; ++i) {
          var child = node.parent.children[i];
          if (child[zIndex] == undefined) {
            child[zIndex] = 0;
          }
          if (index <= child[zIndex] && node.uuid != child.uuid) {
            node.setSiblingIndex(child.getSiblingIndex());
            return;
          }
        }
        node.setSiblingIndex(node.parent.children.length);
      });
      var getRotation = exports('getRotation', function getRotation(p1, p2) {
        if (p1 == null || p2 == null) return 0;
        return Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180 / Math.PI;
      });
      var v2Distance = exports('v2Distance', function v2Distance(p1, p2) {
        if (p1 == null || p2 == null) return 0;
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      });
      var getPositionInOtherNode = exports('getPositionInOtherNode', function getPositionInOtherNode(spaceNode, targetNode) {
        if (targetNode.parent == null) {
          return null;
        }
        var pos = targetNode.parent.getComponent(UITransform).convertToWorldSpaceAR(targetNode.getPosition());
        return spaceNode.getComponent(UITransform).convertToNodeSpaceAR(pos);
      });
      var showFullScreenButton = exports('showFullScreenButton', function showFullScreenButton(isShow) {
        if (isShow === void 0) {
          isShow = true;
        }
        var visible = isShow ? "visible" : "hidden";
        var display = isShow ? "block" : "none";
        if (sys.os === sys.OS.ANDROID && sys.isMobile) {
          var divFullscreen = document.getElementById('div_full_screen');
          if (divFullscreen) {
            divFullscreen.style.visibility = visible;
            divFullscreen.style.display = display;
          }
        }
      });
      var formatUserName = exports('formatUserName', function formatUserName(userName, maxLength, replaceText) {
        if (userName === void 0) {
          userName = '';
        }
        if (maxLength === void 0) {
          maxLength = 16;
        }
        if (replaceText === void 0) {
          replaceText = "...";
        }
        if (userName.length <= maxLength) return userName;
        return userName.slice(0, maxLength - replaceText.length + 1) + replaceText;
      });
      var setOpacity = exports('setOpacity', function setOpacity(node, opacity) {
        var render2D = node.getComponent(UIRenderer);
        var uiOpacity = node.getComponent(UIOpacity);
        if (render2D) {
          if (uiOpacity) {
            uiOpacity.opacity = 255;
          }
          setRenderColor(render2D, opacity);
        } else {
          if (uiOpacity === null) {
            uiOpacity = node.addComponent(UIOpacity);
          }
          uiOpacity.opacity = opacity;
        }
        if (node) {
          //cheat for v373 to flag dirty transform
          node.position = node.position;
        }
      });
      var roundAngle = exports('roundAngle', function roundAngle(angle) {
        if (angle > 180) angle -= 360;
        if (angle < -180) angle += 360;
        return angle;
      });
      var setRenderColor = exports('setRenderColor', function setRenderColor(render, alpha) {
        var color = Color.clone(render.color);
        color.a = alpha;
        render.color = color;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy, Vec3, resources, Material, MeshRenderer, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      resources = module.resources;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c281cTqZQxLPqUJ4LIPsyO8", "Utils", undefined);
      var Utils = exports('Utils', /*#__PURE__*/function () {
        function Utils() {}
        /** Convert position according to row and column */
        Utils.convertRowColToPos = function convertRowColToPos(row, col, size, startX, startY) {
          var x = startX + col * size + size / 2;
          var y = startY + row * size + size / 2;
          // console.log("x:"+ x +" :y:"+y);
          // console.log("startX:"+ startX +" :startY:"+startY);
          // console.log("==========size:"+ size +" :===============");
          return new Vec3(x, y, 0);
        }

        /** Convert rows and columns based on position */;
        Utils.convertPosToRowCol = function convertPosToRowCol(pos, size, startX, startY) {
          var row = Math.round((pos.y - startY - size / 2) / size);
          var col = Math.round((pos.x - startX - size / 2) / size);
          return [row, col];
        }

        /** Set material */;
        Utils.setMaterial = function setMaterial(meshNode, path) {
          if (meshNode) {
            resources.load(path, Material, function (err, material) {
              // console.log(err, material);
              meshNode.getComponent(MeshRenderer).material = material;
            });
          }
        }

        /**
          * Set local data
          * @param key 
          * @param data 
          */;
        Utils.setLocalStorage = function setLocalStorage(key, data) {
          try {
            sys.localStorage.setItem(key, JSON.stringify(data));
            return true;
          } catch (e) {
            console.error(e);
          }
          return false;
        }

        /**
         * Get local data
         * @param key 
         */;
        Utils.getLocalStorage = function getLocalStorage(key) {
          try {
            var dataStr = sys.localStorage.getItem(key);
            if (dataStr) {
              var data = JSON.parse(dataStr);
              return data;
            }
          } catch (e) {
            console.error(e);
          }
          return null;
        };
        return Utils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/utils2.ts", ['cc'], function (exports) {
  var cclegacy, Vec3, UITransform, tween, v3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
    }],
    execute: function () {
      exports({
        MD5: MD5,
        addZero: addZero,
        changeParent: changeParent,
        customDateFormat: customDateFormat,
        getAngleTwoPoint: getAngleTwoPoint,
        getDistance: getDistance,
        getLeftTime: getLeftTime,
        getPostionInOtherNode: getPostionInOtherNode,
        getRandomElement: getRandomElement,
        getRandomInt: getRandomInt,
        getText: getText,
        getTime: getTime,
        pickOutRandomElement: pickOutRandomElement,
        randRange: randRange,
        removeElementByValue: removeElementByValue,
        replaceElement: replaceElement,
        roundDecimal: roundDecimal,
        secondsToHHMMSS: secondsToHHMMSS,
        shaking: shaking,
        shuffleArray: shuffleArray,
        toLocalClockTime: toLocalClockTime,
        toLocalTime: toLocalTime,
        toLocalTimeHHMM: toLocalTimeHHMM
      });
      cclegacy._RF.push({}, "61e2aeL1yJB6r+n4NcvBChY", "utils", undefined);
      function customDateFormat(date, formatString) {
        var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
        YY = ((YYYY = date.getFullYear()) + "").slice(-2);
        MM = (M = date.getMonth() + 1) < 10 ? '0' + M : M;
        MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
        DD = (D = date.getDate()) < 10 ? '0' + D : D;
        DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]).substring(0, 3);
        th = D >= 10 && D <= 20 ? 'th' : (dMod = D % 10) == 1 ? 'st' : dMod == 2 ? 'nd' : dMod == 3 ? 'rd' : 'th';
        formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
        h = hhh = date.getHours();
        if (h == 0) h = 24;
        if (h > 12) h -= 12;
        hh = h < 10 ? '0' + h : h;
        hhhh = hhh < 10 ? '0' + hhh : hhh;
        AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
        mm = (m = date.getMinutes()) < 10 ? '0' + m : m;
        ss = (s = date.getSeconds()) < 10 ? '0' + s : s;
        return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
      }
      function toLocalTimeHHMM(ts) {
        var timestamp = new Date(parseInt(ts));
        var hour = timestamp.getHours();
        var minutes = timestamp.getMinutes();
        var localTime = (hour < 10 ? "0" : "") + hour + "h" + (minutes < 10 ? "0" : "") + minutes;
        return localTime;
      }
      function toLocalClockTime(ts) {
        var timestamp = new Date(parseInt(ts));
        var hour = timestamp.getHours();
        var minutes = timestamp.getMinutes();
        var localTime = hour + "h" + (minutes < 10 ? "0" : "") + minutes;
        return localTime;
      }
      function secondsToHHMMSS(secs) {
        if (secs == 0) return "00:00";
        var sec_num = parseInt(secs, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;
        return [hours, minutes, seconds].map(function (v) {
          return v < 10 ? "0" + v : v;
        }).filter(function (v, i) {
          return v !== "00" || i > 0;
        }).join(":");
      }
      function toLocalTime(ts, format) {
        return customDateFormat(new Date(ts * 1000), format);
      }
      function randRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function getPostionInOtherNode(spaceNode, targetNode) {
        if (targetNode.parent == null) {
          return null;
        }
        var pos = new Vec3(0, 0, 0);
        var targetNodeComponent = targetNode.parent.getComponent(UITransform);
        var spaceNodeComponent = spaceNode.getComponent(UITransform);
        if (!targetNodeComponent) {
          targetNode.parent.addComponent(UITransform);
        }
        if (!spaceNodeComponent) {
          spaceNode.addComponent(UITransform);
        }
        pos = targetNodeComponent.convertToWorldSpaceAR(targetNode.getPosition());
        return spaceNodeComponent ? spaceNodeComponent.convertToNodeSpaceAR(pos) : pos;
      }
      function changeParent(node, newParent) {
        if (node.parent === newParent) return;
        var getWorldRotation = function getWorldRotation(node) {
          var currNode = node;
          var resultRot = currNode.angle || 0;
          do {
            currNode = currNode.parent;
            resultRot += currNode.angle || 0;
          } while (currNode.parent != null);
          resultRot = resultRot % 360;
          return resultRot;
        };
        var oldWorRot = getWorldRotation(node);
        var newParentWorRot = getWorldRotation(newParent);
        var newLocRot = oldWorRot - newParentWorRot;
        if (!node.getComponent(UITransform)) {
          node.addComponent(UITransform);
        }
        if (!newParent.getComponent(UITransform)) {
          newParent.addComponent(UITransform);
        }
        var oldWorPos = node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
        var newLocPos = newParent.getComponent(UITransform).convertToNodeSpaceAR(oldWorPos);
        node.parent = newParent;
        node.position = newLocPos;
        node.angle = newLocRot;
      }
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function roundDecimal(num, numDecimal) {
        var rate = 1;
        for (var i = 0; i < numDecimal; i++) {
          rate *= 10;
        }
        return Math.round((num + Number.EPSILON) * rate) / rate;
      }
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
      function getRandomElement(array) {
        if (!array || array.length <= 0) throw new Error("invalid array");
        return array[Math.floor(Math.random() * array.length)];
      }
      function pickOutRandomElement(array) {
        if (!array || array.length <= 0) throw new Error("invalid array");
        var randomIndex = Math.floor(Math.random() * array.length);
        return array.splice(randomIndex, 1)[0];
      }
      function removeElementByValue(array, value) {
        array.splice(array.indexOf(value), 1);
        return array;
      }
      function replaceElement(array, oldElement, newElement) {
        var index = array.indexOf(oldElement);
        if (index > -1) array[index] = newElement;
        return array;
      }
      function getText(text, length) {
        if (text === void 0) {
          text = '';
        }
        if (length === void 0) {
          length = 0;
        }
        var result = text;
        var n = length - text.length;
        if (n) {
          for (var i = 0; i < n; i++) {
            result += ' ';
          }
        }
        return result;
      }
      function getLeftTime(endTime, serverTime, millisecond) {
        if (millisecond === void 0) {
          millisecond = 1000;
        }
        serverTime = serverTime ? new Date(serverTime).getTime() : new Date().getTime();
        var time = Math.floor((new Date(endTime).getTime() - serverTime) / millisecond);
        if (time < 0) time = 0;
        return time;
      }
      function addZero(i) {
        if (i < 10) {
          i = '0' + i;
        }
        return i;
      }
      function getTime() {
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        var t = h + ':' + m + ':' + s;
        return t;
      }

      /**
       * @returns degree angle
      */
      function getAngleTwoPoint(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
      }
      function getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      }
      function shaking(node, _ref) {
        var _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.16 : _ref$duration,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? 10 : _ref$distance,
          _ref$repeat = _ref.repeat,
          repeat = _ref$repeat === void 0 ? 1 : _ref$repeat;
        var dur = duration / 8;
        var shake = tween().by(dur, {
          position: v3(0, distance)
        }).by(dur, {
          position: v3(0, -distance)
        }).by(dur, {
          position: v3(0, -distance)
        }).by(dur, {
          position: v3(0, distance)
        }).by(dur, {
          position: v3(distance, 0)
        }).by(dur, {
          position: v3(-distance, 0)
        }).by(dur, {
          position: v3(-distance, 0)
        }).by(dur, {
          position: v3(distance, 0)
        });
        var tweenShake = tween(node).repeat(repeat, shake).start();
        return tweenShake;
      }
      function MD5(e) {
        function h(a, b) {
          var c, d, e, f, g;
          e = a & 2147483648;
          f = b & 2147483648;
          c = a & 1073741824;
          d = b & 1073741824;
          g = (a & 1073741823) + (b & 1073741823);
          return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f;
        }
        function k(a, b, c, d, e, f, g) {
          a = h(a, h(h(b & c | ~b & d, e), g));
          return h(a << f | a >>> 32 - f, b);
        }
        function l(a, b, c, d, e, f, g) {
          a = h(a, h(h(b & d | c & ~d, e), g));
          return h(a << f | a >>> 32 - f, b);
        }
        function m(a, b, d, c, e, f, g) {
          a = h(a, h(h(b ^ d ^ c, e), g));
          return h(a << f | a >>> 32 - f, b);
        }
        function n(a, b, d, c, e, f, g) {
          a = h(a, h(h(d ^ (b | ~c), e), g));
          return h(a << f | a >>> 32 - f, b);
        }
        function p(a) {
          var b = "",
            d = "",
            c;
          for (c = 0; 3 >= c; c++) d = (a >>> 8 * c & 255).toString(), d = "0" + parseInt(d).toString(16), b += d.substr(d.length - 2, 2);
          return b;
        }
        var f = [],
          q,
          r,
          s,
          t,
          a,
          b,
          c,
          d;
        e = function (a) {
          a = a.replace(/\r\n/g, "\n");
          for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128));
          }
          return b;
        }(e);
        f = function (b) {
          var a,
            c = b.length;
          a = c + 8;
          for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
          a = (g - g % 4) / 4;
          e[a] |= 128 << g % 4 * 8;
          e[d - 2] = c << 3;
          e[d - 1] = c >>> 29;
          return e;
        }(e);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (e = 0; e < f.length; e += 16) q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
        return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WalletController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './telegram-web.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Component, __webpack_exports__Address, __webpack_exports__TonConnectUI, __webpack_exports__GameFi, TelegramWebApp, Config;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      __webpack_exports__Address = module.Address;
      __webpack_exports__TonConnectUI = module.TonConnectUI;
      __webpack_exports__GameFi = module.GameFi;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }, function (module) {
      Config = module.Config;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2170dYlmOBOTpYgyoHrInx1", "WalletController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WalletController = exports('WalletController', (_dec = ccclass('WalletController'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WalletController, _Component);
        function WalletController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._nCoin = 0;
          _initializerDefineProperty(_this, "connectLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtName", _descriptor3, _assertThisInitialized(_this));
          //@property(Label)
          //evmConnectLabel: Label;
          _this._bTonInit = false;
          _this._cocosGameFi = void 0;
          _this._connectUI = void 0;
          //private _evmConnect: AppKit;
          //private _evmWalletClient: WalletClient;
          _this.serverHost = Config.serverHost;
          return _this;
        }
        var _proto = WalletController.prototype;
        _proto.onLoad = function onLoad() {
          TelegramWebApp.Instance.init().then(function (res) {
            console.log("telegram web app init : ", res.success);
          });
          this._initTonConnect();
        };
        _proto._initTonConnect = /*#__PURE__*/function () {
          var _initTonConnect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var uiconnector;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  uiconnector = new __webpack_exports__TonConnectUI({
                    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
                  });
                  _context.next = 3;
                  return __webpack_exports__GameFi.create({
                    connector: uiconnector,
                    network: "testnet"
                  });
                case 3:
                  this._cocosGameFi = _context.sent;
                  this._connectUI = this._cocosGameFi.walletConnector;
                  this._connectUI.onModalStateChange(function (state) {
                    console.log("model state changed! : ", state);
                    _this2.updateConnect();
                  });
                  this._connectUI.onStatusChange(function (info) {
                    console.log("wallet info status changed : ", info);
                    _this2.updateConnect();
                  });
                  this._bTonInit = true;
                  this.updateConnect();
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _initTonConnect() {
            return _initTonConnect2.apply(this, arguments);
          }
          return _initTonConnect;
        }();
        _proto.isConnected = function isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }
          return this._connectUI.connected;
        };
        _proto.updateConnect = function updateConnect() {
          if (this.isConnected()) {
            var address = this._connectUI.account.address;
            this.connectLabel.string = __webpack_exports__Address.parseRaw(address).toString({
              testOnly: true,
              bounceable: false
            }).substring(0, 6) + '...';
            var userData = TelegramWebApp.Instance.getTelegramUser();
            var windowAny = window;
            windowAny.Telegram.WebApp.ready();
            var user = windowAny.Telegram.WebApp.initDataUnsafe.user;
            if (user) {
              console.log("Người dùng:", user);
              this.txtName.string = user.username;
            } else {
              console.log("Không có thông tin người dùng.");
              this.txtName.string = "Get User Fail";
            }
            //console.log("_connectUI.account::" + this._connectUI.getWallets());
          } else {
            this.connectLabel.string = "Connect";
          }
        }

        // private async updateWalletAddress() {
        //     let provider = window.ethereum! as any

        //     if (typeof window.okxwallet !== 'undefined') {
        //         provider = window.okxwallet!;
        //     }

        //     if (typeof window.bitkeep !== 'undefined' && window.bitkeep.ethereum !== 'undefined') {
        //         provider = window.bitkeep!.ethereum;
        //     }

        //     this._evmWalletClient = createWalletClient({
        //         chain: mainnet,
        //         transport: custom(provider as any)
        //     })

        // }
        ;

        _proto.openModal = /*#__PURE__*/
        function () {
          var _openModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._bTonInit) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (this.isConnected()) {
                    this._connectUI.disconnect();
                  } else {
                    this._connectUI.openModal();
                  }
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function openModal() {
            return _openModal.apply(this, arguments);
          }
          return openModal;
        }();
        _proto.start = function start() {};
        return WalletController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "connectLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WalletView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './Events.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UIOpacity, UITransform, View, v3, ScrollView, tween, Component, globalEvent, GameEvents, Config;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      View = module.View;
      v3 = module.v3;
      ScrollView = module.ScrollView;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      GameEvents = module.GameEvents;
    }, function (module) {
      Config = module.Config;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7c4853xMCxCCJyoNZ/Dxk6v", "WalletView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WalletView = exports('WalletView', (_dec = ccclass('WalletView'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WalletView, _Component);
        function WalletView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "background", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panel", _descriptor2, _assertThisInitialized(_this));
          _this.backgroundOpacity = null;
          _this.panelUITransform = null;
          _this.gameUrl = Config.serverHost;
          return _this;
        }
        var _proto = WalletView.prototype;
        _proto.onLoad = function onLoad() {
          this.backgroundOpacity = this.background.getComponent(UIOpacity);
          this.backgroundOpacity.opacity = 0;
          this.panelUITransform = this.panel.getComponent(UITransform);
          var size = View.instance.getVisibleSize();
          this.panelUITransform.setContentSize(size.width, size.height * 0.4);
          this.panel.position = v3(0, -this.panelUITransform.height - size.height * 0.5, this.panel.position.z);
          this.background.active = false;
          this.panel.getChildByName('ScrollView').getComponent(ScrollView).scrollToTop();
          globalEvent.on(GameEvents.WALLET_SHOW, this.show, this);
          globalEvent.on(GameEvents.WALLET_HIDE, this.hide, this);
        };
        _proto.onDestroy = function onDestroy() {
          globalEvent.off(GameEvents.WALLET_SHOW, this.show);
          globalEvent.off(GameEvents.WALLET_HIDE, this.hide);
        };
        _proto.show = function show() {
          var _this2 = this;
          this.panel.getChildByName('ScrollView').getComponent(ScrollView).scrollToTop();
          var size = View.instance.getVisibleSize();
          tween(this.backgroundOpacity).call(function () {
            _this2.background.active = true;
          }).to(0.2, {
            opacity: 140
          }).start();
          tween(this.panel).to(0.4, {
            position: v3(0, -size.height * 0.5 - 30, this.panel.position.z)
          }).start();
        };
        _proto.hide = function hide() {
          var _this3 = this;
          var size = View.instance.getVisibleSize();
          tween(this.backgroundOpacity).to(0.2, {
            opacity: 0
          }).call(function () {
            _this3.background.active = false;
          }).start();
          tween(this.panel).to(0.4, {
            position: v3(0, -this.panelUITransform.height - size.height, this.panel.position.z)
          }).start();
        };
        _proto.metamaskConnect = function metamaskConnect() {
          this.openLink("https://metamask.app.link/dapp/" + this.gameUrl);
        };
        _proto.bitgetConnect = function bitgetConnect() {
          this.openLink("https://bkcode.vip/?action=dapp&url=" + this.gameUrl);
        };
        _proto.okxConnect = function okxConnect() {
          this.openLink("https://www.okx.com/download?deeplink=okx://wallet/dapp/url?dappUrl=" + encodeURIComponent(this.gameUrl));
        };
        _proto.openLink = function openLink(url) {
          if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.openLink(url);
          } else {
            window.open(url, "_blank");
          }
        };
        return WalletView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});