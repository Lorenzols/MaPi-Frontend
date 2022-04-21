<template>
  <div class="c-checkbox">
    <label class="content-input">
      <input type="checkbox" name="Vehiculo" id="autopista" value="autopista">
      <i></i>
    </label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .content-input input, .content-select select
    appearance: none
    visibility: hidden

  .content-input
    position: relative
    padding: 5px 0 5px 60px
    display: block

  .content-input input + i 
    background: #1F0F04
    border: 2px solid #C4C4C4
    position: absolute
    left: 0
    top: 0

  .content-input input[type=checkbox] + i
    width: 52px
    height: 29px
    border-radius: 15px
    box-sizing: border-box

  .content-input input[type="checkbox"] + i:before
    content: ''
    width: 23px
    height: 23px
    background: #C4C4C4
    border-radius: 50%
    position: absolute
    z-index: 1
    left: 1px
    top: 1px
    box-shadow: 3px 0 3px 0 rgba(0,0,0,0.2)
    
  .content-input input[type="checkbox"]:checked + i:before
    left: 24px
  
  .content-input input[type="checkbox"]:checked + i
    background: #844213
</style>