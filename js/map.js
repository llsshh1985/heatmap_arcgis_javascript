dojo.require("esri.map");
dojo.addOnLoad(init);

var map;

function init() {
	var initExtent = new esri.geometry.Extent({
		xmax: -13624229.32056175,
		xmin: -13625120.886837104,
		ymax: 4548374.604660432,
		ymin: 4547966.144290476,
		"spatialReference": {
			"wkid": 102100
		}
	});
	map = new esri.Map("map", { 
	  //center: [118.763903, 32.058586],
	  extent: initExtent,
	  zoom: 12,
	  slider: true,
	  sliderPosition:'bottom-left'
	});
	//var basemapURL= "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer"   
	var basemapURL="http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer";
	var basemap = new esri.layers.ArcGISTiledMapServiceLayer(basemapURL);   
	map.addLayer(basemap); 
	
	var heatLayer = new HeatmapLayer({
	"map": map,
	"domNodeId": "heatLayer",
	"opacity": 0.85
	});
	var data = [
	{
		attributes: {
		count:50
		},
		geometry: {
		spatialReference: {wkid: 102100},
		type: "point",
		x: -13625196.784400001,
		y: 4547752.612899996
		}
	}
	];
	heatLayer.setData(data);
	map.addLayer(heatLayer);
}
