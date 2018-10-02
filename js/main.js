(function ($) {

    // Protect IE8 from any erroneous console.log uses which would break everything
    if (!window.console) {
        console = { log: function() {} }
    };

    var $html = $('html'),
        lt10 = $html.hasClass('lt-ie10');

    $html.removeClass('no-js');

    pulsar.pulsarUI = new pulsar.PulsarUIComponent($html, window.History);
    pulsar.pulsarForm = new pulsar.PulsarFormComponent($html);
    pulsar.navMain = new pulsar.NavMainComponent($html, window);
    pulsar.repeaterManager = new pulsar.RepeaterManagerComponent(
        pulsar.pulsarForm,
        pulsar.repeaterComponentFactory,
        $html
    );

    $(function () {
        pulsar.pulsarUI.init();
        pulsar.pulsarForm.init();
        pulsar.navMain.init();
        pulsar.repeaterManager.init();

        $('.d-example-nav__link').on('click', function() {
            var $this = $(this),
                $parent = $(this).closest('.d-example'),
                lang = $this.data('toggle');

                $parent.find('.d-example-nav__link').removeClass('is-active');
                $this.addClass('is-active');
            
                $parent.find('.js-' + lang).show();
                $parent.find('.d-example__code:not(.js-' + lang + ')').hide();
        });

        // Use clickover enhancements for popovers
        $('[rel="clickover"]').clickover({ 'global_close': true });

        
    });

}(jQuery));
