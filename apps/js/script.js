let theme = document.getElementById('theme')


theme.addEventListener('click', function(){
        document.body.classList.toggle('light-theme')
        // if (document.body.classList.contains('light-theme')){
        //     theme.textContent = "Light Mode";
        // } else {
        //     theme.textContent = "Dark Mode";
        // };
});

console.log('hello world');
let avatar = document.getElementById('avatar');
let mainName = document.getElementById('mainName');
let handle = document.getElementById('handle');
let dateJoined = document.getElementById('dateJoined');
let bio = document.getElementById('bio');
let repos = document.getElementById('publicRepos');
let followers = document.getElementById('followers');
let following = document.getElementById('following');
let locationText = document.getElementById('location');
let urlText = document.getElementById('urlText');
let twitter = document.getElementById('twitter');
let company = document.getElementById('company');

const form = document.getElementById('myForm');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var search = document.getElementById('search').value;

    var normalName = search.split(' ').join('');


    fetch("https://api.github.com/users/"+normalName)
    .then((result) => result.json())
    .then((data) => {
        avatar.textContent = data.avatar_url;
        mainName.textContent = data.name;
        handle.textContent = "@"+ data.login;
        dateJoined.textContent = data.created_at;
        bio.textContent = data.bio;
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;
        locationText.textContent = data.location;
        urlText.textContent = data.blog;
        twitter.textContent = data.twitter_username;
        company.textContent = data.company;


    })

})