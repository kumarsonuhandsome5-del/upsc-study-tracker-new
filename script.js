const topics = document.querySelectorAll('.topic');
const progress = document.getElementById('progress');

function updateProgress() {
  let done = 0;
  topics.forEach(t => {
    if (t.checked) done++;
  });

  progress.innerText = `Completed: ${done}/${topics.length}`;

  localStorage.setItem(
    'upscProgress',
    JSON.stringify([...topics].map(t => t.checked))
  );
}

topics.forEach(t => {
  t.addEventListener('change', updateProgress);
});

const saved = JSON.parse(localStorage.getItem('upscProgress'));
if (saved) {
  topics.forEach((t, i) => t.checked = saved[i]);
  updateProgress();
}
