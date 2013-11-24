dojo.require("esri.map");
dojo.addOnLoad(init);

var map;

function init() {
	/*
	var initExtent = new esri.geometry.Extent({
		xmax: -13624229.32056175,
		xmin: -13625120.886837104,
		ymax: 4548374.604660432,
		ymin: 4547966.144290476,
		"spatialReference": {
			"wkid": 102100
		}
	});
	*/
	map = new esri.Map("map", { 
	  center: [118.763903, 32.058586],
	  //extent: initExtent,
	  zoom: 12,
	  slider: true,
	  sliderPosition:'bottom-left'
	});
	var basemapURL= "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer"   
	//var basemapURL="http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer";
	var basemap = new esri.layers.ArcGISTiledMapServiceLayer(basemapURL);   
	map.addLayer(basemap); 
	
	// once map is loaded
	dojo.connect(map, 'onLoad', function (theMap) {

		dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
		heatLayer = new HeatmapLayer({
			"map": map,
			"domNodeId": "heatLayer",
			"opacity": 0.85
		});
		map.addLayer(heatLayer);
		map.resize();

		setDatas();//

		dojo.connect(map, "onExtentChange", function (extent) {
			setDatas();//
		});
	});
}
function setDatas() {
	
	var data = [
	{
		attributes: {
		count:30
		},
		geometry: {
		spatialReference: {wkid: 102100},
		type: "point",
		//x: -13625196.784400001,
		//y: 4547752.612899996
		x: 13224914.8088105,
		y: 3765607.09725
		}
	},
	{
		attributes: {
		count:20
		},
		geometry: {
		spatialReference: {wkid: 102100},
		type: "point",
		//x: -13625196.784400001,
		//y: 4547752.612899996
		x: 13224115.8088105,
		y: 3764608.09725
		}
	}
	];	
	heatLayer.setData(data);
}
