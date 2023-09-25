<template>
    <div class="c-yourorder">
        <h2 class="c-yourorder__title">Your order</h2>
        <div class="c-yourorder__list" v-if="items">
            <div class="c-yourorder__item" v-for="(item,key) in items" :key="`item${key}`">
                <span>{{ item.name }}</span>
                <span>{{ item.currency }} {{ item.price }}</span>
            </div>
        </div>
        <div class="c-yourorder__list" v-if="totals">
            <div class="c-yourorder__item">
                <span>Total purchases</span>
                <span>{{ totals.currency }} {{ totals.totalPurchases.toFixed(2) }}</span>
            </div>
            <div class="c-yourorder__item">
                <span>Estimated tax</span>
                <span>{{ totals.currency }} {{ totals.estiamtedTax }}</span>
            </div>
        </div>
        <div class="c-yourorder__item">
            <b>Total</b>
            <span class="c-yourorder__total">{{ totals.currency }} {{ totals.total }}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            items: {
                type: Array,
                default: () => null 
            },
            totals: {
                type: Object,
                default: () => null 
            }
        }
    }
</script>
<style lang="scss">
    .c-yourorder {
            border: $dashedBorder;
            padding: 12px 12px 16px;
       &__title {
            margin:  0;
            padding: 0;
            font-size: 1rem;
            text-transform: uppercase;
       }
       &__list {
            margin: 1rem 0;
            padding: 0 0 1.5rem;
            border-bottom: $dashedBorder;
       }
       &__item {
            display: flex;
            justify-content: space-between;
            margin-bottom: .5rem;
       }
       &__total {
            font-size:20px;
            font-weight: bold;
            margin-bottom: .3rem;
       }
    }
</style>