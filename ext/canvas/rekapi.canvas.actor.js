var rekapiCanvasActor = function (context) {
  var Kapi = context.Kapi;

  function CanvasActorMethods () {};
  CanvasActorMethods.prototype = Kapi.Actor.prototype;

  /**
   * @param {Object} opt_config
   * @constructor
   */
  var CanvasActor = Kapi.CanvasActor = function (opt_config) {
    Kapi.Actor.call(this, opt_config);
    return this;
  };

  CanvasActor.prototype = new CanvasActorMethods();

  /**
   * @param {Object} opt_context
   * @return {Object}
   */
  CanvasActor.prototype.context = function (opt_context) {
    if (opt_context) {
      this._context = opt_context;
    }

    return this._context && this._context.getContext('2d');
  };
};
