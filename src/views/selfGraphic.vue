<template>
  <div class="cutting-graphic" :style="{ width: graphicWrapperWidth + 'px' }">
    <div class="lines-tag">
      <div>
        <p>纵向切割线：</p>
        <div class="tags">
          <el-tag v-for="(tag, index) in dynamicTags" :key="index" closable :disable-transitions="false" @close="handleClose(tag, 1)"> {{ tag }}mm </el-tag>
          <el-input
            v-if="inputVisible"
            ref="inputRef"
            v-model="inputValue"
            size="small"
            type="number"
            @keyup.enter="handleInputConfirm(1)"
            @blur="handleInputConfirm(1)"
            @focus="handleInputFocus(1)"
            @input="(e) => handleInputChange(e, 1)"
          />
          <el-button v-else class="button-new-tag" size="small" @click="showInput(1)"> + 添加 </el-button>
        </div>
      </div>
      <div>
        <p>横向切割线：</p>
        <el-tag v-for="(tag, index) in dynamicTags2" :key="index" closable :disable-transitions="false" @close="handleClose(tag, 2)"> {{ tag }}mm </el-tag>
        <el-input
          v-if="inputVisible2"
          ref="inputRef2"
          v-model="inputValue2"
          size="small"
          type="number"
          @keyup.enter="handleInputConfirm(2)"
          @blur="handleInputConfirm(2)"
          @focus="handleInputFocus(2)"
          @input="(e) => handleInputChange(e, 2)"
        />
        <el-button v-else class="button-new-tag" size="small" @click="showInput(2)"> + 添加 </el-button>
      </div>
    </div>
    <div class="graphic-wrapper" :style="{ height: graphicWrapperHeight + 'px' }">
      <div>
        <!-- <div class="graphic" :style="{ width: graphicStyle.width + 'px', height: graphicStyle.height + 'px' }"> -->
        <div
          class="graphic"
          :style="{
            width: width + 'px',
            height: height + 'px',
            transform: `scale(${graphicScale})`
          }"
          :graphicWidth="width + 'mm'"
          :graphicHeight="height + 'mm'"
        >
          <div v-for="item in xAxis" :key="item" class="line-y" :style="{ left: item + 'px' }"></div>
          <div v-for="(item, index) in yAxis" :key="index" class="line-x" :style="{ top: item + 'px' }"></div>
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
          <div v-if="xsubline.visible" class="xsubline" :style="{ left: xsubline.left + 'px' }"></div>
          <div v-if="ysubline.visible" class="ysubline" :style="{ top: ysubline.top + 'px' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, watch, inject, computed } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 800
  },
  height: {
    type: Number,
    default: 300
  }
  // thick: {
  //   type: Number,
  //   default: 20
  // }
})

const emit = defineEmits(['change'])

const $message = inject('$message')

const graphicWrapperWidth = ref(600)
const graphicWrapperHeight = ref(600)

const graphicStyle = reactive({
  width: '',
  height: ''
})
const graphicScale = ref(1)
const oppositeScale = computed(() => 1 / graphicScale.value)

const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const inputRef = ref(null)

const inputValue2 = ref('')
const dynamicTags2 = ref([])
const inputVisible2 = ref(false)
const inputRef2 = ref(null)

const xsubline = reactive({
  visible: false,
  left: 50
})

const ysubline = reactive({
  visible: false,
  top: 50
})

const handleClose = (tag, type) => {
  if (type == 1) {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
    xAxis.value.splice(xAxis.value.indexOf(tag), 1)
  } else {
    dynamicTags2.value.splice(dynamicTags2.value.indexOf(tag), 1)
    yAxis.value.splice(yAxis.value.indexOf(tag), 1)
  }
  calcGraphic()
}

const showInput = (type) => {
  if (type == 1) {
    inputVisible.value = true
    nextTick(() => {
      inputRef.value.focus()
    })
  } else {
    inputVisible2.value = true
    nextTick(() => {
      inputRef2.value.focus()
    })
  }
}

const handleInputConfirm = (type) => {
  if (type == 1) {
    if (dynamicTags.value.includes(inputValue.value)) {
      $message.warning('该位置已存在切割线')
    }
    if (inputValue.value && inputValue.value > 0 && inputValue.value < props.width && !dynamicTags.value.includes(inputValue.value)) {
      dynamicTags.value.push(inputValue.value)
      lineClass(dynamicTags.value[dynamicTags.value.length - 1], type)
    }
    inputVisible.value = false
    inputValue.value = ''

    xsubline.visible = false
    // xsubline.left = 50
  } else {
    if (dynamicTags2.value.includes(inputValue2.value)) {
      $message.warning('该位置已存在切割线')
    }
    if (inputValue2.value && inputValue2.value > 0 && inputValue2.value < props.height && !dynamicTags2.value.includes(inputValue2.value)) {
      dynamicTags2.value.push(inputValue2.value)
      lineClass(dynamicTags2.value[dynamicTags2.value.length - 1], type)
    }
    inputVisible2.value = false
    inputValue2.value = ''

    ysubline.visible = false
    // ysubline.top = 50
  }
  calcGraphic()
}

