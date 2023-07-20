//ts核心：定义任何东西的时候要注明类型，调用任何东西的时候要检查类型
const url: string = 'https://api.thecatapi.com/v1/images/search'
const button: HTMLButtonElement | null = document.querySelector('button')
const tableBody: HTMLTableElement | null = document.querySelector('#table-body')

//用来定义Cat这个类(或者其他类似这个类或者对象的东西)
interface CatType {
  id: string;
  url: string;
  height: number;
  width: number;
  test?: boolean;
}

//创建一个Cat类，用来汇聚Cat的信息，来渲染页面
class Cat implements CatType {
  id: string;
  url: string;
  height: number;
  width: number;
  constructor(id: string, url: string, height: number, width: number) {
    this.id = id
    this.url = url
    this.height = height
    this.width = width
  }
}

//用于处理页面新增or删除数据用的类
class WebDisplay {
  public static addData(data: CatType): void {
    const cat: Cat = new Cat(data.id, data.url, data.height, data.width)
    const tableRow: HTMLTableRowElement = document.createElement('tr')
    tableRow.innerHTML = `
        <td>${cat.id}</td>
            <td><img src="${cat.url}" /></td>
            <td>${cat.height.toString()}</td>
            <td>${cat.width.toString()}</td>
            <td>${cat.url}</td>
        <td><a href="#">X</a></td>
    `
    tableBody?.appendChild(tableRow)
  }
}

//发请求
async function getJSON<T>(url: string) {
  const response: Response = await fetch(url)
  const json: T = await response.json()
  return json   //[{xxx}]
}


