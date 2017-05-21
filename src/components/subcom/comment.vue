<template>
    <div class="tmpl">
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea v-model="postcontent" placeholder="请输入您要的评论的内容..."></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>

        <div class="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list">
                <div class="local">
                    <span>第{{index+1}}楼：</span>
                    <span>用户:{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
            </div>

              <mt-button type="danger" plain size="large" @click="getmore">获取更多</mt-button>
        </div>

    </div>
</template>

<script>
import {Toast} from 'mint-ui';
import common from '../../kits/common.js';
    export default{
       data(){
           return{
                list:[],
                postcontent:'',
                pageindex:1,
           } 
       },
        props:['id'], // 用来接收父组件的传值
        created(){
           this.getcommentlist(this.pageindex);
        },
        methods:{
            postcomment(){
                var url = common.apidomain+'/api/postcomment/'+ this.id;
                this.$http.post(url,{content:this.postcontent},{emulateJSON:true})
                .then(function(res){
                    if(this.postcontent.trim().length <= 0){
                        Toast('输入的值不能为空');
                        return;
                    }
                    console.log(url);
                    Toast(res.body.message);

                    // 3.0 将数据追加到最前面
                    this.list = [{
                    user_name: "匿名用户",
                    add_time: new Date(),
                    content: this.postcontent,
                    }].concat(this.list);

                    this.postcontent = '';
                    // console.log(res.body);
                })
            },
            getcommentlist(pageindex){
                pageindex = pageindex || 1;
               var url = common.apidomain+'/api/getcomments/'+this.id+'?pageindex='+pageindex;
               console.log(url);
               this.$http.get(url).then(function(res){
                //    console.log(res.body);
                   var data = res.body;
                   if(data.status !=0){
                       Toast(data.message);
                       return;
                   }
                   this.list = this.list.concat(data.message);
                //    console.log(this.list);
               })
            },
            getmore(){
                this.pageindex ++;
                var url = common.apidomain+'/api/getcomments/'+this.id+'?pageindex='+this.pageindex;
                // console.log(url);
                this.$http.get(url).then(function(res){
                    var data = res.body;
                   
                    this.list = this.list.concat(data.message);
                
                })

            }
        }    
    }
</script>

<style scoped>
    /* 1.0 实现提交评论样式 */
#postcomment{
	padding: 5px;
}
	 .p{
		height: 1px;
		width: 100%;
		border-bottom: 1px solid rgba(0,0,0,0.3);
	}

	/*2.0 评论列表的样式*/
.list{
	padding: 5px;
}
.title{
	padding: 5px;
	color: #6d6d72;
	font-size: 15px;
	background-color: rgba(0,0,0,0.1);
}
.local{
    height:40px;
    line-height:50px;
    background-color: rgba(0,0,0,0.1);
}
.local span{
    color:#26a2ff;
}
</style>