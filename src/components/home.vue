<template>
    <div class="tmpl">
     <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list">
        <img v-bind:src="item.img">
        </mt-swipe-item>
     </mt-swipe>

    <!--九宫格-->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vide">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme ">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
		</div>
 </div>
</template>

<script>
  import common from '../kits/common.js';
import {Toast} from 'mint-ui';
export default{
        data(){
            return{
            list:[]
  }
 },
 created(){
    this.getimgs();
 },
 methods:{
     getimgs(){
         var that = this;
         var url = common.apidomain+'/api/getlunbo';
         this.$http.get(url)
         .then(function(response){
            //  console.log(response.body);
             var data = response.body;
             // 错误信息
             if(data.status != 0){
                Toast(data.message);
                return;
             }else{
                 that.list = data.message;
             }
         })
     }
 }
}
</script>

<style scoped>
    .mint-swipe{
        height:300px;
    }
    .mint-swipe-item{
        width:100%;
        height:300px;
    }
    .mint-swipe-item img{
        width:100%;
     }
     .mui-content {
    background-color: white;
	}
     .mui-content ul{
    background-color: white;
	}
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border-right:0px;
	  border-bottom:0px;
    }
    .mui-grid-view.mui-grid-9 {
    margin: 0;
    padding: 0;
    border-top: 0px;
    border-left: 0px; 
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-repeat:round;
}
.mui-icon-home:before {
    background-image:url(../../images/1.png);
}
.mui-icon-email:before {
    background-image:url(../../images/2.png);
}
.mui-icon-chatbubble:before {
    background-image:url(../../images/3.png);
}
.mui-icon-location:before {
    background-image:url(../../images/4.png);
}
.mui-icon-search:before {
    background-image:url(../../images/5.png);
}
.mui-icon-phone:before {
    background-image:url(../../images/6.png);
}
</style>