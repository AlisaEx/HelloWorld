ease = (progress, easing) ->
  switch easing
    when 'ease-out'
      Math.sin Math.PI / 2 * progress
    when 'ease-in'
      1 - (Math.cos Math.PI / 2 * progress)
    when 'ease-in-out'
      (1 - (Math.cos Math.PI * progress)) / 2
    else
      progress

animate = (element, easing = 'none') ->
  startTime = Date.now()
  endTime = startTime + 2000
  startX = $('#animate').offset().left
  endX = startX + $('#animate').width() - element.width()
  intervalID = setInterval ->
    currentTime = Date.now()
    currentTime = endTime if currentTime > endTime
    progress = (currentTime - startTime) / (endTime - startTime)
    progress = ease progress, easing
    currentX = progress * (endX - startX)
    element.css left: currentX
    if currentTime >= endTime
      clearInterval intervalID
  , 1000 / 30


$ document
.ready ->
  $ '.dis'
  .click ->
    animate $('.first')
    animate $('.second'), 'ease-out'
    animate $('.third'), 'ease-in'
    animate $('.fourth'), 'ease-in-out'