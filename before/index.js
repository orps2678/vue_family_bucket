const Playlist = {
    data() {
        return {
            playlist:["What about now", "一萬個不可能", "Me llames"],
            searchTerm:""
        }
    },
    computed:{
        filteredPlaylist(){
            if(this.searchTerm){
                return this.playlist.filter((song) =>
                 song.toLowerCase().includes(this.searchTerm.toLowerCase())
              );
            }else{
                return this.playlist;
            }
        }
    }
};

Vue.createApp(Playlist).mount("#app");