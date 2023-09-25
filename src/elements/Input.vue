<template>
    <div :class="['e-input', {'e-input--active': active}]" 
>
        <span class="e-input__label">{{ label }}</span>
        <div>
            <span class="e-input__prefix" v-if="prefix">{{ prefix }}&nbsp;</span>
            <the-mask 
                v-if="mask.length > 0"
                :type="type !== 'password'? 'text' : type"
                :mask="mask"
                :value="getValue"
                v-on:input="emitInput($event)" 
                :placeholder="placeholder" 
            />
            <input
                v-else
                :type="type === 'select'? 'text' : type" 
                :placeholder="placeholder" 
                :value="getValue"
                v-on:input="emitInput($event.target.value)" 
                v-on:focus="setActive(true)" 
                v-on:focusout="setActive(false)"
            />
        </div>
        <div class="e-input__options" v-if="active && type === 'select' && options">
            <div class="e-input__option"
                v-for="(option, key) in options" 
                :key="`option${key}`" 
                v-on:click="setOption(option)"
            >
                {{ option[optionKey]? option[optionKey] : option  }}
            </div>
        </div>
        <span class="e-input__error">{{ error }}&nbsp;</span>
    </div>
</template>
<script> 
    export default {
        data() {
            return {
                value: null,
                active: false
            }
        },
        props: {
            error: {
                type: String,
                default: () => ''
            },
            label: {
                type: String,
                default: () => ''
            },
            placeholder: {
                type: String,
                default: () => ''
            },
            mask:{
                type: Array,
                default: () => []
            },
            type:{
                type: String,
                default: () => 'text'
            },
            prefix:{
                type: String,
                default: () => null
            },
            options:{
                type: Array,
                default: () => []
            },
            optionKey: {
                type: String,
                default: () => ''
            }
        },
        computed: {
            getValue() {
                return this.value && this.type === 'select'? this.value[this.optionKey] : this.value
            }
        },
        methods: {
            setActive(state = false) {
                setTimeout(() => this.active = state,200);
            },
            emitInput(value) {
                this.value = value;
                this.$emit('input',this.value);
            },
            setOption(option) {
                this.value = option;
                this.$emit('input',this.value)
                this.setActive();
            },
        }
    }
</script>
<style lang="scss">
    .e-input {
        position: relative;
        background-color: $white;
        width: 100%;
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        background-color: $white;
        border-radius: 3px;
        padding: 8px 10px 0px 10px;
        @include box-shadow;
        &__label {
            font-size: 1rem;
            color: $darkerGray;
            font-weight: 600;
            line-height: 1.1;
        }
        input, select, &__prefix {
            $t: &;
            outline: none;
            border:none;
            font-size: 15px;
            font-weight: 600;
            padding: 2px 0 0 0;
            &::placeholder{
                color: $midGray;
            }
            &:focus {
                &::placeholder{
                    color: transparent;
                }
            }
        }
        &__prefix {
            color: $midGray;
        }
        &__options {
            position: absolute;
            top: calc(100% - 3px);
            left: 0;
            right: 0;
            z-index: 777;
            max-height: 340px;
            overflow-y: auto;
            background-color: $white;
            border-radius: 3px;
            padding: 10px;
            @include box-shadow;
        }
        &__option {
            cursor: pointer;
            &:hover {
                background-color: $darkGray;
            }
        }
        &__error {
            font-size: 0.7em;
            line-height: 0.75rem;
            margin-bottom: 1px;
            color: #f00;
        }
    }
</style>