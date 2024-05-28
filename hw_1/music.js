const musicCollection = {
  albums: [
    { title: "Альбом 1", artist: "Исполнитель 1", year: "2020" },
    { title: "Альбом 2", artist: "Исполнитель 2", year: "2018" },
    { title: "Альбом 3", artist: "Исполнитель 3", year: "2021" }
  ],
  [Symbol.iterator]: function() {
    let index = 0;
    return {
      next: () => {
        return index < this.albums.length ?
          { value: this.albums[index++], done: false } :
          { done: true };
      }
    };
  }
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}