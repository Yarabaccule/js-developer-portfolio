fetch('https://api.github.com/users/yarabaccule/repos?per_page=10')
  .then(response => response.json())
  .then(data => {

    const portfolioList = document.getElementById('profilePortfolio');

    data.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      portfolioList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
