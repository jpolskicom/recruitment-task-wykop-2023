<template>
    <lMain class="p-paymentdetail" step="2" title="Payment details">
        <template slot="content">
            <PaymentForm v-on:valid="isPaymentFormValid = $event" v-on:data="paymentFormData = $event"/>
            <eButton :active="isPaymentFormValid" v-on:click="proceed()">🛒 Complete Purchase</eButton>
            <eHistoryBack/>
        </template>
        <YourOrder slot="aside" :items="getOrderItems" :totals="getOrderTotals" />
    </lMain>
</template>
<script>
    import lMain from '../layouts/Main'

    import PaymentForm from '../components/PaymentForm'
    import YourOrder from '../components/YourOrder'

    import eButton from '../elements/Button'
    import eHistoryBack from '../elements/HistoryBack'

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                isPaymentFormValid: false,
                paymentFormData: {}
            }
        },
        components: {
            lMain,
            PaymentForm,
            YourOrder,
            eButton,
            eHistoryBack
        },
        computed: {
            ...mapGetters([
                'getOrderItems',
                'getOrderTotals',
                'getOrderRequest'
            ])
        },
        methods: {
            ...mapMutations([
                'setOrderPayment'
            ]),
            proceed() {
                this.setOrderPayment(this.paymentFormData)
                console.log(this.getOrderRequest);
            }
        }
    }
</script>
