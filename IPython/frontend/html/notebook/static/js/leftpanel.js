
//============================================================================
// LeftPanel
//============================================================================


var IPython = (function (IPython) {

    var utils = IPython.utils;

    var LeftPanel = function (left_panel_selector, left_panel_splitter_selector) {
        this.left_panel_element = $(left_panel_selector);
        this.left_panel_splitter_element = $(left_panel_splitter_selector);
        this.expanded = true;
        this.width = 250;
        this.style();
        this.bind_events();
        this.create_children();
    };


    LeftPanel.prototype.style = function () {
        this.left_panel_splitter_element.addClass('border-box-sizing ui-widget ui-state-default');
        this.left_panel_element.addClass('border-box-sizing ui-widget');
        this.left_panel_element.width(this.width);
        this.left_panel_splitter_element.css({left : this.width});
    };


    LeftPanel.prototype.bind_events = function () {
        var that = this;

        this.left_panel_element.bind('collapse_left_panel', function () {
            that.left_panel_element.hide('fast');
            that.left_panel_splitter_element.animate({left : 0}, 'fast');
        });

        this.left_panel_element.bind('expand_left_panel', function () {
            that.left_panel_element.show('fast');
            that.left_panel_splitter_element.animate({left : that.width}, 'fast');
        });

        this.left_panel_splitter_element.hover(
            function () {
                that.left_panel_splitter_element.addClass('ui-state-hover');
            },
            function () {
                that.left_panel_splitter_element.removeClass('ui-state-hover');
            }
        );

        this.left_panel_splitter_element.click(function () {
            that.toggle();
        });

    };


    LeftPanel.prototype.create_children = function () {
        this.notebook_section = new IPython.NotebookSection();
        this.left_panel_element.append(this.notebook_section.element);
        this.cell_section = new IPython.CellSection();
        this.left_panel_element.append(this.cell_section.element);        
        this.kernel_section = new IPython.KernelSection();
        this.left_panel_element.append(this.kernel_section.element);   
        this.help_section = new IPython.HelpSection();
        this.left_panel_element.append(this.help_section.element);
        this.help_section.collapse();
    }

    LeftPanel.prototype.collapse = function () {
        if (this.expanded === true) {
            this.left_panel_element.add($('div#notebook')).trigger('collapse_left_panel');
            this.expanded = false;
        };
    };


    LeftPanel.prototype.expand = function () {
        if (this.expanded !== true) {
            this.left_panel_element.add($('div#notebook')).trigger('expand_left_panel');
            this.expanded = true;
        };
    };


    LeftPanel.prototype.toggle = function () {
        if (this.expanded === true) {
            this.collapse();
        } else {
            this.expand();
        };
    };

    IPython.LeftPanel = LeftPanel;

    return IPython;

}(IPython));
