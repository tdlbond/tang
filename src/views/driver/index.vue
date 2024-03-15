<template>
  <div class="driver">
    <div class="top">
      <span>title</span>
      <span
        id="step1"
        @click="guid"
        >登录</span
      >
    </div>
    <div class="content">
      <section class="content-left s1">
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p id="step2">的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
        <p>的哈伦裤和灯笼裤沈浪看见我的</p>
      </section>
      <div class="content-right">
        <section class="s2">
          <div>
            罗克佳华昆仑好客交换空间还款计划健康罗克佳华昆仑好客交换空间还款计划健康
          </div>
          <div>
            罗克佳华昆仑好客交换空间还款计划健康罗克佳华昆仑好客交换空间还款计划健康
          </div>
          <div>
            罗克佳华昆仑好客交换空间还款计划健康罗克佳华昆仑好客交换空间还款计划健康
          </div>
          <div id="step3">
            罗克佳华昆仑好客交换空间还款计划健康罗克佳华昆仑好客交换空间还款计划健康
          </div>
        </section>
        <section class="s3">
          <el-button
            id="step4"
            type="primary"
            >操作</el-button
          >
        </section>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script lang="ts" setup>
import Driver from 'driver.js'

const driver = new Driver({
  allowClose: false,
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  closeBtnText: '关闭',
  doneBtnText: '完成'
})

const guid = (): void => {
  driver.defineSteps([
    {
      element: '#step1',
      popover: {
        title: '引导',
        description: 'step1',
        position: 'left'
      }
    },
    {
      element: '#step2',
      popover: {
        title: '引导',
        description: 'step2',
        position: 'right'
      }
      // onNext: () => {
      //   driver.preventMove()
      //   setTimeout(() => {
      //     driver.moveNext()
      //   }, 2000)
      // }
    },
    {
      element: '#step3',
      popover: {
        title: '引导',
        description: 'step3'
      }
    },
    {
      element: '#step4',
      popover: {
        title: '引导',
        description: 'step4'
      }
    }
  ])
  driver.start()
}
</script>
<style lang="scss">
.driver {
  .top {
    background-color: #ccc;
    padding: 6px 10px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    > span:first-child {
      float: left;
    }

    > span:last-child {
      float: right;
    }
  }

  .content {
    display: flex;
    min-height: 500px;
    background-color: antiquewhite;

    &-left {
      width: 200px;
      background-color: burlywood;
      padding: 6px 10px;
    }

    &-right {
      flex: 1;

      > section {
        padding: 6px 10px;
        height: 50%;
      }

      > section.s2 {
        background-color: cadetblue;
      }
    }
  }
}
</style>
