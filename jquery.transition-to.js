/**
 *  jQuery.transition-to.js : transition one element to another arbitrary element
 *  @author Matthew Lee matt@madleedesign.com
 **/

(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['jquery'], factory);
    else if (typeof exports === 'object')
        module.exports = factory(require('jquery'));
    else
        factory(root.jQuery);
})(this, function ($) {

    var transitionTemplate = '<div id="_transition" style="position:relative;overflow:hidden;width:100%"><div style="position: absolute; top: 0; width: 100%"></div><div style=""></div></div>';

    $.fn.transitionTo = function (_new, _speed) {
        var _old = (this.length) ? this[0] : this;
        var transition = $(transitionTemplate);
        var target = $(_old).parent();
        var speed = (_speed == null) ? 'slow' : _speed;
        var dfd = $.Deferred();

        $(target).prepend(transition);

        var divOld = transition.find('div').eq(0).show();
        var divNew = transition.find('div').eq(1).hide();

        divNew.append(_new);
        divNew.hide().fadeIn(speed, function () {
            $(target).prepend(_new);
            transition.find('div').clearQueue().empty();
            transition.empty().remove();
            dfd.resolve(_new);
        });

        divOld.append(_old);
        divOld.show().fadeOut(speed, function() {
            divOld.empty();
        });

        return dfd.promise();
    }
});