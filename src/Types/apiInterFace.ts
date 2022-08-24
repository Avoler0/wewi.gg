
interface I_summonerBasicData {
  accountId: string,
  id: string,
  name: string,
  profileIconId: number,
  puuid: string,
  revisionDate: number,
  summonerLevel: number,
}
interface I_summonerInfo {
    freshBlood: boolean,
    hotStreak: boolean,
    inactive: boolean,
    leagueId: string,
    leaguePoints: number,
    losses: number,
    queueType: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    tier: string,
    veteran: boolean,
    wins: number,
}
interface I_recordData {
  metadata : {
    dataVersion: string,
    atchId: string,
    participants: string[]
  }
  info: {
    gameCreation: number,
    gameDuration: number,
    gameEndTimestamp: number,
    gameId: number,
    gameMode: string,
    gameName: string,
    gameStartTimestamp: number,
    gameType: string,
    gameVersion: string,
    mapId: number,
    participants: [{
      assists: number,
      baronKills: number,
      bountyLevel: number,
      puuid:string,
      summoner1Id:number,
      summoner2Id:number,
      challenges: {
        "12AssistStreakCount": number,
        abilityUses: number,
        acesBefore15Minutes: number,
        alliedJungleMonsterKills: number,
        baronTakedowns: number,
        blastConeOppositeOpponentCount: number,
        bountyGold: number,
        buffsStolen: number,
        completeSupportQuestInTime: number,
        controlWardTimeCoverageInRiverOrEnemyHalf: number,
        controlWardsPlaced: number,
        damagePerMinute: number,
        damageTakenOnTeamPercentage: number,
        dancedWithRiftHerald: number,
        deathsByEnemyChamps: number,
        dodgeSkillShotsSmallWindow: number,
        doubleAces: number,
        dragonTakedowns: number,
        earliestDragonTakedown: number,
        earlyLaningPhaseGoldExpAdvantage: number,
        effectiveHealAndShielding: number,
        elderDragonKillsWithOpposingSoul: number,
        elderDragonMultikills: number,
        enemyChampionImmobilizations: number,
        enemyJungleMonsterKills: number,
        epicMonsterKillsNearEnemyJungler: number,
        epicMonsterKillsWithin30SecondsOfSpawn: number,
        epicMonsterSteals: number,
        epicMonsterStolenWithoutSmite: number,
        fastestLegendary: number,
        flawlessAces: number,
        fullTeamTakedown: number,
        gameLength: number,
        getTakedownsInAllLanesEarlyJungleAsLaner: number,
        goldPerMinute: number,
        hadAfkTeammate: number,
        hadOpenNexus:number,
        immobilizeAndKillWithAlly: number,
        initialBuffCount: number,
        initialCrabCount: number,
        jungleCsBefore10Minutes: number,
        junglerKillsEarlyJungle: number,
        junglerTakedownsNearDamagedEpicMonster: number,
        kTurretsDestroyedBeforePlatesFall: number,
        kda: number,
        killAfterHiddenWithAlly: number,
        killParticipation: number,
        killedChampTookFullTeamDamageSurvived: number,
        killsNearEnemyTurret: number,
        killsOnLanersEarlyJungleAsJungler: number,
        killsOnOtherLanesEarlyJungleAsLaner: number,
        killsOnRecentlyHealedByAramPack: number,
        killsUnderOwnTurret: number,
        killsWithHelpFromEpicMonster: number,
        knockEnemyIntoTeamAndKill: number,
        landSkillShotsEarlyGame: number,
        laneMinionsFirst10Minutes: number,
        laningPhaseGoldExpAdvantage: number,
        legendaryCount: number,
        lostAnInhibitor: number,
        maxCsAdvantageOnLaneOpponent: number,
        maxKillDeficit: number,
        maxLevelLeadLaneOpponent: number,
        moreEnemyJungleThanOpponent: number,
        multiKillOneSpell: number,
        multiTurretRiftHeraldCount: number,
        multikills: number,
        multikillsAfterAggressiveFlash: number,
        mythicItemUsed: number,
        outerTurretExecutesBefore10Minutes: number,
        outnumberedKills: number,
        outnumberedNexusKill: number,
        perfectDragonSoulsTaken: number,
        perfectGame: number,
        pickKillWithAlly: number,
        poroExplosions: number,
        quickCleanse: number,
        quickFirstTurret: number,
        quickSoloKills: number,
        riftHeraldTakedowns: number,
        saveAllyFromDeath: number,
        scuttleCrabKills: number,
        skillshotsDodged: number,
        skillshotsHit: number,
        snowballsHit: number,
        soloBaronKills: number,
        soloKills: number,
        soloTurretsLategame: number,
        stealthWardsPlaced: number,
        survivedSingleDigitHpCount: number,
        survivedThreeImmobilizesInFight: number,
        takedownOnFirstTurret: number,
        takedowns: number,
        takedownsAfterGainingLevelAdvantage: number,
        takedownsBeforeJungleMinionSpawn: number,
        takedownsFirst25Minutes: number,
        takedownsInAlcove: number,
        takedownsInEnemyFountain: number,
        teamBaronKills: number,
        teamDamagePercentage: number,
        teamElderDragonKills: number,
        teamRiftHeraldKills: number,
        teleportTakedowns: number,
        threeWardsOneSweeperCount: number,
        tookLargeDamageSurvived: number,
        turretPlatesTaken: number,
        turretTakedowns: number,
        turretsTakenWithRiftHerald: number,
        twentyMinionsIn3SecondsCount: number,
        unseenRecalls: number,
        visionScoreAdvantageLaneOpponent: number,
        visionScorePerMinute: number,
        wardTakedowns: number,
        wardTakedownsBefore20M: number,
        wardsGuarded: number
    }
      champLevel:number,
      win: boolean,
      championName:string,
      lane:string,
      kills:number
      neutralMinionsKilled:number,
      deaths:number,
      item0:number,
      item1:number,
      item2:number,
      item3:number,
      item4:number,
      item5:number,
      item6:number,
  }],
  
  
  
  },
}
export type {I_summonerBasicData,I_summonerInfo ,I_recordData}