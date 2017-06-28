(function() {
 'use strict';
 
 /**
   ** Simple implementation of $.each
   ** @param {Function} callback
   **
  **/
  function eachLoop (cb) {
    for(var i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
    return this;
  }

  HTMLCollection.prototype.each = eachLooop;
  NodeList.prototype.each = eachLoop;

  /**
   ** Simple implementation of $.on
   ** @param {string} eventName
   ** @param {Function} callback
   **
  **/
  function onEvent(eventName, cb) {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, cb);
      }
    }
    else if(this instanceof HTMLElement) {
      this.addEventListener(eventName, cb);
    }
    return this;
  }

  HTMLCollection.prototype.on = onEvent;
  NodeList.prototype.on = onEvent;

  /**
   ** Simple implementation of $.off
   ** @param {string} eventName
   ** @param {Function} callback
   **
  **/
  function offEvent(eventName, cb) {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, cb);
      }
    }
    else if(this instanceof HTMLElement) {
      this.removeEventListener(eventName, cb);
    }
    return this;
  }

  HTMLCollection.prototype.off = offEvent;
  NodeList.prototype.off = offEvent;


  /**
   ** Simple implementation of $.find
   ** @param {string} selector
   **
  **/
  function find(selector) {

    function FindElements(c) {
      var propConf = {enumerable: false, configurable: false, writable: true};
      Object.defineProperty(this, 'context', propConf);
      Object.defineProperty(this, 'results', propConf);
      Object.defineProperty(this, 'length', propConf);

      this.context = c;
      this.results = [];
      this.length = 0;
    }

    Object.defineProperty(FindElements.prototype, "clear", {
      enumerable: false,
      value: function() {
        for(var i = 0; i < this.length; i++) {
          delete this[i];
        }
      }
    });

     Object.defineProperty(FindElements.prototype, "map", {
      enumerable: false,
      value: function (cb) {
        for(var i = 0; i < this.length; i++) {
          cb(this[i], i);
        }
        return this;
      }
    });

    Object.defineProperty(FindElements.prototype, "find", {
      enumerable: false,
      value: function (selector) {
        var context = this.context;
        var elements = this.results.slice(0);
        this.results = [];
        this.clear();

        if(elements.length) {
          for(var i = 0; i < this.results.length; i++) {
            this.results[i].querySelectorAll(selector).forEach(function(e) {
              this[this.results.length] = e;
              this.results.push(e);
            }.bind(this));
          }
        }
        if(context instanceof HTMLCollection || context instanceof NodeList) {
          for(var i = 0; i < context.length; i++) {
            context[i].querySelectorAll(selector).forEach(function(e) {
              this[this.results.length] = e;
              this.results.push(e);
            }.bind(this));
          }
        }
        else if(context instanceof HTMLElement) {
          context.querySelectorAll(selector).forEach(function(e) {
            this[this.results.length] = e;
            this.results.push(e);
          }.bind(this));
        }
        else if(typeof context.querySelectorAll==='function') {
          context.querySelectorAll(selector).forEach(function(e) {
            this[this.results.length] = e;
            this.results.push(e);
          }.bind(this));
        }

        this.length = this.results.length;

        return this;
      }
    });

      return (fe = new FindElements(this)).find(selector);
    }

  HTMLCollection.prototype.find = find;
  NodeList.prototype.find = find;
  HTMLElement.prototype.find = find;
  document.find = find;

  /**
   ** Simple implementation of $.addClass
   ** @param {string} classNameList
   **
  **/
  function addClass(classNameList) {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].classList.add(classNameList);
      }
    }
    else if(this instanceof HTMLElement) {
      this.classList.add(classNameList);
    }
    return this;
  }

  HTMLCollection.prototype.addClass = addClass;
  NodeList.prototype.addClass = addClass;
  HTMLElement.prototype.addClass = addClass;

  /**
   ** Simple implementation of $.toggleClass
   ** @param {string} classNameList
   **
  **/
  function toggleClass(classNameList) {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNameList);
      }
    }
    else if(this instanceof HTMLElement) {
      this.classList.toggle(classNameList);
    }
    return this;
  }

  HTMLCollection.prototype.toggleClass = toggleClass;
  NodeList.prototype.toggleClass = toggleClass;
  HTMLElement.prototype.toggleClass = toggleClass;

  /**
   ** Simple implementation of $.removeClass
   ** @param {string} classNameList
   **
  **/
  function removeClass(classNameList) {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].classList.remove(classNameList);
      }
    }
    else if(this instanceof HTMLElement) {
      this.classList.remove(classNameList);
    }
    return this;
  }

  HTMLCollection.prototype.removeClass = removeClass;
  NodeList.prototype.removeClass = removeClass;
  HTMLElement.prototype.removeClass = removeClass;

  /**
   ** Simple implementation of $.hasClass
   ** @param {string} className
   **
  **/
  function hasClass(className) {
    if(this instanceof HTMLElement) {
      this.classList.contains(className);
    }
    return this;
  }

  HTMLCollection.prototype.hasClass = hasClass;
  NodeList.prototype.hasClass = hasClass;
  HTMLElement.prototype.hasClass = hasClass;

  /**
   ** Simple implementation of $.show
   **
  **/
  function showElement () {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].style.display = null;
      }
    }
    else if(this instanceof HTMLElement) {
      this.style.display = null;
    }

    return this;
  }

  HTMLCollection.prototype.show = showElement;
  NodeList.prototype.show = showElement;
  HTMLElement.prototype.show = showElement;

  /**
   ** Simple implementation of $.hode
   **
  **/
  function hideElement () {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
      for(var i = 0; i < this.length; i++) {
        this[i].style.display = 'none';
      }
    }
    else if(this instanceof HTMLElement) {
      this.style.display = 'none';
    }

    return this;
  }

  HTMLCollection.prototype.hide = hideElement;
  NodeList.prototype.hide = hideElement;
  HTMLElement.prototype.hide = hideElement;

  /**
   ** Simple implementation of $.closest
   ** @param {string} selector
   **
  **/
  function closest (selector) {
    var matchesSelector = this.matches || this.webkitMatchesSelector || this.mozMatchesSelector || this.msMatchesSelector;

    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  }

  if(typeof HTMLElement.closest==='undefined') {
    HTMLElement.closest = closest;
  }


  /**
   ** Simple implementation of $.remove
   **
  **/
  function removeElement() {
    if(this instanceof HTMLCollection || this instanceof NodeList) {
        for(var i = 0; i < this.length; i++) {
          this[i].parentNode.removeChild(this);
        }
      }
      else if(this instanceof HTMLElement) {
        this.parentNode.removeChild(this);
      }
  }

  HTMLCollection.prototype.remove = removeElement;
  NodeList.prototype.remove = removeElement;
  HTMLElement.prototype.remove = removeElement;

  /**
   ** Simple implementation of $.insertBefore
   ** @param {string|HTMLElement} selector
   ** @returns {HTMLElement}
   **
  **/
  function insertBeforeElement (selector) {  
    var el = typeof selector==='string' ? document.querySelector(selector): selector instanceof HTMLElement && selector;
    if (el.parentNode) {
      el.parentNode.insertBefore(this, el);
    }

    return this;
  }

  HTMLElement.prototype.insertBef = insertBeforeElement;

  /**
   ** Simple implementation of $.insertAfter
   ** @param {string|HTMLElement} selector
   ** @returns {HTMLElement}
   **
  **/
  function insertAfterElement (selector) {
     var el = typeof selector==='string' ? document.querySelector(selector): selector instanceof HTMLElement && selector;
    if (el.parentNode) {
      el.parentNode.insertBefore(this, el.nextSibling);
    }

    return this;
  }

  HTMLElement.prototype.insertAft = insertAfterElement;
})();
