sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/model/json/JSONModel",
	"sap/base/util/UriParameters",
	"sap/base/Log"

], function(
	MockServer,
	JSONModel,
	UriParameters,
	Log

) {
	"use strict";

		var oMockServer,
			_sPath = "invoices/",
			_sJsonFilesPath = _sPath + "localService/mockdata";
		var _manifest = "manifest.json"

		var oMockServerInterface = {

			init: function(oOptionsParameter){

				var options = oOptionsParameter || {};

				return new Promise(function(fnResolve, fnReject){

					var sManifestUrl = sap.ui.require.toUrl(_sPath + _manifest);
					var oManifestModel = new JSONModel(sManifestUrl);
					
					oManifestModel.attachRequestCompleted(function(){
						var oUriparameters = new UriParameters(window.location.ref);
						var sJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesPath);
						var oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/northwind");
						var sMetadaUrl = sap.ui.require.toUrl(_sPath + oMainDataSource.settings.localUri);
						var sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sPath)).toString();
						
						if(!oMockServer){

							oMockServer = new MockServer({

								rootUri: oMainDataSource.host + sMockServerUrl
							});
						}else{

							oMockServer.stop();
						}

						MockServer.config({
							autoRrespond: true,
							autoRrespondAfter: (options.delay || oUriparameters.get("serverDelay") || 1000)
						});

						oMockServer.simulate(sMetadaUrl,{
							sMockdataBaseUrl: sJsonFilesUrl,
							bGenerateMissingMockData: true 
						});

						var aRequest = oMockServer.getRequests();

						oMockServer.setRequests(aRequest);
						oMockServer.start();

						Log.info("Running the app with Mock data");
						fnResolve();
					});

					oManifestModel.attachRequestFailed(function(){

						var sError = "Failed to load application manifest";
						Log.error(sError);
						fnReject(new Error(sError)); 
					});
				});

			}
		};
		return oMockServerInterface; 

});