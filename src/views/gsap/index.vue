<template>
  <!-- <div
    class="w-full flex flex-col items-center"
    @click="play"
  >
    <div class="w-12 h-12 bg-orange-500 rounded-full circle1"></div>
    <div class="w-12 h-12 bg-orange-500 rounded-full circle2"></div>
    <div class="w-12 h-12 bg-orange-500 rounded-full circle3"></div>
  </div> -->
  <div style="overflow-x: hidden">
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>
    <h1 class="header-section">Scroll to see the before/after</h1>

    <section class="comparisonSection">
      <div class="comparisonImage beforeImage">
        <img
          src="https://assets.codepen.io/16327/before.jpg"
          alt="before"
        />
      </div>
      <div class="comparisonImage afterImage">
        <img
          src="https://assets.codepen.io/16327/after.jpg"
          alt="after"
        />
      </div>
    </section>

    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
    <h1 class="header-section">What did you think?</h1>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// let tl: any = null
// const play = (): void => {
//   tl.play()
// }

onMounted(() => {
  // tl = gsap.timeline({ paused: true })
  // tl.to('.circle1', { x: 200, duration: 1 })
  // tl.to('.circle2', { x: 200, duration: 1 })
  // tl.to('.circle3', { x: 200, duration: 1 })

  console.log(gsap.utils.toArray('.comparisonSection'))
  gsap.utils.toArray('.comparisonSection').forEach((section: any) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
        end: () => '+=' + section.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: { ease: 'none' }
    })
    // animate the container one way...
    tl.fromTo(
      section.querySelector('.afterImage'),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
      // ...and the image the opposite way (at the same time)
      .fromTo(
        section.querySelector('.afterImage img'),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      )
  })
})
</script>

<style lang="scss">
.comparisonSection {
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
}

.comparisonImage {
  width: 100%;
  height: 100%;
}

.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0);
}

.afterImage img {
  transform: translate(-100%, 0);
}

.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
