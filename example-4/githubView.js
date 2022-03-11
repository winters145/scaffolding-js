class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');
    this.repoNameEl = document.querySelector('#repo-name')
    this.repoDescriptionEl = document.querySelector('#repo-description')
    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(
          repoData.full_name, repoData.description, repoData.organization.avatar_url
          )
      });
    });
  }

  display(full_name, description, image) {
    const full_nameEl = document.createElement('div');
    full_nameEl.innerText = full_name;
    this.repoNameEl.append(full_nameEl);
    const descriptionEl = document.createElement('div');
    descriptionEl.innerText = description;
    this.repoDescriptionEl.append(descriptionEl);
    const imageEl = document.createElement('img');
    imageEl.src = image;
    this.repoDescriptionEl.append(imageEl);
  };
}

module.exports = GithubView;