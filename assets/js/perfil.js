fetch('https://api.github.com/users/yarabaccule')
    .then(response => response.json())
    .then(data => {
        document.getElementById("profile.photo").src = data.avatar_url;
        document.getElementById("profile.name").innerHTML = data.name;
        document.getElementById("profile.job").innerHTML = data.company;
        document.getElementById("profile.location").innerHTML = data.location;
        let linkedin = document.createElement("a");
        linkedin.href = data.blog;
        linkedin.innerHTML = "LinkedIn";
        linkedin.target = "_blank";
        document.getElementById("profile.linkedin").appendChild(linkedin);
    })
    .catch(error => console.error('Error:', error))