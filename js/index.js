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
    PulsarFormComponent   = require('../vendor/jadu/pulsar/js/PulsarFormComponent'),
    PulsarSortableComponent = require('../vendor/jadu/pulsar/js/PulsarSortableComponent'),
    PulsarUIComponent     = require('../vendor/jadu/pulsar/js/PulsarUIComponent'),
    RepeaterManagerComponent = require('../vendor/jadu/pulsar/js/Repeater/RepeaterManagerComponent'),
    repeaterComponentFactory = require('../vendor/jadu/pulsar/js/Repeater/repeaterComponentFactory'),
    TableDetailComponent = require('../vendor/jadu/pulsar/js/TableDetailComponent'),
    tooltipFactory = require('../vendor/jadu/pulsar/js/Tooltips/tooltipsFactory');
    

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
