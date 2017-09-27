//**********************************sort**********************************// 
//  点击切换商品类型
$('.sort-promenu li').click(function(){
	$(this).children('em').css('display','block');
	$(this).siblings().children('em').css('display','none');
});

//  增加和减少商品数量
