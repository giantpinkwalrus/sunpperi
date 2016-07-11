<style scoped>
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.margin-l {
    margin-left: -5px;
}

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: #ABABAB;
  transition: color .2s ease-out;
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is-selected {
  color: #FFD700;
}

.star-rating__star.is-disabled:hover {
  cursor: default;
}
</style>

<template>
 <div class="star-rating margin-l" v-on:mouseout="star_out()">
    <label
      class="star-rating__star"
      v-for="rating in ratings"
      :class="{'is-selected': ((temp_value >= rating) && value != null), 'is-disabled': disabled}"
      v-on:mouseover="star_over(rating)" v-on:click="set(rating)">
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :name="name" :value="rating" :required="required" :id="id" :disabled="disabled"
        v-model="value">
      ★
    </label>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        temp_value: this.value,
        ratings: [1, 2, 3, 4, 5]
      }
    },
    props: {
      'name': String,
      'value': null,
      'id': String,
      'disabled': Boolean,
      'required': Boolean
    },
    methods: {
      star_over: function (index) {
        if (this.disabled) {
          return
        }
        this.temp_value = index
      },
      star_out: function () {
        if (this.disabled) {
          return
        }
        this.temp_value = this.value
      },
      set: function (value) {
        if (this.disabled) {
          return
        }
        this.temp_value = value
        this.value = value
      }
    }
  }
</script>
