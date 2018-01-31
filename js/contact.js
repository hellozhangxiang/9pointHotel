 var map = new BMap.Map("jd_map");
  // 创建地图实例
  var point = new BMap.Point(120.093391,30.151097);
  // 创建点坐标
  //导航控件
  map.addControl(new BMap.NavigationControl());
  //缩放控件
  map.addControl(new BMap.ScaleControl());
  //概览图控件
  map.addControl(new BMap.OverviewMapControl());
  //地图类型控件
  map.addControl(new BMap.MapTypeControl());
  map.centerAndZoom(point, 19);
  // 初始化地图，设置中心点坐标和地图级别
  var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE);             
	map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	map.enableContinuousZoom(); 