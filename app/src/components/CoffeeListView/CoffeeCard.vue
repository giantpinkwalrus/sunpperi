<template>
  <div class="column col-6">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title"><inline-edit :value.sync="coffee.name"></inline-edit></h4>
        <h6 class="card-meta"><inline-edit :value.sync="coffee.variety"></inline-edit></h6>
      </div>
      <div class="card-body">
      <p><inline-edit :value.sync="coffee.roastDate"></inline-edit></p>
      <rater :value.sync="coffee.rating"></rater>
      <p><inline-edit :value.sync="coffee.notes"> </inline-edit> </p>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineEdit from './InlineEdit'
  import Rater from './Rater'

  export default {
    components: {
      InlineEdit,
      Rater
    },
    props: ['coffee']
  }
</script>
