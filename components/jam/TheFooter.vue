<template></template>
<script>
import { validateForm } from "@/lib/validator";
const emptyForm = {
  "Họ và tên": null,
  "Số điện thoại": null,
  Email: null,
  "Tin nhắn": null,
};
export default {
  data() {
    return {
      form: { ...emptyForm },
      errors: [],
      rules: {
        "Họ và tên": "required",
        "Số điện thoại": "required|phone",
        Email: "required|email",
        "Tin nhắn": "",
      },
      isSubmitSuccess: false,
      isLoading: false,
      processing: false,
      submitButton: true,
      textSuccess: false,
    };
  },
  computed: {
    isShowCircle() {
      const { name } = this.$route;
      if (name.includes("faq")) {
        return true;
      }

      return false;
    },
  },
  methods: {
    setIsSubmit(val) {
      this.isSubmitSuccess = val;
    },
    async submit(e) {
      e.preventDefault();
      this.errors = validateForm(this.form, this.rules);
      if (Object.keys(this.errors).length > 0 || this.isLoading) {
        return false;
      }

      this.isLoading = true;

      let formData = {};
      formData["data"] = this.form;
      formData["type"] = "SUPPORT_FORM";
      const res = await this.$api.form.contact(formData);
      if (res.success) {
        this.form = { ...emptyForm };
        this.isSubmitSuccess = true;
        this.textSuccess = true;
        e.preventDefault();
      }

      this.isLoading = false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
