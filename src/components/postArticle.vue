<template>
    <div class="container">
        
        <div class="content">
            <div class="left">
                <div class="form-item">
                    <label>标题</label>
                    <input type="text" name="artitleTitle" id="artitleTitle" v-model.trim="artitleTitle">
                </div>
                <div class="form-item">
                    <label>内容</label>
                    <textarea name="writeArea" id="writeArea" cols="30" rows="10" v-model.trim="articleDetail"></textarea>
                </div>
                <div class="post">
                    <button type="submit" @click="postArticle">发布</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        data () {
            return {
                artitleTitle: '',
                articleDetail: ''

            };
        },
        components: {

        },
        methods: {
            postArticle () {
                let data = {
                    userId: "9527",
                    artitleTitle: this.artitleTitle,
                    articleDetail: this.articleDetail
                }
                this.$http.post("/api/savePostingArticle.json", data).then((res) => {
                    if(res.body.state === 1) {
                        alert("save success");
                        window.location.reload();
                    } else {
                        alert(res.body.message);
                    }
                }, (res) => {
                    alert("请求失败。");
                });
                alert("I am saving");
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .content {
        padding: 40px 40px 80px;
        .form-item {
            #writeArea {
                display: block;
                width: 500px;
                min-height: 600px;
                border: 1px solid #999;
            }            
        }
        .post {
            margin-top: 40px;

        }       
    }
    
</style>