import { instance } from './index';



export function search(query: string, type: string) {
  return instance.get('/search', {
    params: {
      q: query,
      type,
    }
  })
  .then(response => {
    return response.data;
  })


}



export function findAlbum(idAlbum: string) {
  return instance.get(`/albums/${idAlbum}`)
  .then(response => {
    return response.data;
  })


}



export function findArtist(idArtist: string) {
  return instance.get(`/artists/${idArtist}`)
  .then(response => {
    return response.data;
  })


}

export function findArtistTopTracks(idArtist: string) {
  return instance.get(`/artists/${idArtist}/top-tracks?market=Fr`)
  .then(response => {
    return response.data;
  })


}



export function profil() {
  return instance.get('/me')
  .then(response => {
    return response.data;
  })


}