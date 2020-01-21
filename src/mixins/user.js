export default {
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    getUserInfo() {
      // 这里通过 ajax 获取用户信息后，赋值给 this.userInfo，以下为伪代码
      $.ajax('/user/info', (data) => {
        this.userInfo = data;
      });
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
