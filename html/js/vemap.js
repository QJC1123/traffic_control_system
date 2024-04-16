
$(function(){


  var bmap = new BMapGL.Map("allmap");
  // bmap.centerAndZoom('燕京桥', 16);//白马路与木燕路交叉口
  bmap.centerAndZoom('白马路和木燕路交叉路口', 18.8);  // 初始化地图,设置中心点坐标和地图级别
  bmap.enableScrollWheelZoom(true);
  var path = [{
      'lng': 120.354861,
      'lat': 30.316401
  }, {
      'lng':120.354831,
      'lat': 30.322126
  }, {
      'lng': 120.351422,
      'lat':30.322076
  }, {
      'lng': 120.345336,
      'lat': 30.321912
  }];
  var point = [];
  for (var i = 0; i < path.length; i++) {
      point.push(new BMapGL.Point(path[i].lng, path[i].lat));
  }
  var pl = new BMapGL.Polyline(point);
  setTimeout('start()', 3000);
  trackAni = new BMapGLLib.TrackAnimation(bmap, pl, {
      overallView: true,
      tilt: 30,
      duration: 20000,
      delay: 300
  });
  function start () {
      trackAni.start();
  }
  function pauseAni () {
      trackAni.pause();
  }
  function continueAni () {
      trackAni.continue();
  }





})



//地图界面高度设置



//加载地图
// function initMap(){
	// GL版命名空间为BMapGL
	// 按住鼠标右键，修改倾斜角和角度
	// var map = new BMapGL.Map("allmap");    // 创建Map实例
	// map.centerAndZoom('杭州市浙江理工大学', 18.8);  // 初始化地图,设置中心点坐标和地图级别
	// map.setMinZoom(12);
	// map.setMaxZoom(19);
	// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	// var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
	// map.addControl(navi3DCtrl);
	// var walking = new BMapGL.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
	// walking.search('文泽路', '高沙路');
	
	
	

	
	
	
	
	
// // 百度地图API功能
//     var map = new BMap.Map("all_map");    // 创建Map实例
//     map.centerAndZoom('杭州市浙江理工大学', 18.8); // 初始化地图,设置中心点坐标和地图级别 
//     var size1 = new BMap.Size(10, 50);
//     map.addControl(new BMap.MapTypeControl({
//         offset: size1,
//         mapTypes:[
//             BMAP_NORMAL_MAP,
//             BMAP_HYBRID_MAP,

//         ]}));
    // // 编写自定义函数,创建标注
    // function addMarker(point){
    //     var marker = new BMap.Marker(point);
    //     map.addOverlay(marker);
    // }
    // // 随机向地图添加25个标注
    // var bounds = map.getBounds();
    // var sw = bounds.getSouthWest();
    // var ne = bounds.getNorthEast();
    // var lngSpan = Math.abs(sw.lng - ne.lng);
    // var latSpan = Math.abs(ne.lat - sw.lat);
    // for (var i = 0; i < 25; i ++) {
    //     var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
    //     addMarker(point);
    // };

    // map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    //设备地图颜色
    // var mapStyle={
    //     style:"bluish"
    // };
    // map.setMapStyle(mapStyle);





//加载城市控件
    // var size = new BMap.Size(10, 50);
    // map.addControl(new BMap.CityListControl({
    //     anchor: BMAP_ANCHOR_TOP_LEFT,
    //     offset: size,


    // }));
// }

