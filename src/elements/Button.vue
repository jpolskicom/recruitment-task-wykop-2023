<template>
    <button :class="['e-button',`e-button--${type}`,`e-button--${active? 'active' : 'inactive'}`]" v-on:click="handleClick()">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default:() => 'success'
            },
            active: {
                type: Boolean,
                default:() => false
            }
        },
        methods: {
            handleClick() {
                if(this.active) {
                    this.$emit('click',true)
                }
            }
        }
    }
</script>
<style lang="scss">
    .e-button {
        position: relative;
        width: 100%;
        margin: 2rem 0;
        border: 0;
        outline: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $white;
        border-radius: 3px;
        padding: 0 1rem;
        height: 50px;
        text-transform: uppercase;
        font-weight: bold;
        @include box-shadow;
        transition: background-color .25s;
        &--success {
            background: $green;
            @include box-shadow-green;
            color: $white;
        }
        &--active {
            cursor: pointer;
        }
        &--inactive {
            cursor: not-allowed;
            background: $darkGray;
            @include box-shadow;
        }
    }
</style>