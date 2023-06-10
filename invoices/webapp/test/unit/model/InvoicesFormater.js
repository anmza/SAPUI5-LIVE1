sap.ui.define([

    "invoices/model/InvoicesFormater",
    "sap/ui/model/resource/ResourceModel"
], function(
	InvoicesFormater,
	ResourceModel

) {
	QUnit.module("Formatting functions", {

        beforeEach: function(){

            this._ResourceModel = new ResourceModel({

                bundleUrl: sap.ui.require.toUrl("invoices/")+"i18n/i18n.properties"
            });
        },
        afterEach: function(){

            this._ResourceModel.destroy()
        }
    });

    QUnit.test("Should return the invoice Status", function(assert){

        let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._ResourceModel);

        let oViewStub = {

            getModel: oModel
        };

        let oControllerStub = {

            getView: this.stub().returns(oViewStub)
        };

        let fnIsolatedFormater = InvoicesFormater.invoicesStatus.bind(oControllerStub);

        assert.strictEqual(fnIsolatedFormater("A"), "New", "The invoices status for A is correct");
        assert.strictEqual(fnIsolatedFormater("B"), "In Process", "The invoices status for A is correct");
        assert.strictEqual(fnIsolatedFormater("C"), "Done", "The invoices status for A is correct");
    });
 
});