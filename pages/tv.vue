<template>
  <List
    :getItems="getPopularTvList"
    route="serial-id"
  />
</template>

<script>
import * as tvApi from '../backend/tvApi'
import List from '../components/List.vue'

export default {
  name: 'tv',
  components: {
    List
  },
  methods: {
    getPopularTvList(params) {
      return tvApi.getPopularTvList(params);
    }
  }
}
</script>
