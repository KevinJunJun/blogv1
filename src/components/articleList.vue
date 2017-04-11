<template>
    <div class="container">
        <my-header></my-header>
            <div class="content">
                <ul class="articles-ul">
                    <li v-for="article in articles" class="article-li">
                        <router-link :to="'/article-detail/'+ article.id">
                            <h3>{{article.title}}</h3>
                            <p>{{article.abstract}}</p>
                        </router-link>

                    </li>
                </ul>
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
                articles: [{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 2
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 3
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 4
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },{
                    title: "title1",
                    abstract: "The examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property namesThe examples above focused on using variables to control values in CSS rules, but they can also be used in other places as well, such as selector names, property names",
                    id: 1
                },
                ]
            }

        },
        components: {
            myFooter,
            myHeader
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .content {
        padding: 40px 0 80px;
        .articles-ul {
            padding: 0 40px;
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
