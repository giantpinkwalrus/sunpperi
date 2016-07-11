<template>
  <div class="form-group">
    <label class="form-label" @dblclick="startEdit" v-if="!editing">{{ value }}</label>
    <input class="form-input" v-get-focus @keyup.esc="cancelEdit()" @blur="completeEdit()" @keyup.enter="completeEdit()" type="text" v-model="editModel" v-if="editing" />
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data: function () {
      return {
        editing: false,
        editModel: this.value
      }
    },
    props: {
      value: null
    },
    methods: {
      startEdit: function () {
        this.editing = true
      },
      cancelEdit: function () {
        this.editing = false
        this.editModel = this.value
      },
      completeEdit: function () {
        this.editing = false
        this.value = this.editModel
      }
    },
    directives: {
      'get-focus': function () {
        var el = this.el
        Vue.nextTick(function () {
          el.focus()
        })
      }
    }
  }
</script>