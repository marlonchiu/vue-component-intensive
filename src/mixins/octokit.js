import {
  getTestData
} from '_ser/moduleA'

export default {
  data: () => ({
    octokitInfo: null
  }),
  mounted() {
    this.getOctokitInfo()
  },
  methods: {
    async getOctokitInfo() {
      const response = await getTestData();
      console.log(response);
      this.octokitInfo = response;
    }
  }
}
