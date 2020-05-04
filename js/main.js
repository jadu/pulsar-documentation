(function ($) {

    // Protect IE8 from any erroneous console.log uses which would break everything
    if (!window.console) {
        console = { log: function() {} }
    };

    var $html = $('html'),
        lt10 = $html.hasClass('lt-ie10');

    $html.removeClass('no-js');

    pulsar.errorSummary = new pulsar.ErrorSummaryComponent();
    pulsar.button = new pulsar.ButtonComponent($html);
    pulsar.dropdownButton = new pulsar.DropdownButtonComponent($html);
    pulsar.disableUI = new pulsar.DisableUiComponent($html);
    pulsar.flash = new pulsar.FlashMessageComponent($html);
    pulsar.helpText = new pulsar.HelpTextComponent($html, window, document);
    pulsar.pulsarForm = new pulsar.PulsarFormComponent($html);
    pulsar.pulsarUI = new pulsar.PulsarUIComponent($html, window.History);
    pulsar.pulsarSortable = new pulsar.PulsarSortableComponent($html, window);
    pulsar.masterSwitch = new pulsar.MasterSwitchComponent($html, pulsar.disableUI);
    pulsar.navMain = new pulsar.NavMainComponent($html, window);
    pulsar.filterBar = new pulsar.FilterBarComponent($html);
    pulsar.tableDetail = new pulsar.TableDetailComponent($html);
    pulsar.repeaterManager = new pulsar.RepeaterManagerComponent(
        pulsar.pulsarForm,
        pulsar.repeaterComponentFactory,
        $html
    );

    $(function () {
        pulsar.button.init();
        pulsar.dropdownButton.init();
        pulsar.errorSummary.init($html);
        pulsar.flash.init();
        pulsar.helpText.init();
        pulsar.pulsarForm.init();
        pulsar.pulsarSortable.init();
        pulsar.pulsarUI.init();
        pulsar.masterSwitch.init();
        pulsar.navMain.init();
        pulsar.filterBar.init();
        pulsar.disableUI.init();
        pulsar.tableDetail.init();
        pulsar.dropZoneComponent = pulsar.DropZoneComponentFactory.create($('body')[0], '.dropzone');
        pulsar.repeaterManager.init();
        pulsar.tooltipListener = pulsar.tooltipFactory($html);
        pulsar.tooltipListener.init();

        $('.d-example-nav__link').on('click', function() {
            var $this = $(this),
                $parent = $(this).closest('.d-example'),
                lang = $this.data('toggle');

                $parent.find('.d-example-nav__link').removeClass('is-active');
                $this.addClass('is-active');
            
                $parent.find('.js-' + lang).show();
                $parent.find('.d-example__code:not(.js-' + lang + ')').hide();
        });

        $('[data-toggle-nav]').on('click', function (e) {
            let $target = $html.find('[aria-controls="aria-secondary-nav"][data-target="' + $(this).data('toggle-nav') + '"]');
            
            $target.trigger('click');
            
            e.preventDefault();
        });

        $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(".page-nav").empty().toc({content: ".tab__pane.is-active", headings: "h2.docs-heading,h3.docs-heading,h4.docs-heading,h5.docs-heading,h6.docs-heading"});
        });

        // DropZone
        pulsar.dropZoneComponent.init({
            supported: !lt10,
            showInputNode: lt10
        });

        console.log($('.docs-heading'));
    });

}(jQuery));
