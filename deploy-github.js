const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/Dailyscat/vanillaroad',
    },
    () => {
        console.log('Deploy Complete!')
    }
)