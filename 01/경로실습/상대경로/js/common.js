// JavaScript Document

$(document).ready(function() { // 페이지가 열렸을때 실행
	
	// alert('경고창 출력')
	
	$('.topmenu > li').mouseenter(function(){ // .topmenu의 자식 li를 마우스 오버했을때
		$(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.gif','_on.gif'))
		// this = .topmenu의 자식 li중에서 현재 마우스 오버한 li
		// 현재 마우스 오버한 li -> 자식 -> 자식(img태그 지목)의 attr(속성명 = src)  -> replace(변경) -> .gif를 _on.gif로 변경		
	});
	
	$('.topmenu > li').mouseleave(function(){ // .topmenu의 자식 li를 마우스 아웃했을때
		$(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.gif','.gif'))
		
	});
	
	
	
	
});