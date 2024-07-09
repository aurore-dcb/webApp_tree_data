sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "demo/frontend/model/models"
], function(UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("demo.frontend.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {
            // Appel de la méthode init de UIComponent
            UIComponent.prototype.init.apply(this, arguments);

            // Définir les modèles
            this.setModel(models.createDeviceModel(), "device");

            // Initialiser le router
            this.getRouter().initialize();
        }
    });
});