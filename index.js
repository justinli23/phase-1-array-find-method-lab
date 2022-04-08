const superbowlWin = (arr) => {
    const winningYearObject = arr.find(
        (object) => object.result === 'W'
    )
    if (winningYearObject) {
    return winningYearObject.year
    }
}

/*const sampleArray =  [
    {year: "2015", result: "W"},
    {year: "2016", result: "W"}
]*/