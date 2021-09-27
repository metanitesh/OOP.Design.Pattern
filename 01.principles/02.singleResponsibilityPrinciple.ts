//
//  Game.swift
//  SingleResponsibilityPrinciple
//
//  Created by Christopher Arriola on 1/22/18.
//  Copyright © 2018 Udacity. All rights reserved.
//


class Game {
  constructor(private score: number, private difficulty: number, private level: number) {

  }

  backgroundColor() {
    return this.level > 10 ? 'red' : 'green'
  }

  incrementScore() {
    this.score += 10 * this.difficulty
  }

  updateLevel(level: number) {
    this.level = level
  }

  changeDifficulty(difficulty: number) {
    this.difficulty = difficulty
  }

}

const game = new Game(0, 2, 3)
game.incrementScore()
game.updateLevel(22)
console.log(game.backgroundColor())