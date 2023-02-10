<template>
  <div class="home-main">
    <div ref="d1Ref" class="div d1" :class="[transformClass.d1Class]" @mouseenter="(e) => handleMouseenter(e, 1)">
      <div v-if="current == 1" class="show">
        <div class="header">
          <img src="@/assets/img/cat4.png" alt="" />
          <p>
            章鱼猫(Octocat)是GitHub的吉祥物,形象是一个下半身为章鱼的爪子,上本身为猫头的卡通形象。使用程序员社交网站GitHub的各位同学对它一定不会陌生。组合式函数相对于无渲染组件的主要优势是：组合式函数不会产生额外的组件实例开销。
          </p>
        </div>
        <div class="content">
          <div>
            抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API
            会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数。
          </div>
          <div>
            当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref +
            解构模式的理由：让属性的来源在消费组件时一目了然。
          </div>
          <div>
            多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。多个 mixin
            需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。
          </div>
        </div>
      </div>
      <div v-else class="hide">
        <div class="header">
          <img src="@/assets/img/cat4.png" alt="" />
          <p>Octocat</p>
        </div>
        <div>
          组合式函数在<code>script setup</code>或<code>setup()</code>钩子中，应始终被同步地调用。在某些场景下，你也可以在像 onMounted()
          这样的生命周期钩子中使用他们。
        </div>
      </div>
    </div>
    <div ref="d2Ref" class="div d2" :class="[transformClass.d2Class]" @mouseenter="(e) => handleMouseenter(e, 2)">
      <div v-if="current == 2" class="show">
        <div class="header">
          <img src="@/assets/img/cat5.png" alt="" />
          <p>
            章鱼猫(Octocat)是GitHub的吉祥物,形象是一个下半身为章鱼的爪子,上本身为猫头的卡通形象。使用程序员社交网站GitHub的各位同学对它一定不会陌生。组合式函数相对于无渲染组件的主要优势是：组合式函数不会产生额外的组件实例开销。
          </p>
        </div>
        <div class="content">
          <div>
            抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API
            会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数。
          </div>
          <div>
            当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref +
            解构模式的理由：让属性的来源在消费组件时一目了然。
          </div>
          <div>
            多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。多个 mixin
            需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。
          </div>
        </div>
      </div>
      <div v-else class="hide">
        <div class="header">
          <img src="@/assets/img/cat5.png" alt="" />
          <p>Octocat</p>
        </div>
        <div>
          组合式函数在<code>script setup</code>或<code>setup()</code>钩子中，应始终被同步地调用。在某些场景下，你也可以在像 onMounted()
          这样的生命周期钩子中使用他们。
        </div>
      </div>
    </div>
    <div ref="d3Ref" class="div d3" :class="[transformClass.d3Class]" @mouseenter="(e) => handleMouseenter(e, 3)">
      <div v-if="current == 3" class="show">
        <div class="header">
          <img src="@/assets/img/cat8.png" alt="" />
          <p>
            章鱼猫(Octocat)是GitHub的吉祥物,形象是一个下半身为章鱼的爪子,上本身为猫头的卡通形象。使用程序员社交网站GitHub的各位同学对它一定不会陌生。组合式函数相对于无渲染组件的主要优势是：组合式函数不会产生额外的组件实例开销。
          </p>
        </div>
        <div class="content">
          <div>
            抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API
            会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数。
          </div>
          <div>
            当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref +
            解构模式的理由：让属性的来源在消费组件时一目了然。
          </div>
          <div>
            多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。多个 mixin
            需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。
          </div>
        </div>
      </div>
      <div v-else class="hide">
        <div class="header">
          <img src="@/assets/img/cat8.png" alt="" />
          <p>Octocat</p>
        </div>
        <div>
          组合式函数在<code>script setup</code>或<code>setup()</code>钩子中，应始终被同步地调用。在某些场景下，你也可以在像 onMounted()
          这样的生命周期钩子中使用他们。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

const current = ref(1)

const transformClass = reactive({
  d1Class: '',
  d2Class: '',
  d3Class: ''
})

const handleMouseenter = (e, index) => {
  const clientHeight = document.body.clientHeight
  const rect = e.target.getBoundingClientRect()
  if (index == current.value) return
  const front = index + 1 > 3 ? 1 : index + 1
  const back = index - 1 < 1 ? 3 : index - 1
  if (!rect.left && rect.height != clientHeight) {
    transformClass[`d${index}Class`] = 'transd1'
    transformClass[`d${front}Class`] = 'transd2'
    transformClass[`d${back}Class`] = 'transd3'
  }
  if ((rect.x != 0 && rect.y == 0 && rect.height != clientHeight) || (rect.x != 0 && rect.y != 0 && rect.height != clientHeight)) {
    transformClass[`d${index}Class`] = 'transd4'
    transformClass[`d${front}Class`] = 'transd5'
    transformClass[`d${back}Class`] = 'transd6'
  }
  current.value = index
}

const initClass = () => {
  current.value = 1
  transformClass.d1Class = 'transd1'
  transformClass.d2Class = 'transd2'
  transformClass.d3Class = 'transd3'
}

onMounted(() => {
  initClass()
})
</script>
<style lang="scss">
.home-main {
  .div {
    position: fixed;
    transition: all 0.3s ease-out;
    .hide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      padding: 20px;
      overflow: hidden auto;
      > .header {
        margin-bottom: 30px;
        img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          border-radius: 50%;
        }
        p {
          padding: 8px 0;
          width: 200px;
          background-color: #fff;
          border-radius: 10px;
        }
      }
    }
    .show {
      height: 100%;
      overflow: hidden auto;
      > .header {
        display: flex;
        align-items: center;
        padding: 20px 10px 20px 30px;
        background-color: #fff;
        margin: 50px 30px;
        border-radius: 70px;
        img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          border-radius: 50%;
          margin-right: 30px;
        }
        p {
          color: #797979;
        }
      }
      > .content {
        margin: 0 30px;
        > div {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          line-height: 26px;
          font-size: 18px;
          color: #626066;
          text-align: left;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .d1 {
    background-color: #e7e1f0;
  }
  .d2 {
    background-color: #eef8da;
  }
  .d3 {
    background-color: lightcyan;
  }
}
.transd1 {
  left: 0;
  top: 0;
  bottom: 0;
  right: 30%;
}
.transd2 {
  left: 70%;
  top: 0;
  bottom: 50%;
  right: 0;
}
.transd3 {
  left: 70%;
  top: 50%;
  bottom: 0;
  right: 0;
}
.transd4 {
  left: 30%;
  top: 0;
  bottom: 0;
  right: 0;
}
.transd5 {
  left: 0;
  top: 50%;
  bottom: 0;
  right: 70%;
}
.transd6 {
  left: 0;
  top: 0;
  bottom: 50%;
  right: 70%;
}
</style>