const handleInputFocus = (type) => {
  if (type == 1) {
    inputValue.value = Math.floor(props.width / 2)
    xsubline.left = Math.floor(props.width / 2)
    xsubline.visible = true
  } else {
    inputValue2.value = Math.floor(props.height / 2)
    ysubline.top = Math.floor(props.height / 2)
    ysubline.visible = true
  }
}

const handleInputChange = (val, type) => {
  if (type == 1) {
    xsubline.left = val
    xsubline.visible = val > 0 && val < props.width
  } else {
    ysubline.top = val
    ysubline.visible = val > 0 && val < props.height
  }
}

const xAxis = ref([])
const yAxis = ref([])
const lineClass = (axis, type) => {
  if (type == 1) {
    if (xAxis.value.includes(axis)) {
      return
    }
    xAxis.value.push(axis)
  } else {
    if (yAxis.value.includes(axis)) {
      return
    }
    yAxis.value.push(axis)
  }
}

const graphics = ref([])
const calcGraphic = () => {
  graphics.value = []
  const coordiantex = [0, ...xAxis.value, props.width].sort((a, b) => a - b)
  const coordiantey = [0, ...yAxis.value, props.height].sort((a, b) => a - b)
  if (coordiantex.length == 2 && coordiantey.length == 2) {
    return emit('change', graphics.value, xAxis.value, yAxis.value)
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
  emit('change', graphics.value, xAxis.value, yAxis.value)
}

const selectGraphic = reactive({
  coordinate1: [],
  coordinate2: [],
  coordinate3: [],
  coordinate4: [],
  with: '',
  height: ''
})
const mouseenter = (val) => {
  Object.assign(selectGraphic, val)
}
const mouseleave = () => {
  selectGraphic.coordinate1 = []
  selectGraphic.coordinate2 = []
  selectGraphic.coordinate3 = []
  selectGraphic.coordinate4 = []
  selectGraphic.with = ''
  selectGraphic.height = ''
}

watch(
  () => [props.width, props.height],
  ([width, height]) => {
    if (width && height) {
      const maxWidth = graphicWrapperWidth.value - 100
      const maxHeight = graphicWrapperHeight.value - 100
      graphicStyle.width = width
      graphicStyle.height = height
      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          graphicStyle.width = maxWidth
          graphicStyle.height = Math.round(maxWidth * (height / width))
          graphicScale.value = maxWidth / width
        } else {
          graphicStyle.height = maxHeight
          graphicStyle.width = Math.round(maxHeight * (width / height))
          graphicScale.value = maxHeight / height
        }
      }
    }
  },
  {
    immediate: true
  }
)

defineExpose({
  mouseenter,
  mouseleave
})
</script>
<style lang="scss">
.cutting-graphic {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  .lines-tag {
    padding: 10px 15px;
    border-bottom: 1px solid #ebebeb;
    .el-tag {
      margin: 0 5px 5px 0;
    }
    .el-input {
      width: 100px;
      margin-bottom: 5px;
    }
    > div {
      display: flex;
      align-items: baseline;
      > p {
        white-space: nowrap;
      }
      .tags {
        display: flex;
        flex-flow: wrap;
        .el-button--small {
          margin-bottom: 5px;
        }
      }
    }
  }
  .graphic-wrapper {
    width: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    .graphic {
      border: calc(v-bind(oppositeScale) * 4px) solid #070707;
      background-color: #fff;
      box-sizing: content-box;
      position: relative;
      .line-y {
        width: 1px;
        height: 100%;
        background-color: #de0000;
        position: absolute;
        top: 0;
        bottom: 0;
      }
      .line-x {
        width: 100%;
        height: 1px;
        background-color: #de0000;
        position: absolute;
        left: 0;
        right: 0;
      }
      .graphic-select {
        position: absolute;
        background-color: #c4d6fc;
        border: 2px solid #5978bd;
      }
      .xsubline {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(to bottom, #333, #333 5px, transparent 5px, transparent);
        background-size: 100% 10px;
      }
      .ysubline {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, #333, #333 5px, transparent 5px, transparent);
        background-size: 10px 100%;
      }
      &::before {
        content: attr(graphicHeight);
        position: absolute;
        top: 50%;
        left: calc(v-bind(oppositeScale) * 20px * -1);
        font-size: 14px;
        transform: scale(v-bind(oppositeScale)) translateY(-50%) rotate(180deg);
        white-space: nowrap;
        writing-mode: vertical-lr;
      }
      &::after {
        content: attr(graphicWidth);
        position: absolute;
        left: 50%;
        top: calc(v-bind(oppositeScale) * 20px * -1);
        font-size: 14px;
        transform: scale(v-bind(oppositeScale)) translateX(-50%);
      }
    }
  }
}
</style>
