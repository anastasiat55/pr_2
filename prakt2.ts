// Практична 2 (інтерактивність)
// Посилання на файл: https://github.com/anastasiat55/pr_2/blob/main/prakt2.ts

type Post = { userId: number; id: number; title: string; body: string };

function openModal(modalEl: HTMLElement | null): void {
  if (modalEl) modalEl.classList.add("active");
}
function closeModal(modalEl: HTMLElement | null): void {
  if (modalEl) modalEl.classList.remove("active");
}
function initScroll(headerEl: HTMLElement | null): void {
  if (headerEl) {
    window.addEventListener("scroll", () => {
      const y: number = window.scrollY;
      if (y > 8) headerEl.classList.add("scrolled");
      else headerEl.classList.remove("scrolled");
    });
  }
}
async function loadPosts(postsContainer: HTMLElement | null, limit: number = 5): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const sliced: Post[] = posts.slice(0, limit);
  if (postsContainer) {
    postsContainer.innerHTML = "";
    for (const p of sliced) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${p.title}</h3><p>${p.body}</p>`;
      postsContainer.appendChild(div);
    }
  }
}

