<template>
  <NuxtLink
    :to="{ name: path, params: { slug } }"
    v-if="title && path"
    :disabled="disable"
    class="flex items-center relative z-[1]"
    :class="className ? className : 'w-max'"
  >
    <span class="flex space-x-[10px] w-full" :class="buttonClass">
      <div class="title">{{ title }}</div>
      <div v-if="variant === 'text'" class="border-gradient"></div>

      <div v-if="icon"><JIcon :name="icon" /></div>
    </span>
  </NuxtLink>
  <a
    :href="href"
    v-else-if="title && href"
    :disabled="disable"
    target="_blank"
    class="flex items-center relative z-[1]"
    :class="className ? className : 'w-max'"
  >
    <span class="flex space-x-[10px] w-full" :class="buttonClass">
      <div class="title">{{ title }}</div>
      <div v-if="variant === 'text'" class="border-gradient"></div>
      <div v-if="icon"><JIcon :name="icon" /></div>
    </span>
  </a>
  <button
    @click="$emit('action')"
    v-else-if="title"
    :disabled="disable"
    :class="className ? className : 'w-max'"
  >
    <span class="flex space-x-[10px] w-full" :class="buttonClass">
      <i class="gg-spinner" v-if="loading"></i>
      <div class="title">
        {{ title }}
        <div v-if="variant === 'text'" class="border-gradient"></div>
      </div>
      <div v-if="icon"><JIcon :name="icon" /></div>
    </span>
  </button>

  <button
    v-else
    :class="[buttonClass, className ? className : 'w-max']"
    :disabled="disable"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
    title: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "primary",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClass() {
      const variant = {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary",
        text: "btn btn-text",
        "primary-disable": "btn btn-primary-disable",
      }[this.variant];
      const size = {
        md: "btn-md  md:px-[18px]	px-[13px] h-[38px] md:h-[49px]",
        sm: "btn-sm  md:px-[17px]	px-[12px] h-[33px] md:h-[38px]",
        text: "text-[10px]",
      }[this.size];
      return ` ${variant} ${size} `;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
