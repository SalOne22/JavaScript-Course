// Прокси Примеры

// Wrapper
const withDefaultValue = (target, defaultValue = 0) =>
  new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  })

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
)

// Скрытые параметры
const withHiddenProps = (target, prefix = '_') =>
  new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  })

const data = withHiddenProps({
  name: 'Vladyslav',
  age: 16,
  _uid: '0dsf03df2g',
})

// Оптимизация
// const userData = [
//   { id: 1, firstName: 'Владислав', job: 'Fullstack', age: 16 },
//   { id: 2, firstName: 'Елена', job: 'Student', age: 24 },
//   { id: 3, firstName: 'Виктор', job: 'Backend', age: 31 },
//   { id: 4, firstName: 'Генадий', job: 'Teacher', age: 43 },
// ]

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach((item) => (index[item.id] = item))

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById':
            return (id) => index[id]
          default:
            return arr[prop]
        }
      },
    })
  },
})

const users = new IndexedArray([
  { id: 1, firstName: 'Владислав', job: 'Fullstack', age: 16 },
  { id: 2, firstName: 'Елена', job: 'Student', age: 24 },
  { id: 3, firstName: 'Виктор', job: 'Backend', age: 31 },
  { id: 4, firstName: 'Генадий', job: 'Teacher', age: 43 },
])
