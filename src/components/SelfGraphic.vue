<template>
  <div>
    <span>纵向切割线: </span>
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="mx-1"
      closable
      :disable-transitions="false"
      @close="handleClose(tag, 1)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="ml-1 w-20"
      size="small"
      @keyup.enter="handleInputConfirm(1)"
      @blur="handleInputConfirm(1)"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput"
    >
      + 生成纵向切割线
    </el-button>
  </div>
  <div>
    <span>横向切割线: </span>
    <el-tag
      v-for="tag in dynamicTags2"
      :key="tag"
      class="mx-1"
      closable
      :disable-transitions="false"
      @close="handleClose(tag, 2)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible2"
      ref="InputRef2"
      v-model="inputValue2"
      class="ml-1 w-20"
      size="small"
      @keyup.enter="handleInputConfirm(2)"
      @blur="handleInputConfirm(2)"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput2"
    >
      + 生成横向切割线
    </el-button>
  </div>

  <div class="graphic">
    <div
      v-for="(item, index) of yAxis"
      :key="index"
      class="line-y"
      :style="{ left: item + 'px' }"
    ></div>
    <div
      v-for="(item, index) of xAxis"
      :key="index"
      class="line-x"
      :style="{ top: item + 'px' }"
    ></div>
    <div
      v-if="selectGraphic.with"
      class="graphic-select"
      :style="{
        top: selectGraphic.coordinate1[1] + 'px',
        left: selectGraphic.coordinate1[0] + 'px',
        width: selectGraphic.with + 'px',
        height: selectGraphic.height + 'px'
      }"
    ></div>
  </div>
  <div>
    <el-tag
      v-for="(item, index) of graphics"
      :key="index"
      class="ml-2"
      type="success"
      @mouseenter="handleMouseenter(item)"
      @mouseleave="handleMouseleave"
      >{{ `${index + 1}: ${THICK}*${item.with}*${item.height}` }}</el-tag
    >
  </div>
</template>

<script setup>
import { ref, nextTick, reactive } from 'vue'

const WIDTH = 500
const HEIGHT = 500
const THICK = 20

const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref(null)

const inputValue2 = ref('')
const dynamicTags2 = ref([])
const inputVisible2 = ref(false)
const InputRef2 = ref(null)

const handleClose = (tag, type) => {
  if (type == 1) {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
    yAxis.value.splice(yAxis.value.indexOf(tag), 1)
  } else {
    dynamicTags2.value.splice(dynamicTags2.value.indexOf(tag), 1)
    xAxis.value.splice(xAxis.value.indexOf(tag), 1)
  }
  calcGraphic()
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value.input.focus()
  })
}

const handleInputConfirm = (type) => {
  if (type == 1) {
    if (inputValue.value) {
      dynamicTags.value.push(inputValue.value)

      lineClass(dynamicTags.value[dynamicTags.value.length - 1], type)
    }
    inputVisible.value = false
    inputValue.value = ''
  } else {
    if (inputValue2.value) {
      dynamicTags2.value.push(inputValue2.value)

      lineClass(dynamicTags2.value[dynamicTags2.value.length - 1], type)
    }
    inputVisible2.value = false
    inputValue2.value = ''
  }
  calcGraphic()
}

const showInput2 = () => {
  inputVisible2.value = true
  nextTick(() => {
    InputRef2.value.input.focus()
  })
}

const yAxis = ref([])
const xAxis = ref([])
const lineClass = (axis, type) => {
  if (type == 1) {
    if (yAxis.value.includes(axis)) {
      return
    }
    yAxis.value.push(axis)
  } else {
    if (xAxis.value.includes(axis)) {
      return
    }
    xAxis.value.push(axis)
  }
}

const graphics = ref([])
const calcGraphic = () => {
  graphics.value = []
  const coordiantex = [0, ...yAxis.value, WIDTH].sort((a, b) => a - b)
  const coordiantey = [0, ...xAxis.value, HEIGHT].sort((a, b) => a - b)
  if (coordiantex.length == 2 && coordiantey.length == 2) {
    return
  }
  coordiantey.forEach((item, index) => {
    coordiantex.forEach((item2, index2) => {
      if (index < coordiantey.length - 1 && index2 < coordiantex.length - 1) {
        const graphic = {
          coordinate1: [item2, item],
          coordinate2: [coordiantex[index2 + 1], item],
          coordinate3: [coordiantex[index2 + 1], coordiantey[index + 1]],
          coordinate4: [item2, coordiantey[index + 1]],
          with: coordiantex[index2 + 1] - item2,
          height: coordiantey[index + 1] - item
        }
        graphics.value.push(graphic)
      }
    })
  })
  console.log(graphics.value)
}

const selectGraphic = reactive({
  coordinate1: [],
  coordinate2: [],
  coordinate3: [],
  coordinate4: [],
  with: '',
  height: ''
})
const handleMouseenter = (val) => {
  Object.assign(selectGraphic, val)
}
const handleMouseleave = () => {
  selectGraphic.coordinate1 = []
  selectGraphic.coordinate2 = []
  selectGraphic.coordinate3 = []
  selectGraphic.coordinate4 = []
  selectGraphic.with = ''
  selectGraphic.height = ''
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 100px;
}
.graphic {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  position: relative;
  .line-y {
    width: 1px;
    height: 100%;
    background-color: orange;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .line-x {
    width: 100%;
    height: 1px;
    background-color: cyan;
    position: absolute;
    left: 0;
    right: 0;
  }
  .graphic-select {
    // width: 100px;
    // height: 100px;
    position: absolute;
    // top: 0;
    // left: 0;
    background-color: rgba(255, 119, 0, 0.3);
  }
}
</style>
