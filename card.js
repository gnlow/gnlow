var tra = url => {
    const [gh, user, repo] = url.match(/https\:\/\/github.com\/(.*?)\/(.*)/)
    return `[![${repo}](https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo})](${gh})`
}

copy(tra("https://github.com/gnlow/jijache"))
