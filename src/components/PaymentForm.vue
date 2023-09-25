<template>
    <div class="c-paymentform">
        <div class="c-paymentform__row">
            <eInput 
                label="Credit Card Number" 
                placeholder="0000-0000-0000-0000"
                :mask="['####-####-####-####']"
                v-model="formData.card" 
                :error="$vaLittle.getError('card').message
            "/>
        </div>
        <div class="c-paymentform__row">
            <eInput 
                label="Security Code"
                type="password" 
                placeholder="***" 
                :mask="['###']"
                v-model="formData.code" 
                :error="$vaLittle.getError('code').message"
            />
            <eInput  
                label="Expiration Date" 
                placeholder="MM/YY" 
                :mask="['##/##','##/##']"
                v-model="formData.expiration"
                :error="$vaLittle.getError('expiration').message"
            />
        </div>
    </div>
</template>
<script>
    import eInput from '../elements/Input'

    export default {
        data() {
            return {
                formData: {
                    card: '',
                    code: '',
                    expiration: ''
                },
                errors: null
            }
        },
        components: {
            eInput
        },
        watch: {
            formData: {
                deep:true,
                handler() {
                    this.errors = this.$vaLittle.check(this.formData);
                    if(this.errors.errors === false) {
                        this.$emit('valid',true);
                        this.$emit('data',this.formData);
                    } else {
                        this.$emit('valid',false);
                    }
                }
            }
        },
        validate: {
            messages: {
                card: {
                    require:'Credit Card Number is required',
                    min: 'Credit Card Number is to short'
                },
                code: {
                    require:'Security Code is required',
                    min: 'Security Code is to short'
                },
                expiration: {
                    require:'Expiration Date is required',
                    min: 'Expiration Date is invalid'
                }
            },
            rules: {
                card: {
                    require: true,
                    min:16
                },
                code: {
                    require: true,
                    min:3
                },
                expiration: {
                    require: true,
                    min:4
                }
            }
        } 
    }

</script>
<style lang="scss">
    .c-paymentform {
        &__row {
            @media(min-width: 640px) {
                display: flex;
                justify-content: space-between;
                gap: 11px;
            }
        }
    }
</style>