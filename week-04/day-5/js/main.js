const url = 'http://52.29.105.35:3000';

function ajax(method, endpoint, data, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url + endpoint, true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(data));
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      callback(JSON.parse(httpRequest.responseText));
    }
  };
}

function createElement(element) {
  const res = document.createElement(element.type);
  if ('classes' in element && element.classes.length !== 0) {
    res.classList.add(element.classes);
  }
  if ('attributes' in element) {
    Object.keys(element.attributes).forEach((attr) => {
      res.setAttribute(attr, element.attributes[attr]);
    });
  }
  if ('inner' in element) {
    res.innerHTML = element.inner;
  }

  if ('children' in element) {
    element.children.forEach((child) => {
      res.appendChild(child);
    });
  }
  return res;
}

function createPost(post, index) {
  const article = createElement({
    type: 'div',
    attributes: {
      class: 'maincontent',
      id: `post-${post.id}`,
    },
    children: [
      createElement({
        type: 'div',
        classes: 'number',
        inner: index + 1,
      }),
      createElement({
        type: 'div',
        classes: 'maincontent-left',
        children: [
          createElement({
            type: 'button',
            attributes: {
              id: 'upvote',
              class: 'upvote fas fa-arrow-up',
              'data-id': post.id,
            },
          }),
          createElement({
            type: 'p',
            inner: post.score,
          }),
          createElement({
            type: 'button',
            attributes: {
              id: 'downvote',
              class: 'downvote fas fa-arrow-down',
              'data-id': post.id,
            },
          }),
        ],
      }),
      createElement({
        type: 'div',
        classes: 'maincontent-right',
        children: [
          createElement({
            type: 'h2',
            children: [
              createElement({
                type: 'a',
                attributes: { href: post.url },
                inner: post.title,
              }),
            ],
          }),
          createElement({
            type: 'p',
            inner: `submitted at ${post.timestamp}`,
          }),
        ],
      }),
    ],
  });
  return article;
}

function handleVote(event) {
  const isUpvote = event.target.getAttribute('id') === 'upvote';
  ajax('PUT',
    `/posts/${event.target.getAttribute('data-id')}/${isUpvote ? 'upvote' : 'downvote'}`,
    {},
    (data) => {
      const oldChild = document.querySelector(`#post-${data[0].id}`);
      const number = oldChild.querySelector('.number').innerText;
      document.querySelector('main').replaceChild(
        createPost(data[0], parseInt(number, 10) - 1), oldChild,
      );
    });
}

function appendPost(article) {
  document.querySelector('main').appendChild(article);
  article.querySelectorAll('button').forEach((e) => {
    e.onclick = handleVote;
  });
}

document.querySelector('button').onclick = () => {
  window.location.href = './post.html';
};

document.onload = ajax('GET', '/posts', null, (data) => {
  data.posts.forEach((d, index) => {
    appendPost(createPost(d, index));
  });
});
