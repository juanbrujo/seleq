/**
 * seleq
 * v0.0.1
 * https://github.com/juanbrujo/seleq
 * @2015 Jorge Epuñan | @csslab
 */

(function(){
  "use strict";

  /**
   * returns first queried element
   * use: $('#element')
   */
  var $ = document.querySelector.bind(document);

  /**
   * returns array of targeted elements
   * use: $$('.elements')
   */
  var $$ = document.querySelectorAll.bind(document);

  /**
   * Add 'on' event binding
   * use: $('element').on('click', function(e){
   *  // your job
   * });
   */
  Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
  };
  NodeList.prototype.__proto__ = Array.prototype;
  NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach(function (elem, i) {
      elem.on(name, fn)
    });
  };

}());
