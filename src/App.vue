<template>
  <div id="app">
    <div class="content-wrapper">
      <h1 data-test-logo>paper.ly</h1>
      <p class="days-remaining" data-test-days-remaining>
        <span>{{ daysRemaining }}</span> days remaining
      </p>
      <p class="rolls-remaining" data-test-rolls-remaining>
        {{ rollsRemaining }} rolls remain
      </p>
      <p class="roll-rate" data-test-roll-rate>{{ rollRate }} rolls per day</p>
      <div class="roll-commands">
        <button
          data-test-increment-rolls-remaining-button
          @click="incrementRollsRemaining"
        >
          +
        </button>
        <button
          data-test-decrement-rolls-remaining-button
          @click="decrementRollsRemaining"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["rollsRemaining", "rollRate"]),
    ...mapGetters(["daysRemaining"])
  },
  methods: {
    ...mapActions(["incrementRollsRemaining", "decrementRollsRemaining"])
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  align-items: center;
  background-color: #ddd;
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0.9),
      hsla(0, 0%, 100%, 0.6)
    ),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.6));
  background-size: 25px 25px;
  color: #333;
  display: flex;
  font-family: Arial, sans-serif;
  justify-content: center;
  margin-top: -5%;
  min-height: 100vh;
}
.content-wrapper {
  width: 100%;
}
#app {
  display: flex;
  width: 300px;
  h1 {
    color: #ccc;
    font-size: 16px;
    left: 24px;
    position: absolute;
    top: 16px;
  }
  .days-remaining {
    border-bottom: 1px solid #ccc;
    padding: 24px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    span {
      display: block;
      font-size: 256px;
      font-weight: 700;
    }
  }
  .roll-rate,
  .rolls-remaining {
    color: #666;
  }
  .roll-commands {
    display: flex;
    justify-content: space-around;
    width: 100%;
    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 64px;
      padding: 24px;
    }
  }
}
</style>
