class Events {
    
    constructor() {
        this.topics = {};
        this.hOP = this.topics.hasOwnProperty;
    }

    static on(elementArr = null, event, fn) {
        if (typeof elementArr == 'string'){
            elementArr = document.querySelectorAll(elementArr);
            for (var i = 0, len = elementArr.length; i < len; i++) {
                elementArr[i].addEventListener(event.toLowerCase(), fn)
            }
        }else{
           addEventListener(event.toLowerCase(), fn);
        }
        
    }

    static off(elementArr = null, event, fn) {
        if (typeof elementArr == 'string'){
            elementArr = document.querySelectorAll(elementArr);
            for (var i = 0, len = elementArr.length; i < len; i++) {
                elementArr[i].removeEventListener(event.toLowerCase(), fn)
            }
        }else{
            removeEventListener(event.toLowerCase(), fn);
        }
    }

    subscribe(topic, listener) {
      var self = this;
      if(!this.hOP.call(this.topics, topic)) this.topics[topic] = [];
      var index = this.topics[topic].push(listener) -1;
      return {
        remove: function() {
          delete self.topics[topic][index];
        }
      }
    }

    publish(topic, info) {
      if(!this.hOP.call(this.topics, topic)) return;
      this.topics[topic].forEach(function(item) {
            item(info != undefined ? info : {});
      });
    }

}
module.exports = Events;