export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Reuben Ellis',
        avatar: '',
        uid: 'reubenellis',
      })
    }, 2000)
  })
}