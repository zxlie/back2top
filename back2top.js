/**
 * 返回顶部
 *
 * @homepage    http://www.baidufe.com/component/back2top/index.html
 * @author      zhaoxianlie
 */
var Back2top = (function($,undefined){

    /**
     * 动画时间，默认为：300ms
     * @type {Number}
     * @private
     */
    var _timeInterval = 300;

    /**
     * 浏览器信息
     * @type {*}
     */
    var browserInfo = (function(){
        var userAgent = navigator.userAgent.toLowerCase();
        return {
            version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
            msie: /msie/.test( userAgent ) && !/opera/.test( userAgent )
        };
    })();

    /**
     * 节点安装
     */
    var setup = function(){
        /**
         * 创建返回顶部的节点
         * @type {*|jQuery}
         */
        var elBack2Top = $('<div id="doitbegin_Back2top">回到顶部</div>')
            .appendTo('body')
            .click(function() {
                $("html, body").animate({ scrollTop: 0 }, parseInt(_timeInterval,10) || 300);
            });

        /**
         * 返回顶部的处理逻辑
         */
        var fnBack2Top = function() {
            var scrollTop = $(document).scrollTop(), winHeight = $(window).height();

            (scrollTop > 0)? elBack2Top.show(): elBack2Top.hide();

            //IE6下单独处理
            if (browserInfo.msie && parseInt(browserInfo.version,10) == 6) {
                elBack2Top.css("top", scrollTop + winHeight - 150);
            }
        };

        // 滚动事件绑定
        $(window).bind("scroll", fnBack2Top);

        fnBack2Top();
    };

    /**
     * 初始化，可控制动画时间
     * @param {Integer}     timeInterval  动画时间，默认300ms
     */
    var init = function(timeInterval){
        _timeInterval = timeInterval;
        $(function(){
            setup();
        });
    };

    return {
        init : init,
        version : '1.0'
    };

})(jQuery);