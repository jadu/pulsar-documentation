(function ($) {

    // Protect IE8 from any erroneous console.log uses which would break everything
    if (!window.console) {
        console = { log: function() {} }
    };

    var $html = $('html'),
        lt10 = $html.hasClass('lt-ie10');

    $html.removeClass('no-js');

    pulsar.pulsarUI = new pulsar.PulsarUIComponent($html, window.History);
    pulsar.disableUI = new pulsar.DisableUiComponent($html);
    pulsar.dropdownButton = new pulsar.DropdownButtonComponent($html);
    pulsar.filterBar = new pulsar.FilterBarComponent($html);
    pulsar.pulsarForm = new pulsar.PulsarFormComponent($html);
    pulsar.masterSwitch = new pulsar.MasterSwitchComponent($html, pulsar.disableUI);
    pulsar.navMain = new pulsar.NavMainComponent($html, window);
    pulsar.tableDetail = new pulsar.TableDetailComponent($html);
    pulsar.repeaterManager = new pulsar.RepeaterManagerComponent(
        pulsar.pulsarForm,
        pulsar.repeaterComponentFactory,
        $html
    );

    $(function () {
        pulsar.pulsarUI.init();
        pulsar.dropdownButton.init();
        pulsar.filterBar.init();
        pulsar.pulsarForm.init();
        pulsar.masterSwitch.init();
        pulsar.navMain.init();
        pulsar.repeaterManager.init();
        pulsar.tableDetail.init();
        pulsar.disableUI.init();
        pulsar.dropZoneComponent = pulsar.DropZoneComponentFactory.create($('body')[0], '.dropzone');

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
        // $('[rel="clickover"]').clickover({ 'global_close': true });
        
        $('[data-toggle-nav]').on('click', function (e) {
            let $target = $html.find('[aria-controls="aria-secondary-nav"][data-target="' + $(this).data('toggle-nav') + '"]');
            
            $target.trigger('click');
            
            e.preventDefault();
        });

        // DropZone
        pulsar.dropZoneComponent.init({
            supported: !lt10,
            showInputNode: lt10
        });
        
    });

}(jQuery));
