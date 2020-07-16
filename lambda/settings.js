const gameOnApiKey = process.env.gameOnApiKey;

// Preferable to store the following settings as AWS Lambda environment variables
const matchId = process.env.matchId || ' 953139fc-5ef3-4288-9c99-f3743f75d046';
const tournamentId = process.env.tournamentId || 'ab1f4ea4-6720-4972-8420-d167f857463f';

// Required for GameOn. Value must be set to 'development' or 'release'
const appBuildType = process.env.appBuildType || 'development';

// Base url for the player avatars. See https://github.com/alexa-games/skills-gameon-sdk-js/blob/master/README.md#avatar-generation
// Cannot be empty string. Passing in any other value will allow the leaderboard to render,
// but will display blank placeholders.
const gameAvatarBaseUrl = process.env.gameAvatarBaseUrl || 'https://s3.console.aws.amazon.com/s3/buckets/avatars123?region=ap-south-1';

// Background image for the leaderboard template
// Recommended minimum size: 1280x800px
// Cannot be empty string. Passing in any other value will allow the leaderboard to render,
// but will display a blank white background
const leaderboardBackgroundImageUrl = process.env.leaderboardBackgroundImageUrl || 'https://randomise1234.s3.ap-south-1.amazonaws.com/lb.jpg';

// Top n places to show on the leaderboard
const topNleaderboardItemCount = process.env.topNleaderboardItemCount || 4;
// Number of players to render before and after current player
const playerNeighborsCount = process.env.playerNeighborsCount || 1;
// Number of avatars that have been generated
// See https://github.com/alexa-games/skills-gameon-sdk-js/blob/master/README.md#avatar-generation
const numberOfUniqueAvatars = process.env.numberOfUniqueAvatars || 50;

module.exports = {
    matchId,
    tournamentId,
    appBuildType,
    gameOnApiKey,
    gameAvatarBaseUrl,
    leaderboardBackgroundImageUrl,
    topNleaderboardItemCount,
    playerNeighborsCount,
    numberOfUniqueAvatars
};