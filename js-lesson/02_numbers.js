// 1 Числа (Number)
// const num = 42
// const float = 42.1
// const pow = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('2^53 - 1 =', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('1 / 0 =', 1 / 0)
// console.log('Not A Number', Number.NaN)
// const weird = 2 / undefined
// console.log('Is Nan?', Number.isNaN(weird))
// console.log('Is 42 Finite?', Number.isFinite(42))
// console.log('Is Infinity Finite?', Number.isFinite(Infinity))

// const stringInt = '40'
// const stringFloat = '40.1'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.4 + 0.2 = 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 Большие числа (BigInt)
// console.log(90071992547409919999999999n - 9007199254740991999999999n)
// console.log(-90071992547409919999999999n - 9007199254740991999999999n)

// console.log(10n - 4) // Err
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// 3 Математика (Math)
// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-31))
// console.log(Math.max(123, 234, 12, 452, 123))
// console.log(Math.min(123, 234, 12, 452, 123))
// console.log(Math.floor(123.7))
// console.log(Math.ceil(123.2))
// console.log(Math.round(123.5))
// console.log(Math.trunc(123.5))
// console.log(Math.sin(12)) // И тд
// console.log(Math.random())

// 4 Примеры
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1)
}

console.log(getRandomBetween(20, 50))
