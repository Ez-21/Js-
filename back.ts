
// ts工具函数

// keyof关键字 获取类型的所有属性名  返回类型是一个联合类型
type IuserMan = keyof Iuser;
// var key: keyof Iuser = "name";

// typeof关键字  用来提取一个变量的约定类型
type Tschool = {
  className: string;
  courses: string[];
  studentsCount: number;
};
var school: Tschool = {
  className: "2017届软件技术学院",
  courses: ["软件工程", "网络工程", "机器学习"],
  studentsCount: 40,
};

// 当我们想使用这个school对象的类型形状时 就可以使用typeOf 关键字
var oldSchool: typeof school = {
  className: "2017届网络营销学院",
  courses: ["网络营销", "数据结构"],
  studentsCount: 20,
};

// in 遍历联合类型
type TKeyName = "name" | "age" | "gender";
type TPerson = {
  [key in TKeyName]: string;
};
var person: TPerson = {
  name: "张三",
  age: "100",
  gender: "男",
};

// Partial<type,keyName> 将类型中的所有属性都变成可选的
interface Iface {
  name: string;
  age: number;
  className: string;
  readonly mate: string[];
}

var iface: Partial<Iface> = {
  name: "张三",
  age: 100,
  className: "2017届软件技术学院",
};

// Record<T,K> 将T中的所有属性值改为K类型
interface Iuser {
    name:string,
}
var user: Record<keyof Iuser, {trueName:boolean}> = {
    name: {
        trueName:true
    },
}

// Readonly<T> 将T中的所有属性变为只读的
interface Ionly {
    mess:string,
    time?:Date,
}
var yeah:Readonly<Ionly> = {
    
    mess:"hello",
    time:new Date()
}
// yeah.mess = 'funny'  // 报错 因为是只读属性  不能被修改