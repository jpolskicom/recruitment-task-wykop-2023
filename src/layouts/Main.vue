<template>
    <main class="l-main">
        <div class="l-main__wrap">
            <div class="l-main__head">
                <div class="l-main__step">{{ step }}</div>
                <h1 class="l-main__title">{{ title }}</h1>
            </div>
            <div class="l-main__container">
                <div class="l-main__header">    
                    <slot name="title"/>
                </div>
                <section class="l-main__content">
                    <slot name="content"/>
                </section>
                <aside class="l-main__aside">
                    <slot name="aside"/>
                </aside>
            </div>
        </div>
    </main>
</template>
<script>

    export default {
        props: {
            step: {
                type: String,
                default: () => ''
            },
            title: {
                type: String,
                default: () => ''
            }
        }
    }
</script>
<style lang="scss">
    .l-main {
        background-color: $gray;
        width: 100%;
        min-height: 100vh;
        padding: 1rem;
        @media(min-width: 780px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__wrap{
            width: 100%;   
            max-width: 860px;               
        }
        &__container {
            max-width: 860px;
            @media(min-width: 780px) {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }
        }
        &__content {
            max-width: 586px;
            padding: 0 12px;
            width: 100%;

        }
        &__aside {
            width: 100%;
            @media(min-width: 780px) {
                max-width: 275px;
            }
            border-radius: 3px;
            background-color: $white;
            padding: 4px;
            @include box-shadow;
        }
        &__head {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 20px 0;
        }
        &__step {
            width: 20px;
            height:20px;
            background-color: $black;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            font-weight: bold;
            border-radius: 50%;
        }
        &__title {
            font-weight: bold;
            margin-left: 1rem;
            text-transform: uppercase;
            font-size: 12px;
        }
    }
</style>