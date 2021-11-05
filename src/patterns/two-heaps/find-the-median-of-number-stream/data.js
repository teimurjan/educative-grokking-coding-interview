module.exports = [
  {
    name: "returns [2, 3, 3.5] when flow is 3 -> 1 -> median -> 5 -> median -> 4 -> median",
    input: [
      (instance) => {
        instance.insertNum(3)
        instance.insertNum(1)

        return instance.findMedian()
      },
      (instance) => {
        instance.insertNum(5)

        return instance.findMedian()
      },
      (instance) => {
        instance.insertNum(4)

        return instance.findMedian()
      },
    ],
    output: [2, 3, 3.5],
  },
]
