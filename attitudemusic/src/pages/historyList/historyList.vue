<template>
  <!--我听过的（播放历史）-->
  <div class="historyList">
    <music-list
      :list="historyList"
      :list-type="1"
      @selectMusic="selectMusic"
    >
    </music-list>
    <a-button v-show='historyList.length' @click='removeHistory'  type="danger" ghost >清空历史</a-button>
  </div>
</template>

<script>
import MusicList from "components/music-list/music-list.vue";
export default {
  name: "HistoryList",
  components: {
    MusicList
  },
  data() {
    return {
      historyList: [] 
    }
  },
  activated() {
    this.historyList = this.$store.state.historyList
  },
  methods: {
    selectMusic(data) {
      const audio = document.getElementById("atmPlayer");
      audio.src = data.url;
      audio.data = data;
      audio.play();
      // this.$refs.atmPlayer.src = data.src
    },
    removeHistory() {
      this.$store.commit("removeHistoryList");
      this.historyList = this.$store.state.historyList
    }
  }
};
</script>

<style lang="less" scoped>
.historyList {
  width: 1500px;
  margin: 0 auto;
  height: 100%;
  .musicList {
    width: 100%;
    height: 90%;
    .list-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      span {
        padding: 5px 20px;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: @text_color_active;
        }
      }
    }
  }
}
</style>
