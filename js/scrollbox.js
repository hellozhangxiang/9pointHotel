$(function(){
	try{$('#demo-nav').find('a').tooltip({effect: 'slide'})}catch(error){""};
});
$(window).load(function(){
	$('#slider').ccslider({
		_3dOptions: {
			imageWidth: 1093,
			imageHeight: 402
		}
	});
	$('#left-banner').ccslider({
		effectType: '2d',
		effect: 'random'
	});
});
