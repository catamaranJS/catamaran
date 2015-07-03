class Events {
    static on(elementArr, event, fn) {
        if (typeof elementArr == 'string')
            elementArr = document.querySelectorAll(elementArr);
        for (var i = 0, len = elementArr.length; i < len; i++) {
            elementArr[i].addEventListener(event.toLowerCase(), fn)
        }
    }

    static off(elementArr, event, fn) {
        if (typeof elementArr == 'string')
            elementArr = document.querySelectorAll(elementArr);
        for (var i = 0, len = elementArr.length; i < len; i++) {
            elementArr[i].removeEventListener(event.toLowerCase(), fn)
        }
    }

    static fireEvent(obj, evt) {
        var fireOnThis = obj;
        if (document.createEvent) {
            var evObj = document.createEvent('MouseEvents');
            evObj.initEvent(evt, true, false);
            fireOnThis.dispatchEvent(evObj);
        } else if (document.createEventObject) { //IE
            var evObj = document.createEventObject();
            fireOnThis.fireEvent('on' + evt, evObj);
        }
    }

    static subscribe(obj) {
        obj.on.apply(obj, arguments);
    }

    static unsubscribe(obj) {
        obj.off.apply(obj, arguments);
    }

    static publish(obj) {
        obj.fireEvent.apply(obj, arguments);
    }

}

module.exports = Events;