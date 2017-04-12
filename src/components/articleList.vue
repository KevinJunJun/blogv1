<template>
    <div class="container">
        
            <div class="content">
                <ul class="articles-ul">

                    <li v-if="articles.length > 0" v-for="article in articles" class="article-li">
                        <router-link :to="{path: '/article-detail', query: {id:article._id}}">
                            <h3>{{article.title}}</h3>
                            <p>{{article.content}}</p>
                        </router-link>

                    </li>
                </ul>
            </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                articles: [
                // {
                //     title: "title1",
                //     abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                //     id: 1
                // }
                ]
            }

        },
        components: {

        },
        created() {
            this.$http.get('/api/getArticleList.json').then((res) => {
                this.articles = res.body.result;
            }, (err) => {alert("getArticleList fail!")});
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .content {
        padding: 40px 40px 80px;
        .articles-ul {
           
            .article-li {
                box-sizing: border-box;
                margin-top: 20px;
                padding: 20px;
                border: 1px solid #999;
                border-radius: 5px;
                &:first-child {
                    margin-top: 0;
                }
                &:hover {
                    box-shadow: 2px 2px 10px #999;
                }
                a {
                    text-decoration: none;

                    h3, p {
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;

                    }
                }

            }
        }

    }

</style>
