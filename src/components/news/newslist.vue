<template>
    <div class="tmpl">
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'><span v-text="item.zhaiyao"></span></p>
                            <div class="footer">
                                <span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:MM:SS')}}</span>
                                <span class="f_click">点击数:{{item.click}}</span>
                            </div>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.getnewslist();
        },
        methods:{
            getnewslist(){
                var url = 'http://webhm.top:8899/api/getnewslist';
                this.$http.get(url)
                .then(function(response){
                    // console.log(response);
                    var data = response.body;
                    if(data.status!=0){
                        Toast(data.message);
                        return; 
                    }else{
                        this.list = data.message;
                        // console.log(list);
                    }
                })
            }
        }
    }
</script>

<style scoped> 
    .mui-table-view img{
        width:80px;
        height:80px;
    
    }
    .mui-table-view .mui-media-object {
        max-width:80px;
        line-height:80px;
    }
    .footer{
        margin-top:1.5em;
        font-size:12px;
        color:#009426;
    }
    .footer .f_click{
        padding-left:20px;
    }
</style>

