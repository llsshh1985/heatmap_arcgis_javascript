dojo.require("esri.map");
dojo.addOnLoad(init);

var map;
function init() {
	map = new esri.Map("map", { 
	  center: [118.763903, 32.058586],
	  zoom: 12,
	  slider: true,
	  sliderPosition:'bottom-left'
	});
	var basemapURL= "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer"   
	var basemap = new esri.layers.ArcGISTiledMapServiceLayer(basemapURL);   
	map.addLayer(basemap); 
}