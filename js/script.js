const btn = document.querySelector('.btn');

let like = true,
  likeCount = document.querySelector('.likes').innerHTML;

btn.addEventListener('click', () => {
  likeCount = like ? ++likeCount : --likeCount;
  like = !like;
  document.querySelector('.likes').innerHTML = likeCount;
});
