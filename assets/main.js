const toggle = document.querySelector('[data-menu-toggle]');
const links = document.querySelector('[data-nav-links]');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.video-embed').forEach((wrapper) => {
  const thumb = wrapper.querySelector('.video-thumb');
  if (!thumb) return;

  thumb.addEventListener('click', () => {
    const videoId = wrapper.dataset.videoId;
    const start = wrapper.dataset.start;
    const src = `https://www.youtube.com/embed/${videoId}?autoplay=1${start ? `&start=${start}` : ''}`;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    wrapper.replaceChild(iframe, thumb);
  });
});
