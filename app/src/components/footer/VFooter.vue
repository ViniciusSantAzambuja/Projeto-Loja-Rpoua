<template>
    <div class="footer-container">
        <div class="footer-company">
            <h1>Logo</h1>
            <p>
                We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div class="footer-contact">
                <img src="../../assets/facebook-logo.svg"/>
                <img src="../../assets/insta-logo.svg"/>
                <img src="../../assets/gihub-logo.svg"/>
            </div>
        </div>
        <div class="footer-info">
            <VFooterInfo title="Company" :infos="['About', 'Features', 'Works', 'Career']"/>
            <VFooterInfo title="Help"  :infos="['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']"/>
            <VFooterInfo title="FAQ"  :infos="['Account', 'Manage Delivery', 'Orders', 'Payments']"/>
            <VFooterInfo title="Resources"  :infos="['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']"/>
        </div>
    </div>
</template>

<script>
import VFooterInfo from '@/components/footer/VFooterInfo.vue'
export default{
    name: 'VFooter',
    components: {VFooterInfo}
}
</script>

<style scoped>
.footer-container {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 3rem;
    padding: 1rem;
    background-color: #F8F8FF;

    .footer-company {
        width: 350px;
        font-family: 'Open Sans', sans-serif;
        p {
            font-family: 'Rubik', sans-serif;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.6);
            word-break: keep-all;
            line-height: 1.2;
        }
    }

    .footer-contact {
        display: flex;
        gap: 1rem;
    }   

    .footer-info{
        display: flex;
        gap: 2rem;
    }
}
</style>