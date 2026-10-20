let strip = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB_RGB)
strip.setBrightness(255)
strip.showColor(neopixel.rgb(255, 20, 0))
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
basic.forever(function () {
    for (let index = 0; index < 57; index++) {
        strip.rotate(1)
        strip.show()
        control.waitMicros(60000)
    }
    for (let index = 0; index < 57; index++) {
        strip.rotate(-1)
        strip.show()
        control.waitMicros(60000)
    }
})
