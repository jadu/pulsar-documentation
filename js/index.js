/**
 * Pulsar
 *
 * Core UI components that should always be present.
 *
 * Jadu Ltd.
 */

// Fixes issue with dependencies that expect both $ and jQuery to be set
window.jQuery = window.$ = require('jquery');

require('babel-polyfill');

// Global UI components
var $                     = require('jquery'),
    modal                 = require('../vendor/jadu/pulsar/js/libs/modal'),
    tab                   = require('../vendor/jadu/pulsar/js/libs/tab'),
    popover               = require('../vendor/jadu/pulsar/js/libs/popover'),
    tooltip               = require('../vendor/jadu/pulsar/js/libs/tooltip'),
    matchMedia            = require('../vendor/jadu/pulsar/js/polyfills/matchMedia'),
    matchMediaAddListener = require('../vendor/jadu/pulsar/js/polyfills/matchMedia.addListener'),

    toc           = require('jquery.toc'),
    dt            = require('datatables.net')(window, $),
    dt_buttons    = require('datatables.net-buttons')(window, $),
    dt_responsive = require('datatables.net-responsive')(window, $),
    dt_select     = require('datatables.net-select')(window, $),

    ButtonComponent = require('../vendor/jadu/pulsar/js/ButtonComponent'),
    DisableUiComponent    = require('../vendor/jadu/pulsar/js/DisableUiComponent'),
    DropdownButtonComponent = require('../vendor/jadu/pulsar/js/DropdownButtonComponent'),
    DropZoneComponentFactory = require('../vendor/jadu/pulsar/js/DropZone/DropZoneComponentFactory'),
    ErrorSummaryComponent = require('../vendor/jadu/pulsar/js/ErrorSummaryComponent'),
    FilterBarComponent    = require('../vendor/jadu/pulsar/js/FilterBarComponent'),
    FlashMessageComponent = require('../vendor/jadu/pulsar/js/FlashMessageComponent'),
    HelpTextComponent = require('../vendor/jadu/pulsar/js/HelpTextComponent'),
    MasterSwitchComponent = require('../vendor/jadu/pulsar/js/MasterSwitchComponent'),
    NavMainComponent      = require('../vendor/jadu/pulsar/js/NavMainComponent'),
    PulsarFocusManagementService = require('../vendor/jadu/pulsar/js/FocusManagementService'),
    PulsarFormComponent   = require('../vendor/jadu/pulsar/js/PulsarFormComponent'),
    PulsarSortableComponent = require('../vendor/jadu/pulsar/js/PulsarSortableComponent'),
    PulsarUIComponent     = require('../vendor/jadu/pulsar/js/PulsarUIComponent'),
    ModalFocusService = require('../vendor/jadu/pulsar/js/Modals/ModalFocusService'),
    ModalListener = require('../vendor/jadu/pulsar/js/Modals/ModalListener'),
    RepeaterManagerComponent = require('../vendor/jadu/pulsar/js/Repeater/RepeaterManagerComponent'),
    repeaterComponentFactory = require('../vendor/jadu/pulsar/js/Repeater/repeaterComponentFactory'),
    TableDetailComponent = require('../vendor/jadu/pulsar/js/TableDetailComponent'),
    tooltipFactory = require('../vendor/jadu/pulsar/js/Tooltips/tooltipsFactory'),
    datePicker = require('pulsar-date-picker');

(function () {

    var $html = $('html');
    $html.removeClass('no-js');

    var errorSummary = new ErrorSummaryComponent(),
        button = new ButtonComponent($html),
        dropdownButton = new DropdownButtonComponent($html),
        disableUI = new DisableUiComponent($html),
        flash = new FlashMessageComponent($html),
        helpText = new HelpTextComponent($html, window, document),
        pulsarForm = new PulsarFormComponent($html),
        pulsarUI = new PulsarUIComponent($html, window.History),
        pulsarSortable = new PulsarSortableComponent($html, window),
        pulsarFocusManagement = new PulsarFocusManagementService(),
        masterSwitch = new MasterSwitchComponent($html, disableUI),
        navMain = new NavMainComponent($html, window, pulsarFocusManagement),
        filterBar = new FilterBarComponent($html),
        tableDetail = new TableDetailComponent($html),
        repeaterManager = new RepeaterManagerComponent(
            pulsarForm,
            repeaterComponentFactory,
            $html
        ),
        modalFocusService = new ModalFocusService(),
        modalListener = new ModalListener(modalFocusService);

    $(function () {

        var $newHtml = $('html');

        button.init();
        dropdownButton.init();
        errorSummary.init($html);
        flash.init();
        helpText.init();
        pulsarForm.init();
        pulsarSortable.init();
        pulsarUI.init();
        masterSwitch.init();
        navMain.init();
        filterBar.init();
        disableUI.init();
        tableDetail.init();
        repeaterManager.init();
        datePicker.init($newHtml);
        modalListener.listen($newHtml)

        var dropZoneComponent = DropZoneComponentFactory.create($('body')[0], '.dropzone'),
            tooltipListener = tooltipFactory($html);

        dropZoneComponent.init();
        tooltipListener.init();

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
    });

}());

module.exports = {
    ButtonComponent,
    DisableUiComponent,
    DropdownButtonComponent,
    DropZoneComponentFactory,
    ErrorSummaryComponent,
    FilterBarComponent,
    FlashMessageComponent,
    HelpTextComponent,
    MasterSwitchComponent,
    NavMainComponent,
    PulsarFormComponent,
    PulsarSortableComponent,
    PulsarUIComponent,
    RepeaterManagerComponent,
    repeaterComponentFactory,
    TableDetailComponent,
    tooltipFactory
};
