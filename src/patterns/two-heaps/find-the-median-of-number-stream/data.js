module.exports = [
  {
    name: "returns [2, 3, 3.5] when flow is 3 -> 1 -> median -> 5 -> median -> 4 -> median",
    input: [
      (instance) => {
        instance.insert(3)
        instance.insert(1)

        return instance.getMedian()
      },
      (instance) => {
        instance.insert(5)

        return instance.getMedian()
      },
      (instance) => {
        instance.insert(4)

        return instance.getMedian()
      },
    ],
    output: [2, 3, 3.5],
  },
]
