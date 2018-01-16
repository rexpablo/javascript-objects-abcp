var playlist = new Object ({artist: 'song'});


function updatePlaylist (playlist,artistName,songTitle){
  Object.assign({},playlist,{artistName:songTitle})
  return playlist
}