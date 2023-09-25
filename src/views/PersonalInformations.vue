<template>
    <lMain class="p-personalinformations" step="1" title="Personal informations">
        <template slot="content">
            <UserForm :countries="getCountries" v-on:valid="isUserFormValid = $event" v-on:data="userFormData = $event"/>
            <eButton :active="isUserFormValid" v-on:click="proceed()">🛒 Next</eButton>
        </template>
        <YourOrder slot="aside" :items="getOrderItems" :totals="getOrderTotals" />
    </lMain>
</template>
<script>
    import lMain from '../layouts/Main'

    import UserForm from '../components/UserForm'
    import YourOrder from '../components/YourOrder'

    import eButton from '../elements/Button'

    import { mapGetters, mapActions, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                isUserFormValid: false,
                userFormData: {}
            }
        },
        components: {
            lMain,
            UserForm,
            YourOrder,
            eButton
        },
        computed: {
            ...mapGetters([
                'getOrderItems',
                'getOrderTotals',
                'getCountries'
            ])
        },
        methods: {
            ...mapActions([
                'fetchCountries'
            ]),
            ...mapMutations([
                'setOrderUser'
            ]),
            proceed() {
                this.setOrderUser(this.userFormData)
                this.$router.push({ name: 'PaymentDetails'})
            }
        },
        created() {
            this.fetchCountries();
        }
    }
</script>
