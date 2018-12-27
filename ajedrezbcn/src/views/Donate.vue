<template>
  <div class="home">
    <DonationInfo msg="Donate"/>
  </div>
</template>

<script>
//------
//all JS goes here
//-----
import DonationInfo from '@/components/DonationInfo.vue';

export default {
  name: 'donationInfo',
  components: {
    DonationInfo,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>
