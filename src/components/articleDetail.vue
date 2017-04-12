<template>
    <div class="container">
        <my-header></my-header>
        <div class="content">
            <h2 class="artitle-title">
                {{artitle.title}}
            </h2>
            <div class="article-detail">
                {{artitle.content}}
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import myHeader from './common/myHeader.vue'
    import myFooter from './common/myFooter.vue'
    export default {
        data() {
            return {
                artitle: {
                    // title: "title",
                    // content: "content"
                }
            }
        },
        components: {
            myFooter,
            myHeader
        },
        methods: {
            //这个时候就比较麻烦了，不能直接去获取之前缓存的artitleList,当然也可以直接向服务器端请求资源，这个就浪费服务端资源了,既然不用Vuex了就简单使用向服务端请求吧
            getArticleDetailById() {
                this.$http.get('/api/getArticleDetailById.json?id=' + this.$route.query.id).then((res) => {
                    this.artitle = res.body.result;
                }, (err) => {
                    alert("getArticleDetailById fail");
                })
            }
        },
        created() {
            this.getArticleDetailById();
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .container {
        .content {
            padding: 40px 40px 80px;
            h2 {
                border-bottom: 2px solid #999;
            }
            .article-detail {
                margin-top: 20px;
            }
        }
    }
</style>
