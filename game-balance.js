/*
 * HYPERHEX gameplay tuning, separated from the rendering engine.
 * Edit the values below to prepare and compare future balance iterations.
 * Angles are represented as a fraction of one of the six arena slots.
 */
window.HYPERHEX_BALANCE = {
  schemaVersion: 1,
  basedOnRelease: '1.42.0',
  progression: {
    secondsPerDimension: 10,
    gameplaySpeedPerFullCycle: 1.15,
    music: {
      menuRatePercent: 100,
      firstDimensionRatePercent: 115,
      firstIncreasePoints: 10,
      decreasePerDimensionPoints: 1,
      minimumIncreasePoints: 0,
      maximumRatePercent: 220,
      rateChangeSeconds: 0.07,
      afterLossRatePercent: 115
    }
  },
  physics: {
    baseApproachSeconds: 1.32,
    playerBaseSpeed: 7.7,
    desktopPlayerMultiplier: 1.06,
    mobilePlayerMultiplier: 1.30,
    minimumPatternOpeningRadians: 0.85,
    patternOpeningModeMultiplier: 0.88,
    advancedDimensionOpeningMultiplier: 0.96
  },
  dimensions: [
    {
      number: 1, label: '1D', internalDimension: 1,
      firstGateDelaySeconds: 1.98, gateIntervalSeconds: 0.70,
      approachTimeMultiplier: 1.50, approachRandomRange: [1, 1],
      openingSlots: 1, patternOpeningMultiplier: 1,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 1,
      distortionMultiplier: 1, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: 3, wrapAcrossEdges: false, wallThicknessRange: [1, 1]
    },
    {
      number: 2, label: '2D', internalDimension: 0,
      firstGateDelaySeconds: 1.55, gateIntervalSeconds: 0.72,
      approachTimeMultiplier: 1.16, approachRandomRange: [1, 1],
      openingSlots: 1, patternOpeningMultiplier: 1,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 0.90,
      distortionMultiplier: 1, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: null, wrapAcrossEdges: false, wallThicknessRange: [1, 1]
    },
    {
      number: 3, label: '3D', internalDimension: 2,
      firstGateDelaySeconds: 1.55, gateIntervalSeconds: 0.52,
      approachTimeMultiplier: 1.16, approachRandomRange: [1, 1],
      openingSlots: null, patternOpeningMultiplier: 1,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 0.90,
      distortionMultiplier: 1, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: null, wrapAcrossEdges: false, wallThicknessRange: [1, 1]
    },
    {
      number: 4, label: '4D', internalDimension: 3,
      firstGateDelaySeconds: 2.15, gateIntervalSeconds: 1.15,
      approachTimeMultiplier: 1.55, approachRandomRange: [0.82, 1.18],
      openingSlots: 1, patternOpeningMultiplier: 1,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 0.90,
      distortionMultiplier: 0.96, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: 2, wrapAcrossEdges: false, wallThicknessRange: [0.82, 1.24]
    },
    {
      number: 5, label: '5D', internalDimension: 4,
      firstGateDelaySeconds: 1.55, gateIntervalSeconds: 1.10,
      approachTimeMultiplier: 1.16, approachRandomRange: [1, 1],
      openingSlots: 1, patternOpeningMultiplier: 1,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 1,
      distortionMultiplier: 0.86, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: 2, wrapAcrossEdges: false, wallThicknessRange: [1, 1]
    },
    {
      number: 6, label: '6D', internalDimension: 5,
      firstGateDelaySeconds: 1.65, gateIntervalSeconds: 0.88,
      approachTimeMultiplier: 1.20, approachRandomRange: [1, 1],
      openingSlots: null, patternOpeningMultiplier: 1.18,
      playerSpeedMultiplier: 1, mobileSpeedMultiplier: 1,
      distortionMultiplier: 0.82, rotationMultiplier: 1, wallThicknessMultiplier: 1,
      maxLaneShift: null, maxCrossOriginLaneShift: 1,
      maxSameOriginRun: 2, sameOriginProbability: 0.42,
      wrapAcrossEdges: false, wallThicknessRange: [1, 1]
    }
  ]
};
