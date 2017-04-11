<template>
    <div class="container">
        <my-header></my-header>
        <div class="content">
            <h2 class="artitle-title">
                {{artitle.title}}
            </h2>
            <div class="article-detail">
                {{artitle.detail}}
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
                    title: "title1",
                    detail: "detail1"
                }
            }
        },
        components: {
            myFooter,
            myHeader
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
