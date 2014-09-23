ease = (progress, easing) ->
  switch easing
    when 'ease-out'
    # fast, then slow 
    # Sin(0) == 0
    # for values between 0 and PI/2, 
    # as the input increases at a steady rate,
    # the result values resemble (0, 0.31, 0.59, 0.81, 0.95, 1) 
    # Sin(PI/2) == 1
      Math.sin Math.PI / 2 * progress
    when 'ease-in'
    # slow, then fast
    # the result values resemble (0, 0.05, 0.19, 0.41, 0.69, 1) 
      1 - (Math.cos Math.PI / 2 * progress)
    when 'ease-in-out'
    # slow, then fast, then slow
    # the result values resemble (0, 0.1, 0.35, 0.65, 0.9, 1) 
      (1 - (Math.cos Math.PI * progress)) / 2
    else
    # no easing type passed into function
    # pass value through without altering it
      progress

animate = (element, easing = 'none') ->
  startTime = Date.now()
  endTime = startTime + 2000
  # Set start position to account for offset edge of outer div
  startX = $('#animate').offset().left
  # X values begin on left side of divs
  # Subtract the width of the animated div
  # Will end with right edge touching rightmost wall of outer div
  endX = startX + $('#animate').width() - element.width()
  intervalID = setInterval ->
    currentTime = Date.now()
    # If the currentTime is incremented more than endTime
    # Set currentTime = endTime 
    currentTime = endTime if currentTime > endTime
    # elapsed time = current time - start time
    # total time = end time - start time
    # progress === proportion of elapsed time to total time
    progress = (currentTime - startTime) / (endTime - startTime)
    # multiply the change in time, by the change in x
    currentX = ease(progress, easing) * (endX - startX)
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