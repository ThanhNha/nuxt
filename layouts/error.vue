<template>
  <section class="flex items-center h-screen bg-white">
    <div class="container">
      <div class="grid grid-cols-12 xl:gap-x-[32px] md:gap-x-[22px]">
        <div class="col-span-full">
          <div class="xl:mb-[34px] md:mb-[24px] mb-[18px]">
            <JPicture src="/images/404/404-img.svg" alt="404" class="picture-cover" />
          </div>
          <div class="h2 xl:mb-[16px] md:mb-[12px] mb-[8px] text-center">Không tìm thấy trang!</div>
          <div class="font-medium text-gray-500 xl:mb-[16px] md:mb-[12px] mb-[8px] text-center">
            Địa chỉ trang không tồn tại hoặc đã xảy ra sự cố.
          </div>
          <div class="w-full flex justify-center select-none">
            <JButton label="QUAY LẠI TRANG CHỦ" variant="secondary" size="lg" path="index" />
          </div>
        </div>
      </div>

      <details class="mt-10 text-sm opacity-0">
        <summary class="mb-4">More information</summary>
        <code>
          {{ error }}
        </code>
      </details>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'blank',
}
</script>
