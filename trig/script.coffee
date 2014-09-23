ease = (progress, easing) ->
  switch easing
# ease-out = fast, then slow 
# Sin(0) == 0  |  Sin(PI/2) == 1
# for values between 0 and PI/2, 
# as the input increases at a steady rate,
# the result values resemble (0, 0.31, 0.59, 0.81, 0.95, 1)
# result value increases quickly at first (larger delta)
# gradually, the delta decreases as the values approach 1
    when 'ease-out'
      Math.sin Math.PI / 2 * progress
    when 'ease-in'
      1 - (Math.cos Math.PI / 2 * progress)
# slow, then fast
# Cos(0) == 1 | Cos(0)
# to get the box to move from the left -> right [like the others]
# subtract 1 from result, to invert answers
# giving you the range from 0 to 1 (! 1 to 0)
# the result values resemble (0, 0.05, 0.19, 0.41, 0.69, 1) 
    when 'ease-in-out'
      (1 - (Math.cos Math.PI * progress)) / 2
# slow, then fast, then slow
# using PI instead of PI/2 to achieve both ease in and out
# to get a value 0 to 1, subtract result from 1 (range 0 to 2)
# then divide that by 2 (range 0 to 1)
# the result values resemble (0, 0.1, 0.35, 0.65, 0.9, 1) 
    else
# no easing type passed into function
# pass value through without altering it
      progress

animate = (element, easing = 'none') ->
# get the current time
  startTime = Date.now()
# add 2000 milliseconds to current time (range 0-2sec)
  endTime = startTime + 3000
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
# number between 0 and 1
    progress = (currentTime - startTime) / (endTime - startTime)
# multiply the proportion of change in time, by the change in x
# gives you the current position of the box
# 
    currentX = ease(progress, easing) * (endX - startX)
# update the left value of the element to the current X position
    element.css left: currentX
# clear the interval once the animation is over
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