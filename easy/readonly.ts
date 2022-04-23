// 考察
// MyReadonly<T>とする
// Tはオブジェクト型でなければならない
// オブジェクト型Tのキーをループする
// Tのキーをreadonlyで定義し、キーの型はTのキーに対応する型にする

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}

{
  interface Todo {
    title: string
    description: string
  }

  // readonlyをリテラルで定義する場合はこうする
  interface ReadonlyTodo {
    readonly title: string
    readonly description: string
  }

  const todo1: Todo = {
    title: 'title1',
    description: 'description1',
  }
  const todo2: MyReadonly<Todo> = {
    title: 'title2',
    description: 'description2',
  }
  const todo3: ReadonlyTodo = {
    title: 'title3',
    description: 'description3',
  }

  todo1.title = 'update'
  /** @ts-expect-error */
  todo2.title = 'update'
  /** @ts-expect-error */
  todo3.title = 'update'
}
