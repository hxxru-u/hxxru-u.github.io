---
title: "Gallery"
permalink: /gallery/
layout: single
author_profile: false
classes: wide
---

[what making things means to me](/meaning-making/)

<div class="gallery">
  <figure class="gallery-item">
    <img src="/assets/images/eye.png" alt="Eye">
  </figure>
  
  <figure class="gallery-item">
    <img src="/assets/images/imply.png" alt="Imply">
  </figure>
</div>

<style>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
}

.gallery-item {
  margin: 0;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.02);
}
</style>
