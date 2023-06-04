input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        . # . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # # #
            . . # . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # . # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . . . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . # . .
            . # . . .
            `)
    }
})
basic.showString("Hello!")
