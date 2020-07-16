  import { SkillsGameOnApiClient } from '@alexa-games/skills-gameon-sdk';
// const sdk = require("@alexa-games/skills-gameon-sdk");
const client = new SkillsGameOnApiClient();
  //const ApiClient = new sdk.SkillsGameOnApiClient();
const player = await client.initializeNewPlayer({
    gameApiKey: '958aa1aa-c3d7-4a67-b80b-d90b471cac60', // Your Public API Key you receive when you register your game with GameOn.
    appBuildType: 'development' // GameOn API requires either 'development' or 'release', but it's only used for their metrics.
});
await client.refreshPlayerSession({
    gameApiKey: '958aa1aa-c3d7-4a67-b80b-d90b471cac60', // Your Public API Key you receive when you register your game with GameOn.
    appBuildType: 'development', // GameOn API requires either 'development' or 'release', but it's only used for their metrics.
    player: player
});
await client.enterTournamentForPlayer({
    tournamentId: ' 16571af5-307e-4667-adc1-cfaffa1d087d', // The Tournament ID that is associated with your game.
    player: player
});
await client.enterMatchForPlayer({
    matchId: '34821b2e-1f5a-4d0e-be4d-933a9c5b8e79', // The Match Id that is associated with your tournament.
    player: player
});
await client.submitScoreForPlayer({
    matchId: '34821b2e-1f5a-4d0e-be4d-933a9c5b8e79',
    submitScoreRequest: { score: 10 },
    player: player
});
await client.getMatchLeaderboardForPlayer({
    matchId: '34821b2e-1f5a-4d0e-be4d-933a9c5b8e79',
    player: player
});
await client.getMatchLeaderboardForPlayer({
    matchId: '34821b2e-1f5a-4d0e-be4d-933a9c5b8e79',
    player: player,
    currentPlayerNeighbors: 5 // Note: GameOn will not accept a value <= 0.
});
// apl
await client.getPlayerScore('34821b2e-1f5a-4d0e-be4d-933a9c5b8e79', player);
const client = new SkillsGameOnApiClient();
const leaderboard = client.getCombinationLeaderboards({ player, matchId: '34821b2e-1f5a-4d0e-be4d-933a9c5b8e79', topScoresLmit, playerNeighborsLimit });
const renderOptions = { backgroundImageUrl: 'https://randomise1234.s3.ap-south-1.amazonaws.com/lb.jpg' };
const playerProfileGenerator = PlayerProfileGeneratorBuilder.getGenerator({ avatarBaseUrl: 'https://s3.console.aws.amazon.com/s3/buckets/avatars123/?region=ap-south-1' });
const leaderboardDirective = renderLeaderboard(player, leaderboard, renderOptions, playerProfileGenerator); // #renderLeaderboard is part of the @alexa-games/skills-gameon-sdk package.

// player appBuildType

const generator = PlayerProfileGenerator.getGenerator({
    locale: "en-US",
    avatarBaseUrl: "https://s3.console.aws.amazon.com/s3/buckets/avatars123/?region=ap-south-1",
    numberOfUniqueAvatars: 50
});

//const uniqueProfile = generator.getPlayerProfileFromId(playerId);

const randomProfile = generator.getRandomPlayerProfile();


const generator = PlayerNameGeneratorBuilder.getGenerator('en-US');

const name3 = generator.getRandom();
const generator = PlayerAvatarUriGeneratorBuilder.getGenerator({
                    avatarBaseUrl: "https://s3.console.aws.amazon.com/s3/buckets/avatars123/?region=ap-south-1",
                    numberOfUniqueAvatars: 50
                });
                const uri3 = generator.getRandom();

