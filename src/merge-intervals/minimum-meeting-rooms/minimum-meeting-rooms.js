const { Interval, MinHeap } = require("../../utils")

/**
 * Returns minimum number of rooms required to hold all the meetingss
 * @constructor
 * @param {Array.<Interval>} meetings - array of intervals
 */
const minimumMeetingRooms = (meetings) => {
  meetings.sort((a, b) => a.start - b.start)

  const heap = new MinHeap()
  let minRooms = 1
  meetings.forEach((meeting) => {
    while (heap.size() > 0 && heap.peak() <= meeting.start) {
      heap.pop()
    }

    heap.push(meeting.end)

    minRooms = Math.max(minRooms, heap.size())
  })

  return minRooms
}

module.exports = minimumMeetingRooms
