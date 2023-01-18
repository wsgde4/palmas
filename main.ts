input.onSound(DetectedSound.Loud, function () {
    ligaluz = !(ligaluz)
    if (ligaluz) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
let ligaluz = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
