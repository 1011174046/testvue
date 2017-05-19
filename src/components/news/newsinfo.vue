<template> 
     <div class="tmpl title">
           <h4>{{list.title}}</h4>
           <span>{{list.add_time | datefmt('YYYY-MM-DD') }} {{list.click}}次浏览</span>
           <hr>
           <div v-html="list.content">
           </div>
     </div>
</template>

<script>
import {Toast} from 'mint-ui';
import common from '../../kits/common.js';
 export default{
    data(){
        return {
            id:0,
            list: {},
        }
    },created(){
        this.id = this.$route.params.id;
        this.getnewsinfo();
    },methods:{
        getnewsinfo(){
            var that = this;
            var url = common.apidomain+'/api/getnew/'+this.id;
            this.$http.get(url)
            .then(function(res){
                // console.log(res.bodyText);

                var data = JSON.parse(res.bodyText);
                // console.log(data.status);
                // console.log(data.message[0]);
                if(data.status != 0){
                    Toast(data.message);
                    return;
                }else{
                    that.list = data.message[0];
                    // console.log(that.list);
                }
            })
        }
    }
 }
</script>

<style scoped>
    .title h4{
		color: #0094ff;
	}
	.title span{
		color:rgba(0,0,0,0.5);
	}
</style>