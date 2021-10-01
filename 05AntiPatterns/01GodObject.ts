class UserInfo {
  private userId: string
  setUserInfo() {

  }
}

type UserPreferenceType = {
  [k: string]: string
}

class UserPreference {
  private userPreferences: UserPreferenceType[] = []
  setUserPreference(userPreference: UserPreferenceType) {

  }
}

class UserONBoarding {
  private stepTracker: string[] = []

  completeFeature1() {
    this.stepTracker.push('feature1')
  }

  completeFeature2() {
    this.stepTracker.push('feature2')
  }
}