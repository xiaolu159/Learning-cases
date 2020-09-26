(function flexible(window, document) {
    //获取html的很元素
    var docEl = document.documentElement;
    //dqr物理像素比
    var dqr = window.devicePixelRatio || 1

    //adjust body font size 设置body的字体大小
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dqr) + 'px';
        } else {
            //如果页面中没有body这个元素 ，则等着页面主要的DOM元素加载完毕再去设置body
            //的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    //set 1rem = viewWidth / 10 设置html元素的字体大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px';
    }
    setRemUnit();



}(window, document))