//
//  Game.swift
//  SingleResponsibilityPrinciple
//
//  Created by Christopher Arriola on 1/22/18.
//  Copyright © 2018 Udacity. All rights reserved.
//
class ScoreManager {
  constructor(private score: number = 0) {

  }

  incrementScore(difficulty: number) {
    this.score += 10 * difficulty
  }

  getScore() {
    return this.score
  }
}

class BackgroundManager {
  backgroundColor(level: number) {
    return level > 10 ? 'red' : 'green'
  }
}

class LevelManager {
  constructor(private level: number = 0, private difficulty: number = 1) {

  }

  updateLevel(level: number) {
    this.level = level
  }

  changeDifficulty(difficulty: number) {
    this.difficulty = difficulty
  }

  getLevel() {
    return this.level
  }

  getDifficulty() {
    return this.difficulty
  }
}

class Game {
  private scoreManager: ScoreManager
  private backgroundManager: BackgroundManager
  private levelManager: LevelManager
  constructor(score: number, private difficulty: number, private level: number) {
    this.scoreManager = new ScoreManager(score)
    this.backgroundManager = new BackgroundManager()
    this.levelManager = new LevelManager(level, difficulty)
  }

  backgroundColor() {
    return this.backgroundManager.backgroundColor(this.levelManager.getLevel())
  }

  incrementScore() {
    this.scoreManager.incrementScore(this.level)
  }

  updateLevel(level: number) {
    this.levelManager.updateLevel(level)
  }

  updateDifficulty(difficulty: number) {
    this.levelManager.changeDifficulty(difficulty)
  }


}

const game = new Game(0, 2, 3)
game.incrementScore()

game.updateLevel(22)
console.log(game.backgroundColor())