//
//  Game.swift
//  SingleResponsibilityPrinciple
//
//  Created by Christopher Arriola on 1/22/18.
//  Copyright © 2018 Udacity. All rights reserved.
//
var ScoreManager = /** @class */ (function () {
    function ScoreManager(score) {
        if (score === void 0) { score = 0; }
        this.score = score;
    }
    ScoreManager.prototype.incrementScore = function (difficulty) {
        this.score += 10 * difficulty;
    };
    ScoreManager.prototype.getScore = function () {
        return this.score;
    };
    return ScoreManager;
}());
var BackgroundManager = /** @class */ (function () {
    function BackgroundManager() {
    }
    BackgroundManager.prototype.backgroundColor = function (level) {
        return level > 10 ? 'red' : 'green';
    };
    return BackgroundManager;
}());
var LevelManager = /** @class */ (function () {
    function LevelManager(level, difficulty) {
        if (level === void 0) { level = 0; }
        if (difficulty === void 0) { difficulty = 1; }
        this.level = level;
        this.difficulty = difficulty;
    }
    LevelManager.prototype.updateLevel = function (level) {
        this.level = level;
    };
    LevelManager.prototype.changeDifficulty = function (difficulty) {
        this.difficulty = difficulty;
    };
    LevelManager.prototype.getLevel = function () {
        return this.level;
    };
    LevelManager.prototype.getDifficulty = function () {
        return this.difficulty;
    };
    return LevelManager;
}());
var Game = /** @class */ (function () {
    function Game(score, difficulty, level) {
        this.difficulty = difficulty;
        this.level = level;
        this.scoreManager = new ScoreManager(score);
        this.backgroundManager = new BackgroundManager();
        this.levelManager = new LevelManager(level, difficulty);
    }
    Game.prototype.backgroundColor = function () {
        return this.backgroundManager.backgroundColor(this.levelManager.getLevel());
    };
    Game.prototype.incrementScore = function () {
        this.scoreManager.incrementScore(this.level);
    };
    Game.prototype.updateLevel = function (level) {
        this.levelManager.updateLevel(level);
    };
    Game.prototype.updateDifficulty = function (difficulty) {
        this.levelManager.changeDifficulty(difficulty);
    };
    return Game;
}());
var game = new Game(0, 2, 3);
game.incrementScore();
game.updateLevel(22);
console.log(game.backgroundColor());
