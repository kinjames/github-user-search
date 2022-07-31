let theme = document.getElementById('theme');
let light = document.getElementById('light');
let dark = document.getElementById('dark');


theme.addEventListener('click', function(){
        document.body.classList.toggle('light-theme')
        if (document.body.classList.contains('light-theme')){
            light.classList.remove('hide');
            light.classList.add('active');
            dark.classList.remove('active');
            dark.classList.add('hide')
        } else {
            dark.classList.add('active');
            dark.classList.remove('hide');
            light.classList.add('hide')
            light.classList.remove('active')
        }        
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
        avatar.src = `${data.avatar_url}`;
        mainName.textContent = data.name;
        handle.textContent = "@"+ data.login;
        dateJoined.textContent = data.created_at.split("T").shift().split(".");
        bio.textContent = data.bio == null ? "This profile has no bio" : `${data.bio}`;
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;
        locationText.textContent = data.location == null ? "Not Available" :`${data.location}`;
        urlText.textContent = data.blog == "" ? "Not Available" :`${data.blog}`;
        twitter.textContent = data.twitter_username == null ? "Not Available" : `${data.twitter_username}`;
        company.innerHTML = data.company == null ? "Not Available" :`${data.company}`;

        function WithoutTime(dateTime) {
            var date = new Date(dateTime.getTime());
            date.setHours(0, 0, 0, 0);
            return date;
        }
 
    })

})

//        param2.style.opacity = 0.5;