<template>
    <div id="header">
        <div class="content">
            <a class="home" href="/">Blog</a>
            <em>|</em>
            <router-link to="/post-article">post article</router-link>
        </div>
    </div>
</template>


<style lang="less" rel="stylesheet/less" scoped>
    #header {
        height: 50px;
        line-height: 50px;
        min-width: 1024px;
        background: rgba(17, 17, 17, 0.93);
        a {
            color: #fff;
        }
        .content {
            margin: 0 auto;
            width: 1024px;

            color: #fff;
            font-family: cursive;
            font-size: 18px;
            .home {
                
            }
        }
    }
</style>
