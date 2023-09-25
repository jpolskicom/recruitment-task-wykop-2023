<template>
    <div class="c-userform">
        <div class="c-userform__row">
            <eInput 
                label="First name" 
                placeholder="Elon" 
                v-model="formData.name" 
                :error="$vaLittle.getError('name').message
            "/>
            <eInput 
                label="Last name"
                placeholder="Musk" 
                v-model="formData.surname" 
                :error="$vaLittle.getError('surname').message"
            />
        </div>
        <div class="c-userform__row">
            <eInput 
                label="Email" 
                placeholder="elon@spacex.com" 
                type="email" 
                v-model="formData.email" 
                :error="$vaLittle.getError('email').message"
            />
        </div>
        <div class="c-userform__row">
            <eInput 
                label="Country" 
                placeholder="Select" 
                type="select" 
                :options="countries" 
                optionKey="name" 
                v-model="formData.country" 
                :error="$vaLittle.getError('country').message"
            />
            <eInput  
                label="Postal Code" 
                placeholder="1001" 
                v-model="formData.postal"
                :error="$vaLittle.getError('postal').message"
            />
        </div>
        <div class="c-userform__row">
            <eInput 
                label="Phone Number" 
                placeholder="692-93-92"
                :mask="['###-##-##','#######']" 
                type="number" 
                :prefix="`(${formData.country? formData.country.dial_code: '212'})`" 
                v-model="formData.phone"
                :error="$vaLittle.getError('phone').message"
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
                    name: '',
                    surname: '',
                    email: '',
                    country: '',
                    postal: '',
                    phone: ''
                },
                errors: null
            }
        },
        props: {
            countries: {
                type: Array,
                default: () => [] 
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
                name: {
                    text:'Incorrect name',
                    require:'Name is required'
                },
                surname: {
                    text:'Incorrect surname',
                    require:'Surname is required'
                },
                email: {
                    email:'Incorrect email',
                    require:'Email is required'
                },
                country: {
                    require:'Country is required'
                },
                postal: {
                    require:'Postal code is required'
                },
                phone: {
                    require:'Phone number is required',
                    min:'Phone number is to short',
                    max: 'Phone number is to long',
                    number:'Incorrect phone number'
                }
            },
            rules: {
                name: {
                    text: true,
                    require: true
                },
                surname: {
                    text: true,
                    require: true
                },
                email: {
                    email: true,
                    require: true
                },
                country: {
                    require: true
                },
                postal: {
                    require: true
                },
                phone: {
                    require: true,
                    number: true,
                    min:7,
                    max: 9,
                }
            }
        } 
    }

</script>
<style lang="scss">
    .c-userform {
        &__row {
            @media(min-width: 640px) {
                display: flex;
                justify-content: space-between;
                gap: 11px;
            }
        }
    }
</style>