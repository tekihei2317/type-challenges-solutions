/**
 * 考察
 *
 * - MyPick<T, K>とする。KはUnion型。
 * - KはTのプロパティの部分集合でなければならない
 * - 手順
 *   - 1. Kをループする(k)とする
 *   - 2. kに対応するTの型を習得する
 * - 1はMapped Types、2はIndexed Access Typesでできる
 *
 * typeやinterfaceで定義したオブジェクトを表す型は、オブジェクト型と読んでいいのだろうか...？
 */

{
  type MyPick<T, K extends keyof T> = {
    [k in K]: T[k]
  }

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todoPreview: TodoPreview = {
    title: 'Type Challengesを1問解く',
    completed: false,
  }
}
