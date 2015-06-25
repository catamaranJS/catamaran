class Extend {
    constructor(_element) {
   
        this.element = _element;
    }

    hide() {
        return this.element.style.display = 'none';
    }

    show() {
        return this.element.style.display = 'block';
    }
    isVisible() {
        return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
    }
    
    onVisible(callback) {
        if (this.extend.isVisible()) {
            callback.call(self);
        } else {
            var timer = setInterval(function() {
                if (this.extend.isVisible()) {
                    callback.call(self);
                    clearInterval(timer);
                }
            }, 50);
        }
    }

    children(selector) {
        return this.element.querySelectorAll(selector);
    }
}