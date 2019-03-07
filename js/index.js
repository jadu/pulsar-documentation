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
    dropdown              = require('../vendor/jadu/pulsar/js/libs/dropdown'),
    modal                 = require('../vendor/jadu/pulsar/js/libs/modal'),
    tab                   = require('../vendor/jadu/pulsar/js/libs/tab'),
    popover               = require('../vendor/jadu/pulsar/js/libs/popover'),
    tooltip               = require('../vendor/jadu/pulsar/js/libs/tooltip'),
    matchMedia            = require('../vendor/jadu/pulsar/js/polyfills/matchMedia'),
    matchMediaAddListener = require('../vendor/jadu/pulsar/js/polyfills/matchMedia.addListener'),

    pikaday               = require('../vendor/jadu/pulsar/libs/pikaday/plugins/pikaday.jquery'),
    clickover             = require('../vendor/jadu/pulsar/libs/bootstrapx-clickover/js/bootstrapx-clickover'),

    dt            = require('datatables.net')(window, $),
    dt_buttons    = require('datatables.net-buttons')(window, $),
    dt_responsive = require('datatables.net-responsive')(window, $),
    dt_select     = require('datatables.net-select')(window, $),
    
    NavMainComponent      = require('../vendor/jadu/pulsar/js/NavMainComponent'),
    DisableUiComponent    = require('../vendor/jadu/pulsar/js/DisableUiComponent'),
    FilterBarComponent    = require('../vendor/jadu/pulsar/js/FilterBarComponent'),
    MasterSwitchComponent = require('../vendor/jadu/pulsar/js/MasterSwitchComponent'),
    PulsarUIComponent     = require('../vendor/jadu/pulsar/js/PulsarUIComponent'),
    PulsarFormComponent   = require('../vendor/jadu/pulsar/js/PulsarFormComponent'),
    RepeaterManagerComponent = require('../vendor/jadu/pulsar/js/Repeater/RepeaterManagerComponent'),
    repeaterComponentFactory = require('../vendor/jadu/pulsar/js/Repeater/repeaterComponentFactory'),
    TableDetailComponent = require('../vendor/jadu/pulsar/js/TableDetailComponent');

module.exports = {
    NavMainComponent,
    DisableUiComponent,
    FilterBarComponent,
    MasterSwitchComponent,
    PulsarUIComponent,
    PulsarFormComponent,
    RepeaterManagerComponent,
    repeaterComponentFactory,
    TableDetailComponent,
};
