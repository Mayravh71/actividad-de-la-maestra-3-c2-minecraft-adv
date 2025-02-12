blocks.onBlockBroken(ICE, function () {
    player.say("Rompiste el bloque de hielo.")
})
blocks.onBlockBroken(GRASS, function () {
    player.say("Rompiste el bloque de pasto.")
})
blocks.onBlockBroken(TALLGRASS, function () {
    player.say("Rompiste el bloque de pasto.")
})
blocks.onBlockBroken(STONE, function () {
    player.say("Rompiste el bloque de piedra.")
})
blocks.onBlockBroken(DIRT, function () {
    player.say("Rompiste el bloque de tierra.")
})
blocks.onBlockBroken(AIR, function () {
    player.say("Golpeaste el bloque de aire.")
})
blocks.onBlockBroken(TOP_SNOW, function () {
    player.say("Rompiste la capa de nieve.")
})
gameplay.setGameMode(
CREATIVE,
mobs.target(NEAREST_PLAYER)
)
