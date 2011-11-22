//----------------------------------------------------------------------------
//  Copyright (C) 2008-2011  The IPython Development Team
//
//  Distributed under the terms of the BSD License.  The full license is in
//  the file COPYING, distributed as part of this software.
//----------------------------------------------------------------------------

//============================================================================
// PublishWidget
//============================================================================

var IPython = (function (IPython) {

    var utils = IPython.utils;

    var PublishWidget = function (selector) {
        this.selector = selector;
        if (this.selector !== undefined) {
            this.element = $(selector);
            this.style();
            this.bind_events();
        }
    };


    PublishWidget.prototype.style = function () {
        this.element.find('button#publish_notebook').button();
    };


    PublishWidget.prototype.bind_events = function () {
        var that = this;
        this.element.find('button#publish_notebook').click(function () {
            that.publish_notebook();
        });
    };


    PublishWidget.prototype.publish_notebook = function () {
        IPython.notebook.publish_notebook();
    };


    IPython.PublishWidget = PublishWidget;

    return IPython;

}(IPython));

