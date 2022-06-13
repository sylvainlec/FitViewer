export interface FitbitTCX {
    trainingCenterDatabase:{
        activities:
            FitbitActivities
    }
}
interface FitbitActivities{
    activity:FitbitActivity
}

interface FitbitActivity{
    id:string,
    lap:FitbitLap,
    creator:{unitId:number,ProductID:number}
}
interface FitbitLap{
    startTime:Date,
    totalTimeSeconds:number,
    distanceMeters:number,
    calories: number,
    intensity:string,
    triggerMethod:string,
    track:[FitbitTrackPoint]
}
interface FitbitTrackPoint{
    time:Date,
    position:FitbitPosition,
    altitudeMeters:number,
    distanceMeters:number,
    heartRateBpm:{value:number}
}

interface FitbitPosition{
    latitudeDegrees:number,
    longitudeDegrees:number,
}
