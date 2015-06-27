class Events{
        static on(elementArr, event, fn) {
            if (typeof elementArr == 'string')
            elementArr = document.querySelectorAll(elementArr);
            for (var i = 0, len = elementArr.length; i < len; i++) {
                elementArr[i].addEventListener(event.toLowerCase(), fn)
            }
        }

  }

  module.exports = Events;