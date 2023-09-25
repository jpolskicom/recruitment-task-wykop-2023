<template>
    <div class="c-historyback">
        <span class="c-historyback__button" v-on:click="$router.go(-1)">←&nbsp;previous step</span>
    </div>
</template>
<style lang="scss">
    .c-historyback{
        display: flex;
        justify-content: center;
        align-items: center;
        &__button{
            color: $midGray;
            cursor: pointer;
            &:hover {
                color: $green;
            }
        }
    }
</style>