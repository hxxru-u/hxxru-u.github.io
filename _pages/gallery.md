---
title: "Gallery"
permalink: /gallery/
layout: background_game
author_profile: false
classes: wide
---

[what making things means to me](/blog/meaning-making/)

<div class="gallery">
  <figure class="gallery-item">
    <img src="/assets/images/eye.png" alt="Eye">
    <figcaption>Eye</figcaption>
  </figure>
  
  <figure class="gallery-item">
    <img src="/assets/images/imply.png" alt="Imply">
    <figcaption>Imply</figcaption>
  </figure>
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.gallery-item {
  margin: 0;
  text-align: center;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.02);
}

.gallery-item figcaption {
  margin-top: 1rem;
  color: #d39ca4;
  font-family: "EB Garamond", serif;
  font-size: 1.2rem;
}
</style>
